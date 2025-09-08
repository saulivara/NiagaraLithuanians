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
            'newsletter.subscribe': 'Subscribe',
            'articles.header.title': 'Community Articles',
            'articles.header.sub': 'Discover stories, traditions, and insights from our vibrant Lithuanian-Canadian community',
            'articles.search': 'Search articles...',
            'articles.allCategories': 'All Categories',
            'articles.loadMore': 'Load More Articles',
            'about.header.title': 'About Our Community',
            'about.header.sub': 'Discover the rich history and vibrant culture of Lithuanian-Canadians in the Niagara region',
            'events.header.title': 'Community Events',
            'events.header.sub': 'Join us for cultural celebrations, workshops, and gatherings that bring our Lithuanian-Canadian community together',
            'contact.header.title': 'Contact Us',
            'contact.header.sub': "We'd love to hear from you! Get in touch with our community and join our vibrant Lithuanian-Canadian family.",
            'contact.form.send': 'Send Message'
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
            'newsletter.subscribe': 'Prenumeruoti',
            'articles.header.title': 'Bendruomenės straipsniai',
            'articles.header.sub': 'Atraskite pasakojimus, tradicijas ir įžvalgas iš mūsų gyvybingos lietuvių-kanadiečių bendruomenės',
            'articles.search': 'Ieškoti straipsnių...',
            'articles.allCategories': 'Visos kategorijos',
            'articles.loadMore': 'Įkelti daugiau straipsnių',
            'about.header.title': 'Apie mūsų bendruomenę',
            'about.header.sub': 'Atraskite turtingą lietuvių-kanadiečių istoriją ir kultūrą Niagaros regione',
            'events.header.title': 'Bendruomenės renginiai',
            'events.header.sub': 'Kviečiame į kultūrines šventes, dirbtuves ir susitikimus, vienijančius mūsų bendruomenę',
            'contact.header.title': 'Susisiekite su mumis',
            'contact.header.sub': 'Laukiame jūsų žinutės! Prisijunkite prie mūsų gyvybingos lietuvių-kanadiečių bendruomenės.',
            'contact.form.send': 'Siųsti žinutę'
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
        // notify subscribers (dynamic sections re-render)
        document.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
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

    function t(key) {
        const lang = getLang();
        return (dictionary[lang] && dictionary[lang][key]) || (dictionary[DEFAULT_LANG] && dictionary[DEFAULT_LANG][key]) || '';
    }

    document.addEventListener('DOMContentLoaded', () => {
        const initial = getLang();
        translatePage(initial);
        initToggle();
    });

    // expose minimal API
    window.i18n = {
        t,
        getLang,
        setLang: (lang) => { setLang(lang); translatePage(lang); },
    };
})();


