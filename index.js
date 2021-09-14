import contactsOperations from "./contacts/index.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContact":
      await contactsOperations.listContacts();
      return;

    case "getContact":
      await contactsOperations.getContactById(id);
      return;

    case "addContact":
      contactsOperations.addContact(name, email, phone);
      return;

    case "removeContact":
      contactsOperations.removeContact(id);
      return;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);