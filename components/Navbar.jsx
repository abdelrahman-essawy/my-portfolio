import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import DownloadSVG from './SVG/DownloadSVG';
import { motion as m } from 'framer-motion'



export default function Example({ navigation }) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-blue-700 transition-opacity duration-150 ease-in rounded-md opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="items-center flex-shrink-0 mx-auto sm:flex sm:justify-self-start sm:mx-0">
                <Link className='text-2xl' href='#Home'>

                  <span className='text-gray-700'>&lt;</span>
                  <span className='text-blue-700'>
                    AE
                  </span>
                  <span className='text-gray-700'>/&gt;</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block justify-self-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-blue-700 text-white' : 'text-blue-700 opacity-70 hover:opacity-100 transition-opacity duration-150 ease-in      ',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  target={'_blank'}
                  href='/Abdelrahman Essawy Resume.pdf'
                  download={'Abdelrahman Essawy Resume.pdf'}
                >
                  <button
                    type="button"
                    className="hidden px-4 py-2 font-semibold text-blue-500 bg-transparent border border-blue-500 rounded animate-pulse hover:animate-none sm:block hover:bg-blue-500 hover:text-white hover:border-transparent">


                    Download CV
                  </button>
                </Link>

                <Link
                  target={'_blank'}
                  href='/Abdelrahman Essawy Resume.pdf'
                  download={'Abdelrahman Essawy Resume.pdf'}
                >
                  <button className="flex items-center justify-center px-4 py-2 text-lg font-semibold text-blue-500 bg-transparent border border-blue-500 rounded-lg animate-pulse hover:animate-none sm:hidden hover:border-blue-700 hover:text-blue-700">

                    <DownloadSVG className={'fill-blue-500 mr-1 '} width={22} ></DownloadSVG>

                    CV
                  </button>

                </Link>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-700 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}