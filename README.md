# Niagara Lithuanians Community Blog

A beautiful, modern blog website for the Niagara Lithuanians community, built with static HTML, CSS, and JavaScript. Perfect for hosting on Cloudflare Pages.

## Features

- 🎨 **Beautiful Design**: Modern, responsive design with Lithuanian-inspired color scheme
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 📝 **Article System**: Dynamic article loading with search and filtering
- 🎭 **Event Management**: Event listings with registration functionality
- 📧 **Contact Forms**: Working contact forms with validation
- 🚀 **Fast Loading**: Optimized for speed with static hosting
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- ♿ **Accessible**: Built with accessibility best practices

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter + Playfair Display)

## File Structure

```
NiagaraLithuanians/
├── index.html              # Homepage
├── about.html              # About page
├── articles.html           # Articles listing
├── events.html             # Events page
├── contact.html            # Contact page
├── styles/
│   └── main.css           # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript
│   ├── articles.js        # Articles functionality
│   ├── events.js          # Events functionality
│   └── contact.js         # Contact form handling
├── _headers               # Cloudflare Pages headers
├── _redirects             # Cloudflare Pages redirects
└── README.md              # This file
```

## Deployment to Cloudflare Pages

### Method 1: Direct Upload
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Choose "Upload assets"
4. Upload all files from this directory
5. Your site will be live at `your-project-name.pages.dev`

### Method 2: Git Integration
1. Push this code to a GitHub repository
2. Connect your GitHub account to Cloudflare Pages
3. Select your repository
4. Cloudflare will automatically deploy on every push

### Custom Domain Setup
1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains"
3. Add your domain `niagaralithuanians.com`
4. Update your domain's DNS settings as instructed

## Customization

### Adding New Articles
1. Edit `js/main.js`
2. Add new articles to the `articlesData` array
3. Each article should have: `id`, `title`, `excerpt`, `date`, `author`, `category`, `featured`, `image`, `content`

### Adding New Events
1. Edit `js/events.js`
2. Add new events to the `eventsData` array
3. Each event should have: `id`, `title`, `date`, `time`, `location`, `description`, `category`, `featured`, `image`, `price`, `registration`

### Styling Changes
1. Edit `styles/main.css`
2. CSS variables are defined at the top for easy color scheme changes
3. The design uses a Lithuanian-inspired green and gold color scheme

### Adding Images
1. Create an `images/` directory
2. Add your images there
3. Update the image references in the HTML/CSS

## Features Overview

### Homepage
- Hero section with call-to-action
- Featured articles grid
- Community statistics
- Recent articles list
- Newsletter signup

### Articles Page
- Search functionality
- Category filtering
- Pagination
- Modal article viewer
- Responsive grid layout

### Events Page
- Upcoming events grid
- Event categories
- Event registration modals
- Past events timeline
- Event newsletter signup

### About Page
- Community story
- Mission and values
- Leadership team
- Community statistics

### Contact Page
- Contact information cards
- Working contact form with validation
- FAQ section
- Map placeholder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Efficient caching headers
- Fast loading times

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Twitter Card tags
- Structured data ready

## Security

- Content Security Policy headers
- XSS protection
- Clickjacking protection
- Secure form handling

## Maintenance

- Regular content updates through JavaScript arrays
- Easy to add new pages by copying existing structure
- Modular CSS and JavaScript for easy customization

## Support

For questions or support, contact the development team or refer to the Cloudflare Pages documentation.

## License

This project is created for the Niagara Lithuanians community. All rights reserved.
"# NiagaraLithuanians" 
