import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Your Name - Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Computer Science Student & ML Researcher specializing in Image Processing, Deep Learning, and Computer Vision",
  keywords: [
    "Portfolio",
    "Computer Science",
    "Machine Learning",
    "Deep Learning",
    "Image Processing",
    "Computer Vision",
    "AI Researcher",
    "Your Name",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name - Portfolio",
    description:
      "Computer Science Student & ML Researcher specializing in Image Processing and Deep Learning",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Computer Science Student & ML Researcher",
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>  {/* ← Tambah ini */}
      <body className={inter.className} suppressHydrationWarning>  {/* ← Dan ini */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <div className="relative min-h-screen flex flex-col">
              <div className="fixed inset-0 -z-10">
                <div className="hero-gradient" />
                <div className="grid-background opacity-[0.02]" />
                <div className="noise-overlay" />
              </div>

              <Header />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
