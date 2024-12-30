import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppinsFont = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Array of multiple weights
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Habitropolis",
  description: "An App which helps you achieve your goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} bg-yellow-50`}
      >
        {children}
      </body>
    </html>
  );
}
