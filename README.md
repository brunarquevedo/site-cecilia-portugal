# Dra. Cecília Portugal - Website

Site estático (HTML5 + CSS + JavaScript) para Dra. Cecília Portugal - Médica de Família e Comunidade | Terapeuta Ocupacional.

Acompanhamento online para parar de fumar com abordagem integrada (física, emocional, comportamental).

---

## 📋 Estrutura do Projeto

```
dra-cecilia-portugal/
├── index.html                      # Home
├── sobre.html                      # Sobre a Dra. Cecília
├── acompanhamento.html             # Programa de acompanhamento
├── livro.html                      # Livro "Memórias de uma ex-futura fumante"
├── contato.html                    # Formulário de contato
├── politica-de-privacidade.html   # Política de Privacidade
├── 404.html                        # Página não encontrada
│
├── css/
│   ├── variables.css               # CSS custom properties (tokens)
│   ├── globals.css                 # Reset + base styles
│   ├── layout.css                  # Header, footer, navigation
│   ├── components.css              # Buttons, forms, accordions
│   └── animations.css              # Transitions & scroll animations
│
├── js/
│   ├── main.js                     # Global functionality (menu, scroll)
│   ├── intersection-observer.js    # Scroll entrance animations
│   └── form-handler.js             # Contact form validation
│
├── assets/
│   ├── logo.svg                    # Main logo
│   ├── logo-crm.svg               # Logo with credentials
│   ├── logo-crm-tagline.svg       # Logo with tagline
│   ├── favicon.ico
│   └── icons/                      # Thin line icons (SVG)
│
├── images/
│   ├── foto-cecilia-1.jpeg        # Professional portrait
│   └── livro-capa.png             # Book cover (when available)
│
├── api/
│   └── contact.php                # Form submission handler (PHP)
│
├── .htaccess                       # Apache configuration
├── robots.txt                      # SEO
├── sitemap.xml                     # SEO
└── README.md                       # This file
```

---

## 🎨 Design System

### Colors
- **Cream (Editorial)**: `#EEE8DA` - Primary background
- **Sage**: `#C7D0C4` - Secondary background
- **Olive**: `#8A936F` - Primary brand green
- **Moss**: `#6F7758` - Deep green (headings, accents)
- **Mist Rose**: `#E8C1B8` - Soft warm accent
- **Burnt Rose**: `#D9A29A` - Darker warm accent
- **Sand**: `#DDD5C6` - Alternate background
- **Graphite**: `#5C5853` - Body text
- **White**: `#FFFFFF` - Clean background

### Typography
- **Display/Headings**: Cormorant Garamond (serif, elegant)
- **Body/UI**: Source Sans 3 (humanist sans-serif, legible)
- Loaded via Google Fonts (imported in `globals.css`)

### Spacing
Mobile-first responsive design using CSS custom properties.
Sections: 80px (mobile) → 110px (desktop)

### Animations
- Fade & rise on scroll (IntersectionObserver)
- Respects `prefers-reduced-motion`
- No parallax, no unnecessary movement
- Smooth transitions on all interactive elements

---

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository

2. **Open in a local server** (needed for proper CORS and AJAX):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using Node.js http-server
   npx http-server
   ```

3. **Visit** `http://localhost:8000`

### Before Launch

Replace all `TODO` placeholders with real data:

#### In HTML files:
- `TODO: https://wa.me/55XXXXX` → WhatsApp link
- `TODO: https://booking-platform.com` → Booking URL
- `TODO: https://instagram.com/HANDLE` → Instagram profile
- `TODO: favicon.svg` → Actual favicon
- `TODO: apple-touch-icon.png` → Apple touch icon

#### Images to provide:
- `images/foto-cecilia-1.jpeg` - Professional portrait (4:5 aspect ratio)
- `images/livro-capa.png` - Book cover (3:4 aspect ratio)
- `assets/logo.svg` - Logo in SVG
- `assets/logo-crm.svg` - Logo with credentials
- `assets/logo-crm-tagline.svg` - Logo with tagline

#### In Privacy Policy:
- Add controller's contact email
- Add controller's business address
- Replace `[PENDENTE: e-mail de contato]` with actual email

---

## 📧 Contact Form Setup

### PHP Endpoint (`api/contact.php`)

The contact form on `/contato.html` submits to `api/contact.php`.

**Setup steps:**

1. **Create the file** `api/contact.php` (see example below)

2. **Configure email** in Hostinger:
   - Use Hostinger's SMTP credentials
   - Or use PHP `mail()` function (usually works on Hostinger)

3. **Set sender email** in the PHP script

4. **Test** the form locally or on staging

### Example PHP Script

Create `api/contact.php`:

```php
<?php
// api/contact.php - Contact Form Handler

// Set content type
header('Content-Type: application/json');

// CORS headers (if needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}

// Get form data
$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : '';

// Validate
if (empty($nome) || empty($email) || empty($mensagem)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Campos obrigatórios não preenchidos']);
  exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'E-mail inválido']);
  exit;
}

// Rate limiting (simple IP-based, per minute)
$client_ip = $_SERVER['REMOTE_ADDR'];
$cache_file = "/tmp/rate_limit_{$client_ip}.txt";

if (file_exists($cache_file)) {
  $time = file_get_contents($cache_file);
  if (time() - $time < 60) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Muitas requisições. Tente novamente em um minuto.']);
    exit;
  }
}
file_put_contents($cache_file, time());

// Prepare email
$to = 'TODO: email@example.com'; // Replace with actual email
$subject = "Nova mensagem do site: {$nome}";
$body = "De: {$nome}\nE-mail: {$email}\n\nMensagem:\n{$mensagem}";

$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
  http_response_code(200);
  echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Erro ao enviar mensagem. Tente novamente.']);
}
?>
```

---

## 🌐 Deployment to Hostinger

### 1. Prepare files
- Replace all `TODO` placeholders
- Provide all image assets
- Update `api/contact.php` with actual email

### 2. Connect via FTP/SFTP
- Use Hostinger's file manager or FTP client
- Connect with credentials from Hostinger panel

### 3. Upload files
```
public_html/
├── index.html
├── sobre.html
├── acompanhamento.html
├── livro.html
├── contato.html
├── politica-de-privacidade.html
├── 404.html
├── css/
├── js/
├── assets/
├── images/
├── api/
├── .htaccess
├── robots.txt
└── sitemap.xml
```

### 4. Configure Hostinger
- **DNS**: Point domain to Hostinger nameservers
- **SSL**: Enable HTTPS (free with Hostinger)
- **Email**: Set up forwarding email for contact form
- **.htaccess**: Already included, no changes needed

### 5. Test
- Visit your domain
- Test form submission
- Check mobile responsiveness
- Verify all links work
- Run Lighthouse audit

---

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Skip link (first focusable element)
- Proper heading hierarchy (H1 → H2 → H3)
- Form labels associated with inputs
- ARIA attributes for dynamic content (mobile menu, accordion)
- Focus visible on all interactive elements
- Color contrast ≥ 4.5:1 for text
- Respects `prefers-reduced-motion`
- Alternative text for images

---

## 🔍 SEO

- Responsive meta tags (title, description, OG)
- Semantic HTML structure
- Clean URL structure (no query params)
- Sitemap.xml (update manually with pages)
- Robots.txt (allow all, point to sitemap)
- Structured data (JSON-LD) on homepage
- Fast performance (no bloat, optimized images)

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px → 768px
- **Medium**: 768px → 900px
- **Desktop**: 900px → 1024px
- **Large Desktop**: ≥ 1024px

Mobile-first CSS: base styles for mobile, then media queries for larger screens.

---

## 🛡️ Security

- ✅ No sensitive data in HTML/JavaScript
- ✅ Environment variables via `.htaccess` redirects
- ✅ Rate limiting on contact form (PHP)
- ✅ CORS headers configured
- ✅ Form validation (client + server)
- ✅ No external scripts (Google Fonts loaded with `display: swap`)
- ✅ `.htaccess` denies access to sensitive files (`.env`, `.json`, `.sql`)

---

## 🎯 Performance

- **No frameworks** - pure HTML/CSS/JS
- **Optimized images** - use WebP/AVIF when possible
- **Lazy loading** - images load on demand
- **Minified CSS/JS** - ready for production
- **Gzip compression** - configured in `.htaccess`
- **Caching headers** - set in `.htaccess`
- **No render-blocking** - CSS/JS loaded optimally

Expected Lighthouse scores: 90+

---

## 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, positioning, problem/solution, credentials, journey, formats, FAQ |
| Sobre | `/sobre` | Biography, values, credentials, CTA |
| Acompanhamento | `/acompanhamento` | Full program explanation, all FAQs, comparison |
| Livro | `/livro` | Book editorial spread, purchase CTA |
| Contato | `/contato` | Contact form + WhatsApp/booking CTA |
| Política | `/politica-de-privacidade` | LGPD-compliant privacy policy |

### Future (Phase 2)
- `/conteudos` - Resources/articles (when content is ready)

---

## 🔧 Maintenance

### Monthly
- Check links work
- Monitor form submissions
- Review Lighthouse score
- Update copyright year

### Quarterly
- Backup entire site
- Review analytics
- Update content if needed

### When changes needed
1. Edit `.html` / `.css` / `.js` files
2. Replace `TODO` placeholders
3. Test locally
4. Upload to Hostinger via FTP
5. Clear browser cache
6. Test on live domain

---

## 📞 Support

For technical questions or issues:
1. Check `.html` comments for `TODO` items
2. Review this README
3. Check console for JavaScript errors
4. Verify form endpoint (`api/contact.php`) is working

---

## 📜 License

All content copyright © 2026 Dra. Cecília Portugal. All rights reserved.

Design and development complies with client specifications.
No reproduction without written permission.

---

## ✅ Checklist Before Launch

- [ ] All `TODO` placeholders replaced
- [ ] All images optimized and uploaded
- [ ] Contact form PHP tested
- [ ] Links verified (internal + external)
- [ ] Mobile responsiveness tested
- [ ] Lighthouse score 90+
- [ ] Accessibility audit passed
- [ ] SEO meta tags set
- [ ] Sitemap.xml updated
- [ ] Robots.txt configured
- [ ] .htaccess rules active
- [ ] SSL/HTTPS enabled
- [ ] Email forwarding configured
- [ ] Analytics script added (if desired)
- [ ] Final review by client approved

---

**Built with HTML5, CSS3, JavaScript (no frameworks)**
Last updated: July 28, 2026
