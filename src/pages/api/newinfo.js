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

import keychanger from '../../lib/newinfo.js';
import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/router';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  if (typeof req.body.grade === 'undefined') {
    res.status(400).send({ message: 'No Body Grade Sent' });
    return;
  }

  const tochange = req.body.grade;

  if (tochange.grade === 6) {
    await keychanger(6);
  } else if (tochange === 7) {
    await keychanger(7);
  } else if (tochange === 8) {
    await keychanger(8);
  } else if (tochange === 9) {
    await keychanger(9);
  } else if (tochange === 10) {
    await keychanger(10);
  } else if (tochange === 11) {
    await keychanger(11);
  } else if (tochange === 12) {
    await keychanger(12);
  } else if (tochange === 13) {
    await keychanger(6);
    await keychanger(7);
    await keychanger(8);
    await keychanger(9);
    await keychanger(10);
    await keychanger(11);
    await keychanger(12);
  } else {
    res.status(400).send({ message: 'Invalid grade' });
    return;
  }
}
