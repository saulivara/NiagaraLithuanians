// Events Page JavaScript

// Sample Events Data
const eventsData = [
    {
        id: 1,
        title: "Lithuanian Independence Day Celebration",
        date: "2024-02-16",
        time: "6:00 PM - 10:00 PM",
        location: "Niagara Lithuanian Cultural Center",
        description: "Join us for our annual celebration of Lithuania's independence with traditional music, dance, and authentic Lithuanian cuisine.",
        category: "Cultural Festival",
        featured: true,
        image: "fas fa-flag",
        price: "Free",
        registration: "Open"
    },
    {
        id: 2,
        title: "Lithuanian Language Classes - Spring Session",
        date: "2024-03-01",
        time: "7:00 PM - 8:30 PM",
        location: "Community Center Room A",
        description: "Beginner and intermediate Lithuanian language classes. All materials provided. Perfect for those wanting to connect with their heritage.",
        category: "Education",
        featured: true,
        image: "fas fa-book",
        price: "$50/session",
        registration: "Open"
    },
    {
        id: 3,
        title: "Traditional Folk Art Workshop",
        date: "2024-03-15",
        time: "2:00 PM - 5:00 PM",
        location: "Arts & Crafts Studio",
        description: "Learn traditional Lithuanian egg decorating techniques and create your own margučiai. All materials included.",
        category: "Arts & Crafts",
        featured: true,
        image: "fas fa-palette",
        price: "$25",
        registration: "Limited"
    },
    {
        id: 4,
        title: "Lithuanian Music Night",
        date: "2024-03-22",
        time: "7:30 PM - 9:30 PM",
        location: "Cultural Center Main Hall",
        description: "An evening of traditional Lithuanian music featuring local musicians and special guests. Refreshments provided.",
        category: "Music",
        featured: false,
        image: "fas fa-music",
        price: "$10",
        registration: "Open"
    },
    {
        id: 5,
        title: "Community Garden Spring Planting",
        date: "2024-04-06",
        time: "10:00 AM - 2:00 PM",
        location: "Community Garden",
        description: "Help us plant traditional Lithuanian herbs and vegetables. Learn about sustainable gardening and cultural connections.",
        category: "Community",
        featured: false,
        image: "fas fa-seedling",
        price: "Free",
        registration: "Open"
    },
    {
        id: 6,
        title: "Lithuanian History Lecture Series",
        date: "2024-04-20",
        time: "2:00 PM - 4:00 PM",
        location: "Library Meeting Room",
        description: "Dr. Jonas Petraitis presents 'Lithuanian Immigration to Canada: Stories and Legacy'. Q&A session included.",
        category: "Education",
        featured: false,
        image: "fas fa-chalkboard-teacher",
        price: "Free",
        registration: "Open"
    },
    {
        id: 7,
        title: "Easter Traditions Workshop",
        date: "2024-04-13",
        time: "1:00 PM - 4:00 PM",
        location: "Cultural Center",
        description: "Learn about Lithuanian Easter traditions, including palm weaving and traditional Easter foods preparation.",
        category: "Cultural Festival",
        featured: false,
        image: "fas fa-egg",
        price: "$15",
        registration: "Limited"
    },
    {
        id: 8,
        title: "Folk Dance Lessons",
        date: "2024-05-04",
        time: "6:00 PM - 7:30 PM",
        location: "Dance Studio",
        description: "Learn traditional Lithuanian folk dances. No experience necessary. Comfortable clothing recommended.",
        category: "Music",
        featured: false,
        image: "fas fa-running",
        price: "$20",
        registration: "Open"
    }
];

// Past Events Data
const pastEventsData = [
    {
        id: 101,
        title: "Christmas Market & Craft Fair",
        date: "2023-12-16",
        description: "Our annual Christmas market featured local artisans, traditional Lithuanian crafts, and holiday treats.",
        image: "fas fa-gift"
    },
    {
        id: 102,
        title: "Lithuanian Heritage Month Celebration",
        date: "2023-11-18",
        description: "A month-long celebration of Lithuanian culture with exhibitions, performances, and community showcases.",
        image: "fas fa-star"
    },
    {
        id: 103,
        title: "Harvest Festival",
        date: "2023-10-14",
        description: "Celebrating the autumn harvest with traditional foods, music, and community gathering.",
        image: "fas fa-leaf"
    },
    {
        id: 104,
        title: "Summer Picnic & Games",
        date: "2023-08-19",
        description: "Family-friendly summer event with traditional games, food, and outdoor activities.",
        image: "fas fa-sun"
    }
];

// Initialize events page
document.addEventListener('DOMContentLoaded', function() {
    loadUpcomingEvents();
    loadPastEvents();
    setupEventNewsletter();
});

// Load upcoming events
function loadUpcomingEvents() {
    const upcomingContainer = document.getElementById('upcoming-events');
    if (!upcomingContainer) return;
    
    const upcomingEvents = eventsData.filter(event => {
        const eventDate = new Date(event.date);
        const today = new Date();
        return eventDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    upcomingContainer.innerHTML = upcomingEvents.map(event => `
        <div class="event-card" onclick="openEventModal(${event.id})">
            <div class="event-image">
                <i class="${event.image}"></i>
            </div>
            <div class="event-content">
                <div class="event-meta">
                    <span class="event-date">
                        <i class="fas fa-calendar"></i> ${formatEventDate(event.date)}
                    </span>
                    <span class="event-time">
                        <i class="fas fa-clock"></i> ${event.time}
                    </span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-location">
                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                </p>
                <p class="event-description">${event.description}</p>
                <div class="event-footer">
                    <span class="event-price">${event.price}</span>
                    <span class="event-registration ${event.registration.toLowerCase()}">${event.registration}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load past events
function loadPastEvents() {
    const pastContainer = document.getElementById('past-events');
    if (!pastContainer) return;
    
    pastContainer.innerHTML = pastEventsData.map(event => `
        <div class="past-event-item">
            <div class="past-event-image">
                <i class="${event.image}"></i>
            </div>
            <div class="past-event-content">
                <h4 class="past-event-title">${event.title}</h4>
                <p class="past-event-date">${formatEventDate(event.date)}</p>
                <p class="past-event-description">${event.description}</p>
            </div>
        </div>
    `).join('');
}

// Format event date
function formatEventDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Open event modal
function openEventModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeEventModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${event.title}</h2>
                    <button class="modal-close" onclick="closeEventModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="event-image-large">
                        <i class="${event.image}"></i>
                    </div>
                    <div class="event-details">
                        <div class="detail-item">
                            <i class="fas fa-calendar"></i>
                            <span>${formatEventDate(event.date)}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.location}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-tag"></i>
                            <span>${event.category}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-dollar-sign"></i>
                            <span>${event.price}</span>
                        </div>
                    </div>
                    <div class="event-description-full">
                        <h3>About This Event</h3>
                        <p>${event.description}</p>
                        <p>Join us for this wonderful opportunity to connect with our Lithuanian heritage and community. All skill levels and backgrounds are welcome!</p>
                    </div>
                    <div class="event-registration-section">
                        <h3>Registration</h3>
                        <p>Registration Status: <span class="registration-status ${event.registration.toLowerCase()}">${event.registration}</span></p>
                        <button class="btn btn-primary" onclick="registerForEvent(${event.id})">
                            Register for Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .event-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        .event-modal .modal-overlay {
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
        
        .event-modal .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .event-image-large {
            width: 100%;
            height: 150px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .event-details {
            display: grid;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .detail-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        
        .detail-item i {
            color: var(--primary-color);
            width: 20px;
        }
        
        .event-description-full h3 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .event-registration-section {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        
        .registration-status {
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.875rem;
        }
        
        .registration-status.open {
            background: #d4edda;
            color: #155724;
        }
        
        .registration-status.limited {
            background: #fff3cd;
            color: #856404;
        }
        
        .registration-status.closed {
            background: #f8d7da;
            color: #721c24;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close event modal
function closeEventModal() {
    const modal = document.querySelector('.event-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Register for event
function registerForEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    alert(`Thank you for your interest in "${event.title}"!\n\nWe'll contact you soon with registration details and payment information.\n\nFor immediate assistance, please call us at (905) 555-0123 or email events@niagaralithuanians.com`);
    
    closeEventModal();
}

// Setup event newsletter
function setupEventNewsletter() {
    const newsletterForm = document.getElementById('event-newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            alert(`Thank you for subscribing to our event newsletter!\n\nEmail: ${email}\n\nYou'll receive updates about upcoming events, workshops, and community gatherings.`);
            this.reset();
        });
    }
}

// Add event-specific styles
const eventStyles = document.createElement('style');
eventStyles.textContent = `
    .event-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: var(--shadow-light);
        transition: all var(--transition-normal);
        cursor: pointer;
    }
    
    .event-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
    }
    
    .event-image {
        width: 100%;
        height: 120px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
    }
    
    .event-content {
        padding: 20px;
    }
    
    .event-meta {
        display: flex;
        gap: 15px;
        margin-bottom: 10px;
        font-size: 0.875rem;
        color: var(--text-muted);
    }
    
    .event-meta span {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .event-title {
        color: var(--primary-color);
        margin-bottom: 10px;
        font-size: 1.25rem;
    }
    
    .event-location {
        color: var(--text-light);
        margin-bottom: 10px;
        font-size: 0.95rem;
    }
    
    .event-location i {
        color: var(--primary-color);
        margin-right: 5px;
    }
    
    .event-description {
        color: var(--text-light);
        line-height: 1.5;
        margin-bottom: 15px;
        font-size: 0.95rem;
    }
    
    .event-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .event-price {
        font-weight: 600;
        color: var(--primary-color);
    }
    
    .event-registration {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .event-registration.open {
        background: #d4edda;
        color: #155724;
    }
    
    .event-registration.limited {
        background: #fff3cd;
        color: #856404;
    }
    
    .event-registration.closed {
        background: #f8d7da;
        color: #721c24;
    }
    
    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-bottom: 60px;
    }
    
    .category-card {
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: var(--shadow-light);
        text-align: center;
        transition: transform var(--transition-normal);
    }
    
    .category-card:hover {
        transform: translateY(-5px);
    }
    
    .category-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        color: white;
        font-size: 2rem;
    }
    
    .category-card h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .category-card p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .calendar-placeholder {
        background: var(--bg-light);
        padding: 60px 40px;
        border-radius: 12px;
        text-align: center;
        border: 2px dashed var(--border-color);
    }
    
    .calendar-placeholder i {
        font-size: 4rem;
        color: var(--primary-color);
        margin-bottom: 20px;
    }
    
    .calendar-placeholder h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .calendar-placeholder p {
        color: var(--text-light);
        margin-bottom: 25px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .events-timeline {
        display: grid;
        gap: 20px;
    }
    
    .past-event-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-light);
        display: flex;
        gap: 20px;
        align-items: center;
    }
    
    .past-event-image {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .past-event-content {
        flex: 1;
    }
    
    .past-event-title {
        color: var(--primary-color);
        margin-bottom: 5px;
    }
    
    .past-event-date {
        color: var(--text-muted);
        font-size: 0.875rem;
        margin-bottom: 8px;
    }
    
    .past-event-description {
        color: var(--text-light);
        font-size: 0.95rem;
    }
    
    .event-registration {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        color: white;
        text-align: center;
        padding: 60px 40px;
        border-radius: 16px;
    }
    
    .event-registration h2 {
        color: white;
        margin-bottom: 15px;
    }
    
    .event-registration p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 30px;
        font-size: 1.125rem;
    }
    
    .event-newsletter-form {
        display: flex;
        max-width: 500px;
        margin: 0 auto;
        gap: 15px;
    }
    
    .event-newsletter-form input {
        flex: 1;
        padding: 12px 16px;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
    }
    
    .event-newsletter-form button {
        padding: 12px 24px;
        background: var(--secondary-color);
        color: var(--primary-color);
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    
    .event-newsletter-form button:hover {
        background: #e6c547;
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        .event-meta {
            flex-direction: column;
            gap: 5px;
        }
        
        .event-footer {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
        
        .categories-grid {
            grid-template-columns: 1fr;
        }
        
        .past-event-item {
            flex-direction: column;
            text-align: center;
        }
        
        .event-newsletter-form {
            flex-direction: column;
        }
    }
`;

document.head.appendChild(eventStyles);
