import { createClient } from "@supabase/supabase-js";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYmh0ZG1jcGpybG9wdGZrZGNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQxNzY0MywiZXhwIjoyMDYyOTkzNjQzfQ.7i1LpmyAw_NfRwuFGm2LpJ-uhbPR1zDBY0dZuQUERdY"
const supabaseURl = "https://jdbhtdmcpjrloptfkdcg.supabase.co"




export const supabase = createClient(supabaseURl,supabaseKey)