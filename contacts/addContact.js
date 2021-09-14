import { nanoid } from "nanoid";
import contactsOperations from "./index.js";

const addContact = async (name, email, phone) => {
  const contacts = await contactsOperations.getAllContacts();
  const newContact = { name, email, phone, id: nanoid()};
  contacts.push(newContact);
  console.log(newContact);
  await contactsOperations.updateContacts(contacts);
  console.table(await contactsOperations.getAllContacts());
};

export default addContact;