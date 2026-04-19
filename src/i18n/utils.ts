import { ui, defaultLang, type Lang } from "./translations";

const basePath = trimTrailingSlash(import.meta.env.BASE_URL);

function trimTrailingSlash(value: string) {
  if (value === "/") return "";
  return value.replace(/\/+$/, "");
}

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

function stripBasePath(pathname: string) {
  if (!basePath) return pathname || "/";
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }
  return pathname || "/";
}

function withBasePath(pathname: string) {
  const cleanPath = trimSlashes(pathname);
  const fullPath = cleanPath ? `${basePath}/${cleanPath}` : basePath || "/";
  return fullPath.replace(/\/{2,}/g, "/") || "/";
}

export function getPathWithoutBase(url: URL | string) {
  const pathname = typeof url === "string" ? url : url.pathname;
  return stripBasePath(pathname);
}

export function getPathWithoutLocale(url: URL | string) {
  const pathname = getPathWithoutBase(url);
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] in ui) {
    return segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";
  }

  return pathname;
}

export function getLang(url: URL | string): Lang {
  const pathname = getPathWithoutBase(url);
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
  const segments = [] as string[];

  if (lang !== defaultLang) {
    segments.push(lang);
  }

  const cleanPath = trimSlashes(path);
  if (cleanPath) {
    segments.push(cleanPath);
  }

  return withBasePath(segments.join("/"));
}

export function getAssetPath(path: string) {
  return withBasePath(path);
}
