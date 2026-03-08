# QUOFFER LANDING PAGE BRIEF (SIMPLIFIED)
**Version 2.0 | MVP Launch | January 2026**

**Inspiration:** podtrait.ai, claude.com/product/overview

---

## PROJECT OVERVIEW

### Objective
Create a clean, modern landing page that clearly communicates Quoffer's value proposition without overwhelming visitors. Focus on product clarity over aggressive selling.

### Pages Required
1. **Landing Page** (main page with features & how it works)
2. **Privacy Policy** (separate page)

### Design Philosophy
- Clean and minimal (NOT busy or sales-heavy)
- Let the product speak for itself
- Warm and trustworthy (NOT cold tech)
- Professional but approachable

---

## BRAND IDENTITY (QUICK REFERENCE)

### Colors
```css
/* Primary */
--rich-brown: #584840;      /* Headlines, buttons, logo */
--cream: #FAF9F5;           /* Main background */
--warm-tan: #A27864;        /* Accents, subheadings */
--black: #000000;           /* Body text */

/* Secondary */
--soft-taupe: #BF9C86;      /* Borders */
--light-beige: #F8F5ED;     /* Alternate backgrounds */
```

### Typography
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Type Scale */
Hero: 56px / Bold / #584840
H2: 40px / SemiBold / #584840
H3: 32px / SemiBold / #584840
H4: 24px / Medium / #A27864
Body: 16px / Regular / #000000
Small: 14px / Regular / #A27864
```

### Buttons
```css
/* Primary CTA */
background: #584840
color: #FAF9F5
padding: 12px 32px
border-radius: 8px
font-size: 16px
font-weight: 500

/* Secondary CTA */
background: transparent
color: #A27864
border: 1px solid #BF9C86
```

---

## LANDING PAGE STRUCTURE

### Layout Flow
```
1. Navigation (sticky header)
2. Hero Section
3. Key Benefits (3 items)
4. Features Grid (4 features)
5. How It Works (3 steps)
6. Final CTA
7. Footer
```

---

## PAGE SECTIONS (DETAILED)

### 1. Navigation
**Background:** Cream (#FAF9F5) with subtle bottom border  
**Height:** 64px  
**Sticky:** Yes

**Content:**
```
[Left]
Logo (handshake Q) - 32px height

[Right - Desktop]
Features | How It Works | Documentation | Install App

[Right - Mobile]
Hamburger menu icon
```

**Style:**
- Clean, minimal
- Cream background with 1px Soft Taupe bottom border
- Links in Warm Tan, hover to Rich Brown
- "Install App" button in Rich Brown

---

### 2. Hero Section
**Background:** Cream (#FAF9F5)  
**Layout:** Center-aligned, single column  
**Padding:** 120px top, 80px bottom

**Content:**
```
[Eyebrow Text - Warm Tan, 14px, centered]
For Shopify Merchants

[Headline - Rich Brown, 56px Bold, centered, max-width 900px]
Professional Quote Management
Built for Trust

[Subheadline - Black, 18px, centered, max-width 700px]
Hide prices, collect custom data, and convert quotes to orders.
Simple setup. No commission fees. Built on Shopify's native platform.

[CTA Group - centered, flex row]
[Primary Button] "Install Free"
[Secondary Button] "View Documentation"

[Trust Line - Warm Tan, 14px, centered]
Free plan available • No credit card required • 5-minute setup
```

**Visual (below text):**
- Clean dashboard screenshot or abstract illustration
- Width: 1200px max
- Subtle shadow
- Rounded corners (8px)

---

### 3. Key Benefits
**Background:** Light Beige (#F8F5ED)  
**Layout:** 3 columns (stack on mobile)  
**Padding:** 80px vertical

**Content:**
```
[Section Label - Warm Tan, 14px, centered]
Why Quoffer

[3 Benefit Cards - horizontal layout]

Card 1:
[Icon: Handshake - Warm Tan, 48px]
[Title: "No Commission Fees" - Rich Brown, 24px Medium]
[Text: "Flat monthly pricing. Keep your margins." - Black, 16px]

Card 2:
[Icon: Zap - Warm Tan, 48px]
[Title: "5-Minute Setup" - Rich Brown, 24px Medium]
[Text: "Guided configuration. Live preview. No coding." - Black, 16px]

Card 3:
[Icon: Shield - Warm Tan, 48px]
[Title: "Shopify Native" - Rich Brown, 24px Medium]
[Text: "App embed system. No theme editing required." - Black, 16px]
```

**Card Style:**
- White background
- 1px Soft Taupe border
- 32px padding
- 8px border radius
- Subtle hover lift effect

---

### 4. Features Grid
**Background:** Cream (#FAF9F5)  
**Layout:** 2x2 grid (stack on mobile)  
**Padding:** 80px vertical

**Content:**
```
[Section Heading - Rich Brown, 40px SemiBold, centered]
Everything You Need

[Section Subheading - Black, 18px, centered, max-width 700px]
Simple by default. Powerful when needed.
```

**Feature Cards (4 total):**

#### Feature 1: Smart Quote Button
```
[Icon: MousePointer - Warm Tan, 40px]

[Title - Rich Brown, 24px Medium]
Smart Quote Button

[Description - Black, 16px]
Replace "Add to Cart" with "Request Quote" on any product. Show to all customers or specific groups. Configure placement and styling without code.

[Feature List - Warm Tan, 14px]
• Product/collection-level control
• Customer type filtering
• Custom button styling
```

#### Feature 2: Price Visibility
```
[Icon: EyeOff - Warm Tan, 40px]

[Title - Rich Brown, 24px Medium]
Hide Prices for B2B

[Description - Black, 16px]
Control who sees prices on your storefront. Perfect for wholesale, B2B, or quote-only products. Simple rules, instant updates.

[Feature List - Warm Tan, 14px]
• Hide by customer tags
• Show/hide by product
• Replace with custom text
```

#### Feature 3: Custom Forms
```
[Icon: FileText - Warm Tan, 40px]

[Title - Rich Brown, 24px Medium]
Custom Quote Forms

[Description - Black, 16px]
Collect exactly the data you need. Add unlimited custom fields, file uploads, and business information. Auto-fill for returning customers.

[Feature List - Warm Tan, 14px]
• Unlimited custom fields
• File upload support (5MB)
• Auto-fill customer data
```

#### Feature 4: Quote Management
```
[Icon: Inbox - Warm Tan, 40px]

[Title - Rich Brown, 24px Medium]
Centralized Inbox

[Description - Black, 16px]
All quotes in one place. Filter, search, and track status. One-click conversion to Shopify Draft Orders for seamless checkout.

[Feature List - Warm Tan, 14px]
• Smart status tracking
• Draft Order creation
• Search and filter
```

**Card Style:**
- Light Beige background
- No border (clean look)
- 40px padding
- 8px border radius
- Icon at top, left-aligned content

---

### 5. How It Works
**Background:** Light Beige (#F8F5ED)  
**Layout:** 3 columns, connected with subtle lines  
**Padding:** 80px vertical

**Content:**
```
[Section Heading - Rich Brown, 40px SemiBold, centered]
How It Works

[Section Subheading - Black, 18px, centered]
From setup to first quote in three simple steps.
```

**Step Cards:**

#### Step 1
```
[Number Circle - Warm Tan background, Cream text, 64px circle]
1

[Title - Rich Brown, 24px Medium]
Install & Configure

[Description - Black, 16px]
Activate the app, enable app embed in your theme, and configure your quote button using our guided setup.

[Time Badge - Light pill, Warm Tan text]
⏱ 5 minutes
```

#### Step 2
```
[Number Circle - Warm Tan background, Cream text, 64px circle]
2

[Title - Rich Brown, 24px Medium]
Customers Request Quotes

[Description - Black, 16px]
Buyers click "Request Quote," fill out your custom form, and submit. You receive instant notification.

[Time Badge - Light pill, Warm Tan text]
⏱ <1 minute
```

#### Step 3
```
[Number Circle - Warm Tan background, Cream text, 64px circle]
3

[Title - Rich Brown, 24px Medium]
Review & Convert

[Description - Black, 16px]
Review quotes in your dashboard. Create Shopify Draft Orders with one click. Customers receive checkout links.

[Time Badge - Light pill, Warm Tan text]
⏱ 10 seconds
```

**Card Style:**
- White background
- 32px padding
- 8px border radius
- Centered content
- Connector lines between cards (desktop only)

---

### 6. Final CTA
**Background:** Rich Brown (#584840) - Full width  
**Padding:** 80px vertical

**Content:**
```
[Headline - Cream, 40px SemiBold, centered]
Ready to Get Started?

[Subheadline - Light Beige, 18px, centered]
Start with our free plan. No credit card required.

[CTA Button - Cream background, Rich Brown text, large]
Install on Shopify

[Trust Line - Light Beige, 14px, centered]
Free forever plan available • Setup in 5 minutes • No commission fees
```

---

### 7. Footer
**Background:** Light Beige (#F8F5ED)  
**Layout:** 3 columns, simple  
**Padding:** 60px vertical

**Content:**
```
[Column 1: Brand]
Logo (dark version)
Tagline: "Trusted partnerships. Instant results."

[Column 2: Product]
Features
Documentation
Support
Changelog

[Column 3: Legal]
Privacy Policy
Terms of Service
Contact

[Footer Bottom - centered, Warm Tan, 14px]
© 2026 Quoffer. All rights reserved.
```

---

## PRIVACY POLICY PAGE

### Layout
**Simple, readable, single column**

**Structure:**
```
[Navigation - same as landing page]

[Hero - Light Beige background]
Privacy Policy
Last updated: January 10, 2026

[Content - White background, max-width 800px, centered]
[All sections with clear headings and body text]

[Footer - same as landing page]
```

### Content Sections

```markdown
# Privacy Policy

**Last Updated:** January 10, 2026

## Introduction

Quoffer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Shopify application.

## Information We Collect

### Information You Provide
- **Account Information:** When you install Quoffer, we collect your Shopify store URL, contact email, and store name.
- **Quote Data:** Quote requests submitted through your store, including customer information, product details, and custom form fields.
- **Configuration Settings:** Your app settings, button configurations, and form customizations.

### Information Automatically Collected
- **Usage Data:** How you interact with the app, features used, and frequency of access.
- **Technical Data:** IP address, browser type, device information, and access times.

## How We Use Your Information

We use the information we collect to:
- Provide and maintain the Quoffer application
- Process quote requests on your behalf
- Send service-related notifications
- Improve our product and user experience
- Provide customer support
- Comply with legal obligations

## Data Storage and Security

- **Storage Location:** Your data is stored on secure servers located in [specify region].
- **Encryption:** All data transmitted between your store and our servers is encrypted using industry-standard SSL/TLS.
- **Access Controls:** We implement strict access controls and only authorized personnel can access your data.
- **Retention:** We retain your data as long as your account is active or as needed to provide services.

## Data Sharing and Disclosure

We do NOT sell your personal information. We may share your information only in these circumstances:

- **With Shopify:** As required to operate the app on the Shopify platform.
- **Service Providers:** Third-party vendors who help us provide services (e.g., hosting, analytics).
- **Legal Requirements:** When required by law, court order, or to protect our rights.
- **Business Transfers:** In connection with a merger, sale, or acquisition.

## Your Rights

Depending on your location, you may have the right to:
- **Access:** Request copies of your personal data
- **Correction:** Request correction of inaccurate data
- **Deletion:** Request deletion of your data
- **Portability:** Request transfer of your data
- **Opt-out:** Unsubscribe from marketing communications

To exercise these rights, contact us at privacy@quoffer.com.

## Third-Party Services

Quoffer integrates with:
- **Shopify:** Subject to Shopify's Privacy Policy
- **Analytics Services:** We may use analytics tools to improve our service

These third parties have their own privacy policies governing their use of your information.

## Cookies and Tracking

We use cookies and similar technologies to:
- Maintain your session
- Remember your preferences
- Analyze usage patterns

You can control cookie settings through your browser preferences.

## Data Protection for EU Users (GDPR)

If you're in the European Economic Area (EEA), you have additional rights under GDPR:
- Right to object to processing
- Right to restriction of processing
- Right to data portability
- Right to lodge a complaint with a supervisory authority

Our lawful basis for processing is typically:
- Performance of contract (providing the service you requested)
- Legitimate interests (improving our product)
- Legal compliance

## Children's Privacy

Quoffer is not intended for use by individuals under 16 years of age. We do not knowingly collect data from children.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by:
- Posting the new Privacy Policy on this page
- Updating the "Last Updated" date
- Sending an email notification (for significant changes)

## Contact Us

If you have questions about this Privacy Policy, please contact us:

**Email:** privacy@quoffer.com  
**Address:** [Your business address]  
**Support:** https://docs.quoffer.com/support

## Data Processing Agreement

For merchants who need a Data Processing Agreement (DPA) for GDPR compliance, please contact us at legal@quoffer.com.
```

---

## TECHNICAL REQUIREMENTS

### Technology Stack
```
Framework: React.jsx (single file)
Styling: Tailwind CSS (core utilities only)
Icons: Lucide React
Fonts: Inter (Google Fonts)
```

### Required Components

#### Smooth Scroll Navigation
```jsx
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ 
    behavior: 'smooth' 
  });
};
```

#### Mobile Menu
```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### Responsive Design
```
Mobile: < 768px (stack all grids)
Tablet: 768px - 1024px
Desktop: > 1024px
```

### Performance
- Lazy load images below fold
- Optimize images (WebP format)
- Minimal JavaScript
- Fast initial load (< 2s)

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- ARIA labels
- 4.5:1 contrast ratios
- Focus indicators

---

## DESIGN REFERENCES

### Inspiration from podtrait.ai
- Clean, minimal hero
- Center-aligned content
- Generous whitespace
- Feature cards with icons
- Simple, clear copy

### Inspiration from claude.com/product/overview
- Professional but approachable
- Clean typography hierarchy
- Feature-focused (not sales-heavy)
- Consistent spacing system
- Subtle interactions

### What to AVOID
❌ Aggressive sales copy
❌ Too many CTAs
❌ Busy backgrounds
❌ Generic stock photos
❌ Overwhelming color use
❌ Complex animations

### What to EMBRACE
✅ Clean whitespace
✅ Clear hierarchy
✅ Focused messaging
✅ Subtle warmth (brand colors)
✅ Simple interactions
✅ Professional tone

---

## COPY GUIDELINES

### Voice & Tone
- **Clear:** No jargon, no hype
- **Helpful:** Focus on solving problems
- **Professional:** But warm and human
- **Honest:** Transparent about what the product does

### Example Good Copy
✅ "Professional quote management built for Shopify"
✅ "Hide prices, collect custom data, convert to orders"
✅ "Simple setup. No commission fees."
✅ "Everything you need. Nothing you don't."

### Example Bad Copy
❌ "Revolutionary quote management platform"
❌ "Supercharge your sales with cutting-edge technology"
❌ "The ultimate solution for all your quoting needs"
❌ "10X your conversion rates guaranteed!"

---

## ASSET REQUIREMENTS

### Images Needed
1. **Hero Visual**
   - Dashboard screenshot or clean illustration
   - 1200x800px minimum
   - Format: PNG or WebP
   - Style: Clean, warm filter

2. **Icons** (from Lucide React)
   - Handshake
   - MousePointer
   - EyeOff
   - FileText
   - Inbox
   - Zap
   - Shield
   - Menu (hamburger)
   - X (close menu)

### Logo
- Handshake Q logo (provided separately)
- SVG format preferred
- Two versions: light and dark backgrounds

---

## FILES TO DELIVER

### 1. Landing Page
**Filename:** `quoffer-landing.jsx`
- Complete landing page
- All sections included
- Responsive design
- All interactions working

### 2. Privacy Policy Page
**Filename:** `privacy-policy.jsx`
- Clean, readable layout
- Same navigation/footer as landing page
- Mobile-responsive
- Print-friendly styling

### 3. Shared Navigation Component
- Can be extracted if needed for reuse
- Sticky header
- Mobile menu

---

## LAUNCH CHECKLIST

### Pre-Launch
- [ ] All brand colors match exactly
- [ ] Inter font loaded correctly
- [ ] Mobile responsive at all breakpoints
- [ ] All links work (external open in new tab)
- [ ] No console errors
- [ ] Accessibility checks pass
- [ ] Fast page load (< 2s)
- [ ] Privacy policy content reviewed

### Optional Enhancements
- [ ] Add subtle hover animations
- [ ] Implement scroll animations (fade in)
- [ ] Add loading state for CTA button
- [ ] Add meta tags for SEO
- [ ] Add Open Graph tags for social sharing

---

## FINAL NOTES

### Key Success Metrics
1. **Clarity:** Visitor understands what Quoffer does in < 5 seconds
2. **Trust:** Warm brand colors and clean design build confidence
3. **Simplicity:** No overwhelming information or choices
4. **Action:** Clear path to installation

### Remember
- Less is more
- Clean over clever
- Clear over creative
- Professional warmth over corporate coldness
- Let the product shine

**Build something clean, trustworthy, and focused. 🤝**