import { ui, defaultLang, type Lang } from "./translations";

export function getLang(url: URL | string): Lang {
  const pathname = typeof url === "string" ? url : url.pathname;
  const [, lang] = pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string = "") {
  const base = lang === defaultLang ? "" : `/${lang}`;
  return `${base}/${path}`.replace(/\/{2,}/g, "/");
}
