const pathnames = {
  "about-us": "quienes-somos",
  "contact": "contacto",
  "join-us": "sumate",
  "news": "novedades",
  "": "",
}

export function getTranslatedPathname(lang, path) {
  return lang === 'es' ? `/${lang}/${pathnames[path]}` : `/${lang}/${path}`;
}