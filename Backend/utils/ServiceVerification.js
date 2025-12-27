import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (toEmail, token) => {
  try {
    const verificationUrl =
      `https://webfox-ue5o.onrender.com/api/user/verify-email/${token}`;

    await resend.emails.send({
      from: "ishanprashar97085@gmail.com",
      to: toEmail,
      subject: "Verify your email",
      html: `
        <h3>Email Verification</h3>
        <p>Click the link below to verify your email:</p>
        <a href="${verificationUrl}">Verify Email</a>
      `,
    });

    console.log("✅ Verification email sent to:", toEmail);
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
    throw error; // important so controller knows it failed
  }
};
