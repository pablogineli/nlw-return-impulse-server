import {MailService, SendMailData} from "../MailService";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "af008b7dc06316",
        pass: "7d774ed28557f3"
    }
});

export class NodeMailService implements MailService{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from:'Equipe Feedget <oi@feedget.com>',
            to:'Pablo Paiva <ti.pablopaiva@gmail.com>',
            subject,
            html: body
        })
    }
}
