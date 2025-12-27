import nodemailer from "nodemailer";

export const sendVerificationEmail = async (toEmail, token) => {
  // Use Gmail SMTP (you need an App Password from Google)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,      // your Gmail
      pass: process.env.GMAIL_PASS,      // App Password, not regular Gmail password
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

  await transporter.sendMail(mailOptions);
};
