import { Inter } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import Header from "../components/layouts/Header";
import Header1 from "../components/layouts/Header1";
import Footer from "../components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akij Group",
  description: "Quality First",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {/* <Header1 /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
