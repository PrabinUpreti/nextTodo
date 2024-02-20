import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToDo App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
          <main className="mt-8">
            {children}
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
