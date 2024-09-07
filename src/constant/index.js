import partnersLogo from "../assets/images/pinterest.png";

//NAVBAR

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

//PARTNERS

export const companyLogos = [
  {
    id: "0",
    title: partnersLogo,
  },
  {
    id: "1",
    title: partnersLogo,
  },
  {
    id: "3",
    title: partnersLogo,
  },
  {
    id: "4",
    title: partnersLogo,
  },
];

//PRICING

export const pricingPlans = [
  {
    title: "Basic",
    price: 0,
    description: "AI chatbot, personalized recommendations",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "Personalized recommendations",
      "24/7 customer support",
    ],
    color: "text-purple-600", // Purple color for Basic
  },
  {
    title: "Pro",
    price: 29,
    description: "AI chatbot, personalized recommendations",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "Priority customer support",
      "Custom AI model training",
    ],
    color: "text-yellow-500", // Gold color for Pro
  },
  {
    title: "Enterprise",
    price: "99",
    description: "AI chatbot, personalized recommendations",
    features: [
      "Dedicated account manager",
      "Bespoke AI solutions",
      "24/7 premium support",
    ],
    color: "text-green-500", // Custom green color for Enterprise
  },
];
