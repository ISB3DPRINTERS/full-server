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

import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  'https://servksydavsonantnpox.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcnZrc3lkYXZzb25hbnRucG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NzQ2NjYsImV4cCI6MjAwOTQ1MDY2Nn0.nzbHw3XU4qVouLYJRW0yuVNt89qNESX4tV8m606dd_A'
);

const grade = 7
const portfinder = (printer) => {
    if (printer == 1) {
      return '5100';
    } else if (printer == 2) {
      return '5200';
    } else if (printer == 3) {
      return '5300';
    } else if (printer == 4) {
      return '5400';
    }
  };
// eslint-disable-next-line prettier/prettier
    var urltobereturned =
  'http://127.0.0.1:' +
  portfinder(4) +
  '/api/access/users/grade' +
  grade +
  '/password';

console.log(urltobereturned);
