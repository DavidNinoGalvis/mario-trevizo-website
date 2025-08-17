'use client';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from '@/components/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
    </LanguageProvider>
  );
}
