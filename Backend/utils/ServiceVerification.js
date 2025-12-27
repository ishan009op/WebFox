import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()
export const sendVerificationEmail = async (toEmail, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // Gmail App Password
      },
    });

    const verificationUrl = `https://webfox-ue5o.onrender.com/api/user/verify-email/${token}`;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: "Verify Your Email",
      html: `
        <p>Click the link below to verify your email:</p>
        <a href="${verificationUrl}">Verify Email</a>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (err) {
    console.error("Error sending verification email:", err.message);
    throw err; // re-throw to handle in addUser
  }
};
