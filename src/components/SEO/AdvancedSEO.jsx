// Advanced SEO Schema Components for Top Rankings

// Course/Program Schema
export const addCourseSchema = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CBSE Education Program",
    "description": "Comprehensive CBSE curriculum from Playgroup to Class 12 at Candela Public School Mumbai",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Candela Public School",
      "url": "https://candelapublicschool.com"
    },
    "educationalLevel": "K-12",
    "courseCode": "CBSE-K12",
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "name": "Candela Public School",
          "address": "Mumbai, Maharashtra, India"
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "availability": "https://schema.org/InStock"
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-course', 'true');
  script.textContent = JSON.stringify(courseSchema);
  document.head.appendChild(script);
};

// Review Schema
export const addReviewSchema = () => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "name": "Candela Public School"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Parent Review"
    },
    "reviewBody": "Excellent CBSE school with outstanding faculty and modern facilities. My child has shown remarkable improvement in academics and overall development."
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-review', 'true');
  script.textContent = JSON.stringify(reviewSchema);
  document.head.appendChild(script);
};

// Event Schema for School Activities
export const addEventSchema = () => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "School Admission Open 2025-26",
    "startDate": "2025-01-01",
    "endDate": "2025-03-31",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Candela Public School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "School Address",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "EducationalOrganization",
      "name": "Candela Public School",
      "url": "https://candelapublicschool.com"
    },
    "description": "Admission open for academic year 2025-26. Apply now for Playgroup to Class 12 at Mumbai's top CBSE school."
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-event', 'true');
  script.textContent = JSON.stringify(eventSchema);
  document.head.appendChild(script);
};

// Article Schema for Content Pages
export const addArticleSchema = (title, description, datePublished = new Date().toISOString()) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "Candela Public School"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Candela Public School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://candelapublicschool.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-article', 'true');
  script.textContent = JSON.stringify(articleSchema);
  document.head.appendChild(script);
};

// Video Schema for Virtual Tours
export const addVideoSchema = () => {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Candela Public School Virtual Tour",
    "description": "Take a virtual tour of Mumbai's best CBSE school facilities, classrooms, and campus",
    "thumbnailUrl": "https://candelapublicschool.com/video-thumbnail.jpg",
    "uploadDate": "2025-01-01",
    "duration": "PT5M",
    "embedUrl": "https://candelapublicschool.com/virtual-tour",
    "publisher": {
      "@type": "Organization",
      "name": "Candela Public School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://candelapublicschool.com/logo.png"
      }
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-video', 'true');
  script.textContent = JSON.stringify(videoSchema);
  document.head.appendChild(script);
};

// Person Schema for Faculty
export const addPersonSchema = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Principal - Candela Public School",
    "jobTitle": "Principal",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Candela Public School"
    },
    "description": "Experienced educator leading Mumbai's top CBSE school with over 20 years in education",
    "url": "https://candelapublicschool.com/about"
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-person', 'true');
  script.textContent = JSON.stringify(personSchema);
  document.head.appendChild(script);
};

// Breadcrumb Schema
export const addBreadcrumbSchema = (breadcrumbs) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-breadcrumb', 'true');
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
};
