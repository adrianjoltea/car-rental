import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://phnvqjtwsbnilffyojsk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBobnZxanR3c2JuaWxmZnlvanNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNzc0MzgsImV4cCI6MjAxOTg1MzQzOH0.gvwoQkGSnJ9oSMGVNtnOvjnDaR3XoDxqpLJ2NANVGi8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
