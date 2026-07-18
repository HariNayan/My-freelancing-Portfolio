import { Project, ProjectCategory, Service, Client, StatData } from './types';
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
    title: 'Back To Fitness',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Social Media',
    thumbnail: '/back-to-fitness.webp',
    format: 'vertical',
    description: 'Gym comeback creative with bold typography for a fitness coach.',
    tools: ['Photoshop']
  },
  {
    id: 'g6',
    title: 'Fly By Wire Explained',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/fly-by-wire.webp',
    format: 'vertical',
    description: 'Cover design for an aviation explainer on fly-by-wire flight controls.',
    tools: ['Photoshop']
  },
  {
    id: 'g7',
    title: 'Temporary Medically Unfit',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/tmu-thumbnail.webp',
    format: 'vertical',
    description: 'Story-driven cover for an aviation medical-recovery short.',
    tools: ['Photoshop']
  },
  {
    id: 'g8',
    title: 'VDGS Explained',
    category: ProjectCategory.GRAPHIC,
    subcategory: 'Thumbnail Design',
    thumbnail: '/vdgs-thumbnail.webp',
    format: 'vertical',
    description: 'Cover design explaining the visual docking guidance system pilots use at the gate.',
    tools: ['Photoshop']
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
    avatar: '/avatars/aviator-vinay.webp',
    link: 'https://www.instagram.com/aviator_vinay/',
    stats: '220K Follower'
  },
  {
    id: '2',
    name: 'Manik Verma',
    platform: 'Instagram',
    handle: '@manikk.ai',
    avatar: '/avatars/manik-verma.webp',
    link: 'https://www.instagram.com/manikk.ai/',
    stats: '105K Followers'
  },
  {
    id: '3',
    name: 'Sarath Penumuru',
    platform: 'Instagram',
    handle: '@coachsarathpenumuru',
    avatar: '/avatars/sarath-penumuru.webp',
    link: 'https://www.instagram.com/coachsarathpenumuru',
    stats: '3.1k Followers'
  },
  {
    id: '4',
    name: 'Techiemant',
    platform: 'Instagram',
    handle: '@techiemant',
    avatar: '/avatars/techiemant.webp',
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
    logo: '/avatars/slashy.svg',
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

