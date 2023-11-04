export default Object.freeze([
  {
    id: 1,
    imageUri: require('../assets/onboard-image-1.jpeg'),
    heading: 'Welcome To Homevision',
    tagLine: 'Discover your dream property effortlessly with ease',
    button: {
      text: 'NEXT',
    },
    carosel: ['big', 'small', 'small'],
  },
  {
    id: 2,
    imageUri: require('../assets/onboard-image-2.jpeg'),
    heading: ' Effortlessly browse properties with customizable filters.',
    tagLine:
      'Explore homes effortlessly using filters. Find your perfect property match with ease.',
    button: {
      text: 'NEXT',
    },
    carosel: ['small', 'big', 'small'],
  },
  {
    id: 3,
    imageUri: require('../assets/onboard-image-3.jpeg'),
    heading: ' Explore high-quality images',
    tagLine:
      'Save favorites, gain insights into and stay updated on market trends',
    button: {
      text: 'Get Started',
      action: true,
    },
    carosel: ['small', 'small', 'big'],
  },
]);
