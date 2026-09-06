import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { full_name, phone, program_of_interest, message, source } = req.body || {};
      const name = typeof full_name === 'string' ? full_name.trim() : '';
      const phoneClean = typeof phone === 'string' ? phone.trim() : '';
      if (name.length < 3) {
        return res.status(400).json({ error: 'Please provide your full name.' });
      }
      if (!/^[0-9+\-\s()]{7,20}$/.test(phoneClean)) {
        return res.status(400).json({ error: 'Please provide a valid contact number.' });
      }
      const { data, error } = await supabase
        .from('inquiries')
        .insert({
          full_name: name,
          phone: phoneClean,
          program_of_interest: typeof program_of_interest === 'string' ? program_of_interest : '',
          message: typeof message === 'string' ? message.trim() : '',
          source: source === 'contact' ? 'contact' : 'admissions',
        })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('inquiries API error:', err);
    res.status(500).json({ error: err.message });
  }
}
