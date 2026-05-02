import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/components/ProgressBar";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adidya Abimanyu - Portfolio",
  description: "Computer Science Student & Web Developer",
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
          <Suspense fallback={null}>
            <ProgressBar />
          </Suspense>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
              <main>{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
