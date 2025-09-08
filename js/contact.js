// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
});

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateForm(data)) {
            // Simulate form submission
            submitForm(data);
        }
    });
    
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Validate form data
function validateForm(data) {
    let isValid = true;
    
    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field] || data[field].trim() === '') {
            showFieldError(input, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        const emailInput = document.getElementById('email');
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    if (data.phone && !isValidPhone(data.phone)) {
        const phoneInput = document.getElementById('phone');
        showFieldError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (fieldName === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    // Phone validation
    if (fieldName === 'phone' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Submit form
function submitForm(data) {
    // Show loading state
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission delay
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any remaining errors
        document.querySelectorAll('.field-error').forEach(error => error.remove());
        document.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
        
    }, 2000);
}

// Show success message
function showSuccessMessage() {
    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeSuccessModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Message Sent Successfully!</h2>
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <button class="btn btn-primary" onclick="closeSuccessModal()">Close</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .success-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        .success-modal .modal-overlay {
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
        
        .success-modal .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 400px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        }
        
        .success-icon {
            font-size: 4rem;
            color: var(--primary-color);
            margin-bottom: 20px;
        }
        
        .success-modal h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .success-modal p {
            color: var(--text-light);
            margin-bottom: 25px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close success modal
function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add form styles
const formStyles = document.createElement('style');
formStyles.textContent = `
    .contact-form {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: var(--shadow-light);
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--text-dark);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color var(--transition-fast);
        font-family: inherit;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #e74c3c;
    }
    
    .field-error {
        color: #e74c3c;
        font-size: 0.875rem;
        margin-top: 5px;
    }
    
    .checkbox-group {
        margin-bottom: 30px;
    }
    
    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 0.95rem;
    }
    
    .checkbox-label input[type="checkbox"] {
        width: auto;
        margin-right: 10px;
    }
    
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin-bottom: 60px;
    }
    
    .contact-card {
        text-align: center;
        padding: 30px 20px;
        background: white;
        border-radius: 12px;
        box-shadow: var(--shadow-light);
        transition: transform var(--transition-normal);
    }
    
    .contact-card:hover {
        transform: translateY(-5px);
    }
    
    .contact-icon {
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
    
    .contact-card h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .contact-card p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    .page-header {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
        color: white;
        text-align: center;
        padding: 120px 0 80px;
        margin-top: 70px;
    }
    
    .page-header h1 {
        color: white;
        margin-bottom: 15px;
    }
    
    .page-header p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.125rem;
    }
    
    .form-container {
        background: var(--bg-light);
        padding: 60px 40px;
        border-radius: 16px;
        margin-bottom: 60px;
    }
    
    .form-container h2 {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .form-container > p {
        text-align: center;
        margin-bottom: 40px;
        color: var(--text-light);
    }
    
    .map-container {
        margin-bottom: 60px;
    }
    
    .map-placeholder {
        background: var(--bg-light);
        padding: 60px 40px;
        border-radius: 12px;
        text-align: center;
        border: 2px dashed var(--border-color);
    }
    
    .map-placeholder i {
        font-size: 4rem;
        color: var(--primary-color);
        margin-bottom: 20px;
    }
    
    .map-placeholder h3 {
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    
    .map-placeholder p {
        color: var(--text-light);
        margin-bottom: 10px;
    }
    
    .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }
    
    .faq-item {
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: var(--shadow-light);
    }
    
    .faq-item h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .faq-item p {
        color: var(--text-light);
        line-height: 1.6;
    }
    
    @media (max-width: 768px) {
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .contact-form {
            padding: 20px;
        }
        
        .form-container {
            padding: 40px 20px;
        }
        
        .contact-grid {
            grid-template-columns: 1fr;
        }
    }
`;

document.head.appendChild(formStyles);
