import nodemailer from "nodemailer";

const sendWelcomeEmail = (toEmail, name, email, password) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service provider
    auth: {
      user: "webtroopers2022@gmail.com", // Your email
      pass: "ugkolhitbeqiylgi", // Your email password or an app-specific password
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com", // Your email
    to: toEmail,
    subject: "Welcome to Our Company",
    html: `<h1>Hello ${name},\n\nWelcome to our company!\n\nYour Gmail: ${email}\nYour Password: ${password}\n\nThank you! so log into the website</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export { sendWelcomeEmail };
