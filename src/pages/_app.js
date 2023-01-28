import React, { useEffect } from 'react';
import { DisplayModeContext } from '../context/displayMode';
import { I18NContext } from '../context/i18Ncontext';
import { translatedLinks } from '../../content/translations/links';
import { translatedRoles } from '../../content/translations/roles';
import '../css/main.css';
import Analytics from '../components/Analytics';

export default function MyApp({ Component, pageProps }) {
    const [locale, setLocale] = React.useState('en');
    const [displayMode, setDisplayMode] = React.useState('light');
    const [linksTranslations] = React.useState(translatedLinks);

    function translateLink(input) {
        if (input in linksTranslations) return locale === 'pt' ? linksTranslations[input] : input;
        return input;
    }

    function translateRole(role) {
        if (role in translatedRoles) return locale === 'pt' ? translatedRoles[role].pt : translatedRoles[role].en;
        return role;
    }

    const setLanguage = (language) => {
        localStorage.setItem('language', language);
        setLocale(language);
    };

    const prefersFR = () => {
        navigator?.language?.toLowerCase().includes('pt') || false;
    };

    const setLight = () => {
        localStorage.setItem('displayMode', 'light');
        setDisplayMode('light');
    };

    const setDark = () => {
        localStorage.setItem('displayMode', 'dark');
        setDisplayMode('dark');
    };

    const prefersDark = () => {
        const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)');
        return mediaQuery?.matches || false;
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        const defaultFR = storedLanguage === 'pt' || (storedLanguage === null && prefersFR());
        if (defaultFR) {
            setLanguage('pt');
        }
    }, [locale]);

    useEffect(() => {
        const storedMode = localStorage.getItem('displayMode');
        const defaultDark = storedMode === 'dark' || (storedMode === null && prefersDark());
        if (defaultDark) {
            setDark();
        }
    }, [displayMode]);

    return (
        <I18NContext.Provider value={{ locale, setLanguage, translateLink, translateRole }}>
            <DisplayModeContext.Provider value={{ displayMode, setLight, setDark }}>
                <Component {...pageProps} />
                <Analytics />
            </DisplayModeContext.Provider>
        </I18NContext.Provider>

    );
}
