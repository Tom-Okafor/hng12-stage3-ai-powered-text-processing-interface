export function returnSpeechLang(code) {
  let speechlang;
  switch (code) {
    case "en":
      speechlang = "en-US";
      break;
    case "fr":
      speechlang = "fr-FR";
      break;
    case "es":
      speechlang = "es-ES";
      break;
    case "ru":
      speechlang = "ru-RU";
      break;
    case "pt":
      speechlang = "pt-BR";
      break;
    case "tr":
      speechlang = "tr-TR";
  }
  return speechlang;
}
