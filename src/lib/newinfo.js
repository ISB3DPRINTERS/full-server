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

import supabase from './supabase.mjs';

export const changekey = async (grade, newinfo) => {
  let { data: info, error } = await supabase
    .from('studentinfo')
    .update({ key: newinfo })
    .eq('grade', grade);
  if (error) {
    console.log('supabase error');
  }
};
