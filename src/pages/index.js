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

export default function Home() {
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black  text-white font-bold justify-between">
        Main Page
      </div>

      <div class="flex justify-center p-4">
        <div>
          <div class="w-full" style={{ textAlign: 'center' }}>
            ISB3DPRINTERS Project Main Page
          </div>
          <div class="text-sm">
            <h1 class="text-xl font-bold mt-2">Pages</h1>
            <span class="font-bold">
              <Link href="/slicer" class="hover:text-purple-400">
                Slicer:
              </Link>
            </span>{' '}
            Turn your models into code (gcode) that the printer can understand{' '}
            <br />
            <span class="font-bold">
              <Link href="/printerDispatch" class="hover:text-purple-400">
                Printer Dispatch:
              </Link>
            </span>{' '}
            Send that prepared (gcode) to the printer to print <br />
            <span class="font-bold">
              <Link href="/auth" class="hover:text-purple-400">
                Teachers Console:
              </Link>
            </span>{' '}
            Go to the Teachers Console <br />
          </div>
        </div>
      </div>
      <div class="flex justify-center text-2xl">
        <Link href="/help" className="hover:text-purple-400">
          Help
        </Link>
      </div>
    </div>
  );
}
