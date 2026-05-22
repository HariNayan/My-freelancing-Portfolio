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
  // --- 6 VERTICAL VIDEO PROJECTS (Simplified) ---
  {
    id: 'v1',
    subcategory: 'AI & TECH',
    youtubeId: 'wi10YaoVX78',
    videoUrl: 'https://youtube.com/shorts/wi10YaoVX78',
    format: 'vertical',
  },
  {
    id: 'v2',
    subcategory: 'AVIATION',
    youtubeId: 'Om72QAs5ybA',
    videoUrl: 'https://youtube.com/shorts/Om72QAs5ybA',
    format: 'vertical',
  },
  {
    id: 'v3',
    subcategory: 'FITNESS',
    youtubeId: '8_BwNlhxXDQ',
    videoUrl: 'https://youtube.com/shorts/8_BwNlhxXDQ',
    format: 'vertical',
  },
  {
    id: 'v4',
    subcategory: 'STARTUP',
    youtubeId: 'YPWHUoTok3I',
    videoUrl: 'https://www.youtube.com/shorts/YPWHUoTok3I',
    format: 'vertical',
  },
  {
    id: 'v5',
    subcategory: 'AI & TECH',
    youtubeId: '69x4OXNw3I8',
    videoUrl: 'https://youtube.com/shorts/69x4OXNw3I8',
    format: 'vertical',
  },
  {
    id: 'v6',
    subcategory: 'COURSE',
    youtubeId: 'V5absz3mjis',
    videoUrl: 'https://youtube.com/shorts/V5absz3mjis',
    format: 'vertical',
  },

  // --- STARTUP PROJECTS ---
  {
    id: 's1',
    category: ProjectCategory.VIDEO,
    title: 'Slashy X Ganola Demo Video',
    subcategory: 'YC Startup',
    youtubeId: 'Omp8y-GI4kY',
    format: 'horizontal',
    description: 'Demo video for YC-backed startup Slashy.',
    client: 'Slashy (YC)',
  },
  {
    id: 's2',
    category: ProjectCategory.VIDEO,
    title: 'Slashy To-Dos Demo Video',
    subcategory: 'YC Startup',
    youtubeId: '00Znaw4x9EE',
    format: 'horizontal',
    description: 'To-Do demo for Slashy.',
    client: 'Slashy (YC)',
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
    stats: '105K Followers'
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
];

export const STARTUP_CLIENTS = [
  {
    id: 's1',
    name: 'Slashy (YC S25)',
    handle: 'slashy.com',
    link: 'https://www.slashy.com/',
    tag: 'YC-Backed Startup',
    logo: 'https://slashy.ai/favicon.ico',
  },
  {
    id: 's2',
    name: 'Lazestore',
    handle: 'Ecommerce Clothing Brand',
    link: 'https://www.lazestore.in/',
    tag: 'Ecommerce Store',
    logo: '/logo%20BlWh.png',
  },
];

export const PROJECT_STATS: StatData[] = [
  { name: 'Short-form', value: 45 },
  { name: 'YouTube', value: 30 },
  { name: 'Startup', value: 15 },
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

