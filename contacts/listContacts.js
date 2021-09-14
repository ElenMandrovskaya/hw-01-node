import contactsOperations from "./index.js";

const listContacts = async () => {
    const contacts = await contactsOperations.getAllContacts();
    console.table(contacts);
};

export default listContacts;