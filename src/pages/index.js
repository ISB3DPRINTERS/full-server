import Link from "next/link";

export default function Home() {


    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black  text-white font-bold justify-between">
                Main Page
            </div>

            <div className="flex justify-center p-4">
                <div>
                    <div className="w-full" style={{ textAlign: "center" }}>
                        ISB3DPRINTERS Project Main Page
                    </div>
                    <div className="text-sm">
                        <h1 className="text-xl font-bold mt-2">
                            Pages
                        </h1>
                        <span className="font-bold">
                            <Link href="/slicer" className="hover:text-purple-400">Slicer:</Link>
                        </span> Turn your models into code (gcode) that the printer can understand <br />
                        <span className="font-bold">
                            <Link href="/printerDispatch" className="hover:text-purple-400">Printer Dispatch:</Link>
                        </span> Send that prepared (gcode) to the printer to print <br />
                        <span className="font-bold">
                            <Link href="/auth" className="hover:text-purple-400">Teachers Console:</Link>
                        </span> Go to the Teachers Console <br />
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-2xl">
                <Link href="/help" className="hover:text-purple-400">
                    Help
                </Link>
            </div>
        </div>
    );
}
