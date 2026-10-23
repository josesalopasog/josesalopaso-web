import nodemailer from 'nodemailer';
import { config } from '../config/env';

const hasSmtp = Boolean(config.smtp.user && config.smtp.pass);

// Without SMTP credentials in development, messages are only printed to the console (nothing is sent)
export const mailer = hasSmtp
    ? nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.port === 465,
        auth: { user: config.smtp.user, pass: config.smtp.pass },
    })
    : nodemailer.createTransport({ jsonTransport: true });

export const canSendMail = hasSmtp || !config.isProduction;
export const isDryRun = !hasSmtp;
