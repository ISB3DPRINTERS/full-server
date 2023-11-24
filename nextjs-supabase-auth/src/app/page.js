import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import getinfo from "../api/getinfo"
import resetfunc from "../api/passchanger/main"
import SignOut from 'src/components/SignOut';
import React from 'react';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div>
      <h2>Welcome!</h2>
      <code className="highlight">{user.role}</code>
      <br></br>
      <Link className="button" href="/profile">
        Go to Admin Controls
      </Link>
    <h1>Teachers' Console</h1>
    <br></br>
    <p>Welcome {user.email}</p>
    <p>Last Sign in: {new Date(user.last_sign_in_at).toUTCString()}</p>
    <strong>WARNING: Never give students access to this page</strong>
    <h3>Info Table</h3>
    <table>
        <tr>
            <th>Grade</th>
            <th>Daily PassKey</th>
            <th>$ used (approx)</th>
        </tr>
        <tr>
            <td>6th</td>
            <td>{getinfo.getkey(6)}</td>
            <td>{getinfo.getcost(6)}</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>{getinfo.getkey(7)}</td>
            <td>{getinfo.getcost(7)}</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>{getinfo.getkey(8)}</td>
            <td>{getinfo.getcost(8)}</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>{getinfo.getkey(9)}</td>
            <td>{getinfo.getcost(9)}</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>{getinfo.getkey(10)}</td>
            <td>{getinfo.getcost(10)}</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>{getinfo.getkey(11)}</td>
            <td>{getinfo.getcost(11)}</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>{getinfo.getkey(12)}</td>
            <td>{getinfo.getcost(12)}</td>
        </tr>
    </table>
      <SignOut />
    </div>
  );
}
