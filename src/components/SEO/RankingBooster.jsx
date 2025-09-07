// Advanced SEO Ranking Booster Components

// Add Rich Snippets for School Rankings
export const addSchoolRankingSchema = () => {
  const rankingSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Candela Public School",
    "url": "https://candelapublicschool.com",
    "sameAs": [
      "https://www.facebook.com/candelapublicschool",
      "https://www.instagram.com/candelapublicschool",
      "https://www.youtube.com/candelapublicschool",
      "https://twitter.com/candelaschool"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent CBSE school with outstanding faculty. My child has shown remarkable improvement in both academics and personality development."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Best school in Mumbai for holistic education. Modern facilities and caring teachers make it the perfect choice for our children."
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "CBSE Affiliation",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Central Board of Secondary Education"
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-ranking', 'true');
  script.textContent = JSON.stringify(rankingSchema);
  document.head.appendChild(script);
};

// Add Service Schema for Educational Services
export const addServiceSchema = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality CBSE Education",
    "description": "Comprehensive CBSE education from Playgroup to Class 12 with modern facilities and experienced faculty",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Candela Public School",
      "url": "https://candelapublicschool.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mumbai"
    },
    "serviceType": "Educational Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Playgroup & Nursery",
            "description": "Early childhood education program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course", 
            "name": "Primary Education (1-5)",
            "description": "Foundation level CBSE curriculum"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Secondary Education (6-12)",
            "description": "Advanced CBSE curriculum"
          }
        }
      ]
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-service', 'true');
  script.textContent = JSON.stringify(serviceSchema);
  document.head.appendChild(script);
};

// Add How-To Schema for Admission Process
export const addHowToSchema = () => {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Apply for Admission at Candela Public School",
    "description": "Step-by-step guide to apply for admission at Mumbai's best CBSE school",
    "image": "https://candelapublicschool.com/images/admission-process.jpg",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Required Documents"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Fill Online Application",
        "text": "Visit our website and fill the online admission application form with student details",
        "url": "https://candelapublicschool.com/admissions"
      },
      {
        "@type": "HowToStep",
        "name": "Submit Documents",
        "text": "Submit required documents including birth certificate, previous school records, and photographs"
      },
      {
        "@type": "HowToStep",
        "name": "Interaction Session",
        "text": "Attend the parent-child interaction session with our admission team"
      },
      {
        "@type": "HowToStep",
        "name": "Admission Confirmation",
        "text": "Receive admission confirmation and complete the enrollment process"
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-howto', 'true');
  script.textContent = JSON.stringify(howToSchema);
  document.head.appendChild(script);
};

// Add Q&A Schema for Better SERP Features
export const addQASchema = () => {
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Which is the best CBSE school in Mumbai?",
      "text": "Looking for the best CBSE school in Mumbai for my child's admission",
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candela Public School is widely recognized as one of the best CBSE schools in Mumbai, offering quality education from Playgroup to Class 12 with modern facilities, experienced faculty, and excellent academic results.",
        "author": {
          "@type": "Organization",
          "name": "Candela Public School"
        }
      }
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-qa', 'true');
  script.textContent = JSON.stringify(qaSchema);
  document.head.appendChild(script);
};

// Add Speakable Schema for Voice Search
export const addSpeakableSchema = () => {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Candela Public School - Best CBSE School Mumbai",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".school-description", ".admission-info"]
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-speakable', 'true');
  script.textContent = JSON.stringify(speakableSchema);
  document.head.appendChild(script);
};

// Add all ranking booster schemas
export const addAllRankingSchemas = () => {
  addSchoolRankingSchema();
  addServiceSchema();
  addHowToSchema();
  addQASchema();
  addSpeakableSchema();
};
