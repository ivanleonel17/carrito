const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://ivanleonnel:znZttGQFN7qri6eF@cluster0.xq96ayv.mongodb.net/?retryWrites=true";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db