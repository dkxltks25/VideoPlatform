import crypto from "crypto";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";


export const createSecret = ()=> crypto.randomBytes(64).toString('hex');


const sendMail = (email) => {
    const option = smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const client = nodemailer.createTransport(option);
    return client.sendMail(email);
  };
  
  export const sendSecretMail = (address,secret)=>{
      const email = {
          from: "ghddlfkdn-mail@gmail.com",
          to: address,
          subject: "🔒Login Secret for Prismagram🔒",
          html: `Hello! Your login secret it <strong>${secret}<strong>.<br/>Copy paste on the app/website to log in`
        };
      sendMail(email);
  }