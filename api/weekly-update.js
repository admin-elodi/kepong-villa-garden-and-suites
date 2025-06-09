// api/weekly-update.js
import { createClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
const HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;

async function generateEntertainmentUpdate() {
  const prompt = `Generate a 50–100 word thrilling entertainment update for Kepong Villa Garden & Suites, highlighting upcoming events like Club K nights, comedian performances, or treasure hunts. Use an energetic tone and include a call-to-action to visit ${process.env.VERCEL_URL}.`;
  try {
    const response = await fetch(HUGGING_FACE_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: 100, min_length: 50 },
      }),
    });
    const data = await response.json();
    return data[0]?.generated_text || '🔥 Get ready for epic nights at Kepong Villa! Join us for Club K and more! Visit ' + process.env.VERCEL_URL;
  } catch (error) {
    console.error('Hugging Face error:', error);
    return '🔥 Get ready for epic nights at Kepong Villa! Join us for Club K and more! Visit ' + process.env.VERCEL_URL;
  }
}

export default async function handler(req, res) {
  try {
    // Fetch all subscribers
    const { data: subscribers, error } = await supabase.from('subscribers').select('email');
    if (error) throw error;

    const content = await generateEntertainmentUpdate();

    // Create weekly campaign
    const campaign = await mailchimp.campaigns.create({
      type: 'regular',
      recipients: { list_id: process.env.MAILCHIMP_AUDIENCE_ID },
      settings: {
        subject_line: 'Kepong Villa Entertainment Update',
        from_name: 'Kepong Villa Garden & Suites',
        reply_to: 'odogwucally@gmail.com',
      },
    });

    await mailchimp.campaigns.setContent(campaign.id, {
      html: `<p>${content}</p><p><a href="${process.env.VERCEL_URL}">Visit Kepong Villa</a></p>`,
    });

    await mailchimp.campaigns.send(campaign.id);

    return res.status(200).json({ message: 'Weekly update sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send weekly update' });
  }
}