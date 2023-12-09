import React, { useEffect } from "react";
import supabase from "../lib/supabase";

const Dashboard = () => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            return;
        }
        window.location.href = "/auth";
    };
    return (
        <div>
            
            <h1>ISB3DPRINTERS Teachers&apos; Console</h1>
            <button
                        className="text-black font-bold rounded text-sm mb-2"
                        onClick={() => handleLogout()}
                    >
                        Sign Out
                    </button>
        </div>
    );
};

export default Dashboard;
