# MacFood - Recipe Finder Application

A modern, responsive recipe finder web application that helps users discover recipes by searching for dish names. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Recipe Search** - Search for recipes by dish name using TheMealDB API
- **Detailed Recipe Information** - View ingredients, cooking instructions, and recipe videos
- **Popular Recipes Carousel** - Browse trending recipes in an interactive carousel
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Accessibility** - WCAG compliant with ARIA labels and semantic HTML
- **Modern UI** - Clean, human-made design with smooth animations and transitions

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: TheMealDB (free recipe database)
- **Libraries**: 
  - ScrollReveal - Scroll animation library
  - Boxicons - Icon library

## Setup & Configuration

### Local Development

1. Clone the repository
```bash
git clone <your-repo-url>
cd Recipe_app
```

2. The application uses an external API (TheMealDB) which doesn't require authentication. The API endpoint is configured in `config.js`:

```javascript
const CONFIG = {
    API_BASE_URL: 'https://www.themealdb.com/api/json/v1/1/search.php?s='
};
```

3. Open `index.html` in your browser to run the application

### GitHub Pages Deployment

1. Push your repository to GitHub
2. Go to repository **Settings** → **Pages**
3. Select the branch (usually `main`) as the source
4. Your application will be available at `https://yourusername.github.io/Recipe_app`

**Note**: The `.env` file included in the project is for documentation purposes. Since this is a static site, no server-side environment variables are needed. The API configuration is handled in `config.js`.

## File Structure

```
Recipe_app/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # Main JavaScript logic
├── config.js           # Configuration (API endpoints)
├── .gitignore          # Git ignore rules
├── .env                # Environment file (for reference)
├── README.md           # This file
└── Images/             # Recipe and background images
    ├── ImageHome1.png
    ├── HomeBGImage.jpg
    ├── SteakC.jpg
    ├── saladGreek.jpg
    ├── Big macC.jpg
    ├── Biryani.jpg
    ├── Shwarma.jpg
    └── MacFood.png
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Alt text for all images

## How to Use

1. **Search for Recipes**: Enter a dish name in the search box and click "Search"
2. **View Details**: See ingredients, cooking method, and nutritional info
3. **Watch Videos**: Click "Watch on YouTube" to see video tutorials
4. **Browse Popular**: Swipe through popular recipes in the carousel section

## Performance Tips

- The site is fully static and loads quickly
- CSS animations use hardware acceleration
- Images are optimized for web
- No build process needed - works out of the box

## Color Scheme

- Primary Green: `#2a5846`
- Accent Green: `#0c9a61`
- Text Color: `#1a1a1a`
- Background: `#ffffff`

## Font Stack

- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)

## license

Copyright © 2024 Tajamul Wani. All rights reserved.

## Contact & Social

- Email: [thetj4054@gmail.com](mailto:thetj4054@gmail.com)
- LinkedIn: [Tajamul Wani](https://www.linkedin.com/in/tajamul-wani/)
- GitHub: [TAJAMUL11](https://github.com/TAJAMUL11)

---

**Last Updated**: March 2026

