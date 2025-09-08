# Deployment Guide for Niagara Lithuanians Blog

## Quick Start - Deploy to Cloudflare Pages

### Option 1: Direct Upload (Easiest)

1. **Prepare Your Files**
   - Zip all files in the project directory
   - Make sure to include all HTML, CSS, JS files and the `_headers` and `_redirects` files

2. **Upload to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Sign in to your Cloudflare account
   - Click "Create a project"
   - Choose "Upload assets"
   - Upload your zip file
   - Your site will be live at `your-project-name.pages.dev`

### Option 2: Git Integration (Recommended for Updates)

1. **Create GitHub Repository**
   - Create a new repository on GitHub
   - Upload all files to the repository
   - Make sure to include all files in the root directory

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository
   - Cloudflare will automatically deploy on every push

## Custom Domain Setup

### Step 1: Add Custom Domain
1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter `niagaralithuanians.com`
5. Click "Continue"

### Step 2: Update DNS Settings
1. Go to your domain registrar (where you bought the domain)
2. Update the DNS settings as instructed by Cloudflare
3. Usually involves changing the A record or CNAME record
4. Wait for DNS propagation (can take up to 24 hours)

### Step 3: SSL Certificate
- Cloudflare automatically provides SSL certificates
- Your site will be available at both HTTP and HTTPS
- HTTPS is recommended for security

## Post-Deployment Configuration

### 1. Update Contact Information
- Edit `contact.html` to update phone numbers and email addresses
- Update the contact form handler if needed

### 2. Add Real Content
- Replace sample articles in `js/main.js` with real content
- Add real events in `js/events.js`
- Update leadership team information in `about.html`

### 3. Add Images
- Upload images to the `images/` directory
- Update image references in HTML files
- Optimize images for web use

### 4. Configure Analytics (Optional)
- Add Google Analytics or other tracking codes
- Update the HTML files with your tracking code

## Maintenance and Updates

### Adding New Articles
1. Edit `js/main.js`
2. Add new article to the `articlesData` array:
```javascript
{
    id: 7, // Next available ID
    title: "Your Article Title",
    excerpt: "Brief description of the article...",
    date: "2024-03-01",
    author: "Author Name",
    category: "Category",
    featured: true, // or false
    image: "fas fa-icon-name", // Font Awesome icon
    content: `
        <p>Your article content here...</p>
        <p>More content...</p>
    `
}
```

### Adding New Events
1. Edit `js/events.js`
2. Add new event to the `eventsData` array:
```javascript
{
    id: 9, // Next available ID
    title: "Event Title",
    date: "2024-03-15",
    time: "7:00 PM - 9:00 PM",
    location: "Event Location",
    description: "Event description...",
    category: "Event Category",
    featured: true, // or false
    image: "fas fa-icon-name",
    price: "Free", // or price
    registration: "Open" // or "Limited" or "Closed"
}
```

### Updating Contact Information
1. Edit `contact.html`
2. Update phone numbers, email addresses, and addresses
3. Update the contact form if needed

## Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images to reduce file size
- Use appropriate image dimensions

### Caching
- The `_headers` file is already configured for optimal caching
- Static assets are cached for 1 year
- HTML files are cached for 1 hour

### CDN
- Cloudflare automatically provides global CDN
- Your site will be fast worldwide

## Security Features

### Headers Configuration
The `_headers` file includes:
- X-Frame-Options: Prevents clickjacking
- X-Content-Type-Options: Prevents MIME sniffing
- X-XSS-Protection: XSS protection
- Referrer-Policy: Controls referrer information

### Form Security
- Contact forms include client-side validation
- Consider adding server-side validation for production use

## Troubleshooting

### Common Issues

1. **Site Not Loading**
   - Check DNS settings
   - Verify domain is properly configured
   - Check Cloudflare Pages dashboard for errors

2. **Images Not Showing**
   - Verify image paths are correct
   - Check file permissions
   - Ensure images are in the correct directory

3. **Forms Not Working**
   - Contact forms are currently client-side only
   - For production, add server-side form handling
   - Consider using services like Formspree or Netlify Forms

4. **Styling Issues**
   - Check CSS file paths
   - Verify all CSS files are uploaded
   - Clear browser cache

### Getting Help
- Check Cloudflare Pages documentation
- Review the README.md file for detailed information
- Contact Cloudflare support for hosting issues

## Backup and Version Control

### Regular Backups
- Keep local copies of all files
- Use Git for version control
- Regular backups of your content

### Content Management
- Consider using a headless CMS for easier content management
- Options include Strapi, Contentful, or Sanity
- This would require additional setup but makes content updates easier

## Future Enhancements

### Possible Improvements
1. **Content Management System**
   - Add a headless CMS for easier content management
   - Allow non-technical users to add articles

2. **User Authentication**
   - Add member login system
   - Private member-only content

3. **Event Registration**
   - Real event registration system
   - Payment processing for paid events

4. **Newsletter Integration**
   - Connect to email marketing service
   - Automated newsletter sending

5. **Search Functionality**
   - Full-text search across all content
   - Advanced filtering options

This deployment guide should help you get your Niagara Lithuanians blog up and running on Cloudflare Pages successfully!
