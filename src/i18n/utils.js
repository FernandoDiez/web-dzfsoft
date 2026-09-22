export const locales= ["en", "es"];
export const defaultLocale = "es";

export const getLang = (url) => {
	let lang = url.split("/")[1];
	lang = locales.includes(lang) ? lang : defaultLocale;
	console.log("Detected language:", lang);
	return lang;
};