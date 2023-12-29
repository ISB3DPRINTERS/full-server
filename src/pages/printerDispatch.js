'use server';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const printer1 = baseUrl+'8001';
  const printer2 = baseurl+'8002'
  const printer3 = baseurl+'8003'
  const printer4 = baseurl+'8004'
  return (
    <div>
      <div className="flex p-2 px-4 text-xl bg-black text-white font-bold justify-between">
        <Link href="/" className="hover:text-purple-400">
          ISB3DPRINTERS: Printer Dispatch
        </Link>
      </div>
      <h2>Make sure to check each printer for avalibility</h2>
      <p class="text-gray-500 dark:text-gray-400">
        <a
          href="#"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Printer #1
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="{http://www.w3.org/2000/svg}"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </p>

      <br></br>
      <p class="text-gray-500 dark:text-gray-400">
        <a
          href="#"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Printer #2
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </p>
      <br></br>
      <p class="text-gray-500 dark:text-gray-400">
        <a
          href="#"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Printer #3
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </p>
      <br></br>
      <p class="text-gray-500 dark:text-gray-400">
        <a
          href="#"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Printer #4
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </p>
    </div>
  );
}
