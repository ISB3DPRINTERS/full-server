'use client'
import {filefunc} from "../components/uploadapi"
export default async function Page() {
  return (
    <form action={filefunc}>
    <label htmlFor="file">Gcode</label>
    <input type="file" name="file" id="file" />
    <button type="submit" id="upload">
      Upload File
    </button>
    </form>
  )
}
