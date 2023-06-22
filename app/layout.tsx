import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

import { GlobalContextProvider } from "./context/store";

export const metadata = {
  title: "Naty",
  description: "Projeto desenvolvido para Vaga de Desenvolvedor FrontEnd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico" />
      <body suppressHydrationWarning={true}>
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
