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

const getcost = async (grade) => {
  let { data: filament, error } = await supabase
    .from('studentinfo')
    .select()
    .eq('grade', grade)
    .single();
  if (error) {
    console.log('supabase error');
  }
  return filament.filament;
};

const getcostarray = async () => {
  var costarraytoreturn = [
    await getcost(6),
    await getcost(7),
    await getcost(8),
    await getcost(9),
    await getcost(10),
    await getcost(11),
    await getcost(12)
  ];
  return costarraytoreturn;
};

const getkey = async (grade) => {
  let { data: getkey, error } = await supabase
    .from('studentinfo')
    .select()
    .eq('grade', grade)
    .single();
  if (error) {
    console.log('supabase error');
  }
  return await getkey.key;
};

const getkeyarray = async (e) => {
  var keyarraytoreturn = [
    await getkey(6),
    await getkey(7),
    await getkey(8),
    await getkey(9),
    await getkey(10),
    await getkey(11),
    await getkey(12)
  ];
  return keyarraytoreturn;
};

var getinforeturn = { getcostarray, getkeyarray };
export default getinforeturn;
