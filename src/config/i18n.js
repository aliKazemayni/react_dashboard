import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                home: 'home',
                search: 'search',
                setting: 'setting',
                table: 'table',
                account: 'account',
                more: 'more',
                en: 'en',
                fa: 'fa',
                myResume : "My Resume"
            }
        },
        fa: {
            translation: {
                home: 'صفحه اصلی',
                search : "جستجو",
                setting : "تنظیمات",
                table : "جدول",
                more : "بیشتر",
                account : "حساب کاربری",
                en : "انگلیسی",
                fa : "فارسی",
                myResume: "رزومه من"
            }
        },
    },
});

export default i18n;