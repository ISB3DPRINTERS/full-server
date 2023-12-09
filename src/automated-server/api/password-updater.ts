import { findapikeys, apipathfinder, passwordarray } from "./functions";
import axios, { isCancel, AxiosError } from "axios";
import axiosfunc from "./axiosfunc";

export default async function therealchanger(grade:number): Promise<void> {
  async function evenrealerchanger(grade:number, printer:number) {
    
    
    //uses axios to send put request
    var apikeys = findapikeys(grade,printer);
    const res = await axiosfunc
    console.log(res);
  }

  await evenrealerchanger(grade, 1);
  await evenrealerchanger(grade, 2);
  await evenrealerchanger(grade, 3);
  await evenrealerchanger(grade, 4);
  // will call for each printer
}