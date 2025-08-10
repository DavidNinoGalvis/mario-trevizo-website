"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import es from "@/components/messages/es.json";
import en from "@/components/messages/en.json";

type Lang = "es" | "en";
type Messages = typeof es;

interface LanguageContextType {
  language: Lang;
  messages: Messages;
  setLanguage: (l: Lang) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Lang>("es");

  // Inicializa desde localStorage o desde el browser locale
  useEffect(() => {
    try {
      const stored = localStorage.getItem("mt_lang");
      if (stored === "es" || stored === "en") {
        setLanguageState(stored);
      } else {
        const nav = navigator?.language ?? "es";
        setLanguageState(nav.startsWith("en") ? "en" : "es");
      }
    } catch (e) {
      // en entornos server-safe no hacemos nada
    }
  }, []);

  // Persiste en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mt_lang", language);
    } catch (e) {}
  }, [language]);

  const setLanguage = (l: Lang) => setLanguageState(l);
  const toggleLanguage = () => setLanguageState((prev) => (prev === "es" ? "en" : "es"));

  const messages = language === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ language, messages, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}