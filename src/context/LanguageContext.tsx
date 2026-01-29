import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type InterfaceLanguage, translations, languageOptions } from '../data/translations';

interface LanguageContextType {
    language: InterfaceLanguage;
    setLanguage: (lang: InterfaceLanguage) => void;
    t: (key: string) => string;
    languageOptions: typeof languageOptions;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<InterfaceLanguage>(() => {
        // Get saved language from localStorage or default to 'en'
        const saved = localStorage.getItem('smartclass_language');
        return (saved as InterfaceLanguage) || 'en';
    });

    const setLanguage = (lang: InterfaceLanguage) => {
        setLanguageState(lang);
        localStorage.setItem('smartclass_language', lang);

        // Set RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    };

    // Translate function
    const t = (key: string): string => {
        return translations[language][key] || translations['en'][key] || key;
    };

    // Set initial direction
    useEffect(() => {
        if (language === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, languageOptions }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
