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
import { useQuery } from 'react-query';
import { fetchMovies } from 'src/utils/react-query';
import Image from 'next/image';
import supabase from '../lib/supabase.mjs';

const MovieList = () => {
  const { data: movies, isLoading, isError } = useQuery('movies', fetchMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-purple-400 text-white font-bold justify-between">
        <div>Popular Movies</div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 md:gird-cols-3 lg:grid-cols-4 p-2 md:p-4 lg:p-6 md:gap-4 lg:gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="mb-4 md:mb-0 lg:mb-0">
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
            />
            <div className="flex justify-between mx-1">
              <span className="font-bold text-md">{movie.title}</span>
              <span className="text-gray-800">
                {' '}
                ({movie.original_language})
              </span>
            </div>
            <div
              className="flex justify-between mx-1 mb-2"
              style={{ fontSize: '12px' }}
            >
              <span className=""> Released: {movie.release_date}</span>
              <span className=""> Rating: {movie.vote_average}</span>
            </div>
            <div className="text-sm">{movie.overview}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
