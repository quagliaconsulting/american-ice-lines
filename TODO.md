# TODO: American Ice Lines Search Fund Website Development

## Project Overview
Replace the existing website at `/home/james/Documents/jq_dev/american-ice-lines/ice-website` with a new search fund website while maintaining the same deployment infrastructure. The new site should reflect the sophisticated design and functionality created in the prototype.

## Strategic Messaging (From Leadership)
- **Primary Focus**: Investing in proven small businesses
- **Partnership Approach**: Partnering with founders to realize growth
- **Market Strategy**: Connecting players in fragmented industries to consolidate market share
- **Value Creation**: Capitalizing on revenue and operating synergies across portfolio businesses
- **Expansion**: Expanding across territories leveraging portfolio companies' best practices
- **Exit Strategy**: Consolidate fragmented markets and exit to PE in 5-7 years, sharing upside with portfolio company founders
- **Positioning**: Balance professionalism with authenticity (acknowledge this is the beginning of their journey)

## Core Value Proposition
*"Investor group searching for like-minded self-starters. We have experience in revenue growth, operations and transactions. Looking for the right transactions that together fuel growth and optimize operations. Our portfolio company founders continue to do what they do best and share in the upside as we grow and synergize the pool of similarly fitting businesses. Turning competitors into collaborators."*

## Founding Team (Extract from LinkedIn PDFs)
**PRIORITY TASK**: Extract detailed information from the 5 LinkedIn profile PDFs:
- `Profile.pdf` - Matt Allgeier (CEO)
- `Profile (1).pdf` - James Quaglia (CTO) 
- `Profile (2).pdf` - Jonathon Bauman (COO)
- `Profile (3).pdf` - Patrick Ritschel (CSO)
- `Profile (4).pdf` - Cole Borland (CPO)

For each profile, extract:
- Full name and current title
- Professional summary
- Work experience (companies, roles, duration)
- Education background
- Key skills and achievements
- LinkedIn headline/tagline

## Development Tasks

### Phase 1: Environment Setup & Foundation (Days 1-2)

#### 1.1 Project Structure Analysis
```bash
# Analyze existing project structure
cd /home/james/Documents/jq_dev/american-ice-lines/ice-website
ls -la
cat package.json
```

#### 1.2 Backup Existing Site
```bash
# Create backup of current site
cp -r ice-website ice-website-backup-$(date +%Y%m%d)
```

#### 1.3 Initialize New Project
```bash
# Create new Next.js project or React project (depending on existing infrastructure)
# Check if existing project is Next.js, React, or other
npm list next react

# If Next.js project exists, clean it but keep deployment config
# Keep: next.config.js, vercel.json, netlify.toml, package.json deployment scripts
# Replace: all src/pages/components files
```

#### 1.4 Install Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react recharts papaparse
npm install @headlessui/react @heroicons/react
npm install framer-motion # for animations
npm install react-hook-form # for contact forms
```

### Phase 2: Core Pages Development (Days 3-7)

#### 2.1 Homepage (`/` or `/index.js`)
Copy the design from the prototype with these customizations:

**Hero Section Updates:**
```jsx
// Update hero content with American Ice Lines messaging
<h1>Consolidating Fragmented Markets Through Strategic Partnerships</h1>
<p>We invest in proven small businesses, partnering with founders to realize growth through market consolidation and operational synergies. Together, we turn competitors into collaborators.</p>
```

**Stats Section Updates:**
```jsx
// Update with realistic early-stage metrics
const stats = [
  { number: "5", label: "Experienced Founders" },
  { number: "50+", label: "Years Combined Experience" },
  { number: "3", label: "Target Industries" },
  { number: "5-7", label: "Year Exit Timeline" }
];
```

**Value Proposition Section:**
```jsx
<h2>Why Partner With American Ice Lines?</h2>
<p>We're an investor group of like-minded self-starters with experience in revenue growth, operations, and transactions. We look for the right opportunities that together fuel growth and optimize operations.</p>
<ul>
  <li>Proven small business focus</li>
  <li>Founder partnership model</li>
  <li>Market consolidation expertise</li>
  <li>Shared upside structure</li>
  <li>Territory expansion strategy</li>
</ul>
```

#### 2.2 Strategy Page (`/strategy`)
Create comprehensive strategy page:

```jsx
// /pages/strategy.js or /src/pages/Strategy.jsx
export default function Strategy() {
  return (
    <main>
      <section className="hero-section">
        <h1>Our Investment Strategy</h1>
        <p>Consolidating fragmented markets through strategic partnerships</p>
      </section>
      
      <section className="investment-thesis">
        <h2>Investment Thesis</h2>
        <div className="thesis-grid">
          <div className="thesis-card">
            <h3>Proven Small Businesses</h3>
            <p>We invest in established companies with track records...</p>
          </div>
          <div className="thesis-card">
            <h3>Market Consolidation</h3>
            <p>Connecting players in fragmented industries...</p>
          </div>
          <div className="thesis-card">
            <h3>Operational Synergies</h3>
            <p>Capitalizing on revenue and operating synergies...</p>
          </div>
        </div>
      </section>
      
      <section className="target-criteria">
        <h2>Investment Criteria</h2>
        <div className="criteria-list">
          <div className="criteria-item">
            <h4>Revenue Range</h4>
            <p>$2M - $20M annual revenue</p>
          </div>
          <div className="criteria-item">
            <h4>Market Position</h4>
            <p>Established players in fragmented markets</p>
          </div>
          <div className="criteria-item">
            <h4>Growth Potential</h4>
            <p>Clear path to territory expansion and consolidation</p>
          </div>
        </div>
      </section>
      
      <section className="process-timeline">
        <h2>Our Process</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>1. Identification</h4>
            <p>Source proven businesses in target markets</p>
          </div>
          <div className="timeline-item">
            <h4>2. Partnership</h4>
            <p>Structure deals that benefit existing founders</p>
          </div>
          <div className="timeline-item">
            <h4>3. Growth</h4>
            <p>Implement best practices across portfolio</p>
          </div>
          <div className="timeline-item">
            <h4>4. Exit</h4>
            <p>5-7 year timeline to PE exit, sharing upside</p>
          </div>
        </div>
      </section>
    </main>
  );
}
```

#### 2.3 Team Page (`/team`)
**CRITICAL**: Extract founder information from PDFs first

```jsx
// /pages/team.js
const founders = [
  {
    name: "Matt Allgeier",
    role: "Chief Executive Officer", 
    bio: "// EXTRACT FROM Profile.pdf",
    experience: "// EXTRACT FROM Profile.pdf",
    education: "// EXTRACT FROM Profile.pdf",
    linkedin: "https://www.linkedin.com/in/mattallgeier/",
    image: "/images/team/matt-allgeier.jpg" // placeholder
  },
  {
    name: "James Quaglia",
    role: "Chief Technology Officer",
    bio: "// EXTRACT FROM Profile (1).pdf", 
    experience: "// EXTRACT FROM Profile (1).pdf",
    education: "// EXTRACT FROM Profile (1).pdf",
    linkedin: "https://www.linkedin.com/in/james-quaglia-06143bb5/",
    image: "/images/team/james-quaglia.jpg"
  },
  // ... Continue for all 5 founders
];

export default function Team() {
  return (
    <main>
      <section className="team-hero">
        <h1>Meet Our Team</h1>
        <p>Experienced operators and strategists committed to building lasting value through partnership and market consolidation.</p>
      </section>
      
      <section className="founders-section">
        <h2>Founding Partners</h2>
        <div className="founders-grid">
          {founders.map((founder) => (
            <div key={founder.name} className="founder-card">
              <img src={founder.image} alt={founder.name} />
              <h3>{founder.name}</h3>
              <h4>{founder.role}</h4>
              <p>{founder.bio}</p>
              <div className="founder-details">
                <h5>Experience</h5>
                <p>{founder.experience}</p>
                <h5>Education</h5>
                <p>{founder.education}</p>
              </div>
              <a href={founder.linkedin} target="_blank">LinkedIn Profile</a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="advisors-section">
        <h2>Advisory Board</h2>
        <p>We work with experienced advisors who provide strategic guidance and industry expertise.</p>
        {/* Add advisor information when available */}
      </section>
    </main>
  );
}
```

#### 2.4 Portfolio Page (`/portfolio`)
```jsx
// /pages/portfolio.js
export default function Portfolio() {
  return (
    <main>
      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>Building a network of successful businesses through strategic partnerships</p>
      </section>
      
      <section className="current-investments">
        <h2>Current Investments</h2>
        <div className="portfolio-grid">
          <div className="portfolio-placeholder">
            <h3>Growing Our Portfolio</h3>
            <p>We're actively seeking our first investments in proven small businesses across fragmented markets.</p>
            <a href="/contact" className="btn-primary">Partner With Us</a>
          </div>
        </div>
      </section>
      
      <section className="target-companies">
        <h2>Companies We're Seeking</h2>
        <div className="target-grid">
          <div className="target-card">
            <h4>Service Businesses</h4>
            <p>Local service companies ready for regional expansion</p>
          </div>
          <div className="target-card">
            <h4>Distribution Companies</h4>
            <p>Regional distributors with consolidation opportunities</p>
          </div>
          <div className="target-card">
            <h4>Manufacturing</h4>
            <p>Niche manufacturers with expansion potential</p>
          </div>
        </div>
      </section>
      
      <section className="success-metrics">
        <h2>Our Value Creation Approach</h2>
        <ul>
          <li>Revenue synergies through cross-selling</li>
          <li>Operational efficiencies across portfolio</li>
          <li>Best practice sharing between companies</li>
          <li>Geographic expansion strategies</li>
          <li>Founder-friendly partnership structures</li>
        </ul>
      </section>
    </main>
  );
}
```

#### 2.5 For Entrepreneurs Page (`/entrepreneurs`)
```jsx
// /pages/entrepreneurs.js
export default function ForEntrepreneurs() {
  return (
    <main>
      <section className="entrepreneur-hero">
        <h1>Partner With Us</h1>
        <p>We believe the best deals are partnerships, not acquisitions. Keep doing what you do best while we help you grow.</p>
      </section>
      
      <section className="partnership-model">
        <h2>Our Partnership Model</h2>
        <div className="model-grid">
          <div className="model-card">
            <h3>Stay in Control</h3>
            <p>Continue leading your business with our strategic support</p>
          </div>
          <div className="model-card">
            <h3>Share the Upside</h3>
            <p>Participate in value creation as we grow together</p>
          </div>
          <div className="model-card">
            <h3>Access Network Effects</h3>
            <p>Benefit from synergies across our portfolio companies</p>
          </div>
        </div>
      </section>
      
      <section className="why-partner">
        <h2>Why Partner With American Ice Lines?</h2>
        <ul>
          <li><strong>Proven Track Record:</strong> Team with experience in revenue growth and operations</li>
          <li><strong>Long-term Thinking:</strong> 5-7 year timeline to build sustainable value</li>
          <li><strong>Collaborative Approach:</strong> Turn competitors into collaborators</li>
          <li><strong>Shared Success:</strong> Founders participate in exit proceeds</li>
          <li><strong>Operational Excellence:</strong> Best practices shared across portfolio</li>
        </ul>
      </section>
      
      <section className="ideal-partners">
        <h2>Ideal Partners</h2>
        <p>We're looking for established business owners who:</p>
        <ul>
          <li>Have built profitable, sustainable businesses</li>
          <li>Are interested in growth and expansion</li>
          <li>Value collaboration over competition</li>
          <li>Want to participate in creating something larger</li>
          <li>Are excited about sharing best practices</li>
        </ul>
      </section>
      
      <section className="process-overview">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <h4>1. Initial Conversation</h4>
            <p>No-pressure discussion about your goals and our approach</p>
          </div>
          <div className="step">
            <h4>2. Due Diligence</h4>
            <p>Mutual evaluation to ensure good fit</p>
          </div>
          <div className="step">
            <h4>3. Partnership Structure</h4>
            <p>Design deal that works for everyone</p>
          </div>
          <div className="step">
            <h4>4. Growth Together</h4>
            <p>Implement strategies for sustainable expansion</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to Explore a Partnership?</h2>
        <p>Let's have a conversation about how we can grow together.</p>
        <a href="/contact" className="btn-primary">Start a Conversation</a>
      </section>
    </main>
  );
}
```

#### 2.6 Contact Page (`/contact`)
```jsx
// /pages/contact.js
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Whether you're a business owner or investor, we'd love to hear from you.</p>
      </section>
      
      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiryType">I'm interested in *</label>
                <select 
                  id="inquiryType" 
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="investment">Investment Information</option>
                  <option value="general">General Inquiry</option>
                  <option value="advisor">Advisory Role</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@americanicelines.com</p>
            </div>
            
            <div className="contact-item">
              <h4>Phone</h4>
              <p>(555) 123-4567</p>
            </div>
            
            <div className="contact-item">
              <h4>Team</h4>
              <p>Matt Allgeier - CEO<br/>
              matt@americanicelines.com</p>
              
              <p>James Quaglia - CTO<br/>
              james@americanicelines.com</p>
              
              <p>Jonathon Bauman - COO<br/>
              jon@americanicelines.com</p>
              
              <p>Patrick Ritschel - CSO<br/>
              patrick@americanicelines.com</p>
              
              <p>Cole Borland - CPO<br/>
              cole@americanicelines.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### Phase 3: Styling & Components (Days 8-10)

#### 3.1 Copy Existing Styles
Create `styles/globals.css` with the exact styling from the prototype:

```css
/* Copy the entire CSS from the prototype, ensuring: */
/* 1. Responsive design */
/* 2. Modern animations */
/* 3. Professional color scheme */
/* 4. Clean typography */
/* 5. Consistent component styling */
```

#### 3.2 Create Reusable Components
```jsx
// components/Header.js
// components/Footer.js  
// components/TeamCard.js
// components/PortfolioCard.js
// components/ContactForm.js
// components/Layout.js
```

#### 3.3 Navigation Updates
```jsx
// Update navigation to include:
const navItems = [
  { href: "/", label: "Home" },
  { href: "/strategy", label: "Strategy" },
  { href: "/team", label: "Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/entrepreneurs", label: "For Entrepreneurs" },
  { href: "/contact", label: "Contact" }
];
```

### Phase 4: Content Integration (Days 11-12)

#### 4.1 Extract LinkedIn Profile Data
**CRITICAL TASK**: Process the 5 PDF files:

```bash
# Use a PDF parser to extract text from each profile
# Install pdf-parse or similar tool
npm install pdf-parse

# Create script to extract founder information
node scripts/extract-profiles.js
```

#### 4.2 Professional Photography
- Plan professional headshot session for all 5 founders
- Create placeholder images with proper dimensions
- Optimize images for web performance

#### 4.3 Content Review
- Ensure all messaging aligns with strategic goals
- Balance professionalism with authenticity
- Add appropriate disclaimers for early-stage fund

### Phase 5: Advanced Features (Days 13-15)

#### 5.1 SEO Optimization
```jsx
// Add to each page
import Head from 'next/head';

<Head>
  <title>American Ice Lines - Strategic Business Partnerships</title>
  <meta name="description" content="We invest in proven small businesses, partnering with founders to consolidate fragmented markets and realize growth through operational synergies." />
  <meta property="og:title" content="American Ice Lines - Strategic Business Partnerships" />
  <meta property="og:description" content="Consolidating fragmented markets through strategic partnerships" />
  <meta property="og:image" content="/images/og-image.jpg" />
</Head>
```

#### 5.2 Analytics Integration
```jsx
// Add Google Analytics 4
// Install gtag
npm install gtag

// Add to _app.js or layout
```

#### 5.3 Form Integration
```jsx
// Set up form handling with:
// - Email integration (SendGrid, Mailgun, or SMTP)
// - Form validation
// - Success/error messaging
// - Spam protection
```

### Phase 6: Testing & Deployment (Days 16-17)

#### 6.1 Testing Checklist
- [ ] All pages load correctly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Forms work and send emails
- [ ] Navigation functions properly
- [ ] Images load optimally
- [ ] SEO meta tags present
- [ ] Performance optimization (< 3s load time)
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

#### 6.2 Pre-Launch Checklist
- [ ] Domain configured properly
- [ ] SSL certificate active
- [ ] Analytics tracking implemented
- [ ] Error pages created (404, 500)
- [ ] Sitemap generated
- [ ] robots.txt configured

#### 6.3 Deployment
```bash
# If using existing deployment setup
npm run build
npm run deploy

# Or if using Vercel/Netlify
vercel --prod
# or
netlify deploy --prod
```

### Phase 7: Launch & Post-Launch (Day 18+)

#### 7.1 Soft Launch
- Internal team review
- Test all functionality
- Gather feedback and make adjustments

#### 7.2 Public Launch
- Announce on LinkedIn
- Update email signatures
- Share with network

#### 7.3 Ongoing Maintenance
- Regular content updates
- Performance monitoring
- Security updates
- SEO optimization

## Key Files to Create/Modify

### Core Files
```
/pages
  ├── index.js (Homepage)
  ├── strategy.js
  ├── team.js
  ├── portfolio.js
  ├── entrepreneurs.js
  └── contact.js

/components
  ├── Layout.js
  ├── Header.js
  ├── Footer.js
  ├── TeamCard.js
  ├── PortfolioCard.js
  └── ContactForm.js

/styles
  ├── globals.css
  └── components.css

/public
  ├── images/
  │   ├── team/
  │   ├── logos/
  │   └── og-image.jpg
  └── documents/
```

### Configuration Files to Preserve
- `package.json` (update dependencies but keep deployment scripts)
- `next.config.js` (if Next.js)
- `vercel.json` or `netlify.toml` (deployment config)
- `.env.local` (environment variables)

## Success Metrics
- **Load Time**: < 3 seconds
- **Mobile Performance**: > 90 PageSpeed score
- **Conversion**: Contact form completion rate > 5%
- **SEO**: Rank for "search fund", "business acquisition", "small business investment"
- **Professional Impression**: Convey sophistication while remaining approachable

## Risk Mitigation
1. **Backup existing site** before making changes
2. **Test thoroughly** before replacing live site
3. **Keep deployment infrastructure** unchanged
4. **Gradual rollout** if possible (staging environment)
5. **Monitor performance** post-launch

## Notes for Claude Code
- The existing site structure should be preserved for deployment
- Focus on replacing content and styling while maintaining technical infrastructure
- Prioritize professional appearance balanced with authenticity
- Emphasize partnership over acquisition in all messaging
- Include clear calls-to-action for both entrepreneurs and investors
- Ensure mobile responsiveness is perfect
- Use the founder profiles from PDFs to create compelling team bios

This TODO provides a complete roadmap for transforming the existing ice-website into a professional search fund platform that accurately represents American Ice Lines' strategy and team.