export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function spanishClassName(lang, className) {
  return lang === 'es' ? ` ${className}` : '';
}