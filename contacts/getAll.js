import fs from "fs/promises";
import contactsPath from "./contactsPath.js";

const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
};

export default getAllContacts;
