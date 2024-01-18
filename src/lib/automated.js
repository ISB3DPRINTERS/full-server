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

import cron from 'node-cron';
import printerupdater from './newinfo.js';

cron.schedule(
  '0 0 * * *',
  async () => {
    console.log('NODE CRON RUNNING');
    await printerupdater(6);
    await printerupdater(7);
    await printerupdater(8);
    await printerupdater(9);
    await printerupdater(10);
    await printerupdater(11);
    await printerupdater(12);
  },
  {
    scheduled: true,
    timezone: 'America/Los_Angeles'
  }
);
