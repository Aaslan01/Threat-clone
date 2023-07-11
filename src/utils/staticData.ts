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
  likes: number;
  replies: number;
}
export interface followType {
  id: number;
  title: string;
  text: string;
  image: any;
  followers: string;
}
export interface ActivityType {
  id: number;
  flag?: string;
  title: string;
  text: string;
  comment?: string;
  image: any;
  time: string;
}

export const ActivityData: Array<ActivityType> = [
  {
    id: 1,
    flag: 'follow',
    title: 'andyfriseella',
    text: 'Andy Friseella MFCEO',
    image: require('../assets/images/post1.jpeg'),
    time: '1h',
  },
  {
    id: 2,
    flag: 'Reply',
    title: 'gilbert_burns',
    text: `GILBERT BURNS "BURINHO"`,
    image: require('../assets/images/post2.jpeg'),
    time: '3h',
  },
  {
    id: 3,
    flag: 'follow',
    title: 'publicityLates',
    text: 'Latest News Updates?',
    image: require('../assets/images/post3.jpeg'),
    time: '4h',
  },
  {
    id: 4,
    title: 'sarcastic_us',
    text: '',
    comment: 'I will Check it out',
    image: require('../assets/images/post4.jpeg'),
    time: '9h',
  },
  {
    id: 5,
    flag: 'Reply',
    title: 'shakira',
    text: 'Shakira',
    image: require('../assets/images/post5.jpeg'),
    time: '15h',
  },
  {
    id: 6,
    title: 'benfrancis',
    text: 'Ben Francis MBE',
    comment: 'I will Check it out',
    image: require('../assets/images/post1.jpeg'),
    time: '18h',
  },
  {
    id: 7,
    title: 'john',
    flag: 'follow',
    text: 'John Shahidi',
    image: require('../assets/images/post2.jpeg'),
    time: '19h',
  },
  {
    id: 8,
    title: 'pgbazaar',
    text: 'PG bazar',
    image: require('../assets/images/post3.jpeg'),
    time: '22h',
    comment: 'I will Check it out',
  },
  {
    id: 9,
    comment: 'good what about you',
    title: 'shkhrasheed1',
    text: 'Sheikh Rasheed Ahmed',
    image: require('../assets/images/post4.jpeg'),
    time: '23h',
  },
  {
    id: 10,
    title: 'thecurrentpk',
    flag: 'follow',
    text: 'The Current',
    image: require('../assets/images/post5.jpeg'),
    time: '1d',
  },
  {
    id: 11,
    flag: 'Reply',
    title: 'john',
    text: 'John Shahidi',
    image: require('../assets/images/post2.jpeg'),
    time: '1d',
  },

  {
    id: 12,
    flag: 'follow',
    time: '1d',
    title: 'arielhelwani',
    text: 'Ariel Helwani',
    image: require('../assets/images/post2.jpeg'),
  },
  {
    id: 13,
    flag: 'Reply',
    title: 'benfrancis',
    text: 'Ben Francis MBE',
    image: require('../assets/images/post1.jpeg'),
    time: '1d',
  },
  {
    id: 14,
    title: 'john',
    flag: 'follow',
    text: 'John Shahidi',
    image: require('../assets/images/post2.jpeg'),
    time: '2d',
  },
  {
    id: 15,
    flag: 'Reply',
    title: 'pgbazaar',
    text: 'PG bazar',
    image: require('../assets/images/post3.jpeg'),
    time: '2d',
  },
];

export const followData: Array<followType> = [
  {
    id: 1,
    title: 'andyfriseella',
    text: 'Andy Friseella MFCEO',
    image: require('../assets/images/post1.jpeg'),
    followers: '72.6K',
  },
  {
    id: 2,
    title: 'gilbert_burns',
    text: `GILBERT BURNS "BURINHO"`,
    image: require('../assets/images/post2.jpeg'),
    followers: '65.7k',
  },
  {
    id: 3,
    title: 'publicityLates',
    text: 'Latest News Updates?',
    image: require('../assets/images/post3.jpeg'),
    followers: '54.7k',
  },
  {
    id: 4,
    title: 'sarcastic_us',
    text: '',
    image: require('../assets/images/post4.jpeg'),
    followers: '65.7k',
  },
  {
    id: 5,
    title: 'shakira',
    text: 'Shakira',
    image: require('../assets/images/post5.jpeg'),
    followers: '3.3M',
  },
  {
    id: 6,
    title: 'benfrancis',
    text: 'Ben Francis MBE',
    image: require('../assets/images/post1.jpeg'),
    followers: '11.4k',
  },
  {
    id: 7,
    title: 'john',
    text: 'John Shahidi',
    image: require('../assets/images/post2.jpeg'),
    followers: '29.2k',
  },
  {
    id: 8,
    title: 'pgbazaar',
    text: 'PG bazar',
    image: require('../assets/images/post3.jpeg'),
    followers: '22.3k',
  },
  {
    id: 9,
    title: 'shkhrasheed1',
    text: 'Sheikh Rasheed Ahmed',
    image: require('../assets/images/post4.jpeg'),
    followers: '20.1k',
  },
  {
    id: 10,
    title: 'thecurrentpk',
    text: 'The Current',
    image: require('../assets/images/post5.jpeg'),
    followers: '19k',
  },
  {
    id: 11,
    title: 'john',
    text: 'John Shahidi',
    image: require('../assets/images/post2.jpeg'),
    followers: '29.2k',
  },

  {
    id: 12,
    title: 'arielhelwani',
    text: 'Ariel Helwani',
    image: require('../assets/images/post2.jpeg'),
    followers: '65.7k',
  },
];

export const postData: Array<postType> = [
  {
    id: 1,
    title: 'eesaholic',
    text: '',
    image: require('../assets/images/post1.jpeg'),
    likes: 10,
    replies: 2,
  },
  {
    id: 2,
    title: 'startuppakistansp',
    text: 'Standing tall at a breathtaking height of 8,611 meters (28,251 feet), K2, the pride of Pakistan, triumphantly dwarfs the renowned Burj Khalifa.',
    image: require('../assets/images/post2.jpeg'),
    likes: 210,
    replies: 88,
  },
  {
    id: 3,
    title: 'wasted',
    text: 'Accurate?',
    image: require('../assets/images/post3.jpeg'),
    likes: 65,
    replies: 22,
  },
  {
    id: 4,
    title: 'sarcastic_us',
    text: '',
    image: require('../assets/images/post4.jpeg'),
    likes: 24,
    replies: 2,
  },
  {
    id: 5,
    title: 'sarcastic_us',
    text: 'How funny is that. The person who has money talks about money is not everything',
    image: require('../assets/images/post5.jpeg'),
    likes: 99,
    replies: 56,
  },
  {
    id: 6,
    title: 'eesaholic',
    text: '',
    image: require('../assets/images/post1.jpeg'),
    likes: 10,
    replies: 2,
  },
  {
    id: 7,
    title: 'startuppakistansp',
    text: 'Standing tall at a breathtaking height of 8,611 meters (28,251 feet), K2, the pride of Pakistan, triumphantly dwarfs the renowned Burj Khalifa.',
    image: require('../assets/images/post2.jpeg'),
    likes: 210,
    replies: 88,
  },
];
