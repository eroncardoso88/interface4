import type { NextPage } from "next";
import { fakeApi } from "fakeapi";
import { getStaticProps } from "next";
import Header from "components/Header";
import { IStyle } from 'types/theme'

export async function getStaticProps() {
  const apiCall = new fakeApi()
  const res = await apiCall.getStyles();
  return {
    props: {
      style: res,
    },
  };
}

interface IFourHundred {
  style: IStyle;
}

const FourHundred: NextPage = ({ style }: IFourHundred) => {
  const {  
    backgroundColor,
    backgroundGradientDegree,
    backgroundGradientFirst,
    backgroundGradientSecond,
    backgroundImageUrl,
    backgroundType,
    bannerUrl,
    borderRadius,
    createdAt,
    description,
    faviconUrl,
    footer,
    inputColor,
    keywords,
    logoUrl,
    platformId,
    platformName,
    primaryColor,
    secondaryColor,
    supportEmail,
    supportNumber,
    tertiaryColor,
    textColor,
    title,
    updatedAt } = style
  return (
    <>
      <main
        className="leading-normal tracking-normal h-screen"
        style={{backgroundColor}}
      >
        <div className="h-full">
          <Header {...style}/>
          {/* Main */}
          <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Col */}
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center md:text-left"
              style={{color: primaryColor}}
              >
                Não encontrado
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
              style={{color: secondaryColor}}
              >
                404
              </p>

              <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
              style={{backgroundColor: tertiaryColor}}
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-500 py-2 font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    Newsletter
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    id="emailaddress"
                    type="text"
                    placeholder="email@exemplo.com"
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
            </div>

            {/* Right Col */}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden flex justify-center">
              <p>Espaço na direita para conteúdo</p>
              {/* <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="macbook.svg" /> */}
            </div>

            <div className="mx-auto md:pt-16">
              <p className="text-gray-400 font-bold pb-8 lg:pb-6 text-center"
              style={{color: textColor}}
              >
                Outros Links:
              </p>
              <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                <a
                  rel="norereferrer"
                  className="inline-block text-gray-500 no-underline hover:text-red-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://twitter.com/intent/tweet?url=#"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    style={{
                      fill: primaryColor}}
                  >
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                  </svg>
                </a>
                <a
                  rel="norereferrer"
                  className="inline-block text-gray-500 no-underline hover:text-red-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  <svg
                    className="fill-current h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    style={{
                      fill: primaryColor}}
                  >
                    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
              <a
                rel="norereferrer"
                className="text-gray-500 no-underline hover:no-underline mr-1"
                href="#"
                style={{color: primaryColor}}
              >
                &copy; {title}
              </a>
              <span style={{color: textColor}}>- Criado por</span>
              <a
                rel="norereferrer"
                className="text-gray-500 no-underline hover:no-underline ml-1"
                href="https://www.xgrow.com"
                style={{color: primaryColor}}
              >
                XGrow
              </a>
              <p style={{color: primaryColor}}>{footer}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FourHundred;
