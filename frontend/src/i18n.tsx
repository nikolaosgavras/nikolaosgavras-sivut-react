import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import finnishTranslation from "./i18n/fi/translation.json";
import englishTranslation from "./i18n/en/translation.json";

const resources = {
  fi: {
    translation: finnishTranslation,
  },

  en: {
    translation: englishTranslation,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng:"fi",
});

export default i18next;