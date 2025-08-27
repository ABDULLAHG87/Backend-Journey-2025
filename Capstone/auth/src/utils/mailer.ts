import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import { settings } from '../config/config';
import logger from './logger'

dotenv.config();

interface MailOptions {
    to: string,
    subject: string,
    text: string
}

const transporter = nodemailer.createTransport({
    host: settings.SMTP_HOST,
    port: settings.SMTP_PORT,
    secure: true,
    auth: {
        user: settings.SMTP_USER,
        pass: settings.SMTP_PASS
    },
})

export const verifyMailer = async () => {
    try {
        await transporter.verify();
        logger.info("Mailer ready to send");
    } catch (err: any) {
        logger.error("Mailer verification failed", err.message)
    }
};

export const sendMail = async ({to, subject , text}: MailOptions)=> {
    const info = await transporter.sendMail({
        from: "hakeemabdullah87@gmail.com",
        to,
        subject,
        text
    });
    return info;
} 