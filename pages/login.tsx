import type { NextPage } from "next";
import { useState } from "react";
import Header from "components/Header";
import { relative } from "path/posix";

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
            <div className="flex flex-col w-full xl:w-1/4 justify-center lg:items-start overflow-y-hidden">
              {!passwordRecovery && (
                <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <div className="css-4302v8">
                      <div
                        className="css-j7bzn4"
                        style={{
                          position: "relative",
                          top: "20px",
                          left: "10px",
                          zIndex: "1",
                          width: 0,
                          height: 0,
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className=""
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                        </svg>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full p-4 pl-10 text-gray-500 font-bold leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        id="emailaddress"
                        type="text"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="css-a0kk5w">
                      <div
                        className="css-j7bzn4"
                        style={{
                          position: "relative",
                          top: "20px",
                          left: "10px",
                          zIndex: "1",
                          width: 0,
                          height: 0,
                        }}
                      >
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
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                        </svg>
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full p-4 pl-10 text-gray-500 font-bold leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        id="password"
                        type="password"
                        placeholder="Senha"
                      />
                      <div
                        className="css-iakt80"
                        style={{
                          position: "relative",
                          top: "-35px",
                          left: "285px",
                          zIndex: "1",
                          width: 0,
                          height: 0,
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="css-11p1vtb"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between">
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="remember" className="pl-2">Lembrar-me</label>
                    </div>
                    <div>
                      <a href="forgot-password">Esqueceu sua senha?</a>
                    </div>
                  </div>


                  <div className="flex items-center justify-between pt-4">
                    <button
                      className="bg-red-600 w-80 h-16 text-white uppercase font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                      type="button"
                    >
                      Entrar
                    </button>
                  </div>
                  <p className="flex flex-row justify-center pt-5 text-white">
                    Precisa de ajuda?
                    <a href="malito:test@xgrow.com" className="pl-2">Fale com o suporte</a>
                  </p>
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
