import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export interface SiteConfig {
  site: {
    name: string;
    description: string;
    url: string;
    logo: string;
    favicon: string;
    hero_image: string;
  };
  organization: {
    name: string;
    website: string;
    email: string;
    address: string;
  };
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
  };
  navigation: Array<{
    label: string;
    url: string;
    icon: string;
    mega_menu?: boolean;
    submenu?: Array<{
      label: string;
      url: string;
      icon: string;
    }>;
  }>;
  faculties: Array<{
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
  }>;
  years: {
    start: number;
    end: number;
    current_year: number;
  };
  social_links: Array<{
    name: string;
    url: string;
    icon: string;
    color: string;
  }>;
  seo: {
    title_template: string;
    default_description: string;
    keywords: string[];
    author: string;
    og_image: string;
    twitter_card: string;
  };
  content: {
    posts_per_page: number;
    alumni_per_page: number;
    events_per_page: number;
    featured_alumni_count: number;
    latest_events_count: number;
  };
  features: {
    search: boolean;
    filters: boolean;
    pagination: boolean;
    tags: boolean;
    categories: boolean;
    social_sharing: boolean;
    contact_forms: boolean;
    newsletter: boolean;
    alumni_registration: {
      enabled: boolean;
      url: string;
    }
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    office_hours: string;
  };
}

let config: SiteConfig | null = null;

export function getSiteConfig(): SiteConfig {
  if (config) {
    return config;
  }

  try {
    const configPath = path.join(process.cwd(), 'site.config.yml');
    const configFile = fs.readFileSync(configPath, 'utf8');
    config = yaml.load(configFile) as SiteConfig;
    return config;
  } catch (error) {
    console.error('Error loading site config:', error);
    // Return default config if file can't be loaded
    return getDefaultConfig();
  }
}

function getDefaultConfig(): SiteConfig {
  return {
    site: {
      name: "Open Alumns Portal",
      description: "A production-ready, open-source alumni portal for colleges and communities",
      url: "https://open-alumns-portal.vercel.app",
      logo: "/logo.svg",
      favicon: "/favicon.ico",
      hero_image: "/hero-bg.jpg"
    },
    organization: {
      name: "Nepal Open Source Klub (NOSK)",
      website: "https://nosk.org.np",
      email: "info@nosk.org.np",
      address: "Kathmandu, Nepal"
    },
    colors: {
      primary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
      },
      secondary: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
      },
      accent: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
      }
    },
    navigation: [],
    faculties: [],
    years: {
      start: 2010,
      end: 2025,
      current_year: 2025
    },
    social_links: [],
    seo: {
      title_template: "%s | Open Alumns Portal",
      default_description: "Connect with alumni from your institution. Join our network and stay updated with events, news, and opportunities.",
      keywords: ["alumni", "portal", "network", "community", "education", "graduates"],
      author: "Nepal Open Source Klub (NOSK)",
      og_image: "/og-image.jpg",
      twitter_card: "summary_large_image"
    },
    content: {
      posts_per_page: 12,
      alumni_per_page: 20,
      events_per_page: 10,
      featured_alumni_count: 3,
      latest_events_count: 4
    },
    features: {
      search: true,
      filters: true,
      pagination: true,
      tags: true,
      categories: true,
      social_sharing: true,
      contact_forms: true,
      newsletter: true
    },
    contact: {
      email: "alumni@nosk.org.np",
      phone: "+977-1-1234567",
      address: "Kathmandu, Nepal",
      office_hours: "Monday - Friday, 9:00 AM - 5:00 PM"
    }
  };
}
