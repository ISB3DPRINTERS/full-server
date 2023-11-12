// Copyright 2023 and onwards Ravinder Olivier Singh
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

export function Dashboard() {
  const { user, signOut } = useAuth()
  const history = useHistory()

  async function handleSignOut() {
    await signOut()

    history.push('/login')
  }

  return (
    <div>
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}
