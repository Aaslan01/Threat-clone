export interface nameImageType {
  id: number;
  name: string;
  image: any;
}
export interface postType {
  id: number;
  title: string;
  text: string;
  image: any;
}


export const postData: Array<postType> = [
  {
    id: 1,
    title: 'eesaholic',
    text: '',
    image: require('../assets/images/post1.jpeg'),
  },
  {
    id: 2,
    title: 'startuppakistansp',
    text: 'Standing tall at a breathtaking height of 8,611 meters (28,251 feet), K2, the pride of Pakistan, triumphantly dwarfs the renowned Burj Khalifa.',
    image: require('../assets/images/post2.jpeg'),
  },
  {
    id: 3,
    title: 'wasted',
    text: 'Accurate?',
    image: require('../assets/images/post3.jpeg'),
  },
  {
    id: 4,
    title: 'sarcastic_us',
    text: '',
    image: require('../assets/images/post4.jpeg'),
  },
  {
    id: 5,
    title: 'sarcastic_us',
    text: 'How funny is that. The person who has money talks about money is not everything',
    image: require('../assets/images/post5.jpeg'),
  },
  {
    id: 6,
    title: 'eesaholic',
    text: '',
    image: require('../assets/images/post1.jpeg'),
  },
  {
    id: 7,
    title: 'startuppakistansp',
    text: 'Standing tall at a breathtaking height of 8,611 meters (28,251 feet), K2, the pride of Pakistan, triumphantly dwarfs the renowned Burj Khalifa.',
    image: require('../assets/images/post2.jpeg'),
  },
];
