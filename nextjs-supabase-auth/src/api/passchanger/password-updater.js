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
 * @fileoverview Password updater selector
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/

import { passwordarray, passwordarrayupdater } from "./functions";
import axiosfunc from "./axiosfunc";


export default async function therealchanger(grade,printer){
  const newpassword = passwordarray(grade,printer,"new")
  async function evenrealerchanger(grade, printer) {
    //uses axios to send put request
    const res = await axiosfunc(grade, printer)
    console.log(res);
      return 202
  }


  function changercheck(evenrealerchangercheck) {
    if (evenrealerchangercheck === 409) {
      return 409
    }
    else if (evenrealerchangercheck === 202) {
      console.log('successful change')
    }
    else {
      return 409
    }
  }

  // using the above shorthand to check and log each printer
  if (changercheck(await evenrealerchanger(grade, 1)) === 202) {
    console.log('first printer success');
  } else {
    return 409;
  }

  if (changercheck(await evenrealerchanger(grade, 2)) === 202) {
    console.log('first printer success');
  } else {
    return 409;
  }

  if (changercheck(await evenrealerchanger(grade, 3)) === 202) {
    console.log('first printer success');
  } else {
    return 409;
  }

  if (changercheck(await evenrealerchanger(grade, 4)) === 202) {
    console.log('second printer success');
  } else {
    return 409;
  }
  
  passwordarrayupdater(grade,newpassword)
  // will update database
}
