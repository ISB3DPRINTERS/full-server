import getinfo from "../lib/getinfo"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabase";
import Link from "next/link";

export default async function Dashboard() {
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
    
    const keyarray = await getinfo.getkeyarray()
    const costarray = await getinfo.getcostarray()

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
                        <th>Grade</th>
                        <th>Daily PassKey</th>
                        <th>$ used (approx)</th>
                    </tr>   
                </tbody>
                <tbody>
                    <tr>
                        <td>6th</td>
                        <td>{keyarray[6]}</td>
                        <td>{costarray[6]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>7th</td>
                        <td>{keyarray[7]}</td>
                        <td>{costarray[7]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>8th</td>
                        <td>{keyarray[8]}</td>
                        <td>{costarray[8]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>9th</td>
                        <td>{keyarray[9]}</td>
                        <td>{costarray[9]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>10th</td>
                        <td>{keyarray[10]}</td>
                        <td>{costarray[10]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>11th</td>
                        <td>{keyarray[11]}</td>
                        <td>{costarray[11]}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>12th</td>
                        <td>{keyarray[12]}</td>
                        <td>{costarray[12]}</td>
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

