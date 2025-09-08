// Articles Page JavaScript

let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [];

// Initialize articles page
document.addEventListener('DOMContentLoaded', function() {
    loadAllArticles();
    setupFilters();
    setupSearch();
});

// Load all articles
function loadAllArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;
    
    filteredArticles = [...articlesData];
    displayArticles();
}

// Display articles with pagination
function displayArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(0, endIndex);
    
    articlesGrid.innerHTML = articlesToShow.map(article => `
        <div class="article-card" onclick="openArticle(${article.id})">
            <div class="article-image">
                <i class="${article.image}"></i>
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                    <span><i class="fas fa-user"></i> ${article.author}</span>
                    <span><i class="fas fa-tag"></i> ${article.category}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-read-more">
                    <span>Read More <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (endIndex >= filteredArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Setup category filter
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            filterArticles(selectedCategory);
        });
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            searchArticles(searchTerm);
        });
    }
}

// Filter articles by category
function filterArticles(category) {
    if (category === '') {
        filteredArticles = [...articlesData];
    } else {
        filteredArticles = articlesData.filter(article => 
            article.category === category
        );
    }
    currentPage = 1;
    displayArticles();
}

// Search articles
function searchArticles(searchTerm) {
    if (searchTerm === '') {
        filteredArticles = [...articlesData];
    } else {
        filteredArticles = articlesData.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.author.toLowerCase().includes(searchTerm) ||
            article.category.toLowerCase().includes(searchTerm)
        );
    }
    currentPage = 1;
    displayArticles();
}

// Load more articles
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            displayArticles();
        });
    }
});

// Enhanced article opening with modal
function openArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'article-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${article.title}</h2>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="article-meta">
                        <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                        <span><i class="fas fa-user"></i> ${article.author}</span>
                        <span><i class="fas fa-tag"></i> ${article.category}</span>
                    </div>
                    <div class="article-image-large">
                        <i class="${article.image}"></i>
                    </div>
                    <div class="article-content-full">
                        ${article.content}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .article-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            margin: 0;
            color: var(--primary-color);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
            padding: 5px;
        }
        
        .modal-close:hover {
            color: var(--primary-color);
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .article-image-large {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
            margin: 20px 0;
        }
        
        .article-content-full {
            line-height: 1.8;
            color: var(--text-dark);
        }
        
        .article-content-full p {
            margin-bottom: 15px;
        }
        
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #eee;
            text-align: right;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 10px;
                max-height: 95vh;
            }
            
            .modal-header h2 {
                font-size: 1.5rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.article-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
