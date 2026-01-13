import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactMail } from '../utils/sendGrid.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    await sendContactMail({ name, email, message });
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('[send-contact] Failed to send mail', err);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
