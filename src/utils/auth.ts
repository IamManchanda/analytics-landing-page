import { hash } from "bcryptjs";

export async function handleHashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
