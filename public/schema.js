// Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebDev AL",
  "url": "https://www.webdev-al.com/",
  "logo": "https://www.webdev-al.com/logofinal.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+355688172927",
    "contactType": "customer support",
    "availableLanguage": ["English", "Albanian"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/webdev-al",
    "https://www.instagram.com/webdev_al",
    "https://wa.me/355688172927"
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
  "description": "Custom React web development services for fast, modern, and scalable websites. Tailored full-stack solutions for businesses.",
  "url": "https://www.webdev-al.com/",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Albania"
  },
  "telephone": "+355688172927",
  "openingHours": "Mo-Fr 00:00-24:00",
  "sameAs": [
    "https://www.linkedin.com/company/webdev-al",
    "https://www.instagram.com/webdev_al"
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
        "name": parts[i].charAt(0).toUpperCase() + parts[i].slice(1).replace(/-/g, ' '),
        "item": `https://www.webdev-al.com${currentPath}`
      });
    }
  }
  
  return breadcrumbList;
}

// Service schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Full-Stack Web Development",
  "provider": {
    "@type": "Organization",
    "name": "WebDev AL"
  },
  "description": "Custom React web development for fast, modern, and scalable websites. Tailored solutions for businesses.",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "EUR"
    }
  }
};

// Add schemas to page
document.addEventListener('DOMContentLoaded', () => {
  const schemas = [
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
    serviceSchema,
    createBreadcrumbList()
  ];
  
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
});