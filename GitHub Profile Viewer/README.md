# GitHub Profile Viewer

A modern, responsive web application that allows users to search and view GitHub profiles with detailed information and repository data.

## Features

- **User Profile Search**: Search for any GitHub user by username
- **Comprehensive Profile Data**: Display avatar, bio, location, company, website, and social links
- **Profile Statistics**: Show followers, following, repositories, and gists count
- **Repository Showcase**: Display top 6 repositories with language, stars, and forks
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Share Functionality**: Share profile URLs with one click
- **Real-time Data**: Fetches live data from GitHub API
- **Error Handling**: User-friendly error messages for invalid usernames
- **Loading States**: Smooth loading animations for better UX

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: API integration and dynamic content manipulation
- **GitHub API**: Real-time data fetching
- **Font Awesome**: Beautiful icons and symbols

## How to Use

1. Open `index.html` in your web browser
2. Enter a GitHub username in the search box
3. Click "Search" or press Enter
4. View the user's profile information and repositories
5. Click on any repository card to visit it on GitHub
6. Use the "Share Profile" button to copy the profile URL

## API Integration

This application uses the GitHub REST API v3 to fetch:
- User profile information from `/users/{username}`
- Repository data from `/users/{username}/repos`

No authentication is required, but the app respects GitHub's rate limiting.

## File Structure

```
GitHub Profile Viewer/
├── index.html          # Main HTML structure
├── index.css           # Styling and responsive design
├── index.js            # JavaScript functionality and API calls
└── README.md          # Project documentation
```

## Features Breakdown

### Profile Information Display
- User avatar with hover effects
- Full name and username
- Bio and description
- Location, company, website links
- Twitter profile link (if available)
- Account creation date

### Statistics Dashboard
- Public repositories count
- Followers and following count  
- Public gists count
- Formatted numbers (1.2k instead of 1200)

### Repository Showcase
- Top 6 most starred repositories
- Repository name and description
- Primary programming language with color coding
- Star and fork counts
- Last update time with relative formatting
- Click to open repository on GitHub

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Live Demo

Simply open the `index.html` file in any modern web browser to start using the application.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](../LICENSE).
