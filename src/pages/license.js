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

import React from 'react';
import Link from 'next/link';

export default function license() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold dark:text-black">License</h1>
      <p>
        The ISB3DPRINTERS Project is licensed under the Apache License 2.0. You
        can find the license{' '}
        <Link href="/licensetext">
          <a className="hover:underline text-gray-500 dark:text-blue-400">
            here
          </a>
        </Link>
      </p>
      <h1 className="text-4xl font-extrabold dark:text-black">NOTICE</h1>
      <p>
        Copyright 2023 Ravinder Olivier Singh Dadiala Licensed under the Apache
        License, Version 2.0 (the &quot;License&quot;); you may not use this
        file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by
        applicable law or agreed to in writing, software distributed under the
        License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES
        OR CONDITIONS OF ANY KIND, either express or implied. See the License
        for the specific language governing permissions and limitations under
        the License.
      </p>
    </div>
  );
}
