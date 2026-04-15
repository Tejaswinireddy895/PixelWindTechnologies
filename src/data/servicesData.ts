import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiCloud,
  FiSettings,
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiUserCheck,
} from "react-icons/fi";

import {
  AiOutlineRobot,
  AiOutlineBarChart,
} from "react-icons/ai";

import { MdOutlineCampaign } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

/* ================= TYPE ================= */
export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: any; // ✅ replaced emoji with icon
}

/* ================= CORE SERVICES ================= */
export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "it-training",
    icon: FiBookOpen,
    title: "IT Training & Skill Development",
    desc: "Industry-aligned tech training that builds job-ready professionals.",
    href: "/it-training",
  },
  {
    id: "corporate-training",
    icon: FiUsers,
    title: "Corporate Training Programs",
    desc: "Customized upskilling solutions for enterprise teams.",
    href: "/corporate-training",
  },
  {
    id: "staffing",
    icon: FiBriefcase,
    title: "Technical & Non-Technical Staffing",
    desc: "End-to-end recruitment and placement services.",
    href: "/staffing",
  },
  {
    id: "placement",
    icon: FiUserCheck,
    title: "Placement Assistance",
    desc: "Dedicated support to place candidates in the right roles.",
    href: "/placement",
  },
];

/* ================= TECH SERVICES ================= */
export const TECH_SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    icon: FiCode,
    title: "Web Development",
    desc: "Modern, fast, and scalable web applications.",
    href: "/web-development",
  },
  {
    id: "app-development",
    icon: FiSmartphone,
    title: "App Development",
    desc: "Cross-platform mobile apps for iOS and Android.",
    href: "/app-development",
  },
  {
    id: "ui-ux-design",
    icon: FiPenTool,
    title: "UI/UX Design",
    desc: "User-centered design that converts visitors.",
    href: "/ui-ux-design",
  },
  {
    id: "cloud-devops",
    icon: FiCloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure and CI/CD pipelines.",
    href: "/cloud-devops",
  },
  {
    id: "digital-marketing",
    icon: MdOutlineCampaign,
    title: "Digital Marketing",
    desc: "SEO, social media & paid campaigns that drive growth.",
    href: "/digital-marketing",
  },
  {
    id: "it-consulting",
    icon: FiSettings,
    title: "IT Consulting",
    desc: "Strategic technology guidance for your business.",
    href: "/it-consulting",
  },
  {
    id: "blockchain",
    icon: FaProjectDiagram,
    title: "Blockchain",
    desc: "Decentralized apps and smart contract development.",
    href: "/blockchain",
  },
];

/* ================= AI SERVICES ================= */
export const AI_SERVICES: ServiceItem[] = [
  {
    id: "geneai",
    icon: AiOutlineRobot,
    title: "Generative AI",
    desc: "Unlock personalized insights and automation through AI-driven solutions.",
    href: "/geneai",
  },
  {
    id: "machine-learning",
    icon: AiOutlineRobot,
    title: "Machine Learning",
    desc: "Predict outcomes and automate decisions with intelligent ML programs.",
    href: "/machine-learning",
  },
  {
    id: "datascience-analytics",
    icon: AiOutlineBarChart,
    title: "Data Science & Analytics",
    desc: "Make informed decisions using data visualization and real-world insights.",
    href: "/datascience-analytics",
  },
  {
    id: "business-intelligence",
    icon: AiOutlineBarChart,
    title: "Business Intelligence",
    desc: "Transform raw knowledge into actionable strategies with BI tools.",
    href: "/business-intelligence",
  },
];