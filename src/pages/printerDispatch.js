'use server'
import Link from "next/link";

export default function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
                <Link href="/" className="hover:text-purple-400">ISB3DPRINTERS: Printer Dispatch</Link>
            </div>
      <h2>Make sure to check each printer for avalibility</h2>
      <Link href={baseUrl+':8001'} className="hover:text-purple-400">Printer #1</Link>
      <br></br>
      <Link href={baseUrl+':8002'} className="hover:text-purple-400">Printer #2</Link>
      <br></br>
      <Link href={baseUrl+':8003'} className="hover:text-purple-400">Printer #3</Link>
     <br></br>
      <Link href={baseUrl+':8004'} className="hover:text-purple-400">Printer #4</Link>
    </div>
  
  )
}
