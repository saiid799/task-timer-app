import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Timer App",
  description: "A modern task timer application built with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
