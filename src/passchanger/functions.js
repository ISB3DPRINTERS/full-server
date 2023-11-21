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
import passtools from "./password-updater";
import axios, { isCancel, AxiosError } from "axios";
import * as fs from'fs';
import apikeys from "../../../info/apikeys.json" assert { type: 'json' }
import userpasswords from '../../../info/userpasswords.json' assert {type: 'json'}



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


export const getcurrentuserpassword = (grade, printer) => {
  return userpasswords.printer.grade;
};


export const findapikeys = (printer) => {
  return apikeys.printer;
};


export const passwordarray = (grade, printer,which) => {
  var currentpassword = getcurrentuserpassword(grade, printer);
  var newpassword = makenum(7);
  var datatoupdate = {
    password: newpassword,
    current: currentpassword,
  };
  if (which == "old") {return currentpassword}
  else if (which == "new") {return newpassword}
  else {return "error wrong selector"}
};


export const passwordarrayupdater = (grade,printer,newpassword) => {
  
}


export const apipathfinder = (grade,printer) => {
  if (printer == 1) {
    return {"127.0.0.1:8001/api/access/users/grade" + grade + "/password"}
}
  else if (printer == 2) {
    return ("127.0.0.1:8002/api/access/users/grade" + grade + "/password")
  }
  else if (printer == 3) {
    return ("127.0.0.1:8003/api/access/users/grade" + grade + "/password") 
  }
  else if (printer == 4) {
    return ("127.0.0.1:8004/api/access/users/grade" + grade + "/password")
  }
};


export default async function changerselection(grade)  {
  if ((grade === "all")) {
    await passtools(6);
    await passtools(7);
    await passtools(8);
    await passtools(9);
    await passtools(10);
    await passtools(11);
    await passtools(12);
  } else if ((grade === "6")) {
    await passtools(6);
  } else if ((grade === "7")) {
    await passtools(7);
  } else if ((grade === "8")) {
    await passtools(8);
  } else if ((grade === "9")) {
    await passtools(9);
  } else if ((grade === "10")) {
    await passtools(10);
  } else if ((grade === "11")) {
    passtools(11);
  } else if ((grade === "12")) {
    await passtools(8);
  } else if ((grade === "highschool")) {
    await passtools(6);
    await passtools(7);
    await passtools(8);
  } else if ((grade === "middleschool")) {
    await passtools(9);
    await passtools(10);
    await passtools(11);
    await passtools(12);
  }
};
