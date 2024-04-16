import { Inter } from "next/font/google";
import "./globals.css";
import "@picocss/pico";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="app/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="app/favicon.ico" type="image/x-icon"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}