import { useEffect } from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/AuthForm";
import supabase from "../lib/supabase";

export default function Auth() {
    const router = useRouter();

    useEffect(() => {
        const { user } = supabase.auth.getSession();
        if (user) {
            router.push("/7b8b965ad4bca0e41ab51de7b31363a1");
        }
    }, [router]);

    return (
        <div>
            <AuthForm />
        </div>
    );
}
