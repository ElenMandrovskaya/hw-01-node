import contactsOperations from "./index.js";

const listContacts = async () => {
    try {
        const contacts = await contactsOperations.getAllContacts();
        console.table(contacts);
    }
    catch (error) {
    console.log(error);
  }
};

export default listContacts;