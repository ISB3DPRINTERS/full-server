import Link from 'next/link';
export default function help() {
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
        <Link href="/" className="hover:text-purple-400">
          ISB3DPRINTERS: Help Page
        </Link>
      </div>

      <div>
        <h1 class="text-5xl font-extrabold dark:text-black">Help</h1>
      </div>
      <br></br>
      <div>
        <h2 class="text-4xl font-bold dark:text-black">Getting Started</h2>
      </div>
      <br></br>
      <div>
        <h3 class="text-3xl font-bold dark:text-black">Getting a Model</h3>
      </div>
      <br></br>
      <div>
        <h3 class="text-3xl font-bold dark:text-black">Slicing the model</h3>
      </div>
      <br></br>
      <div>
        <h3 class="text-3xl font-bold dark:text-black">Uploading the model</h3>
      </div>
      <br></br>
      <div>
        <h3 class="text-3xl font-bold dark:text-black">Getting the model</h3>
      </div>
      <br></br>
      <div>
        <h2 class="text-4xl font-bold dark:text-black">
          Detailed Slicing Help
        </h2>
      </div>
      <br></br>
      <div>
        <h2 class="text-4xl font-bold dark:text-black">
          Detailed Uploading Help
        </h2>
      </div>
      <br></br>
      <div>
        <h2 class="text-4xl font-bold dark:text-black">Teachers help</h2>
        <p>Go to the help page in the teachers&apos; console page</p>
      </div>
    </div>
  );
}
