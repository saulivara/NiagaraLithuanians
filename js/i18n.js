// Simple client-side i18n for EN/LT with persistence
(function() {
    const STORAGE_KEY = 'niagaraLang';
    const DEFAULT_LANG = 'en';

    const dictionary = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.articles': 'Articles',
            'nav.events': 'Events',
            'nav.contact': 'Contact',
            'nav.lang': 'LT',
            'hero.title': 'Welcome to Niagara Lithuanians',
            'hero.subtitle': "Discover the rich heritage, stories, and vibrant community of Lithuanian-Canadians in the Niagara region",
            'buttons.readStories': 'Read Our Stories',
            'buttons.learnAbout': 'Learn About Us',
            'sections.featured': 'Featured Stories',
            'sections.recent': 'Recent Articles',
            'newsletter.title': 'Stay Connected',
            'newsletter.desc': 'Subscribe to our newsletter for the latest community news, events, and stories.',
            'newsletter.subscribe': 'Subscribe'
        },
        lt: {
            'nav.home': 'Pradžia',
            'nav.about': 'Apie',
            'nav.articles': 'Straipsniai',
            'nav.events': 'Renginiai',
            'nav.contact': 'Kontaktai',
            'nav.lang': 'EN',
            'hero.title': 'Sveiki atvykę į Niagaros lietuvius',
            'hero.subtitle': 'Atraskite lietuvių paveldo, istorijų ir bendruomenės gyvenimą Kanados Niagaros regione',
            'buttons.readStories': 'Skaityti mūsų istorijas',
            'buttons.learnAbout': 'Sužinoti apie mus',
            'sections.featured': 'Įdomiausios istorijos',
            'sections.recent': 'Naujausi straipsniai',
            'newsletter.title': 'Likite ryšyje',
            'newsletter.desc': 'Prenumeruokite naujienlaiškį ir gaukite bendruomenės naujienas bei renginius.',
            'newsletter.subscribe': 'Prenumeruoti'
        }
    };

    function getLang() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function translatePage(lang) {
        document.documentElement.lang = lang;
        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach(node => {
            const key = node.getAttribute('data-i18n');
            const text = dictionary[lang] && dictionary[lang][key];
            if (text) node.textContent = text;
        });
        const toggle = document.getElementById('lang-toggle');
        if (toggle) toggle.textContent = dictionary[lang]['nav.lang'] || 'LT';
    }

    function initToggle() {
        const toggle = document.getElementById('lang-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', () => {
            const current = getLang();
            const next = current === 'en' ? 'lt' : 'en';
            setLang(next);
            translatePage(next);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const initial = getLang();
        translatePage(initial);
        initToggle();
    });
})();


