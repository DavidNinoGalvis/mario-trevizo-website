import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
