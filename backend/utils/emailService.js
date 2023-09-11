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
    html: `
      <html>
        <head>
          <style>
            /* Add some CSS styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              margin: 0;
              padding: 20px;
            }
  
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
            }
  
            h1 {
              color: #333333;
              font-size: 24px;
            }
  
            p {
              font-size: 16px;
              line-height: 1.5;
              color: #555555;
            }
  
            .credentials {
              background-color: #f5f5f5;
              padding: 10px;
              border-radius: 5px;
            }
  
            .credentials p {
              font-weight: bold;
              margin-bottom: 10px;
            }
  
            .login-button {
              background-color: #007bff;
              color: #ffffff;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hello ${name},</h1>
            <p>Welcome to our company!</p>
            <div class="credentials">
              <p>Your Gmail: ${email}</p>
              <p>Your Password: ${password}</p>
            </div>
            <p>Thank you for joining our team. Please click the button below to log into our website:</p>
            <a href="https://example.com/login" class="login-button">Log In</a>
          </div>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const applicationSubmitionEmail = (toEmail, name) => {
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
    subject: "Thank you for applying",
    html: `
      <html>
        <head>
          <style>
            /* Add some CSS styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              margin: 0;
              padding: 20px;
            }
  
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
            }
  
            h1 {
              color: #333333;
              font-size: 24px;
            }
  
            p {
              font-size: 16px;
              line-height: 1.5;
              color: #555555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hello ${name},</h1>
            <p>Your application has been successfully submitted.</p>
            <p>Thank you for choosing us!</p>
          </div>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export { sendWelcomeEmail, applicationSubmitionEmail };
