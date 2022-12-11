import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DownloadSVG from './SVG/DownloadSVG';
import { motion as m } from 'framer-motion'
import ScrollspyNav from "react-scrollspy-nav";
import Link from 'next/link'

export default function Example() {

  const navigation = [
    { name: 'Home', href: '#Home', current: false },
    { name: 'About', href: '#About', current: false },
    { name: 'Skills', href: '#Skills', current: false },
    { name: 'Testimonials', href: '#Testimonials', current: false },
    { name: 'Projects', href: '#Projects', current: false },
    { name: 'Contact', href: '#Contact', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const ac = 'bg-blue-700 text-white'
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}

            className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative  flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-blue-500 inline-flex items-center justify-center rounded-md p-2  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="sm:flex flex-shrink-0 items-center sm:justify-self-start sm:mx-0 mx-auto">
                <Link className='font text-2xl' href='/'>

                  <span className='text-gray-700'>&lt;</span>
                  <span className='text-blue-700'>
                    AE
                  </span>
                  <span className='text-gray-700'>/&gt;</span>
                </Link>
              </div>
              <ScrollspyNav
                scrollTargetIds={['Home', 'About', 'Skills', 'Testimonials', 'Projects', 'Contact']}
                activeNavClass='activeNavClass'
                scrollDuration="500"
                headerBackground="true"

              >
                <div className="hidden sm:ml-6 sm:block justify-self-center">
                  <div className="flex space-x-4">

                    {navigation.map((item) => (
                      <a
                        onClick={() => (true)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-700 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white ease-in-out transition duration-100',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>
                </div>
              </ScrollspyNav>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="animate-pulse hover:animate-none hidden sm:block bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Download CV
                </button>


                <button className="animate-pulse hover:animate-none sm:hidden flex text-lg items-center justify-center bg-transparent text-blue-500 font-semibold  py-2 px-4 border border-blue-500 hover:border-blue-700 hover:text-blue-700 rounded-lg">
                  <DownloadSVG className={'fill-blue-500 mr-1 '} width={22} ></DownloadSVG>
                  CV
                </button>


              </div>
            </div>
          </m.div>

          <Disclosure.Panel className="sm:hidden">
            <div className="text-center space-y-1 px-2 pt-2 pb-3">
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