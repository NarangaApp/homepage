import sgMail from '@sendgrid/mail';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// Initialize once per runtime. Expect SENDGRID_API_KEY to be set in env (.env.local or production env).
const apiKey = process.env.SENDGRID_API_KEY;
const toEmail = process.env.SENDGRID_TO_EMAIL;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;

if (apiKey) {
  sgMail.setApiKey(apiKey);
} else {
  // eslint-disable-next-line no-console
  console.warn('[SendGrid] SENDGRID_API_KEY is not set. Mail sending will fail.');
}

/**
 * Sends a contact email using SendGrid.
 * Note: This must be called from a server or serverless environment, not directly from the browser.
 */
export async function sendContactMail(payload: ContactPayload) {
  if (!apiKey) {
    throw new Error('SendGrid API key is missing. Set SENDGRID_API_KEY in environment variables.');
  }

  if (!toEmail || !fromEmail) {
    throw new Error('SendGrid to/from emails are missing. Set SENDGRID_TO_EMAIL and SENDGRID_FROM_EMAIL in environment variables.');
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    throw new Error('Name, email, and message are required to send a contact email.');
  }

  return sgMail.send({
    to: toEmail,
    from: fromEmail,
    replyTo: email,
    subject: `[문의] ${name}님으로부터 도착`,
    text: `${message}\n\n발신자: ${email}`,
    html: `<p>${message}</p><p>발신자: ${email}</p>`,
  });
}
