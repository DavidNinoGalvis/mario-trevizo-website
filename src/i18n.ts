// src/i18n.ts
export const getBrowserLocale = (acceptLanguage?: string) => {
  if (!acceptLanguage) return 'en'; // idioma por defecto

  const lang = acceptLanguage.split(',')[0].split('-')[0];
  return lang === 'es' ? 'es' : 'en';
};
