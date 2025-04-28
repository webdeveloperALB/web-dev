// Add all structured data in one file to improve loading performance
// Place this file in your public directory

// Organization schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebDev AL",
    "url": "https://www.webdev-al.com/",
    "logo": "https://www.webdev-al.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer support",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/webdev-al",
      "https://twitter.com/webdev_al",
      "https://github.com/webdev-al"
    ]
  };
  
  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WebDev AL",
    "url": "https://www.webdev-al.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.webdev-al.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  // ProfessionalService schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebDev AL",
    "description": "Expert Full-Stack Web Development services tailored for businesses.",
    "url": "https://www.webdev-al.com/",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "US"
    },
    "telephone": "+355688172927",
    "openingHours": "Mo-Fr 00:00-24:00",
    "sameAs": [
      "https://www.linkedin.com/company/webdev-al",
      "https://twitter.com/webdev_al"
    ]
  };
  
  // BreadcrumbList schema (created dynamically based on current page)
  function createBreadcrumbList() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(part => part);
    
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.webdev-al.com/"
        }
      ]
    };
    
    if (parts.length > 0) {
      let currentPath = '';
      
      for (let i = 0; i < parts.length; i++) {
        currentPath += '/' + parts[i];
        
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": i + 2,
          "name": parts[i].charAt(0).toUpperCase() + parts[i].slice(1),
          "item": `https://www.webdev-al.com${currentPath}`
        });
      }
    }
    
    return breadcrumbList;
  }
  
  // Add schemas to page
  document.addEventListener('DOMContentLoaded', () => {
    const schemas = [
      organizationSchema,
      websiteSchema,
      professionalServiceSchema,
      createBreadcrumbList()
    ];
    
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  });