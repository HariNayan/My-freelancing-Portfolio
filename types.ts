import { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  VIDEO = 'Video Editing',
  GRAPHIC = 'Graphic Design'
}

export interface Project {
  id: string;
  title?: string;
  category?: ProjectCategory;
  subcategory?: string; // e.g., "Short-form", "Brand Identity"
  thumbnail?: string; // Optional now, as video projects might rely solely on youtubeId
  description?: string; // Short description for card
  client?: string;
  
  // Video specific
  youtubeId?: string; // The ID from the YouTube URL
  format?: 'vertical' | 'horizontal'; // Aspect ratio control
  
  // Detailed View Data
  overview?: string;
  objective?: string;
  role?: string;
  tools?: string[];
  approach?: string;
  videoUrl?: string; // Optional, if it's a video project
  imageGallery?: string[]; // If it's graphic design
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Client {
  id: string;
  name: string;
  platform: 'YouTube' | 'Instagram';
  handle: string;
  avatar: string;
  link: string;
  stats?: string;
}

export interface StatData {
  name: string;
  value: number;
}
