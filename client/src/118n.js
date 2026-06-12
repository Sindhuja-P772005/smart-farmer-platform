import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashboard: "Dashboard",
        weather: "Weather",
        marketplace: "Marketplace",
        logout: "Logout"
      }
    },

    te: {
      translation: {
        dashboard: "డాష్‌బోర్డ్",
        weather: "వాతావరణం",
        marketplace: "మార్కెట్‌ప్లేస్",
        logout: "లాగ్ అవుట్"
      }
    },

    hi: {
      translation: {
        dashboard: "डैशबोर्ड",
        weather: "मौसम",
        marketplace: "मार्केटप्लेस",
        logout: "लॉगआउट"
      }
    }
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;