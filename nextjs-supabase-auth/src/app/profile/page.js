"use client"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import getinfo from "../../api/getinfo"
import resetfunc from "../../api/passchanger/main"
import SignOut from 'src/components/SignOut';
import React, {useState} from 'react';
import { getCookie } from 'cookies-next';
import supabase from '../../api/supabase.js'

export default async function Profile() {

  const [loading, setLoading] = useState(false);
    const [initials, setInitials] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        let resetfuncreturn = await resetfunc(initials,grade)
        if (resetfuncreturn === 202) {
            setLoading(false);
        }
        else {
            console.log(resetfuncreturn+"resetfunc has errored")
        }

    };


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return ( 
  <div>
    <h2>Reset PassKeys</h2>
    <div className="auth-form-container">
        <form className="form-widget" onSubmit={handleSubmit}>
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

                <button className="submit-button" disabled={loading}>
                    {loading ? (
                        <span>Loading</span>
                    ) : (
                        <span>Submit</span>
                    )}
                </button>
        </form>
    </div>
</div>
  )}
