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
 * @fileoverview Library
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/

/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-redeclare */

import passtools from "./password-updater";



export const makenum = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};


export const getcurrentuserpassword = async (grade, printer) => {
  let { data: userpassword, error } = await supabase
  .from('userpasswords')
  .select()
  .eq('grade', grade)
  .single()

  if (error) {
    console.log('supabase error')
  }
  console.log("getuserpassword received" + userpassword.password)
  return userpassword.password
};


export const findapikeys = async (printer) => {
  let { data: apikey, error } = await supabase
  .from('apikeys')
  .select()
  .eq('printer', printer)
  .single()

  if (error) {
      console.log('supabase error')
  }
  console.log(apikey.key)

};


export const passwordarray = (grade, printer,which) => {
  var currentpassword = getcurrentuserpassword(grade, printer);
  var newpassword = makenum(7);
  //var datatoupdate = {
  //  password: newpassword,
 //   current: currentpassword,
 // };
  if (which === "old") {return currentpassword}
  else if (which === "new") {return newpassword}
  else {return 409}
};


export const passwordarrayupdater = async (grade,newpassword) => {
  // var passupdatevar = 'e' // await JSON.parse(fs.readFile('../data/userpasswords.json'))
  const { error } = await supabase
  .from('userpasswords')
  .update({ password: newpassword})
  .eq('grade', grade)
  if (error) {
    console.log('supabase password updater failed')
  }
  else {
    return 202
  }
}



export const apipathfinder = (printer,grade) => {
  if (printer === 1) {
    var printerpath = "127.0.0.1:8001/api/access/users/grade" + grade + "/password" 
    return { printerpath };
  } else if (printer === 2) {
    var printerpath = "127.0.0.1:8002/api/access/users/grade" + grade + "/password"
    return { printerpath }
  } else if (printer === 3) {
    var printerpath = "127.0.0.1:8003/api/access/users/grade" + grade + "/password"
    return { printerpath };
  } else if (printer === 4) {
    var printerpath = "127.0.0.1:8004/api/access/users/grade" + grade + "/password"
    return { printerpath };
  } else {
    return 409
  }
}


export default async function changerselection(grade) {
  if (grade === "all") {
    var status = await passtools(6);
      if (status === 409) { return 409 };
    status = await passtools(7);
      if (status === 409) { return 409 };
    status = await passtools(8);
      if (status === 409) { return 409 };
    status = await passtools(9);
      if (status === 409) { return 409 };
    status = await passtools(10);
      if (status === 409) { return 409 };
    status = await passtools(11);
      if (status === 409) { return 409 };
    status = await passtools(12);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 6) {
    var status = await passtools(6);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 7) {
    var status = await passtools(7);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 8) {
    var status = await passtools(8);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 9) {
    var status = await passtools(9);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 10) {
    var status = await passtools(10);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 11) {
    var status = await passtools(11);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === 12) {
    var status = await passtools(8);
      if (status === 409) { return 409 };
    return 202
  } else if (grade === "highschool") {
    var status = await passtools(6);
      if (status === 409) { return 409 };
    return 202
  }
    else {
      console.log('changerselection error eof')
      return 409
    }
}