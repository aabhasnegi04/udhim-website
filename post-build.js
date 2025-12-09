const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Create .htaccess file
const htaccessContent = `RewriteEngine On

# Redirect clean URLs to .html files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle 404 errors
ErrorDocument 404 /404.html
`;

fs.writeFileSync(path.join(__dirname, 'out', '.htaccess'), htaccessContent);
console.log('✓ Created .htaccess file');

// List of pages to create folder structure for
const pages = ['products', 'about', 'industries'];

pages.forEach(page => {
  const pageDir = path.join(__dirname, 'out', page);
  const htmlFile = path.join(__dirname, 'out', `${page}.html`);
  
  // Check if the HTML file exists
  if (fs.existsSync(htmlFile)) {
    // Create directory if it doesn't exist
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Copy HTML to index.html in the directory
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    fs.writeFileSync(path.join(pageDir, 'index.html'), htmlContent);
    console.log(`✓ Created ${page}/index.html`);
  } else {
    console.log(`⚠ Warning: ${page}.html not found, skipping...`);
  }
});

console.log('Post-build complete!');
