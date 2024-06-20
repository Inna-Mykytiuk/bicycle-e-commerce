// import createImageUrlBuilder from '@sanity/image-url';
// import type { Image } from 'sanity';

// import { dataset, projectId } from '../env';

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// });

// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url();
// };

import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | string) => {
  if (typeof source === 'string') {
    return source; // Return directly if source is a string URL
  }

  // Ensure imageBuilder is defined before accessing its methods
  if (imageBuilder) {
    return imageBuilder.image(source).auto('format').fit('max').url() || ''; // Return URL or empty string if undefined
  }

  return ''; // Return empty string if imageBuilder is undefined
};
