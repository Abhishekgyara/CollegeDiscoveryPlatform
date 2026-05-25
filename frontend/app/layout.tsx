import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";

import { CompareProvider } from "@/context/compare-context";
import { SavedProvider } from "@/context/saved-context";
import { AuthProvider } from "@/context/auth-context";

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Discover and compare colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
<AuthProvider>
  <SavedProvider>
    <CompareProvider>
      <Navbar />
      {children}
    </CompareProvider>
  </SavedProvider>
</AuthProvider>

</body>
    </html>
  );
}