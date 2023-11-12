import { findapikeys, apipathfinder, passwordarray } from "./functions";
import axios, { isCancel, AxiosError } from "axios";

export default async function axiosfunc (grade:number,printer:number) {
    console.log("axiosfunc")
    axios.post(apipathfinder(grade), {
      body:{
        password: passwordarray(grade,printer,"new"),
        current: passwordarray(grade,printer,"old"),
      },
      headers: {
        "X-Api-Key": findapikeys(grade, printer),
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log("axios func finished redid printer"+printer+"grade"+grade)
  }
