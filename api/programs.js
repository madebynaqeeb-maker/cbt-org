import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
    const { slug } = req.query || {};
    let query = supabase.from('programs').select('*').order('id', { ascending: true });
    if (slug) query = query.eq('slug', slug);
    const { data, error } = await query;
    if (error) throw error;
    if (slug) {
      if (!data || data.length === 0) return res.status(404).json({ error: 'Program not found' });
      return res.status(200).json(data[0]);
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error('programs API error:', err);
    res.status(500).json({ error: err.message });
  }
}
