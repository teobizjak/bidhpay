import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    debug: true,	
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                "test": "Welcome to React and react-i18next"
            }
        },
        fr: {
            translation: {
                "test": "Bienvenue à React et react-i18next"
            }
        },
        nl: {
            translation: {
                "test": "Welkom bij React en react-i18next"
            }
        },
        ar: {
            translation: {
                "test": "مرحبا بك في React و react-i18next"
            }
        }
        
    },
    
})

export default i18n;