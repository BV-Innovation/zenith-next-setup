# BV Innovation Website Deployment Guide

## GitHub Pages Setup

### 1. Repository Configuration
1. Push this code to your GitHub repository
2. Go to repository **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. Add **Custom domain**: `bvinnovation.com`

### 2. DNS Configuration at Your Domain Registrar

#### For Naked Domain (bvinnovation.com)
Create **A Records** pointing to GitHub Pages servers:
```
Host: @ (or leave blank for root domain)
Points to:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153
```

#### For WWW Subdomain (www.bvinnovation.com)
Create a **CNAME Record**:
```
Host: www
Points to: yourusername.github.io
```
*Replace `yourusername` with your actual GitHub username*

### 3. SSL Certificate
- GitHub Pages automatically provides SSL certificates
- Both `bvinnovation.com` and `www.bvinnovation.com` will be HTTPS-enabled
- `www.bvinnovation.com` will redirect to `bvinnovation.com`

### 4. Deployment Process

#### Automatic Deployment (Recommended)
- Push to `main` branch triggers automatic deployment
- GitHub Actions builds and deploys the site
- Live at `https://bvinnovation.com` within 5-10 minutes

#### Manual Deployment (Alternative)
```bash
npm install gh-pages --save-dev
npm run deploy
```

### 5. DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- Use `dig bvinnovation.com` or online DNS checkers to verify

### 6. Verification Commands
```bash
# Check A records
dig bvinnovation.com

# Check CNAME record
dig www.bvinnovation.com

# Check if site is live
curl -I https://bvinnovation.com
```

## Troubleshooting

### Common Issues:
1. **404 Error**: Ensure CNAME file contains `bvinnovation.com`
2. **SSL Issues**: Wait 24 hours for certificate provisioning
3. **DNS Issues**: Verify A and CNAME records are correctly set

### Support:
- GitHub Pages: https://docs.github.com/pages
- DNS Help: Contact your domain registrar