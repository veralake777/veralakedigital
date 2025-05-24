export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export interface PortfolioProject {
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
