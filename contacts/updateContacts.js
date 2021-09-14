import fs from "fs/promises";
import contactsPath from "./contactsPath.js";

const updateContacts = async (newContact) => {
await fs.writeFile(contactsPath, JSON.stringify(newContact));
};

export default updateContacts;