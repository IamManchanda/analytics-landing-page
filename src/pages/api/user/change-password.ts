import { getSession } from "next-auth/client";
import { handleHashPassword, handleVerifyPassword } from "../../../utils/auth";

import { connectToDb } from "../../../utils/db";

async function handleChangePassword(req, res) {
  switch (req.method) {
    case "PATCH":
      const session = await getSession({ req });

      if (!session) {
        res.status(401).json({
          message: "Not Authenticated!",
        });
        return;
      }

      const userEmail = session.user.email;
      const { oldPassword, newPassword } = req.body;

      const client = await connectToDb();

      const usersCollection = await client.db().collection("users");

      const user = await usersCollection.findOne({
        email: userEmail,
      });

      if (!user) {
        res.status(404).json({
          message: "User not found!",
        });

        client.close();
        return;
      }

      const currentPassword = user.password;

      const arePasswordsEqual = await handleVerifyPassword(
        oldPassword,
        currentPassword,
      );

      if (!arePasswordsEqual) {
        res.status(403).json({
          message: "Invalid Old Password",
        });

        client.close();
        return;
      }

      const hashedPassword = await handleHashPassword(newPassword);

      await usersCollection.updateOne(
        {
          email: userEmail,
        },
        {
          $set: {
            password: hashedPassword,
          },
        },
      );

      res.status(200).json({
        message: "Password updated!",
      });

      client.close();
      break;

    default:
      res.status(400).json({
        message: "Something went Wrong!",
      });

      break;
  }
}

export default handleChangePassword;
