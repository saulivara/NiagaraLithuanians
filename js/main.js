// Main JavaScript for Niagara Lithuanians Blog

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Sample Articles Data
const articlesData = [
    {
        id: 1,
        title: "Celebrating Lithuanian Independence Day in Niagara",
        excerpt: "Join us as we commemorate Lithuania's independence with traditional music, dance, and authentic Lithuanian cuisine in the heart of Niagara.",
        date: "2024-02-16",
        author: "Marija Kazlauskas",
        category: "Events",
        featured: true,
        image: "fas fa-flag",
        content: `
            <p>Every year on February 16th, Lithuanians around the world celebrate the restoration of Lithuania's independence. Here in Niagara, our community comes together to honor this significant day in our history.</p>
            
            <p>The celebration begins with a traditional flag-raising ceremony at City Hall, followed by a cultural program featuring Lithuanian folk songs and dances. Local Lithuanian-Canadian families share their stories of immigration and the preservation of our cultural heritage.</p>
            
            <p>One of the highlights is the traditional Lithuanian food fair, where community members prepare authentic dishes like cepelinai (potato dumplings), šaltibarščiai (cold beet soup), and kugelis (potato pudding).</p>
            
            <p>This year's celebration was particularly special as we welcomed several new families to our community, strengthening the bonds between Lithuanian-Canadians in the Niagara region.</p>
        `
    },
    {
        id: 2,
        title: "Preserving Lithuanian Language Through Generations",
        excerpt: "Discover how our community maintains the Lithuanian language and passes it down to younger generations through innovative programs and cultural initiatives.",
        date: "2024-02-10",
        author: "Dr. Jonas Petraitis",
        category: "Culture",
        featured: true,
        image: "fas fa-book",
        content: `
            <p>Language is the soul of a culture, and for Lithuanian-Canadians, preserving our native tongue is essential to maintaining our identity. In Niagara, we've developed several programs to ensure the Lithuanian language thrives across generations.</p>
            
            <p>Our Saturday Lithuanian School, established in 1995, provides language instruction for children aged 4-16. The curriculum includes not only language skills but also Lithuanian history, geography, and cultural traditions.</p>
            
            <p>For adults, we offer evening classes and conversation groups. Many second and third-generation Lithuanian-Canadians are rediscovering their heritage through these programs.</p>
            
            <p>Technology has also played a crucial role. Our online language exchange program connects local Lithuanian speakers with learners worldwide, creating a global community of language preservation.</p>
        `
    },
    {
        id: 3,
        title: "Lithuanian Folk Art Workshop Series",
        excerpt: "Learn traditional Lithuanian crafts including egg decorating, wood carving, and textile weaving in our hands-on workshop series.",
        date: "2024-02-05",
        author: "Ona Stankevičius",
        category: "Arts & Crafts",
        featured: true,
        image: "fas fa-palette",
        content: `
            <p>Lithuanian folk art is renowned for its intricate patterns, vibrant colors, and deep cultural significance. Our workshop series brings these traditional crafts to life for community members of all ages.</p>
            
            <p>The egg decorating workshop teaches the ancient art of margučiai, using natural dyes and traditional patterns that have been passed down for centuries. Each participant creates their own unique piece of art.</p>
            
            <p>Wood carving sessions focus on traditional Lithuanian motifs, including the famous "Rūpintojėlis" (the Sorrowful Christ) and various nature-inspired designs. Master craftsman Antanas Vaičiūnas shares techniques passed down through his family.</p>
            
            <p>Textile weaving workshops explore the art of creating traditional Lithuanian sashes and table runners, using authentic patterns and natural fibers.</p>
        `
    },
    {
        id: 4,
        title: "Community Garden: Growing Lithuanian Herbs",
        excerpt: "Our community garden project brings together Lithuanian-Canadians to grow traditional herbs and vegetables, sharing knowledge and building connections.",
        date: "2024-01-28",
        author: "Petras Žukauskas",
        category: "Community",
        featured: false,
        image: "fas fa-seedling",
        content: `
            <p>The Niagara Lithuanian Community Garden is more than just a place to grow vegetables – it's a living connection to our homeland and a space for intergenerational learning.</p>
            
            <p>We grow traditional Lithuanian herbs like šaltibarščiai (beet greens), kopūstai (cabbage), and various medicinal plants that have been used in Lithuanian folk medicine for centuries.</p>
            
            <p>Elderly community members share their gardening wisdom with younger families, creating a bridge between generations. Children learn about sustainable growing practices while connecting with their cultural roots.</p>
            
            <p>The garden also serves as a gathering place for community events, from spring planting celebrations to autumn harvest festivals.</p>
        `
    },
    {
        id: 5,
        title: "Lithuanian Music Night at the Cultural Center",
        excerpt: "Join us for an evening of traditional Lithuanian music, featuring local musicians and special guests from the Lithuanian community.",
        date: "2024-01-20",
        author: "Rūta Mažeikienė",
        category: "Music",
        featured: false,
        image: "fas fa-music",
        content: `
            <p>Music has always been central to Lithuanian culture, and our monthly music nights celebrate this rich tradition in the heart of Niagara.</p>
            
            <p>The evening features performances by the Niagara Lithuanian Choir, established in 1998, which specializes in traditional folk songs and contemporary Lithuanian compositions.</p>
            
            <p>Special guests often include visiting musicians from Lithuania, providing an authentic connection to our homeland. Recent performances have featured traditional instruments like the kanklės (Lithuanian zither) and birbynė (wooden flute).</p>
            
            <p>Audience participation is encouraged, with sing-along sessions of beloved Lithuanian folk songs that have been passed down through generations.</p>
        `
    },
    {
        id: 6,
        title: "Lithuanian-Canadian Veterans: Honoring Service",
        excerpt: "We pay tribute to Lithuanian-Canadian veterans who served in both Canadian and Allied forces, preserving their stories for future generations.",
        date: "2024-01-15",
        author: "Col. Vytautas Jankauskas",
        category: "History",
        featured: false,
        image: "fas fa-medal",
        content: `
            <p>Lithuanian-Canadians have a proud tradition of military service, dating back to World War II when many Lithuanian immigrants joined the Canadian Armed Forces.</p>
            
            <p>Our veterans' memorial project documents the stories of these brave individuals, many of whom served in conflicts from World War II to modern peacekeeping missions.</p>
            
            <p>The memorial includes personal accounts, photographs, and artifacts that tell the story of Lithuanian-Canadian military service. These materials are preserved in our community archive and displayed during special commemorative events.</p>
            
            <p>Annual ceremonies honor both those who served and those who made the ultimate sacrifice, ensuring their legacy lives on in our community.</p>
        `
    }
];

// Load Featured Articles
function loadFeaturedArticles() {
    const featuredContainer = document.getElementById('featured-articles');
    if (!featuredContainer) return;
    
    const featuredArticles = articlesData.filter(article => article.featured);
    
    featuredContainer.innerHTML = featuredArticles.map(article => `
        <div class="article-card" onclick="openArticle(${article.id})">
            <div class="article-image">
                <i class="${article.image}"></i>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                    <span><i class="fas fa-user"></i> ${article.author}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// Load Recent Articles
function loadRecentArticles() {
    const recentContainer = document.getElementById('recent-articles');
    if (!recentContainer) return;
    
    const recentArticles = articlesData.slice(0, 3); // Show 3 most recent
    
    recentContainer.innerHTML = recentArticles.map(article => `
        <div class="article-item" onclick="openArticle(${article.id})">
            <div class="article-item-image">
                <i class="${article.image}"></i>
            </div>
            <div class="article-item-content">
                <h4 class="article-item-title">${article.title}</h4>
                <div class="article-item-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                    <span><i class="fas fa-user"></i> ${article.author}</span>
                    <span><i class="fas fa-tag"></i> ${article.category}</span>
                </div>
                <p class="article-item-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    const lang = (window.i18n && window.i18n.getLang && window.i18n.getLang()) || 'en';
    const locale = lang === 'lt' ? 'lt-LT' : 'en-US';
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Open Article (placeholder for future article page)
function openArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (article) {
        // For now, show article content in an alert
        // In a full implementation, this would navigate to an article page
        alert(`Article: ${article.title}\n\n${article.content.replace(/<[^>]*>/g, '')}`);
    }
}

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate newsletter signup
            alert(`Thank you for subscribing with email: ${email}\n\nYou'll receive our latest community news and events!`);
            this.reset();
        });
    }
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedArticles();
    loadRecentArticles();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Re-render dynamic sections on language change
document.addEventListener('languageChange', function() {
    loadFeaturedArticles();
    loadRecentArticles();
});

// Export articles data for use in other pages
window.articlesData = articlesData;
