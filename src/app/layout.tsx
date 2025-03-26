import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "JAK Walmart Clone",
    description: "Following Sonny's Build!!",
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="flex">
                    {modal}
                    {children}
                </div>
            </body>
        </html>
    );
}
