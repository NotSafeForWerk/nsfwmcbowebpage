// utils/meta.js

export function updateMetaTags(metaInfo) {
    if (metaInfo.title) {
      document.title = metaInfo.title;
    }
  
    if (metaInfo.meta) {
      metaInfo.meta.forEach(tag => {
        let element = document.querySelector(`meta[name="${tag.name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', tag.name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', tag.content);
      });
    }
  }
  