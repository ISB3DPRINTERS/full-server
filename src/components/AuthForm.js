import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabase";
import Link from "next/link";

export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const { user } = supabase.auth.getSession();
        if (user) {
            router.push("/7b8b965ad4bca0e41ab51de7b31363a1");
        }
    }, [router]);

    const handleAuth = async (e) => {
        e.preventDefault();
        const { user, error } = isLogin
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });

        if (error) {
            console.error("Error:", error.message);
        } else if (user || !error) {
            router.push("/7b8b965ad4bca0e41ab51de7b31363a1");
        }
    };

    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
            <Link href="/" className="hover:text-purple-400">ISB3DPRINTERS: Teachers&apos; Console</Link>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    {" "}
                    <h1 className="mt-4 text-xl font-bold">
                        {isLogin ? "Login" : "Sign Up"}
                    </h1>
                    <form
                        onSubmit={handleAuth}
                        className="mt-4 border border-black grid grid-cols-1 gap-4 p-4"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-black p-1"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-black p-1"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white font-bold rounded text-sm mb-2 py-2"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-gray-700"
                        style={{
                            textDecoration: "underline",
                            fontSize: "12px",
                        }}
                    >
                        {isLogin ? "Switch to Sign Up (WILL BE REMOVED IN FUTURE)" : "Switch to Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}
