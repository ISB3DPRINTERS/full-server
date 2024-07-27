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
            <a href={'https://docs.google.com/presentation/d/1ccHkCeZ2_XfU9klWb3ZJL7IhHsj3IdL6RTlJmsM3UDI/edit#slide=id.g26794161b6b_0_265'}>
                Presentation for help (click)
            </a>

    </div>
        );
        }
