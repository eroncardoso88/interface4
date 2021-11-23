import type { NextPage } from "next";
import { useState } from "react";
import Header from "components/Header";

const Home: NextPage = () => {
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  return (
    <>
      <main className="leading-normal tracking-normal text-red-400 bg-black h-screen">
        <div className="h-full">
          <h3 className="text-gray-500"></h3>
          {/* Main */}
          <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Col */}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden flex justify-center">
              <p>Espaço para imagem</p>
              {/* <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="macbook.svg" /> */}
            </div>

            {/* Right Col */}
            <div className="flex flex-col w-full xl:w-1/5 justify-center lg:items-start overflow-y-hidden">
              {!passwordRecovery && (
                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                  <div className="chakra-input__group css-4302v8">
                      <div className="chakra-input__left-element css-j7bzn4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-13otjrl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                      </svg>
                      </div>
                    <input
                      className="shadow appearance-none border rounded w-full p-3 text-gray-500 font-bold leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      id="emailaddress"
                      type="text"
                      placeholder="Email"
                      required
                    />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full p-3 text-gray-500 font-bold leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      id="password"
                      type="password"
                      placeholder="Senha"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      className="bg-red-600 from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      type="button"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Footer */}
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              <a
                rel="norereferrer"
                className="text-gray-500 no-underline hover:no-underline mr-1"
                href="#"
              >
                &copy; Nome do cliente
              </a>
              - Criado por
              <a
                rel="norereferrer"
                className="text-gray-500 no-underline hover:no-underline ml-1"
                href="https://www.xgrow.com"
              >
                XGrow
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
