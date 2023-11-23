//leaving this file in because it's a good reference while I'm still developing

// Import the Supabase client
import { createClient } from '@supabase/supabase-js';
import { supabase } from './src/supabase'
// Initialize the client with your Supabase project URL and API key

// Define the table you want to query
const tableName = 'apikeys';


let { data: userpassword, error } = await supabase
  .from('userpasswords')
  .select()
  .eq('grade',6)
  .single()
if (error) {
  console.log('supabase error')
}

  console.log(userpassword.password)



/*
const e = userpasswords
console.log(typeof userpasswords)
var ee = JSON.stringify(e)
console.log(typeof ee)
console.log(ee)
*/