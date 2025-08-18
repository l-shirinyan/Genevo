import LinkdlnLogo from "/icons/linkdln.svg";
import FacebookLogo from "/icons/facebook.svg";
import DocumnentLogo from "/icons/document.svg";
import SettingsLogo from "/icons/settings.svg";
import RepeatLogo from "/icons/repeat.svg";
import ProgressLogo from "/icons/progress.svg";
import BookIcon from "/icons/book.svg";
import Puzzle from "/icons/puzzle.svg";
import SnowballIcon from "/icons/snowball.svg";
import SellFirstImage from "/images/sell1.png";
import SellSecondImage from "/images/sell2.png";
import SellThirdImage from "/images/sell3.png";
import SellFourthImage from "/images/sell4.png";
import CubeLogo from '/icons/cube.svg'
import FilterLogo from '/icons/filter.svg'
import DeliveryLogo from '/icons/delivery.svg'
import GoalLogo from '/icons/goal.svg'

export const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
export const footerNavigation = {
  leads: [
    { name: "Clothing", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Technology", href: "#" },
  ],
  services: [
    { name: "Fulfillment Policies", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "KYC Policies", href: "#" },
  ],
};
export const socialLinks = [
  { icon: LinkdlnLogo, alt: "LinkedIn", href: "/" },
  { icon: FacebookLogo, alt: "Facebook", href: "/" },
];

export const slides = [
  {
    id: 1,
    title: "B2B Sales Teams",
    subtitle: "Let your reps focus",
    image: SellFirstImage,
  },
  {
    id: 2,
    title: "Marketing Agencies",
    subtitle: "Power campaigns with",
    image: SellSecondImage,
  },
  {
    id: 3,
    title: "Recruiters & Staffing",
    subtitle: "Find matching candidat",
    image: SellThirdImage,
  },
  {
    id: 4,
    title: "Tech Startups",
    subtitle: "Book more local jobs.",
    image: SellFourthImage,
  },
  {
    id: 5,
    title: "B2B Sales Teams",
    subtitle: "Let your reps focus",
    image: SellFirstImage,
  },
  {
    id: 6,
    title: "Marketing Agencies",
    subtitle: "Power campaigns with",
    image: SellSecondImage,
  },
  {
    id: 7,
    title: "Recruiters & Staffing",
    subtitle: "Find matching candidat",
    image: SellThirdImage,
  },
  {
    id: 8,
    title: "Tech Startups",
    subtitle: "Book more local jobs.",
    image: SellFourthImage,
  },
];

export const infoCards = [
  {
    icon: DocumnentLogo,
    title: "Prebuilt Templates",
    text: "Start fast with professionally written cold and warm email templates tailored to your audience.",
  },
  {
    icon: SettingsLogo,
    title: "Smart Triggers",
    text: "Emails automatically adjust based on lead actions — like opens, clicks, or replies.",
  },
  {
    icon: RepeatLogo,
    title: "Behavior-Based Sequences",
    text: "Send timely, personalized follow-ups based on each lead’s stage, behavior, and funnel position.",
  },
  {
    icon: ProgressLogo,
    title: "Reply & Engagement Tracking",
    text: "Track who’s opening, clicking, and replying — no guessing.",
  },
];

export const features = [
  {
    iconSrc: BookIcon,
    title: "Instant Data Access",
    description: "Leads delivered in minutes, not days.",
  },
  {
    iconSrc: Puzzle,
    title: "AI-Powered Accuracy",
    description: "Smart filters and human-grade validation.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Scalable Pricing",
    description: "Buy exactly what you need — no fluff.",
  },
];

export const tiers = [
  {
    id: 1,
    name: "Solar Leads",
    price: "$1",
    description:
      "High-intent homeowners ready to install or switch to solar energy",
    features: [
      "Geo-targeted leads for local installers",
      "Location-based targeting for local installers",
      "Region-specific leads for local installers",
    ],
    featured: false,
  },
  {
    id: 2,
    name: "Healthcare Leads",
    price: "$6",
    description:
      "Active home buyers, sellers, and property investors by zip code.",
    features: [
      "Residential & commercial segmentation",
      "Residential & commercial segmentation",
      "Ideal for agents, lenders, or closing services",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Real Estate Leads",
    price: "$5",
    description:
      "Active home buyers, sellers, and property investors by zip code",
    features: [
      "Residential & commercial segmentation",
      "Residential & commercial segmentation",
      "Ideal for agents, lenders, or closing services",
    ],
    featured: false,
  },
];

export const privacyData = [
  {
    title: "Personal Statement",
    text: "At VIP Business Services, we understand that your personal information is valuable — and protecting it is our top priority. This Privacy Policy outlines how we collect, use, store, and protect your data whenever you interact with our website, products, or services. Our goal is to provide full transparency, empower your privacy choices, and ensure a secure experience that aligns with both legal standards and our commitment to your trust. We encourage you to read this policy carefully to understand how your data is handled across every touchpoint of our platform."
  },
  {
    title: "What Are Cookies?",
    text: "Cookies are small data files stored on your device when you visit a website. They help us remember your preferences, enhance functionality, and understand how you interact with our platform — allowing us to deliver a smoother, more personalized experience."
  },
  {
    title: "Why Do We Use Cookies?",
    text: "We use cookies to ensure our site functions properly, improve your overall experience, and deliver content tailored to your interests. Cookies also help us understand usage patterns so we can continuously enhance our services."
  },
  {
    title: "What Data Do We Collect?",
    text: "We may collect information such as your name, email, phone number, IP address, browsing behavior, purchase history, and location data. This helps us deliver relevant content and provide better service tailored to your needs."
  },
  {
    title: "Who Do We Share It With?",
    text: "We only share your data with trusted third-party providers — such as payment processors, analytics tools, and customer support platforms — to help us operate efficiently. We do not sell or trade your personal information."
  },
  {
    title: "Media & Content Ownership",
    text: "Unless otherwise noted, all images, videos, logos, and written content on this site are the exclusive property of VIP Business Services and are protected under intellectual property laws."
  },
  {
    title: "Your Rights",
    text: "You have the right to access, correct, or delete your personal data. You may also request to review how your information is used. To exercise these rights, simply contact our support team."
  },
  {
    title: "Opt-Out & Preferences",
    text: "You can manage cookie preferences through your browser settings and choose to opt out of certain analytics tools. Please note that disabling some cookies may limit functionality or user experience on our site."
  },
  {
    title: "Updates",
    text: "We may occasionally update this Privacy Policy to reflect legal or service changes. The most recent version will always be available on this page, along with its last updated date."
  }
];

export const solutions = [
  {
    iconSrc: BookIcon,
    title: 'Real-time trend tracking',
    description: 'Get pre-qualified leads delivered for every campaign .',
  },
  {
    iconSrc: Puzzle,
    title: ' Targeted leads by filters you control',
    description: 'Close more deals by focusing only on qualified, sales-ready leads.',
  },
  {
    iconSrc: SnowballIcon,
    title: 'Real-time trend tracking',
    description: 'Find NPI-verified providers or top talent, filtered by specialty and location.',
  }
]

export const success=[
  {
    iconSrc: BookIcon,
    title: 'Personalized Setup',
    description: 'We tailor every step of onboarding to your goals and workflow.',
  },
  {
    iconSrc: Puzzle,
    title: 'Ongoing Support',
    description: 'Get expert guidance and responsive help, whenever you need it.',
  },
  {
    iconSrc: SnowballIcon,
    title: 'Growth Strategy',
    description: 'From targeting to outreach, we help you to scale with confidence.',

  }
]

export const timelineItems = [
  "Designed For High-Performing Teams Across Industries",
  "Built To Reduce Overhead And Accelerate Outreach",
  "Flexible For Small Businesses And Enterprise Scale",
  "Backed By Expert Support And Lead Data Integrity",
  "Powered By Automation, Strategy, And Personalization"
];

export const leadCards = [
  {
    icon: CubeLogo,
    title: 'Tailored Packages',
    text: 'Hand-picked leads shaped by your campaign goals and industry focus.'
  },
  {
    icon:FilterLogo,
    title: 'Smart Filtering',
    text: 'Apply filters by specialty, region, role, and other attributes that matter.'
  },
  {
    icon:DeliveryLogo,
    title: 'Scalable Delivery',
    text: 'Start small or go enterprise — adjust volume as your pipeline grows.'
  },
  {
    icon:GoalLogo,
    title: 'Specific Targeting',
    text: ' Send timely, personalized follow-ups based on each lead’s stage, behavior, and funnel position.'
  }
]


export const verifiedData=[
  'Verified contact info — Accurate, up-to-date lead data',
  'Lower bounce rates — Fewer invalid or outdated emails',
  'Reliable delivery paths — Emails land where they should',
]
export const images = [
  {
    src: '/images/matter-1.png',
    alt: 'Image 1',
    class: 'rounded-2xl object-contain w-full h-full order-1 md:order-1',
  },
  {
    src: '/images/matter-2.png',
    alt: 'Image 2',
    class: 'rounded-2xl object-contain w-full h-full order-2 md:order-2',
  },
  {
    src: '/images/matter-3.png',
    alt: 'Image 3',
    class: 'rounded-2xl object-contain w-full h-full order-4 md:order-3',
  },
  {
    src: '/images/matter-4.png',
    alt: 'Image 4',
    class: 'rounded-2xl object-contain w-full h-full order-3 md:order-4',
  },
];