// Copyright 2023 Ravinder Olivier Singh Dadiala

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Link from 'next/link';
import React from 'react';

export default function help() {
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
        <Link href="/" className="hover:text-purple-400">
          ISB3DPRINTERS: Help Page
        </Link>
      </div>

      <div>
        <h1 className="text-5xl font-extrabold dark:text-black">Help</h1>
      </div>
      <br></br>
      <div>
        <h2 className="text-4xl font-bold dark:text-black">Getting Started</h2>
      </div>
      <br></br>
      <div>
        <h3 className="text-3xl font-bold dark:text-black">Getting a Model</h3>
      </div>
      <br></br>
      <div>
        <h3 className="text-3xl font-bold dark:text-black">
          Slicing the model
        </h3>
      </div>
      <br></br>
      <div>
        <h3 className="text-3xl font-bold dark:text-black">
          Uploading the model
        </h3>
      </div>
      <br></br>
      <div>
        <h3 className="text-3xl font-bold dark:text-black">
          Getting the model
        </h3>
      </div>
      <br></br>
      <div>
        <h2 className="text-4xl font-bold dark:text-black">
          Detailed Slicing Help
        </h2>
      </div>
      <br></br>
      <div>
        <h2 className="text-4xl font-bold dark:text-black">
          Detailed Uploading Help
        </h2>
      </div>
      <br></br>
      <div>
        <h2 className="text-4xl font-bold dark:text-black">Teachers help</h2>
        <p>Go to the help page in the teachers&apos; console page</p>
      </div>
    </div>
  );
}
