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
import CubeLogo from "/icons/cube.svg";
import FilterLogo from "/icons/filter.svg";
import DeliveryLogo from "/icons/delivery.svg";
import GoalLogo from "/icons/goal.svg";
import ToolsFirstImage from "/images/tools1.svg";
import ToolsSecongImage from "/images/tools2.png";
import ToolsFifthImage from "/images/tools5.png";
import ToolsSixthImage from "/images/tools6.png";
import ToolsSeventhImage from "/images/tools7.png";
import ToolsEighthImage from "/images/tools8.png";
import ToolsNinthImage from "/images/tools9.png";
import ToolsTenthImage from "/images/tools10.png";
import ToolsEleventhImage from "/images/tools11.png";
import ToolsTwelfthImage from "/images/tools12.png";
import ResourcesToolsFirstImage from "/images/semrush.png";
import ResourcesToolsSecondImage from "/images/marketer.png";
import ResourcesToolsThirdImage from "/images/hootsuite.png";

export const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Solutions", href: "solutions" },
  { name: "Resources", href: "resources" },
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
    { name: "Privacy Policy", href: "privacy" },
    { name: "KYC Policies", href: "#" },
  ],
};
export const socialLinks = [
  {
    icon: LinkdlnLogo,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/vipbs/",
  },
  {
    icon: FacebookLogo,
    alt: "Facebook",
    href: "https://www.facebook.com/people/VIP-Business-Services/61569554494061/",
  },
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
      "High-intent homeowners interested in installing or switching to solar energy.",
    features: [
      "Geo-targeted prospects for local installers",
      "Verified inquiries from energy-conscious households",
      "Perfect for solar companies, resellers, and green tech providers",
    ],
    featured: false,
  },
  {
    id: 2,
    name: "Healthcare Leads",
    price: "$6",
    description:
      "Connect with patients and healthcare decision-makers actively seeking medical solutions.",
    features: [
      "Verified patient inquiries for clinics and providers",
      "Segmentation by specialty (dental, vision, primary care, wellness, etc.)",
      "Ideal for healthcare providers, insurance companies, and telehealth services",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Retail Leads",
    price: "$1",
    description:
      "Shoppers and decision-makers ready to purchase products across multiple categories.",
    features: [
      "Segmentation by demographics and buying habits",
      "Insights from online and offline consumer activity",
      "Ideal for retail stores, e-commerce, and brand campaigns",
    ],
    featured: false,
  },
  {
    id: 4,
    name: "Automotive Leads",
    price: "$1",
    description:
      "Car buyers actively searching for new or used vehicles and related services.",
    features: [
      "Segmentation by vehicle type, budget, and location",
      "Leads for dealerships, service centers, and financing offers",
      "Great for auto sales, leasing, and aftermarket services",
    ],
    featured: false,
  },
  {
    id: 5,
    name: "Real Estate Leads",
    price: "$5",
    description:
      "Active home buyers, sellers, and property investors segmented by zip code.",
    features: [
      "Residential and commercial segmentation",
      "Region-specific targeting for realtors and brokers",
      "Perfect for agents, lenders, and closing services",
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Landscaping & Gardening Leads",
    price: "$7",
    description:
      "Homeowners and businesses seeking outdoor improvement services.",
    features: [
      "Segmentation by property type and region",
      "Verified requests for landscaping, lawn care, and gardening",
      "Ideal for contractors, designers, and local service providers",
    ],
    featured: false,
  },
  {
    id: 7,
    name: "Legal Leads",
    price: "$4",
    description:
      "Individuals actively seeking legal help in specific practice areas.",
    features: [
      "Segmentation by case type (injury, family, business, etc.)",
      "Verified inquiries ready for consultation",
      "Ideal for law firms and independent attorneys",
    ],
    featured: false,
  },
  {
    id: 8,
    name: "Accounting & Tax Prep Leads",
    price: "$2",
    description:
      "Businesses and individuals in need of financial reporting or tax filing.",
    features: [
      "Segmentation by business size or individual income level",
      "Verified leads for tax season and year-round accounting",
      "Perfect for CPAs, bookkeepers, and financial advisors",
    ],
    featured: false,
  },
  {
    id: 9,
    name: "Marketing & Advertising Leads",
    price: "$9",
    description:
      "Businesses looking for branding, advertising, and digital growth support.",
    features: [
      "Segmentation by industry, budget, and campaign type",
      "Verified demand for digital, print, and media solutions",
      "Great for agencies, consultants, and media buyers",
    ],
    featured: false,
  },
  {
    id: 10,
    name: "Healthcare Leads",
    price: "$6",
    description:
      "Patients and healthcare decision-makers searching for services and solutions.",
    features: [
      "Verified inquiries for clinics, practices, and telehealth",
      "Segmentation by specialty (dental, wellness, vision, etc.)",
      "Perfect for providers, insurers, and healthcare platforms",
    ],
    featured: false,
  },
  {
    id: 11,
    name: "Financial Leads",
    price: "$8",
    description:
      "Individuals and businesses looking for loans, credit, and investment products.",
    features: [
      "Segmentation by product (mortgage, credit, business loan, etc.)",
      "Verified prospects with financial intent",
      "Ideal for banks, lenders, and investment firms",
    ],
    featured: false,
  },
  {
    id: 12,
    name: "Technology Leads",
    price: "$5",
    description:
      "Companies and professionals seeking IT solutions and digital products.",
    features: [
      "Segmentation by industry, company size, and need",
      "Verified demand for SaaS, cloud, and cybersecurity solutions",
      "Perfect for software vendors, resellers, and IT providers",
    ],
    featured: false,
  },
];

export const privacyData = [
  {
    title: "Personal Statement",
    text: "At VIP Business Services, we understand that your personal information is valuable — and protecting it is our top priority. This Privacy Policy outlines how we collect, use, store, and protect your data whenever you interact with our website, products, or services. Our goal is to provide full transparency, empower your privacy choices, and ensure a secure experience that aligns with both legal standards and our commitment to your trust. We encourage you to read this policy carefully to understand how your data is handled across every touchpoint of our platform.",
  },
  {
    title: "What Are Cookies?",
    text: "Cookies are small data files stored on your device when you visit a website. They help us remember your preferences, enhance functionality, and understand how you interact with our platform — allowing us to deliver a smoother, more personalized experience.",
  },
  {
    title: "Why Do We Use Cookies?",
    text: "We use cookies to ensure our site functions properly, improve your overall experience, and deliver content tailored to your interests. Cookies also help us understand usage patterns so we can continuously enhance our services.",
  },
  {
    title: "What Data Do We Collect?",
    text: "We may collect information such as your name, email, phone number, IP address, browsing behavior, purchase history, and location data. This helps us deliver relevant content and provide better service tailored to your needs.",
  },
  {
    title: "Who Do We Share It With?",
    text: "We only share your data with trusted third-party providers — such as payment processors, analytics tools, and customer support platforms — to help us operate efficiently. We do not sell or trade your personal information.",
  },
  {
    title: "Media & Content Ownership",
    text: "Unless otherwise noted, all images, videos, logos, and written content on this site are the exclusive property of VIP Business Services and are protected under intellectual property laws.",
  },
  {
    title: "Your Rights",
    text: "You have the right to access, correct, or delete your personal data. You may also request to review how your information is used. To exercise these rights, simply contact our support team.",
  },
  {
    title: "Opt-Out & Preferences",
    text: "You can manage cookie preferences through your browser settings and choose to opt out of certain analytics tools. Please note that disabling some cookies may limit functionality or user experience on our site.",
  },
  {
    title: "Updates",
    text: "We may occasionally update this Privacy Policy to reflect legal or service changes. The most recent version will always be available on this page, along with its last updated date.",
  },
];

export const solutions = [
  {
    iconSrc: BookIcon,
    title: "Real-time trend tracking system",
    description: "Get pre-qualified leads delivered for every campaign .",
  },
  {
    iconSrc: Puzzle,
    title: " Targeted leads by filters you control",
    description:
      "Close more deals by focusing only on qualified, sales-ready leads.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Healthcare & Recruiting Solutions",
    description:
      "Find NPI-verified providers or top talent, filtered by specialty and location.",
  },
];

export const success = [
  {
    iconSrc: BookIcon,
    title: "Personalized Setup",
    description:
      "We tailor every step of onboarding to your goals and workflow.",
  },
  {
    iconSrc: Puzzle,
    title: "Ongoing Support",
    description:
      "Get expert guidance and responsive help, whenever you need it.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Growth Strategy",
    description:
      "From targeting to outreach, we help you to scale with confidence.",
  },
];

export const timelineItems = [
  "Designed For High-Performing Teams Across Industries",
  "Built To Reduce Overhead And Accelerate Outreach",
  "Flexible For Small Businesses And Enterprise Scale",
  "Backed By Expert Support And Lead Data Integrity",
  "Powered By Automation, Strategy, And Personalization",
];

export const leadCards = [
  {
    icon: CubeLogo,
    title: "Tailored Packages",
    text: "Hand-picked leads shaped by your campaign goals and industry focus.",
  },
  {
    icon: FilterLogo,
    title: "Smart Filtering",
    text: "Apply filters by specialty, region, role, and other attributes that matter.",
  },
  {
    icon: DeliveryLogo,
    title: "Scalable Delivery",
    text: "Start small or go enterprise — adjust volume as your pipeline grows.",
  },
  {
    icon: GoalLogo,
    title: "Specific Targeting",
    text: " Send timely, personalized follow-ups based on each lead’s stage, behavior, and funnel position.",
  },
];

export const verifiedData = [
  "Verified contact info — Accurate, up-to-date lead data",
  "Lower bounce rates — Fewer invalid or outdated emails",
  "Reliable delivery paths — Emails land where they should",
];
export const images = [
  {
    src: "/images/matter-1.png",
    alt: "Image 1",
    class:
      "rounded-2xl object-cover max-h-[250px] sm:object-cover w-full sm:h-full order-1 md:order-1",
  },
  {
    src: "/images/matter-2.png",
    alt: "Image 2",
    class:
      "rounded-2xl  max-h-[250px] object-contain w-full sm:h-full order-2 md:order-2",
  },
  {
    src: "/images/matter-3.png",
    alt: "Image 3",
    class:
      "rounded-2xl  max-h-[250px] object-contain w-full sm:h-full order-4 md:order-3",
  },
  {
    src: "/images/matter-4.png",
    alt: "Image 4",
    class:
      "rounded-2xl object-cover max-h-[250px] sm:object-cover w-full sm:h-full order-3 md:order-4",
  },
];

export const resourcesData = [
  "Tips for improving lead conversion rates",
  "The latest trends in AI and lead generation",
  "Case studies and success stories",
];

export const tools = [
  {
    iconSrc: BookIcon,
    title: "Lead Tracking Spreadsheets",
    description:
      "Close more deals by focusing only on qualified, sales-ready leads.",
  },
  {
    iconSrc: Puzzle,
    title: "Sales Email Templates Set Pack",
    description: "Get pre-qualified leads delivered for every campaign .",
  },
  {
    iconSrc: SnowballIcon,
    title: "Campaign Planning Calendars",
    description:
      "Find NPI-verified providers or top talent, filtered by specialty and location.",
  },
];

export const toolsImages = [
  ToolsFirstImage,
  ToolsSecongImage,
  ToolsFifthImage,
  ToolsSixthImage,
  ToolsSeventhImage,
  ToolsEighthImage,
  ToolsNinthImage,
  ToolsTenthImage,
  ToolsEleventhImage,
  ToolsTwelfthImage,
];

export const resourcesImages = [
  ResourcesToolsFirstImage,
  ResourcesToolsSecondImage,
  ResourcesToolsThirdImage,
  ResourcesToolsFirstImage,
  ResourcesToolsSecondImage,
  ResourcesToolsThirdImage,
  ResourcesToolsFirstImage,
  ResourcesToolsSecondImage,
  ResourcesToolsThirdImage,
];

export const about = [
  {
    iconSrc: BookIcon,
    title: "AI-Driven Matching",
    description:
      "Deliver leads that match by intent, specialty, and location — powered by smart automation.",
  },
  {
    iconSrc: Puzzle,
    title: "Faster Conversions",
    description:
      "Get prospects who are pre-qualified and sales-ready, cutting time to close.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Custom Lead Strategies",
    description:
      "Tailored campaigns to your industry, goals, and team size — not one-size-fits-all.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Verified for Accuracy",
    description:
      "Phone-verified, updated, and cross-checked leads for better reach and engagement.",
  },
];
export const values = [
  {
    icon: "/icons/focus.svg",
    alt: "Customer Focus",
    title: "Customer Focus",
    description:
      "We put your success first — every solution is built with your goals in mind.",
  },
  {
    icon: "/icons/innovation.svg",
    alt: "Innovation",
    title: "Innovation",
    description:
      "We constantly evolve and adopt the latest technologies to stay ahead.",
  },
  {
    icon: "/icons/integrity.svg",
    alt: "Integrity",
    title: "Integrity",
    description:
      "We value transparency, honesty, and trust in every interaction.",
  },
  {
    icon: "/icons/excellence.svg",
    alt: "Excellence",
    title: "Excellence",
    description:
      "We strive for top-tier results and never settle for “good enough”.",
  },
];

export const tags = [
  "Customization",
  "Growth",
  "Impact",
  "Trust",
  "Scalability",
  "Lead Intelligence",
  "Integration",
];

export const aboutSlider = [
  {
    iconSrc: SnowballIcon,
    title: "Industry-Focused Fit",
    description:
      "We design tailored lead generation strategies that adapt to your specific vertical — ensuring scalability, efficiency, and meaningful results for your business.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Data-Driven Insights",
    description:
      "Our platform leverages verified data and advanced analytics to deliver leads that aren’t just numbers, but real opportunities aligned with your goals.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Scalable Growth",
    description:
      "Whether you need 100 or 10,000 leads, our solutions scale with you. We focus on building a steady, predictable pipeline that fuels long-term success.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Verified Quality",
    description:
      "Every lead we deliver is phone-verified or opt-in compliant — prioritizing quality over volume so your team spends less time chasing and more time closing.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Flexible Targeting",
    description:
      "From geo-targeting to industry-specific filters, our leads are segmented to match your exact audience, ensuring higher conversion rates and better ROI.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Measurable Impact",
    description:
      "We don’t just deliver leads — we track performance, optimize continuously, and provide transparent reporting so you can see the results in real time.",
  },
];

export const productData = [
  {
    iconSrc: BookIcon,
    title: "Sales Teams",
    description:
      "Close more deals by focusing only on qualified, sales-ready leads.",
  },
  {
    iconSrc: Puzzle,
    title: "Agencies & Consultants",
    description:
      "Get pre-qualified leads delivered for every campaign —  no guessing.",
  },
  {
    iconSrc: SnowballIcon,
    title: "Healthcare & Recruiting",
    description:
      "Find NPI-verified providers or top talent, filtered by specialty and location.",
  },
];

export const faqData = [
  {
    title: "AI-Generated Lead Sets",
    description:
      "Leads generated using Al models trained on ideal customer criteria, tailored by vertical and intent.",
    price: "$1.00 – $9.00",
  },
  {
    title: "Phone Verified Leads",
    description:
      "Human-verified contact info for higher accuracy.",
    price: "$2.00 – $15.00",
  },
  {
    title: "Industry-Specific Lead Packs",
    description:
      "Pre-packaged lead lists by vertica.",
    price: "$199.00 – $999.00 / pack",
  },
  {
    title: "Lead Exclusivity Upgrade",
    description:
      "Get exclusive access to leads that won't be shared with other buyers in your vertical or territory for X days.",
    price: "+25% over base lead price",
  },
  {
    title: "Custom Lead Campaign Deployment",
    description:
      "End-to-end lead capture funnel with targeting and delivery setup.",
    price: "Starts at $1,000.00",
  },
  {
    title: "CRM / API Integration Support",
    description:
      "One-time setup or on-going support to route leads into your CRM.",
    price: "$100.00 – $525.00",
  },
];

export const mockTestimonials = [
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-1.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-2.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-1.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-2.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-1.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-2.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-1.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-2.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-1.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
  {
    testimonialText:
      "I’ve tried 5+ lead platforms. This is the only one that gave us usable data and real conversion.",
    userImage: "/images/user-img-2.png",
    userName: "Avery Smith",
    userHandle: "@jaded_butterfly1",
  },
];

export const leadData = [
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
  {
    image: "/images/leads.png",
    title: "Solar Leads",
    text: "Reach homeowners and businesses actively seeking solar solutions. These leads are geo-targeted and ideal for installers, consultants, or green energy marketers looking to close fast.",
    price: "$1.00",
    reviews: 1588,
    inStock: true,
  },
];
