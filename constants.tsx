import { Project, ProjectCategory, Service, Client, StatData, Testimonial } from './types';
import {
  Film,
  Image as ImageIcon,
  MonitorPlay,
  Zap,
  Smartphone,
  Palette
} from 'lucide-react';

export const PROJECTS: Project[] = [
  // --- 8 VERTICAL VIDEO PROJECTS (Simplified) ---
  {
    id: 'v1',
    subcategory: 'Fitness',
    youtubeId: 'IKqYaALkXz4',
    videoUrl: 'https://www.youtube.com/shorts/IKqYaALkXz4',
    format: 'vertical',
  },
  {
    id: 'v2',
    subcategory: 'Ai and Tech',
    youtubeId: 'ZRX9fvNPVz8',
    videoUrl: 'https://youtube.com/shorts/ZRX9fvNPVz8',
    format: 'vertical',
  },
  {
    id: 'v3',
    subcategory: 'Educational',
    youtubeId: 'ukcCgDOWFdw',
    videoUrl: 'https://www.youtube.com/shorts/ukcCgDOWFdw',
    format: 'vertical',
  },
  {
    id: 'v4',
    subcategory: 'Startup',
    youtubeId: 'YPWHUoTok3I',
    videoUrl: 'https://www.youtube.com/shorts/YPWHUoTok3I',
    format: 'vertical',
  },
  {
    id: 'v5',
    subcategory: 'Educational',
    youtubeId: 'b0AMVgl9HiU',
    videoUrl: 'https://www.youtube.com/shorts/b0AMVgl9HiU',
    format: 'vertical',
  },
  {
    id: 'v6',
    subcategory: 'Environment',
    youtubeId: '-5IkwP-DFnU',
    videoUrl: 'https://www.youtube.com/shorts/-5IkwP-DFnU',
    format: 'vertical',
  },
  {
    id: 'v7',
    subcategory: 'Course',
    youtubeId: 'V5absz3mjis',
    videoUrl: 'https://www.youtube.com/shorts/V5absz3mjis',
    format: 'vertical',
  },
  {
    id: 'v8',
    subcategory: 'Ai and Tech',
    youtubeId: 'wi10YaoVX78',
    videoUrl: 'https://youtube.com/shorts/wi10YaoVX78',
    format: 'vertical',
  },

  // --- GRAPHIC DESIGN PROJECTS (Vertical Only) ---
  {
    id: 'g5',
    title: 'Urban Fashion Story',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Social Media',
    thumbnail: '/BACK TO FITNESS_2.png',
    format: 'vertical',
    description: 'Vertical promo for streetwear brand.',
    client: 'UrbanFit',
    tools: ['Photoshop']
  },
  {
    id: 'g6',
    title: 'Music Festival Poster',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Posters',
    thumbnail: '/fly by wire.png',
    format: 'vertical',
    description: 'Event poster for summer festival.',
    client: 'SummerVibes',
    tools: ['Illustrator', 'Indesign']
  },
  {
    id: 'g7',
    title: 'Minimalist Book Cover',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Print',
    thumbnail: '/TMU (1).png',
    format: 'vertical',
    description: 'Cover design for modern novel.',
    client: 'Penguin Books',
    tools: ['InDesign']
  },
  {
    id: 'g8',
    title: 'App Onboarding UI',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'UI/UX',
    thumbnail: '/VDGS - 2.png',
    format: 'vertical',
    description: 'Mobile app onboarding screens.',
    client: 'TechStart',
    tools: ['Figma']
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Short-Form Edits',
    description: 'High-retention editing for TikTok, Reels, and Shorts.',
    icon: Smartphone
  },
  {
    id: '2',
    title: 'YouTube Production',
    description: 'Pacing, storytelling, and engaging retention editing.',
    icon: MonitorPlay
  },
  {
    id: '3',
    title: 'Motion Graphics',
    description: 'Animated titles, lower thirds, and VFX integration.',
    icon: Zap
  },
  {
    id: '4',
    title: 'Cinematic Editing',
    description: 'Color grading and sound design for narratives.',
    icon: Film
  },
  {
    id: '5',
    title: 'Thumbnail Design',
    description: 'Click-worthy thumbnails to boost CTR.',
    icon: ImageIcon
  },
  {
    id: '6',
    title: 'Brand Identity',
    description: 'Logos, typography, and cohesive visual systems.',
    icon: Palette
  }
];

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Aviator Vinay',
    platform: 'Instagram',
    handle: '@aviator_vinay',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrcCB2B6yB8Vupcv6RZ-HZK5T9b0XPNhjUg&s',
    link: 'https://www.instagram.com/aviator_vinay/',
    stats: '220K Follower'
  },
  {
    id: '2',
    name: 'Manik Verma',
    platform: 'Instagram',
    handle: '@manikk.ai',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbfngAlH321PsEJAldZRjHPJ590FwpdDLcw&s',
    link: 'https://www.instagram.com/manikk.ai/',
    stats: '54K Followers'
  },
  {
    id: '3',
    name: 'Sarath Penumuru',
    platform: 'Instagram',
    handle: '@coachsarathpenumuru',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHY3YNc_XgsSA/profile-displayphoto-scale_200_200/B56ZrdoRjgLMAY-/0/1764654915169?e=2147483647&v=beta&t=iltUxIxt0nL99loo8hj8RvThvckIErwOpyHnzSlgyi0',
    link: 'https://www.instagram.com/coachsarathpenumuru',
    stats: '3.1k Followers'
  },
  {
    id: '4',
    name: 'Techiemant',
    platform: 'Instagram',
    handle: '@techiemant',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKausuy8qz-w8a21GY875e3IhlXw0yP1HF9g&s',
    link: 'https://www.instagram.com/techiemant/',
    stats: '2.6K Followers'
  },
  {
    id: '5',
    name: 'Fitness 360',
    platform: 'YouTube',
    handle: 'Fit360',
    avatar: 'https://picsum.photos/id/96/200/200',
    link: '#',
    stats: '500K Subscribers'
  },
  {
    id: '6',
    name: 'Travel Diaries',
    platform: 'Instagram',
    handle: '@travel.diaries',
    avatar: 'https://picsum.photos/id/103/200/200',
    link: '#',
    stats: '320K Followers'
  }
];

export const PROJECT_STATS: StatData[] = [
  { name: 'Short-form', value: 45 },
  { name: 'YouTube', value: 30 },
  { name: 'Corporate', value: 15 },
  { name: 'Branding', value: 10 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'TechFlow',
    quote: 'Hari transformed our raw footage into a compelling narrative that drove a 40% increase in engagement. Truly a master of his craft.'
  },
  {
    id: '2',
    name: 'Mike Ross',
    role: 'Content Creator',
    quote: 'The best editor I have worked with. He understands pacing and humor perfectly. My subscriber count has doubled since we started collaborating.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'GreenEarth',
    quote: 'We needed a brand identity that felt organic yet professional. Hari nailed the brief on the first try. Highly recommended!'
  }
];





