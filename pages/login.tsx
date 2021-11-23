import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <main className="flex flex-row h-screen overflow-hidden">
        <div className="w-44 h-screen flex flex-col bg-white shadow-xl">
            <div className="mb-4 text-xl text-red-600 font-bold p-2">Gmail</div>
            <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                    <ul className="text-gray-500 text-xs font-semibold">
                        <li
                            className="border-l-4 border-red-500 p-2 pl-4 hover:text-red-500 cursor-pointerhover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="text-red-500 flex items-center">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2"
                                        strokeLinecap="round" >
                                        <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                                        <path
                                            d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
                                    </svg>
                                </span>
                                <span className="flex-grow">Inbox</span>
                                <span className="bg-gray-200 px-1 rounded-sm float-right">3</span>
                            </a>
                        </li>
                        <li className="p-2 pl-5 hover:text-red-500 cursor-pointer hover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="flex">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                        strokeWidth="2" strokeLinecap="round" >
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg>
                                </span>
                                Starred
                            </a>
                        </li>
                        <li className="p-2 pl-5 hover:text-red-500 cursor-pointer hover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="flex">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                        strokeWidth="2" strokeLinecap="round" >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </span>
                                Snoozed
                            </a>
                        </li>
                        <li className="p-2 pl-5 hover:text-red-500 cursor-pointer overflow-auto hover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="flex">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                        strokeWidth="2" strokeLinecap="round" >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </span>
                                Important
                            </a>
                        </li>
                        <li className="p-2 pl-5 hover:text-red-500 cursor-pointer hover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="flex">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                        strokeWidth="2" strokeLinecap="round" >
                                        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34">
                                        </path>
                                        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                                    </svg>
                                </span>
                                Sent
                            </a>
                        </li>
                        <li className="p-2 pl-5 hover:text-red-500 cursor-pointer hover:bg-gray-100">
                            <a rel="noreferrer" href="#" className="flex">
                                <span className="mr-1">
                                    <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                        strokeWidth="2" strokeLinecap="round" >
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
                                        <path d="M13 3v6h6" /></svg>
                                </span>
                                Drafts
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 p-4 max-h-44 overflow-auto">
                    <h3 className="font-semibold text-sm mb-2">Chat</h3>
                    <ul className="space-y-2">
                        <li className="rounded-full">
                            <a rel="noreferrer" href="#" className="flex flex-row items-center">
                                <div className="avatar rounded-full w-5 h-5 bg-red-300 relative">
                                    {/* <img className="rounded-full" src="https://placekitten.com/200/200" alt="kitty kitty"> */}
                                    <div className="absolute bg-green-500 rounded-full w-2 h-2 bottom-0 right-0"></div>
                                </div>
                                <span className="ml-2 text-xs">Kitty Kat</span>
                            </a>
                        </li>
                        <li className="rounded-full">
                            <a rel="noreferrer" href="#" className="flex flex-row items-center">
                                <div className="avatar rounded-full w-5 h-5 bg-red-300 relative">
                                    {/* <img className="rounded-full" src="https://placekitten.com/200/201" alt="kitty kitty"> */}
                                </div>
                                <span className="ml-2 text-xs">Jane Kitty</span>
                            </a>
                        </li>
                        <li className="rounded-full">
                            <a rel="noreferrer" href="#" className="flex flex-row items-center">
                                <div className="avatar rounded-full w-5 h-5 bg-red-300 relative">
                                    {/* <img className="rounded-full" src="https://placekitten.com/200/205" alt="kitty kitty"> */}
                                </div>
                                <span className="ml-2 text-xs">Witty Kat</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex-grow flex flex-col h-screen pt-12 relative">
            <div className="flex flex-row h-12 p-2 border-b-2 shadow-sm bg-white absolute right-0 left-0 top-0">
                <div className="w-64">
                    <input type="text" placeholder="search"
                        className="rounded-r-full w-full rounded-l-full focus:outline-none ring-1 ring-gray-200 focus:ring-red-200 p-1 pl-4 text-xs"/>
                </div>
                <div className="flex-grow"></div>
                <div className="menu space-x-2 flex flex-row items-center space-x-2">
                    <a rel="noreferrer" href="#" className="settings" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="rgba(107, 114, 128, 255)" strokeWidth="2" strokeLinecap="round"
                            >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg>
                    </a>
                    <a rel="noreferrer" href="#" className="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="rgba(107, 114, 128, 255)" strokeWidth="2" strokeLinecap="round"
                            >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </a>
                    <a rel="noreferrer" href="#" className="rounded-full w-6 h-6">
                        {/* <img src="https://placekitten.com/200/210" alt="kitty" className="rounded-full"> */}
                    </a>
                </div>

            </div>
            <div className="flex flex-row flex-grow">
                <div className="list w-80 shadow h-screen overflow-auto">
                    <div className="inbox-nav text-xs text-center font-semibold text-gray-400 flex flex-row items-stretch">
                        <span className="w-6 border-b-2 border-gray-200"></span>
                        <a rel="noreferrer" href="#"
                            className="p-2 text-gray-700 flex-grow border-b-2 border-red-500 box-border block">Primary</a>
                        <a rel="noreferrer" href="#"
                            className="p-2 hover:text-gray-700 flex-grow hover:border-red-500 border-b-2 border-gray-200 border-collapse block">Social</a>
                        <a rel="noreferrer" href="#"
                            className="p-2 hover:text-gray-700 flex-grow hover:border-red-500 border-b-2 border-gray-200 border-collapse block">Promotions</a>
                        <span className="w-6 border-b-2 border-gray-200"></span>
                    </div>
                    <div className="options p-2 flex flex-row items-center border-b-2 border-gray-200">
                        <input type="checkbox" name="checkall" id="checkall"/>
                        <span className="flex-grow"></span>
                        <span className="text-gray-500">
                            <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)" strokeWidth="2"
                                strokeLinecap="round" >
                                <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                        </span>
                        <span className="text-gray-500">
                            <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)" strokeWidth="2"
                                strokeLinecap="round" >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </span>
                    </div>
                    <div className="email-list pb-12">
                        <div
                            className="email-item bg-gray-100 hover:bg-gray-100 cursor-pointer flex flex-col p-3 border-b-2 border-gray-200">
                            <div className="flex flex-row items-center text-xs text-gray-400">
                                <input type="checkbox" name="c" id=""/>
                                <p className="pl-2 flex-grow">Dropbox <span
                                        className="ml-2 p-1 bg-red-200 rounded font-semibold text-red-500">New</span></p>
                                <p>Apr 25</p>
                            </div>
                            <div className="pl-5 mt-1">
                                <h2 className="text-xl font-semibold">Dropbox and Paper, together</h2>
                                <p className="text-xs mt-1 text-gray-700">Make working together easier. Dropbox paper is
                                    collaborative together in one place.</p>
                            </div>
                        </div>
                        <div
                            className="email-item hover:bg-gray-100 cursor-pointer flex flex-col p-3 border-b-2 border-gray-200">
                            <div className="flex flex-row items-center text-xs text-gray-400">
                                <input type="checkbox" name="c" id=""/>
                                <p className="pl-2 flex-grow">Daily UI <span
                                        className="ml-2 p-1 bg-red-200 rounded font-semibold text-red-500">New</span></p>
                                <p>Apr 20</p>
                            </div>
                            <div className="pl-5 mt-1">
                                <h2 className="text-xl font-semibold">Happy Easter and Happy Designing</h2>
                                <p className="text-xs mt-1 text-gray-700">News: 16 new Pins! Check the news.</p>
                            </div>
                        </div>
                        <div
                            className="email-item hover:bg-gray-100 cursor-pointer flex flex-col p-3 border-b-2 border-gray-200">
                            <div className="flex flex-row items-center text-xs text-gray-400">
                                <input type="checkbox" name="c" id=""/>
                                <p className="pl-2 flex-grow">Dropbox <span
                                        className="ml-2 p-1 bg-red-200 rounded font-semibold text-red-500">New</span></p>
                                <p>Apr 25</p>
                            </div>
                            <div className="pl-5 mt-1">
                                <h2 className="text-xl font-semibold">Dropbox and Paper, together</h2>
                                <p className="text-xs mt-1 text-gray-700">Make working together easier. Dropbox paper is
                                    collaborative together in one place.</p>
                            </div>
                        </div>
                        <div
                            className="email-item hover:bg-gray-100 cursor-pointer flex flex-col p-3 border-b-2 border-gray-200">
                            <div className="flex flex-row items-center text-xs text-gray-400">
                                <input type="checkbox" name="c" id=""/>
                                <p className="pl-2 flex-grow">Daily UI <span
                                        className="ml-2 p-1 bg-red-200 rounded font-semibold text-red-500">New</span></p>
                                <p>Apr 20</p>
                            </div>
                            <div className="pl-5 mt-1">
                                <h2 className="text-xl font-semibold">Happy Easter and Happy Designing</h2>
                                <p className="text-xs mt-1 text-gray-700">News: 16 new Pins! Check the news.</p>
                            </div>
                        </div>
                        <div
                            className="email-item hover:bg-gray-100 cursor-pointer flex flex-col p-3 border-b-2 border-gray-200">
                            <div className="flex flex-row items-center text-xs text-gray-400">
                                <input type="checkbox" name="c" id=""/>
                                <p className="pl-2 flex-grow">Dropbox <span
                                        className="ml-2 p-1 bg-red-200 rounded font-semibold text-red-500">New</span></p>
                                <p>Apr 25</p>
                            </div>
                            <div className="pl-5 mt-1">
                                <h2 className="text-xl font-semibold">Dropbox and Paper, together</h2>
                                <p className="text-xs mt-1 text-gray-700">Make working together easier. Dropbox paper is
                                    collaborative together in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow shadow flex flex-col h-screen overflow-auto">
                    <div className="header bg-white p-4">
                        <div className="flex flex-row text-xs text-gray-400 items-center mb-2">
                            <p className="flex-grow text-sm">Apr 16, 1:20pm</p>
                            <svg className="stroke-current text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 24 24" fill="rgba(239, 68, 68, 255)"
                                stroke="rgba(107, 114, 128, 255)" strokeWidth="2" strokeLinecap="round"
                                >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <svg className="stroke-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                strokeWidth="2" strokeLinecap="round" >
                                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                            </svg>
                            <svg className="stroke-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(107, 114, 128, 255)"
                                strokeWidth="2" strokeLinecap="round" >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center py-2">
                            <div className="avatar rounded-full mr-2 bg-black w-9 h-9"></div>
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <h2 className="font-bold text-black">Dropbox</h2>
                                    <p className="text-xs text-gray-400 ml-2">(info@dropbox.com)</p>
                                </div>
                                <p className="text-xs text-gray-400">to me</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 flex-grow">

                    </div>
                </div>
            </div>
        </div>
          </main>
      </>
  )
}

export default Home
