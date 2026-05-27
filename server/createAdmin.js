const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

require("dotenv").config();

const Admin = require("./models/Admin");

async function createAdmin() {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB Connected");

    const hashedPassword =
      await bcrypt.hash("admin123", 10);

    const admin = new Admin({

      email: "admin@gmail.com",

      password: hashedPassword,

    });

    await admin.save();

    console.log("Admin Created Successfully");

    mongoose.connection.close();

  } catch (error) {

    console.log(error);

  }

}

createAdmin();