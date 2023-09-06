import "./globals.css";
import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolain",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sofia.className}>
        <main>
          <section className="flex padding-x mt-8">
            <Sidebar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
