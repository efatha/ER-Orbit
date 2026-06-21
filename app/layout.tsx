import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radial Orbital Timeline Demo",
  description: "Interactive UI canvas component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}