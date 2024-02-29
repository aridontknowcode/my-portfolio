import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Harith <m.harith.hadi@gmail.com>',
      to: ['m.harith.hadi@gmail.com'],
      subject: 'Hello world',
      text: 'Welcome, John!', // Provide plain text version of the email
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}
