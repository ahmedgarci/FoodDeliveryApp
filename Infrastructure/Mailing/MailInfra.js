const nodemailer = require("nodemailer");

class MailInfra{
    static getTransporter(){
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            service:"gmail",
            port: 587,
            secure: false, 
            auth: {
                user: "ahmedgarci146@gmail.com",
                pass: ",
        },
        });
        return transporter;
    }
   

    static async sendEmail(receiver,code,subject) {
        let transporter = await this.getTransporter();
         const info = await transporter.sendMail({
            from: '"Food delivery 👻" <ahmedgarci146@gmail.com>', 
            to: receiver, 
            subject: subject, 
            text: "please click here to activate ur account",
            html: `
            <p>Your activation code is <h2>${code}</h2></p> 
            <p>it is only valid for 15 minutes ! Hurry up :) </p>
            `
  });        
    }



}
module.exports = MailInfra
