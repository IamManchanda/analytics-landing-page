import { getSession } from "next-auth/client";

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

      break;

    default:
      res.status(400).json({
        message: "Something went Wrong!",
      });
      break;
  }
}

export default handleChangePassword;
