import type { Metadata } from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
