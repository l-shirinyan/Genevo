import LinkdlnLogo from '../assets/icons/linkdln.svg'
import FacebookLogo from '../assets/icons/facebook.svg'
import DocumnentLogo from '../assets/icons/document.svg'
import SettingsLogo from '../assets/icons/settings.svg'
import RepeatLogo from '../assets/icons/repeat.svg'
import ProgressLogo from '../assets/icons/progress.svg'
import BookIcon from '~/assets/icons/book.svg'
import Puzzle from '~/assets/icons/puzzle.svg'
import SnowballIcon from '~/assets/icons/snowball.svg'
import SellFirstImage from '~/assets/images/sell1.png'
import SellSecondImage from '~/assets/images/sell2.png'
import SellThirdImage from '~/assets/images/sell3.png'
import SellFourthImage from '~/assets/images/sell4.png'

export const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];
export const footerNavigation = {
  leads: [
    { name: 'Clothing', href: '#' },
    { name: 'Real Estate', href: '#' },
    { name: 'Technology', href: '#' },
  ],
  services: [
    { name: 'Fulfillment Policies', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'KYC Policies', href: '#' },
  ],
}
export const socialLinks = [
  { icon: LinkdlnLogo, alt: "LinkedIn", href: "/" },
  { icon: FacebookLogo, alt: "Facebook", href: "/" },
];

export const slides = [
  { id: 1, title: 'B2B Sales Teams', subtitle: 'Let your reps focus', image: SellFirstImage },
  { id: 2, title: 'Marketing Agencies', subtitle: 'Power campaigns with', image: SellSecondImage },
  { id: 3, title: 'Recruiters & Staffing', subtitle: 'Find matching candidat', image: SellThirdImage },
  { id: 4, title: 'Tech Startups', subtitle: 'Book more local jobs.', image: SellFourthImage },
  { id: 5, title: 'B2B Sales Teams', subtitle: 'Let your reps focus', image: SellFirstImage },
  { id: 6, title: 'Marketing Agencies', subtitle: 'Power campaigns with', image: SellSecondImage },
  { id: 7, title: 'Recruiters & Staffing', subtitle: 'Find matching candidat', image: SellThirdImage },
  { id: 8, title: 'Tech Startups', subtitle: 'Book more local jobs.', image: SellFourthImage }
]


export const infoCards = [
  {
    icon: DocumnentLogo,
    title: 'Prebuilt Templates',
    text: 'Start fast with professionally written cold and warm email templates tailored to your audience.'
  },
  {
    icon:SettingsLogo,
    title: 'Smart Triggers',
    text: 'Emails automatically adjust based on lead actions — like opens, clicks, or replies.'
  },
  {
    icon:RepeatLogo,
    title: 'Behavior-Based Sequences',
    text: 'Send timely, personalized follow-ups based on each lead’s stage, behavior, and funnel position.'
  },
  {
    icon:ProgressLogo,
    title: 'Reply & Engagement Tracking',
    text: 'Track who’s opening, clicking, and replying — no guessing.'
  }
]


export const features = [
  {
    iconSrc: BookIcon,
    title: 'Instant Data Access',
    description: 'Leads delivered in minutes, not days.',
  },
  {
    iconSrc: Puzzle,
    title: 'AI-Powered Accuracy',
    description: 'Smart filters and human-grade validation.',
  },
  {
    iconSrc: SnowballIcon,
    title: 'Scalable Pricing',
    description: 'Buy exactly what you need — no fluff.',

  }
]

export const tiers = [
  {
    id: 1,
    name: "Solar Leads",
    price: "$1",
    description: "High-intent homeowners ready to install or switch to solar energy",
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
    description: "Active home buyers, sellers, and property investors by zip code.",
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
    description: "Active home buyers, sellers, and property investors by zip code",
    features: [
      "Residential & commercial segmentation",
      "Residential & commercial segmentation",
      "Ideal for agents, lenders, or closing services",
    ],
    featured: false,
  },
];
