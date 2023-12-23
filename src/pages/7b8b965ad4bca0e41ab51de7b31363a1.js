"use server"
import getinfo from "../lib/getinfo"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabase.mjs";
import Link from "next/link";
import React from "react";

export async function getServerSideProps() {
    async function keyfinder (grade) {return (await supabase
      .from('studentinfo')
      .select()
      .eq('grade', grade)
      .single()
        )}
    const keys = [
        await keyfinder(6),
        await keyfinder(7),
        await keyfinder(8),
        await keyfinder(9),
        await keyfinder(10),
        await keyfinder(11),
        await keyfinder(12)
    ]
    return {
        props: {
         keys
        },
      };
  }


const notobjectgetkey = (grade) => {
    return keyarray[grade];
}

function notobjectgetcost(grade) {
    return 'e'
}

export default function Dashboard() {

   var [keyg6,keyg7,keyg8,keyg9,keyg10,keyg11,keyg12] = keys
   var [costg6,costg7,costg8,costg9,costg10,costg11,costg12] = studentinfo.filament


    const [initials, setInitials] = useState("");
    const [grade, setGrade] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            return;
        }
        window.location.href = "/";
    }
    useEffect(() => {
        const { user } = supabase.auth.getSession();
        if (user) {
        console.log(user)
        }
    }, [router])

    const onReset = async () => {
        if (typeof grade == 'number') {
            console.log('submission was a number')
        }
        else if (grade == 'all') {
            console.log('submission was all')
        }
        else {
            console.log('submission was invalid')
        }
    }



    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
                <Link href="/" className="hover:text-purple-400">ISB3DPRINTERS: Teachers&apos; Console</Link>
                <button
                        className="text-white font-bold rounded text-sm mb-2"
                        onClick={() => handleLogout()}
                    >
                        Sign Out
                    </button>
            </div>
            <strong>WARNING: Never give students access to this page</strong>
            <br></br>
            <h3>Info Table</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Grade     | </th>
                        <th>Daily PassKey      | </th>
                        <th>$ used (approx)</th>
                    </tr>   
                </tbody>
                <tbody>
                    <tr>
                        <td>6th</td>
                        <td>{keyg6}</td>
                        <td>{costg6}</td>
                    </tr>
                </tbody>
                 <tbody>
                    <tr>
                        <td>7th</td>
                        <td>{keyg7}</td>
                        <td>{costg7}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>8th</td>
                        <td>{keyg8}</td>
                        <td>{costg9}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>9th</td>
                        <td>{keyg9}</td>
                        <td>{costg9}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>10th</td>
                        <td>{keyg10}</td>
                        <td>{costg10}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>11th</td>
                        <td>{keyg11}</td>
                        <td>{costg11}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>12th</td>
                        <td>{keyg12}</td>
                        <td>{costg12}</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <br></br>
            <h2>Reset PassKeys</h2>
            <div className="auth-form-container">
                <form className="form-widget" onSubmit={onReset}>
                    <div className="form-group">
                        <input
                            className="inputField"
                            type="text"
                            placeholder="Your Initials"
                            value={initials}
                            required={true}
                            onChange={(e) => setInitials(e.target.value)}
                        />
                        <input
                            className="inputField"
                            type="grade"
                            placeholder="Grade: Only # or ALL"
                            value={grade}
                            required={true}
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>

                        <button className="submit-button">
                            
                                <span>Submit</span>
                        
                        </button>
                </form>
            </div>
            <br></br>
        </div>
    );
};

