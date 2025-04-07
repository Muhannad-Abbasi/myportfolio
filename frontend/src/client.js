import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4hib27vs',
  dataset: 'production',
  apiVersion: '2025-04-07',
  useCdn: true,
  token: 'sk8XQhSBxiYJD85ZUgZkQYlp9NqYxJtPYdD5mIkExtjtyyMt8OyOeEtT6r3xL5ruFYGaO715YT2WuIUtiXftZCbzPZdHtTackFIudDKMVF8vH8yKTVIvpfEJtREEASIqfluJKNU4g39BnqhvCylg4aLSfln12KxrhODeit2sTOc1EaS9MoRx',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
