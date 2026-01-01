# Finalitics Pro V1.0 Beta

Financial analysis made simple with AI-powered insights. Get personalized analysis by entering a company name, or upload financial statements and ledgers in any format for detailed examination.

![Finalitics Pro Banner](https://github.com/user-attachments/assets/28906c40-7352-40ae-a2aa-56b778282149)

## Features

### 🔍 Quick Company Analysis
- Enter any company name to get instant financial insights
- View key metrics including Revenue, Growth Rate, Debt Ratio, and Credit Rating
- Clean, intuitive search interface with real-time feedback

### 📊 Document Upload
- **Financial Statements**: Upload balance sheets, income statements, and cash flow reports
- **Ledgers**: Upload general ledgers, journals, and transaction records
- Supports multiple formats: PDF, Excel, CSV, Word
- Drag-and-drop functionality for easy file uploads

### 🤖 AI Assistant
- Interactive chatbot to answer financial analysis questions
- Collapsible widget that stays accessible throughout the site
- Real-time responses with professional conversation interface

### 📱 Responsive Design
- Fully responsive layout that works on all devices
- Mobile-optimized navigation with hamburger menu
- Touch-friendly interface elements

### ⌨️ Keyboard Shortcuts
- `Ctrl+K` (or `Cmd+K` on Mac): Focus the company search box

## Getting Started

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mandarab76/Finalitics-Pro-V1.0-beta-.git
   cd Finalitics-Pro-V1.0-beta-
   ```

2. Open `index.html` in your web browser, or start a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

### Usage

1. **Analyze a Company**: Enter a company name in the search box and click "Analyze"
2. **Upload Documents**: Click on the upload areas or drag files to upload financial documents
3. **Chat with AI**: Click on the AI Assistant widget to ask questions about financial analysis

## Technology Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Font Awesome**: Icons (loaded via CDN)

## Project Structure

```
Finalitics-Pro-V1.0-beta-/
├── .github/
│   └── workflows/
│       ├── static-site-ci.yml    # CI workflow for validation
│       └── deploy-pages.yml      # GitHub Pages deployment
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## GitHub Actions

This project uses GitHub Actions for continuous integration and deployment:

- **Static Site CI**: Automatically validates HTML, CSS, and JavaScript files on every push and pull request to the main branch
- **GitHub Pages Deployment**: Automatically deploys the site to GitHub Pages when changes are pushed to the main branch

## Features in Detail

### Company Analysis
The company analysis feature simulates fetching financial data and displays key metrics in an easy-to-understand format. In a production environment, this would integrate with real financial data APIs.

### File Upload
The upload system supports drag-and-drop and click-to-upload functionality. Files are validated and status messages are displayed to users. In production, these files would be processed by a backend service.

### AI Chatbot
The AI assistant provides conversational help about financial concepts. Currently shows example responses, but designed to integrate with AI services like OpenAI or custom ML models.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a beta release. Feedback and contributions are welcome!

## License

Copyright © 2025 Finalitics Pro. All rights reserved.

## Contact

- Email: info@finalitics.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA
