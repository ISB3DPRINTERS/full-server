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
import axios from 'axios';
import { numbergenerator } from './api/numbergenerator.mjs';
import { urlfinder } from './api/urlfinder.mjs';
import { supabaseChanger } from './api/supabasechanger.mjs';
import { getPrinterKey } from './api/getprinterkey.mjs';
import { getkey } from './api/getprinternumber.mjs';
import next from 'next';

const printerrequester = async (grade, printer) => {
  var passwordtoupdate = { password: await getkey(grade) };
  const headers = {
    'X-Api-Key': await getPrinterKey(printer)
  };

  console.log(passwordtoupdate);
  console.log(headers);
  axios
    .put(urlfinder(grade, printer), passwordtoupdate, {
      headers
    })
    .then(async (response) => {
      console.log('R E S P O N S E  S T A T US');
      console.log('R E S P O N S E  S T A T US ');
      console.log('R E S P O N S E  S T A T US ');
      console.log('R E S P O N S E  S T A T US ');
      console.log('R E S P O N S E  S T A T US ');
      console.log(response.status);
      if (response.status === 200) {
        return 200;
      }
    })
    .catch((error) => console.error(error));
};

const printerupdater = async (grade) => {
  await supabaseChanger(grade, numbergenerator());

  if ((await printerrequester(grade, 1)) == 200) {
    console.log('printer1 updated correctly');
  }
  if ((await printerrequester(grade, 2)) == 200) {
    console.log('printer2 updated correctly');
  }
  if ((await printerrequester(grade, 3)) == 200) {
    console.log('printer3 updated correctly');
  }
  if ((await printerrequester(grade, 4)) == 200) {
    console.log('printer4 updated correctly');
  }
  return 200
};
export default printerupdater;

printerupdater(6);
