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
 * @fileoverview Auth management file
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/
import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../supabase.mjs'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = supabase.auth.session()

    setUser(session?.user ?? null)
    setLoading(false)

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [])

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
