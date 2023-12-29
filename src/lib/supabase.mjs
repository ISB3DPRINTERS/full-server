import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://servksydavsonantnpox.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcnZrc3lkYXZzb25hbnRucG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NzQ2NjYsImV4cCI6MjAwOTQ1MDY2Nn0.nzbHw3XU4qVouLYJRW0yuVNt89qNESX4tV8m606dd_A'
);

export default supabase;
