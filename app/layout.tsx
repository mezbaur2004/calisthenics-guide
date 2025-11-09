import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return(
        <html lang="en">
            <body className="bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white font-sans">
            <Header />
            <main className="min-h-screen max-w-5x1 mx-auto p-6">{children}</main>
            <Footer />
            </body>
        </html>
    );
}