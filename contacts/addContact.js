import { nanoid } from "nanoid";
import contactsOperations from "./index.js";

const addContact = async (name, email, phone) => {
  try {
    const contacts = await contactsOperations.getAllContacts();
    const newContact = { name, email, phone, id: nanoid()};
    contacts.push(newContact);
    
    console.log(newContact);

      await contactsOperations.updateContacts(contacts);
      console.table(await contactsOperations.getAllContacts());
  }
  catch (error) {
    console.log(error.message)
  }
};

export default addContact;