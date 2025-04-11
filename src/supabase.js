import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fnsaffuthxecxfnyhxvo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuc2FmZnV0aHhlY3hmbnloeHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTAzMjAsImV4cCI6MjA1OTc4NjMyMH0.ibZKp0Ks3CjsqFtR-Su5G9fcTN1EewayobtHlqUwIYs'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase;