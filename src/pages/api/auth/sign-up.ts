import { handleHashPassword } from "../../../utils/auth";
import { connectToDb } from "../../../utils/db";

async function handleSignUp(req, res) {
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;

      if (
        !email ||
        !email.includes("@") ||
        !password ||
        password.trim().length < 7
      ) {
        res.status(422).json({
          message:
            "Invalid Email Input / Password should be at least 7 characters long",
        });
        return;
      }

      const client = await connectToDb();
      const db = client.db();

      const hashedPassword = await handleHashPassword(password);

      await db.collection("users").insertOne({
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "Created User!" });
      break;

    default:
      res.status(400).json({
        message: "Something went Wrong!",
      });
      break;
  }
}

export default handleSignUp;
