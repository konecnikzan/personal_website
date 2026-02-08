export type Project = {
  name: string
  shortDescription: string
  fullDescription: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export type Service = {
  title: string
  description: string
  icon?: string    
}

export const PROJECTS: Project[] = [
  {
    name: 'Servis Buč E-Commerce Marketplace',
    shortDescription: 'Marketplace website for local chainsaw and lawnmower shop Jasmina Buč s.p.',
    fullDescription:
      "E-Commerce Marketplace website implementation for local company Jasmina Buč s.p., where they offer sales and service of chainsaws and lawnmowers in the Koroška area.\n\n" +
      "The website is designed with:\n" +
      "- Modern and transparent user interface\n" +
      "- Fully responsive design for all devices\n" +
      "- Catalog store for product review\n" +
      "- Clear presentation of service services\n" +
      "- About us and Contact pages for easier communication with customers\n\n" +
      "The goal of the project was to increase the visibility of the company, show the products they offer, facilitate access to information and improve the user experience.",
    link: 'https://servisbuc.si/',
    image: '/images/servis_buc.jpg',
    id: 'project1',
  },
  {
    name: 'Elektro Relekt Business Website',
    shortDescription: 'Business website for for local electrical services Elektro Relekt',
    fullDescription:
    "Business website development for Elektro Relekt, a reliable electrical services provider based in Slovenj Gradec.\n\n" +
    "Key implementation details:\n" +
    "- A modern, responsive single-page layout optimized for both desktop and mobile users\n" +
    "- Clear service presentation with dedicated sections for electrical installations, security systems (alarms & CCTV), industrial automation, and telecommunications\n" +
    "- A straightforward, conversion-oriented structure: prominent call-to-action buttons, easy-to-read service cards, and a simple contact form\n" +
    "- Ensured fast loading times and good SEO foundations (clean code, proper heading structure, meta tags, and local keyword optimization)\n\n" +
    "The main goal was to create an intuitive, trustworthy online presence that positions Elektro Relekt as a go-to expert for safe, modern electrical solutions in the region. The website emphasizes clarity, accessibility, and immediate contact possibilities, helping convert visitors into clients quickly.",
    link: 'https://elektro-relekt.si/',
    image:
      '/images/elektro-relekt.png',
    id: 'project2',
  },
  {
    name: 'Avto Fibro Social Media Marketing',
    shortDescription: 'Social Media Marketing for local car dealership Avto Fibro',
    fullDescription:
    "For Avto Fibro, a leading car dealership in Slovenj Gradec specializing in the import and sale of high-quality used vehicles (with a focus on custom orders), I handle comprehensive social media marketing across TikTok, Instagram, and Facebook.\n\n" +
    "Key activities include:\n" +
    "- Professional photography and videography — Capturing stunning, high-resolution photos and dynamic videos of cars to showcase their condition, features, and appeal in the best possible light.\n" +
    "- Content creation — Producing engaging posts, Reels, Stories, and short-form videos tailored to each platform: eye-catching car reveals, walkarounds, customer testimonials, promotional offers, and fun automotive content to boost visibility and interaction.\n" +
    "- Meta Ads management — Strategically planning, creating, and optimizing paid advertising campaigns on Facebook and Instagram to reach targeted local and regional audiences, drive inquiries, increase website traffic, and generate leads for vehicle sales and custom imports.\n\n" +
    "The main focus is on building a strong, trustworthy online brand presence that highlights Avto Fibro's expertise, quality vehicles, and customer-first approach while leveraging visually appealing content and targeted ads to convert viewers into buyers.",
    link: 'https://www.facebook.com/FibroAvto',
    image:
      '/images/fibro.png',
    id: 'project3',
  },
  {
    name: 'Villa Pantea Business Website',
    shortDescription: 'Business website for luxury Greek villa Villa Pantea',
    fullDescription:
    "Developed a business website for Villa Pantea, a luxurious 3-bedroom villa in Vasiliki, Lefkada, Greece.\n\n" +
    "Key implementations:\n" +
    "- Elegant, modern design with a sophisticated aesthetic that captures the villa’s serene Greek island luxury\n" +
    "- Clear sections: About, Rooms & Living, Facilities (infinity pool, BBQ, premium amenities), Location highlights, Gallery, and easy Contact/Booking form\n" +
    "- Fully responsive, fast-loading, and SEO-optimized for international visitors\n" +
    "- Intuitive contact/booking form with date selection\n\n" +
    "The focus was to create an immersive, high-end online experience that conveys exclusivity and tranquility, driving direct bookings.",
    link: 'https://villapantea.com/',
    image:
      '/images/villa-pantea.png',
    id: 'project4',
  },
  {
    name: 'Biologic E-Commerce Marketplace',
    shortDescription: 'Catalog E-Commerce Marketplace website for BPH Biologic Pellets Heizungen GmbH',
    fullDescription:
    "Catalog marketplace website development for BPH Biologic Pellets Heizungen GmbH, a company specializing in pellet heating systems and sustainable energy solutions.\n\n" +
    "The website was created with a strong focus on clarity, usability, and modern design, featuring:\n" +
    "- Fully responsive layout optimized for desktop, tablet, and mobile devices\n" +
    "- Product catalog showcasing pellet heating systems and related solutions\n" +
    "- Structured presentation of services and technical information\n" +
    "- Dedicated Gallery and Contact sections for transparent company communication\n\n" +
    "The primary objective of the project was to strengthen BPH’s online presence, clearly present their product range, support customer decision-making, and provide easy access to essential information while delivering a smooth and intuitive user experience.",
    link: 'https://biologic.at/',
    image:
      '/images/biologic.png',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'BB 3000 M',
    title: 'Junior Android Developer (Full-Time)',
    start: '2024',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Avto Fibro',
    title: 'Social Media Manager (Freelance)',
    start: '2024',
    end: '2024',
    id: 'work2',
  },
  {
    company: 'BB 3000 M',
    title: 'Lead QA Manual Tester (Full-Time)',
    start: '2021',
    end: '2024',
    id: 'work3',
  },
  {
    company: 'Comtrade Gaming',
    title: 'Junior Software Engineer (Part-Time)',
    start: '2021',
    end: '2021 (4 months)',
    id: 'work4',
  },
  {
    company: 'Telekom Slovenije',
    title: 'Web Developer (Internship)',
    start: '2020',
    end: '2020 (3 months)',
    id: 'work5',
  },
  {
    company: ' Inštitut za neodvisnost',
    title: 'Web Developer (Part-Time)',
    start: '2018',
    end: '2018 (3 months)',
    id: 'work6',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/%C5%BEan-kone%C4%8Dnik-469b28a0/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/konecnikzan/',
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/konecnikzan/',
  },
]

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Custom, high-performance websites built with modern tech stacks. Fully responsive, SEO-optimized, and fast.",
    icon: "Code",
  },
  {
    title: "E-Commerce Development",
    description: "Complete online stores — from simple shops to complex marketplaces. Secure payments, product catalogs, admin dashboards, and smooth checkout experience.",
    icon: "ShoppingCart",
  },
  {
    title: "Digital Marketing",
    description: "Targeted social media campaigns, Meta Ads management, content strategy, and analytics. Focused on real results: leads, traffic, and conversions.",
    icon: "Megaphone",
  },
  {
    title: "Photography / Videography",
    description: "Professional product, lifestyle, and promotional photography & videography. High-quality visuals for websites, social media, ads, and branding.",
    icon: "Camera",
  },
]

export const EMAIL = 'konecnik.zan10@gmail.com'
