import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srddjjmbttdgjcpvwvnh.supabase.co";

const supabaseKey = "sb_publishable_-I9n5cERyFPTnuE4_WkXow_pgld15vD";

export const supabase = createClient(supabaseUrl, supabaseKey);