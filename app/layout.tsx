import { ReactNode } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prompt Share",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout