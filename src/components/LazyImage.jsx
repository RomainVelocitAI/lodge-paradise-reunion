import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholder, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=');
  const [imageRef, setImageRef] = useState();
  const imgRef = useRef();

  useEffect(() => {
    let observer;
    
    if (imageRef && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      observer.observe(imageRef);
    } else {
      // Fallback pour les navigateurs sans IntersectionObserver
      setImageSrc(src);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return (
    <img
      ref={el => {
        imgRef.current = el;
        setImageRef(el);
      }}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;