import contactsOperations from "./index.js";

const getContactById = async (contactId) => {
    try {
        const contacts = await contactsOperations.getAllContacts();
        const contact = contacts.find((contact) => String(contact.id) === String(contactId));
        if (!contact) {
            return null;
        }
        console.table(contact);
        return contact;
    }
    catch (error) {
        console.log(error.message);
    }
};

export default getContactById;