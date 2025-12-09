const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Create .htaccess file
const htaccessContent = `RewriteEngine On

# Redirect /products to /products.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle 404 errors
ErrorDocument 404 /404.html
`;

fs.writeFileSync(path.join(__dirname, 'out', '.htaccess'), htaccessContent);
console.log('✓ Created .htaccess file');

// Create products/index.html from products.html
const productsDir = path.join(__dirname, 'out', 'products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

const productsHtml = fs.readFileSync(path.join(__dirname, 'out', 'products.html'), 'utf8');
fs.writeFileSync(path.join(productsDir, 'index.html'), productsHtml);
console.log('✓ Created products/index.html');

console.log('Post-build complete!');
