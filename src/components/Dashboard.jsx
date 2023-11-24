// Copyright 2023 and onwards Ravinder Olivier Singh Dadiala
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* globals, server,client */

/**
 * @fileoverview Logged in page
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/Auth'

import { FC } from "react";
import * as React from 'react'
import getinfo from "../api/getinfo"
import { useState } from "react";
import resetfunc from "../passchanger/main"

export function Dashboard() {
  const { user, signOut } = useAuth()
  const history = useHistory()

  async function handleSignOut() {
    await signOut()

    history.push('/login')
  }


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

    return (
        <div>
            <h1>Teachers' Console</h1>
            <br></br>
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
            <br></br>
            <br></br>
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
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
}
