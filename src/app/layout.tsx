import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/components/ProgressBar";
import PageTransition from "@/components/animations/PageTransition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Adidya Abimanyu",
  description: "Computer Science Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar /> {/* ← TAMBAH INI */}
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
