import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {fa} from "./language/fa";
import {en} from "./language/en";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: localStorage.getItem('language'),
    interpolation: {
        escapeValue: false,
    },
    resources: {en, fa},
});

export default i18n;