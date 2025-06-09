// api/subscribe.js
import { createClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Supabase (free tier)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

// Hugging Face API
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

async function addToMailchimp(email, content) {
  try {
    // Add subscriber to Mailchimp audience
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    // Create and send immediate campaign
    const campaign = await mailchimp.campaigns.create({
      type: 'regular',
      recipients: { list_id: process.env.MAILCHIMP_AUDIENCE_ID },
      settings: {
        subject_line: 'Welcome to Kepong Villa Entertainment Updates!',
        from_name: 'Kepong Villa Garden & Suites',
        reply_to: 'odogwucally@gmail.com',
      },
    });

    await mailchimp.campaigns.setContent(campaign.id, {
      html: `<p>${content}</p><p><a href="${process.env.VERCEL_URL}">Visit Kepong Villa</a></p>`,
    });

    await mailchimp.campaigns.send(campaign.id);
  } catch (error) {
    console.error('Mailchimp error:', error);
    throw new Error('Failed to subscribe');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Store email in Supabase
    const { error } = await supabase.from('subscribers').insert([{ email }]);
    if (error) throw error;

    // Generate AI content
    const content = await generateEntertainmentUpdate();

    // Add to Mailchimp and send first email
    await addToMailchimp(email, content);

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}