import React from 'react';

const SEO = ({ title, description, keywords, canonical, image }) => {
  React.useEffect(() => {
    // Update title
    document.title = title || "Lodges Paradise - Promotion Immobilière Premium à La Réunion";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description || "Lodges Paradise : Promoteur immobilier spécialisé dans les matériaux nobles à La Réunion.";
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content = keywords || "promotion immobilière réunion, lodges paradise";
    }
    
    // Update canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical || "https://lodgesparadise.com/";
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonical;
    
    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.content = image;
    }
  }, [title, description, keywords, canonical, image]);
  
  return null;
};

export default SEO;