import { useEffect } from 'react';
import { seoConfig, advancedMetaTags } from '../../utils/seoConfig';
import { 
  addCourseSchema, 
  addReviewSchema, 
  addEventSchema, 
  addArticleSchema,
  addVideoSchema,
  addPersonSchema,
  addBreadcrumbSchema 
} from './AdvancedSEO';

const PageSEO = ({ 
  page = 'home', 
  customTitle = null, 
  customDescription = null,
  breadcrumbs = null,
  includeSchemas = ['course', 'review', 'event']
}) => {
  
  useEffect(() => {
    const config = seoConfig[page] || seoConfig.home;
    
    // Update document title
    document.title = customTitle || config.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', customDescription || config.description);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', config.canonical);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    if (ogTitle) ogTitle.setAttribute('content', customTitle || config.title);
    if (ogDescription) ogDescription.setAttribute('content', customDescription || config.description);
    if (ogUrl) ogUrl.setAttribute('content', config.canonical);
    if (ogImage) ogImage.setAttribute('content', config.ogImage);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', customTitle || config.title);
    if (twitterDescription) twitterDescription.setAttribute('content', customDescription || config.description);
    if (twitterImage) twitterImage.setAttribute('content', config.ogImage);
    
    // Add structured data schemas
    if (includeSchemas.includes('course')) addCourseSchema();
    if (includeSchemas.includes('review')) addReviewSchema();
    if (includeSchemas.includes('event')) addEventSchema();
    if (includeSchemas.includes('video')) addVideoSchema();
    if (includeSchemas.includes('person')) addPersonSchema();
    
    // Add breadcrumbs if provided
    if (breadcrumbs) {
      addBreadcrumbSchema(breadcrumbs);
    }
    
    // Add article schema for content pages
    if (page !== 'home') {
      addArticleSchema(
        customTitle || config.title,
        customDescription || config.description
      );
    }
    
    // Cleanup function
    return () => {
      // Remove schemas when component unmounts
      const schemas = document.querySelectorAll('script[type="application/ld+json"][data-course], script[type="application/ld+json"][data-review], script[type="application/ld+json"][data-event], script[type="application/ld+json"][data-video], script[type="application/ld+json"][data-person], script[type="application/ld+json"][data-breadcrumb], script[type="application/ld+json"][data-article]');
      schemas.forEach(schema => schema.remove());
    };
  }, [page, customTitle, customDescription, breadcrumbs, includeSchemas]);
  
  return null; // This component doesn't render anything
};

export default PageSEO;
