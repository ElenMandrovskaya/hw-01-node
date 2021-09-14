import contactsOperations from "./index.js";

const removeContact = async (contactId) => {
  try {
    const contacts = await contactsOperations.getAllContacts();
    const index = contacts.findIndex((contact) => String(contact.id) === String(contactId));
    if (index === -1) {
      return null;
    }
    contacts.splice(index, 1);
    await contactsOperations.updateContacts(contacts);

    console.table(await contactsOperations.getAllContacts());
    return "Success remove"
  }
  catch (error) {
    console.log(error.message);
  }
};

export default removeContact;