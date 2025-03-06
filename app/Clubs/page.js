/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

const people = [
  {
    name: 'OLAS',
    imageUrl: '/OLASLOGO.png',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-base-100 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Featured Club-Sites
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Click on a club to get taken to it&#39;s own personal website!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <Link
              href="/"
              key={person.name}
              id={person.name}
              className="rounded-2xl bg-base-300 hover:scale-105 ease-in-out btn-ghost transition px-8 py-10"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full md:size-56"
              />
              <h3 className="mt-6 text-3xl/7 font-semibold tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
