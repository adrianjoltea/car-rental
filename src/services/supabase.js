import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "there was a url here";
const supabaseKey = "there was a key here";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
