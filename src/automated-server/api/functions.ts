var fs = require("fs");
import passtools from "./password-updater";
import axios, { isCancel, AxiosError } from "axios";

export const makenum = (length:number) => {
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
export const getcurrentpassword = (grad:number, printer:number) => {
  var pathtopass = "pass.txt";
  // var currentpass = fs.readFileSync(pathtopass, 'utf8');
  var currentpass = "abc"; //TESTING PURPOSES ONLY
  return currentpass;
};


export const findapikeys = (grade:number, printer:number) => {
  var pathtoapikeys = "keys.txt";
  // var apikeys = fs.readFileSync(apikeys, 'utf8');
  return "1234";
};


export const passwordarray = (grade:number, printer:number,which:string) => {
  var currentpassword = getcurrentpassword(grade, printer);
  var newpassword = makenum(7);
  var datatoupdate = {
    password: newpassword,
    current: currentpassword,
  };
  if (which = "old") {return currentpassword}
  else if (which = "new") {return newpassword}
  else {return "error wrong selector"}
};


export const apipathfinder = (grade:number) => {
  var path = "/api/access/users/" + "grade" + grade + "/password";
  return path;
};


export default async function(grade: string | number)  {
  if ((grade = "all")) {
    await passtools(6);
    await passtools(7);
    await passtools(8);
    await passtools(9);
    await passtools(10);
    await passtools(11);
    await passtools(12);
  } else if ((grade = "6")) {
    await passtools(6);
  } else if ((grade = "7")) {
    await passtools(7);
  } else if ((grade = "8")) {
    await passtools(8);
  } else if ((grade = "9")) {
    await passtools(9);
  } else if ((grade = "10")) {
    await passtools(10);
  } else if ((grade = "11")) {
    passtools(11);
  } else if ((grade = "12")) {
    await passtools(8);
  } else if ((grade = "highschool")) {
    await passtools(6);
    await passtools(7);
    await passtools(8);
  } else if ((grade = "middleschool")) {
    await passtools(9);
    await passtools(10);
    await passtools(11);
    await passtools(12);
  }
};
