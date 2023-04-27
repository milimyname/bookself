import nodemailer from "nodemailer";
const ZOHO_EMAIL = "komiljon.maksudov20@gmail.com";
const ZOHO_PASSWORD = "!TqRv*ATNmRPn4Z";
const ZOHO_SENT_FROM = "kj@mili-my.name";
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: ZOHO_EMAIL,
    pass: ZOHO_PASSWORD
  }
});
export {
  ZOHO_SENT_FROM as Z,
  transporter as t
};
