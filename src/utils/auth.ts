import { hash, compare } from "bcryptjs";

export async function handleHashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function handleVerifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
