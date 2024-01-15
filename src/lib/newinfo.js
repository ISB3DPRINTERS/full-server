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
    return 400;
  } else {
    return 200;
  }
};

const urlfinder = (grade, printer) => {
  if (printer == 1) {
    var porttobereturned = 5100;
  } else if (printer == 2) {
    var porttobereturned = 5200;
  } else if (printer == 3) {
    var porttobereturned = 5300;
  } else if (printer == 4) {
    var porttobereturned = 5400;
  }
  var urltobereturned =
    'http://127.0.0.1:' +
    porttobereturned +
    '/api/access/users/grade' +
    grade +
    '/password';

  return urltobereturned;
};

const getPrinterKey = async (grade, printer) => {
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

const printerrequester = (grade, printer) => {
  var passwordtoupdate = { password: numbergenerator() };
  const headers = {
    'X-Api-Key': getPrinterKey(grade, printer)
  };

  console.log(passwordtoupdate);
  console.log(headers);
  axios
    .put(urltobereturned(grade, printer), passwordtoupdate, {
      headers
    })
    .then(async (response) => {
      if (response.status == 200) {
        var suparesponse = await supabaseChanger(grade, passwordtoupdate);
        if (suparesponse == 200) {
          return 200;
        } else {
          var suparesponse1 = await supabaseChanger(grade, passwordtoupdate);
          if (suparesponse1 == 200) {
            return 200;
          } else {
            var suparesponse2 = await supabaseChanger(grade, passwordtoupdate);
            if (suparesponse2 == 200) {
              return 200;
            } else {
              return 400;
            }
          }
        }
      }
    })
    .catch((error) => console.error(error));
};

export default printerupdater = async (grade, printer) => {
  if ((await printerrequester(1)) == 200) {
    console.log('printer1 updated correctly');
  } else {
    console.log('printer1 not updated correctly');
    await printerrequester(1);
  }
  if ((await printerrequester(2)) == 200) {
    console.log('printer2 updated correctly');
  } else {
    console.log('printer2 not updated correctly');
    await printerrequester(2);
  }
  if ((await printerrequester(3)) == 200) {
    console.log('printer3 updated correctly');
  } else {
    console.log('printer3 not updated correctly');
    await printerrequester(3);
  }
  if ((await printerrequester(4)) == 200) {
    console.log('printer4 updated correctly');
  } else {
    console.log('printer4 not updated correctly');
    await printerrequester(4);
  }
};
