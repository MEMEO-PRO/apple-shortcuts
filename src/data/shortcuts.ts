import { Shortcut } from '../types/shortcut';

export const shortcuts: Shortcut[] = [
  {
    id: '1',
    title: 'Quick Notes to Notion',
    description: 'Instantly save any text or links to your Notion workspace with a single tap.',
    downloadUrl: 'https://www.icloud.com/shortcuts/example1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500',
    author: 'Sarah Chen',
    category: 'Productivity',
    createdAt: new Date('2024-03-10'),
    downloads: 1234
  },
  {
    id: '2',
    title: 'Low Battery Mode',
    description: 'Enable low power mode on your iPhone with a single tap.',
    downloadUrl: 'https://www.icloud.com/shortcuts/08e40a2816f84788bb030bc20275ff2b',
    thumbnailUrl: 'https://img.freepik.com/free-vector/phone-background-battery-dead_78370-3647.jpg?t=st=1732991134~exp=1732994734~hmac=13d817d6c48d3bcad057c8ec5442990181e34e6aa1d05b1915b3420248ffda3f&w=1380',
    author: 'Yash',
    category: 'Utility',
    createdAt: new Date('2024-03-08'),
    downloads: 856
  }
];