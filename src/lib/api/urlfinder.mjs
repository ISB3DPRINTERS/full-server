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

// Not sure why but BOTH TESTED WORKS

// TESTED WORKS
const portfinder = (printer) => {
  console.log('PORTFINDER GOT ' + printer);
  console.log('portfinder retying printer ' + printer);
  if (printer == 1) {
    return '5100';
  }
  if (printer == 2) {
    return '5200';
  }
  if (printer == 3) {
    return '5300';
  }
  if (printer == 4) {
    return '5400';
  } else {
    return 404;
  }
};

// TESTED WORKS
export const urlfinder = (grade, printer) => {
  console.log('URL FINDER GOT PRINTER ' + printer + ' AND GRADE ' + grade);
  // eslint-disable-next-line prettier/prettier
  var urltobereturned =
    'http://192.168.50.119:' +
    portfinder(printer) +
    '/api/access/users/grade' +
    grade +
    '/password';

  return urltobereturned;
};
