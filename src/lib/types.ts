export interface Program {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  practical: string;
  careers: string[];
  skills: string[];
  duration: string;
}

export interface Leader {
  id: number;
  full_name: string;
  role: string;
  sort_order: number;
}

export interface Achievement {
  id: number;
  title: string;
  detail: string;
  session_text: string;
}
