import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // 1. Standard Browser Metadata
  title: "Efatharc Workspace | Built by YourName",
  description: "An interactive radial orbital timeline canvas engineered by YourName.",
  
  // 2. Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Efatharc Workspace",
    description: "Hey! Check out my interactive radial timeline project. Built with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://efatha.vercel.app", // Change to your actual Vercel URL once live
    siteName: "Efatharc",
    images: [
      {
        url: "/efatha.jpg", // Kept consistent
        width: 1200,
        height: 630,
        alt: "Efatharc Interactive Timeline Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 3. X (Formerly Twitter) Card
  twitter: {
    card: "summary_large_image",
    title: "Efatharc Workspace",
    description: "An interactive orbital timeline canvas engineered by YourName.",
    images: ["/efatha.jpg"], // Kept consistent
  },
};