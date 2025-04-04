
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_API_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_API_SUPABASE_KEY;

export default createClient(supabaseUrl, supabaseKey)