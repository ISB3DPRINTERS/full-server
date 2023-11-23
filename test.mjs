// Copyright 2023 and onwards Ravinder Olivier Singh Dadiala
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* globals, server,client */

/**
 * @fileoverview Testing File for faster development. NOT PRODUCTION USE
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/


//leaving this file in because it's a good reference while I'm still developing

// Import the Supabase client
import { createClient } from '@supabase/supabase-js';
import { supabase }  from '../full-server/src/supabase.js'
// Initialize the client with your Supabase project URL and API key

// Define the table you want to query
// const tableName = 'apikeys';


let { data: userpassword, error } = await supabase
  .from('apikeys')
  .select()
  .eq('printer',1)
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