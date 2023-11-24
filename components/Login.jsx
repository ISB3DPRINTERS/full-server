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
 * @fileoverview Login Function
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/
import { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useAuth } from './Auth'

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)

  const { signIn } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { error } = await signIn({ email, password })

    if (error) return setError(error)

    history.push('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{error && JSON.stringify(error)}</div>

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? (WILL BE REMOVED IN FUTURE) <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}
// the signup will be removed in the future