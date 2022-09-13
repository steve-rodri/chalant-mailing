import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const configPath = "../mailing.config.json"

const transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  // secure: true, // use TLS
  // pool: true,
  auth: {
    user: "apikey",
    pass: process.env.SEND_GRID_KEY,
  },
});

const sendMail = buildSendMail({
  transport,
  configPath,
  defaultFrom: "steve@chalant.rentals",
});

export default sendMail;
