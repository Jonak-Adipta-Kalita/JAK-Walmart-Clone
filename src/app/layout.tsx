import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
    title: "JAK Walmart Clone",
    description: "Following Sonny's Build!!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
