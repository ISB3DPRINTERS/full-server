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

/* eslint-disable prettier/prettier */

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
        <Link href="/" className="hover:text-black-400 hover:underline">
          ISB3DPRINTERS: Homepage
        </Link>
      </div>
      <div className="flex justify-center p-4">
        <div>
          <div className="text-sm">
            <h1 className="text-xl font-bold mt-2">Pages</h1>
            <span className="font-bold">
              <Link
                href="/slicer"
                className="hover:underline hover:text-purple-400"
              >
                Slicer:
              </Link>
            </span>{' '}
            Turn your models into code (gcode) that the printer can understand{' '}
            <br />
            <span className="font-bold">
              <Link
                href="/printerDispatch"
                className="hover:underline hover:text-purple-400"
              >
                Printer Dispatch:
              </Link>
            </span>{' '}
            Send that prepared (gcode) to the printer to print <br />
            <span className="font-bold">
              <Link
                href="/auth"
                className="hover:underline hover:text-purple-400"
              >
                Teachers Console:
              </Link>
            </span>{' '}
            Go to the Teachers Console <br />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
        >
          Help
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <footer className="fixed bottom-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a
              href="https://github.com/ravinder-Olivier"
              className="hover:underline"
            >
              Ravinder Olivier Singh Dadiala
            </a>
            . All Rights Reserved.&nbsp;
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                {' '}
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacypolicy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/license" className="hover:underline me-4 md:me-6">
                License
              </Link>
            </li>
            <li>
              <a
                href="mailto:ravinder-Olivier@outlook.com"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
