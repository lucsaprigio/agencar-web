import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agencar",
  description: "Agende suas aulas de forma mais fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-gray-50 to-gray-300 ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
