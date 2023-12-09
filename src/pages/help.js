import Link from "next/link";
export default function printerDispatch() {

    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
            <Link href="/" className="hover:text-purple-400">ISB3DPRINTERS: Help Page</Link>
            </div>
            <h1>Help</h1>

            <h2>Getting Started</h2>

            <h3>Getting a model</h3>

            <h3>Slicing the model</h3>

            <h3>Uploading the model</h3>

            <h3>Getting the model</h3>

            <h2>Detailed Slicing Help</h2>

            <h2>Detailed Uploading Help</h2>

            <h2>Teachers help</h2>
            
            <p>Go to the help page in the teachers&apos; console page</p>
        </div>
    );
}
