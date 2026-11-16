import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kzyrell Dela Paz — Engineer, developer, builder",
  description: "The personal portfolio of Kzyrell Dela Paz: useful systems at the intersection of web, AI, cloud, and hardware.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
