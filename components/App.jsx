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
 * @fileoverview Router File
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Signup } from './Signup.jsx'
import { Dashboard } from './Dashboard.jsx'
import { AuthProvider } from './Auth.jsx'
import { Login } from './Login.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'

export default function App() {
  return (
    <div>
      <h1>ISB3DPRINTERS Teachers' Console</h1>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}
