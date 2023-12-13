const express = require("express");
const nodemailer = require("nodemailer");
const { UserModel } = require("../Model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../Model/blacklist.model");
const { auth } = require("../Middleware/auth.middleware");
const { EMAIL, PASSWORD } = require("../env");
const UserRouter = express.Router();

//User Register
UserRouter.post("/register", async (req, res) => {
  try {
    const alreadyPresent = await UserModel.findOne({ email: req.body.email });
    if (alreadyPresent) {
      return res.status(400).send({ msg: "User is already exist." });
    } else {
      bcrypt.hash(req.body.password, 2, async (err, hash) => {
        if (err) {
          res.status(200).send({ msg: err });
        } else {
          const User = new UserModel({ ...req.body, password: hash });
          await User.save();
          res.status(200).send({ msg: "User is registered." });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//Forget Password Link
UserRouter.post("/forget-password", async (req, res) => {
  try {
    const alreadyPresent = await UserModel.findOne({ email: req.body.email });
    if (!alreadyPresent) {
      res.status(200).send({ msg: "User Account is not exist." });
    } else {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      });

      var mailOptions = {
        from: "becharity6@gmail.com",
        to: req.body.email,
        subject: "Password Reset Request",
        text: `
              Dear ${alreadyPresent.name},
          
              We received a request to reset your password for your account. To reset your password, please click on the following link:
          
              Password Reset Link [Expires In 5 Min]: https://becharity.vercel.app/user-profile/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0MzljNzNkODEwZjU2NmIyZTQwNGZjIiwidXNlcm5hbWUiOiJTaHViaGFtIiwiaWF0IjoxNjk4OTMyMjEzfQ.1QDUsrLJZDFuXT5IamFfvEa0LH7FY0q_XknJpEw0KkQ
          
              If you did not request a password reset, please ignore this email. Your account is secure, and no changes have been made.
          
              If you have any questions or need assistance, please don't hesitate to contact us.
          
              Thank you for being a part of BeCharity!
          
              Sincerely,
              BeCharity Organization.
            `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.send({ error: error, info });
        } else {
          res.status(200).send({ msg: "Check your email for the link." });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//Reset-password
UserRouter.patch("/reset-password", async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email });
    bcrypt.hash(req.body.password, 2, async (err, hash) => {
      if (err) {
        res.status(200).send({ msg: err });
      } else {
        await UserModel.findByIdAndUpdate(
          { _id: user._id },
          { password: hash }
        );
        res.status(200).send({ msg: "Password Succesfully Changed!." });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//User Login
UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.findOne({ email });
    if (!User) {
     return res.status(400).send({ msg: "User is not exist,Please register" });
    } else {
      bcrypt.compare(password, User.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { user_id: User._id, username: User.name },
            "masai"
          );
          res.status(200).send({ msg: "User successfully logined.", token });
        } else {
          res.status(200).send({ msg: "Password is incorrect" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//User Logout
UserRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const Blacklist = new BlacklistModel({ token });
    await Blacklist.save();
    res.status(200).send({ msg: "Logged out Successfully." });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//User Data
UserRouter.get("/user-data", auth, async (req, res) => {
  try {
    const userData = await UserModel.findOne({ _id: req.body.user_id });
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//All User Data
UserRouter.get("/all-user-data", async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

UserRouter.get("/get-volunteers", async (req, res) => {
  try {
    const userData = await UserModel.find({ isVolunteers: true });
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//Get User Data By ID
UserRouter.get("/user-data-by-id/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const userData = await UserModel.findOne({ _id: id });
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

UserRouter.patch("/patch/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "User is updated." });
  } catch (error) {
    res.status(400).send({ msg: err });
  }
});

module.exports = {
  UserRouter,
};
