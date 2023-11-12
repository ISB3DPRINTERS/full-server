import functions from "./functions";
import * as cron from 'node-cron'

export default async function(grade: number | string) {
  return await functions(grade)
}
