import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.css';

interface LanguageSelectorProps {
    variant?: 'dropdown' | 'grid';
    showLabel?: boolean;
}

const LanguageSelector = ({ variant = 'dropdown', showLabel = true }: LanguageSelectorProps) => {
    const { language, setLanguage, t, languageOptions } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languageOptions.find(l => l.code === language);

    if (variant === 'grid') {
        return (
            <div className="language-selector-grid">
                {showLabel && (
                    <h3 className="language-selector-title">{t('common.selectLanguage')}</h3>
                )}
                <div className="language-grid">
                    {languageOptions.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => setLanguage(lang.code)}
                        >
                            <span className="language-flag">{lang.flag}</span>
                            <span className="language-name">{lang.nativeName}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="language-selector-dropdown">
            <button
                className="language-selector-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="current-flag">{currentLang?.flag}</span>
                <span className="current-lang">{currentLang?.nativeName}</span>
                <span className="dropdown-arrow">▾</span>
            </button>

            {isOpen && (
                <>
                    <div className="dropdown-overlay" onClick={() => setIsOpen(false)} />
                    <div className="language-dropdown-menu">
                        {languageOptions.map((lang) => (
                            <button
                                key={lang.code}
                                className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="language-flag">{lang.flag}</span>
                                <span className="language-native">{lang.nativeName}</span>
                                <span className="language-english">({lang.name})</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
