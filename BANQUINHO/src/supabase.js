import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://djdsxdgyjnykvjbkvtyo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZHN4ZGd5am55a3ZqYmt2dHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5ODAxNzMsImV4cCI6MjA5MzU1NjE3M30.qfH_jZyhbbUzj29bdbtZoFO5SuxySqyY-jO0YcWA_xM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);