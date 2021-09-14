import contactsOperations from "./contacts/index.js";
import { Command } from "commander";

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    
    case "list":
      await contactsOperations.listContacts();
      return;

    case "get":
      await contactsOperations.getContactById(id);
      return;

    case "add":
      contactsOperations.addContact(name, email, phone);
      return;

    case "remove":
      contactsOperations.removeContact(id);
      return;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);