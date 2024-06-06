import type { Metadata } from "next";
import { Fira_Code, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Source_Code_Pro } from "next/font/google";

const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})
export const metadata: Metadata = {
  title: "e/acc -> et",
  description: "build fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
