import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldenRibbonBackground from "@/components/GoldenRibbonBackground";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "GlobalTex Exports – Manufacturing, Sourcing & Export",
  description:
    "Premier manufacturer and global exporter delivering high-quality home textiles, apparel, fabrics & yarns, leather goods, and handicrafts to worldwide markets.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-amber-400/30 selection:text-amber-600 relative overflow-x-hidden">
        <ThemeProvider>
          {/* Dynamic Water-Style Golden Ribbon & White Calacatta Marble Background */}
          <GoldenRibbonBackground />

          {/* Global Navigation Header */}
          <Navbar />

          {/* Page Content */}
          <div className="relative z-10 flex flex-col min-h-screen pt-20">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
