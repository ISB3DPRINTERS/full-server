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

'use server';
import getinfo from '../lib/getinfo';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../lib/supabase.mjs';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export async function getServerSideProps() {
  const cost = await getinfo.getcostarray();
  const keys = await getinfo.getkeyarray();

  return {
    props: {
      keys,
      cost
    }
  };
}

export default function Dashboard({ keys, cost }) {
  // Function component code here
  var [keyg6, keyg7, keyg8, keyg9, keyg10, keyg11, keyg12] = keys;
  var [costg6, costg7, costg8, costg9, costg10, costg11, costg12] = cost;

  const [initials, setInitials] = useState('');
  const [grade, setGrade] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return;
    }
    window.location.href = '/';
  };
  useEffect(() => {
    const { user } = supabase.auth.getSession();
    if (user) {
      console.log(user);
    }
  }, [router]);

  const submitData = async (toreset) => {
    console.log(toreset);
    try {
      const body = { grade: toreset };
      await fetch('/api/newinfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onReset = async () => {
    if (typeof grade === 'string') {
      if (grade === '6') {
        submitData(6);
      } else if (grade === '7') {
        submitData(7);
      } else if (grade === '8') {
        submitData(8);
      } else if (grade === '9') {
        submitData(9);
      } else if (grade === '10') {
        submitData(10);
      } else if (grade === '11') {
        submitData(11);
      } else if (grade === '12') {
        submitData(12);
      } else if (grade === 'ALL') {
        submitData(13);
      } else if (grade === 'all') {
        submitData(13);
      } else if (grade === 'All') {
        submitData(13);
      } else {
        console.log('submission was invalid');
      }
    } else {
      console.log('submission was invalid');
    }
  };

  return (
    <div className="font-serif bg-neutral-950 text-white background-color:rgb(10 10 10);">
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
        <Link href="/" className="hover:text-black-400">
          ISB3DPRINTERS: Teachers&apos; Console
        </Link>
        <button
          className="text-white font-bold rounded text-sm mb-2"
          onClick={() => handleLogout()}
        >
          Sign Out
        </button>
      </div>
      <div className="max-w-sm mx-auto">
        <strong>WARNING: Never give students access to this page</strong>
        <br></br>
        <br></br>
        <h2 className="text-4xl font-extrabold dark:text-white">Info Table</h2>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3">
                  Daily Key
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  6
                </th>
                <td className="px-6 py-4">{keyg6}</td>
                <td className="px-6 py-4">{costg6}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7
                </th>
                <td className="px-6 py-4">{keyg7}</td>
                <td className="px-6 py-4">{costg7}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  8
                </th>
                <td className="px-6 py-4">{keyg8}</td>
                <td className="px-6 py-4">{costg8}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  9
                </th>
                <td className="px-6 py-4">{keyg9}</td>
                <td className="px-6 py-4">{costg9}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  10
                </th>
                <td className="px-6 py-4">{keyg10}</td>
                <td className="px-6 py-4">{costg10}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  11
                </th>
                <td className="px-6 py-4">{keyg11}</td>
                <td className="px-6 py-4">{costg11}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  12
                </th>
                <td className="px-6 py-4">{keyg12}</td>
                <td className="px-6 py-4">{costg12}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>
        <h2 className="text-4xl font-extrabold dark:text-white">
          Reset Passkeys
        </h2>
      </div>
      <div className="auth-form-container">
        <form className="max-w-sm mx-auto" onSubmit={onReset}>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Initials
            </label>
            <input
              className="inputField bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Your Initials"
              value={initials}
              required={true}
              onChange={(e) => setInitials(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Grade
            </label>
            <input
              type="grade"
              placeholder="Grade: Only # or ALL"
              value={grade}
              required={true}
              onChange={(e) => setGrade(e.target.value)}
              className="inputField bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <br></br>
    </div>
  );
}

Dashboard.propTypes = {
  keys: PropTypes.array.isRequired,
  cost: PropTypes.array.isRequired
};
