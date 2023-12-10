import Link from "next/link";
export default function Slicer() {

    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
            <Link href="/" className="hover:text-purple-400">ISB3DPRINTERS: Slicer</Link>
            </div>
            <iframe src="https://grid.space/kiri/" 
            height="1000" width="1200" frameborder="0" align="center" allowFullScreen title="isb3dprinters slicer" scrolling="no"
            ></iframe>
        </div>
    );
}
