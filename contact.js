const readline = require("readline");
const fs = require("fs");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const questionInput = (ask) => {
//   return new Promise((res) => {
//     rl.question(ask, (inputVal) => {
//       res(inputVal);
//     });
//   });
// };

const checkContactFile = () => {
  const dirPath = "./data";
  const isFolderExist = fs.existsSync(dirPath);
  if (!isFolderExist) {
    console.log("Creating folder 'data'");
    fs.mkdirSync(dirPath);
  }

  const dataPath = "./data/Contact.json";
  if (!fs.existsSync(dataPath)) {
    console.log("Creating file 'Contact'");
    fs.writeFileSync(dataPath, "[]", "utf-8");
  }
};

const writeContactFile = (contact) => {
  checkContactFile();
  const file = fs.readFileSync("data/Contact.json", "utf8");
  const contacts = JSON.parse(file);

  const isNameDuplicate = contacts.some((cons) => cons.name === contact.name);
  if (isNameDuplicate) {
    return console.warn("Name is Duplicated, Please enter something else");
  }

  contacts.push(contact);
  fs.writeFileSync("data/Contact.json", JSON.stringify(contacts));
  //   rl.close();
};

module.exports = { checkContactFile, writeContactFile };
