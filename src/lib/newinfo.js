// Copyright 2023 Ravinder Olivier Singh Dadiala

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import supabase from './supabase.mjs';

const numbergenerator = () => {
  return Math.random().toString(36).slice(2);
};

const supabaseChanger = async (grade, newinfo) => {
  let { data: info, error } = await supabase
    .from('studentinfo')
    .update({ key: newinfo })
    .eq('grade', grade);
  if (error) {
    console.log('supabase error');
  }
};
const getPrinterKey = async (printer, grade) => {
  var identifier = parseFloat(printer + '.' + grade);
  console.log(identifier);
  console.log(identifier);

  let { data: getkey, error } = await supabase
    .from('printerinfo')
    .select()
    .eq('id', identifier)
    .single();
  if (error) {
    console.log('supabase error');
  }
  return getkey.apikey;
};

const printerChanger = async (grade, newinfo) => {
  try {
    const body = { grade: toreset };
    await fetch(printerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.error(error);
  }
};

export const keychanger = async (grade) => {
  await supabaseChanger(grade, numbergenerator());
};
