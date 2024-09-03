import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <nav class="navbar w-full sticky top-[0] ">
                <div class=" flex flex-wrap items-center justify-between p-4 py-4 rounded-2xl bg-[#fafafa2a]">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                        <span class="self-center md:text-2xl text-xl font-bold whitespace-nowrap text-black">SMP</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={'/'}><p class="mr-5 hover:text-gray-900">Home</p></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">About</p></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/projects'}><p class="mr-5 hover:text-gray-900">Projects</p></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/gallery'}><p class="mr-5 hover:text-gray-900">Gallery</p></NavLink>
                            </li>
                            {/* <li>
                                <NavLink to={'/services'}><p class="mr-5 hover:text-gray-900">Services</p></NavLink>
                            </li> */}
                        </ul>
                    </div> 
                </div>
            </nav>

            {/* <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Still Motion Pictures</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                        <NavLink to={'/about'}><p class="mr-5 hover:text-gray-900">First Link</p></NavLink>
                    </nav>
                </div>
            </header> */}
        </>
    )
}

export default Navbar
