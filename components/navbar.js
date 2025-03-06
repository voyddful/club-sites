'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Clubs', href: '/Clubs', current: false },
  { name: 'About', href: '/About', current: false },
  { name: 'Extra', href: '/Extra', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  let pathname = usePathname()

  switch (pathname) {
    case '/':
      navigation[0].current = true
      navigation[1].current = false
      navigation[2].current = false
      navigation[3].current = false
      break
    case '/Clubs':
      navigation[0].current = false
      navigation[1].current = true
      navigation[2].current = false
      navigation[3].current = false
      break
    case '/About':
      navigation[0].current = false
      navigation[1].current = false
      navigation[2].current = true
      navigation[3].current = false
      break
    case '/Extra':
      navigation[0].current = false
      navigation[1].current = false
      navigation[2].current = false
      navigation[3].current = true
      break
  }
  return (
    <Disclosure as="nav" className="bg-base-300 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                className="flex hover:scale-125 transition-all ease-in-out duration-300"
                href="/"
              >
                <Image
                  alt="Clubsites Icon"
                  src="/clubsites_icon.png"
                  width={32}
                  height={32}
                  className="h-12 md:h-8 w-auto"
                />
                <div className="absolute text-blue-600 inset-y-0 hidden sm:flex items-center text-xl sm:static sm:inset-auto ml-2 sm:pr-2">
                  <h1>Club-Sites</h1>
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
