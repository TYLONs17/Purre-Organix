import React from "react"
import OrganixLogo from "../icons/OrganixLogo"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {


    return (
        <footer className="text-green-200 dark:bg-green-950 bg-green-200  border-t-4 dark:border-green-400 border-green-950 rounded-t-lg shadow-top-md md:shadow-top-lg dark:shadow-green-300 shadow-green-800 ">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium dark:text-green-200 items-center md:justify-start justify-center text-green-950">
                        <OrganixLogo /> 
                    </a>
                    <p className="mt-2 text-sm dark:text-green-400 text-green-700 italic font-bold">Healthy living <br /> (+) <br /> A pure taste of nature</p>
                </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold md:text-xl dark:text-green-200 text-green-950 tracking-widest text-sm mb-3">STORE</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Shop All</a>
                            </li>
                            <li>
                                <a className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Shipping & Returns</a>
                            </li>
                            <li>
                                <a className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Store Policy</a>
                            </li>
                            <li>
                                <a className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">FAQ</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold md:text-xl dark:text-green-200 text-green-950 tracking-widest text-sm mb-3">ADDRESS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">..</p>
                            </li>
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">...</p>
                            </li>
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">...</p>
                            </li>
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">....</p>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold md:text-xl dark:text-green-200 text-green-950 tracking-widest text-sm mb-3">OPENNING HOURS</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Mon-Fri: 7am - 6pm</p>
                            </li>
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Sataday: 8am - 5pm</p>
                            </li>
                            <li>
                                <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 hover:text-green-500">Sunday: 8am - 4pm</p>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold md:text-xl dark:text-green-200 text-green-950 tracking-widest text-sm mb-3">GET IT FRESS</h2>
                        <nav className="list-none mb-10">
                            <p className="dark:text-green-400 text-green-800 dark:hover:text-green-300 text-sm mb-1">Sign-up for our News Letter</p>
                            <form>
                                <input type="email" placeholder="Email" className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" />
                                <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 shadow-lg">
                                    Subscribe
                                </button>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-green-300 dark:bg-green-600">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="dark:text-green-950 text-green-500 font-bold text-lg text-center sm:text-left">&copy; 2024 Purre Organix —
                        <a href="https://github.com/JALES25" rel="noopener noreferrer" className="text-green-400 ml-1 font-light text-sm italic" target="_blank">@TYLONs17</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="dark:text-green-950  text-green-500 hover:text-blue-700 dark:hover:text-blue-700 active:opacity-80">
                            <FaFacebook className="w-8 h-8 " />
                        </a>
                        <a className="ml-3 dark:text-green-950  text-green-500 hover:text-blue-900 dark:hover:text-blue-900 active:opacity-80">
                            <FaTwitter className="w-8 h-8 " />
                        </a>
                        <a className="ml-3 dark:text-green-950  text-green-500 hover:text-purple-800 dark:hover:text-purple-800 active:opacity-80">
                            <FaInstagram className="w-8 h-8 " />
                        </a>
                        {/* <a className="ml-3 dark:text-green-950  text-green-500 hover:text-blue-600 dark:hover:text-blue-600 active:opacity-80">
                            <FaLinkedin className="w-8 h-8 " />
                        </a> */}
                    </span>
                </div>
            </div>
        </footer>
    )
}