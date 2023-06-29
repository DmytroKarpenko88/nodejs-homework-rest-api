const fs = require('fs/promises');
const path = require('path');
const contactPath = path.join(__dirname, 'models/contacts.json');
const nanoid = require('nanoid');

const listContacts = async () => {
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === String(contactId));
  return result || null;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === String(contactId));
  if (index === -1) return null;

  const result = allContacts.splice(index, 1);
  await fs.writeFile(contactPath, JSON.stringify(allContacts, null, 2));
  return result;
};

const addContact = async (body) => {
  const allContacts = listContacts();
  const newContact = {
    id: nanoid(),
    body,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(allContacts, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
