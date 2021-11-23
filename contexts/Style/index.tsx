import { createContext, useState, FunctionComponent, useContext } from "react";
import { fakeApi } from "fakeapi";
import { GetStaticProps } from 'next';

export async function GetStaticProps() {
  const res = await fakeApi.getStyles();

  return {
    props: {
      res,
    },
  };
}

interface IStyleContext {
  showAlert: boolean;
  message: string;
  handleAlert: (message: string) => void;
  closeAlert: () => void;
  context: unknown;
}

interface IStyleProvider {
  data: unknown;
}

const StyleContext = createContext<IStyleContext | null>(null);

export const StyleProvider: FunctionComponent<IStyleProvider> = ({
  children,
  data,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [context] = useState(data);

  const handleAlert = (message: string) => {
    setMessage(message);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <StyleContext.Provider
      value={{
        showAlert,
        message,
        handleAlert,
        closeAlert,
        context,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = (): IStyleContext => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a StyleProvider");
  }
  return context;
};
