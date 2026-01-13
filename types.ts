
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  features: string[];
}

export interface Award {
  id: number;
  year: string;
  title: string;
  issuer: string;
  description: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
}

// Define TeamMember interface to fix import errors
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface TechNode {
  id: number;
  title: string;
  desc: string;
  x: number;
  y: number;
  img: string;
  conn: number[];
  status: string;
  imageUrl?: string;
  satellites?: any[];
  connections?: number[];
  badgeDetail?: string;
}
