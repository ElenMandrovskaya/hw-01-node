import fs from "fs/promises";
import contactsPath from "./contactsPath.js";

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

export default getAllContacts;
