import { SiPython, SiReact, SiMysql, SiDocker, SiGit, SiJavascript } from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { GraduationCap, Briefcase, HeartPulse, Globe, Banknote, ShoppingBag, Truck, Factory } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function ITTraining() {
  return (
    <ServiceTemplate
      title="IT Training & Skill Development"
      subtitle="Industry-aligned tech training that builds job-ready professionals. Learn from practitioners, work on real projects, and land your dream role."
      tags={["FULL STACK","PYTHON","JAVA","DATA SCIENCE","CLOUD","DEVOPS","PLACEMENT","CERTIFICATION"]}
      statsTitle="Our Training Impact"
      stats={[{ value:"5000+", label:"Students Trained" },{ value:"98%", label:"Placement Rate" },{ value:"50+", label:"Tech Programs" }]}
      featuresTitle="Training That Gets You Hired"
      featuresSubtitle="Every program is crafted with one goal — making you job-ready from day one with real-world skills that employers are actively hiring for."
      features={[
        { title:"Industry-Aligned Curriculum",   description:"Training modules built in collaboration with top tech companies to ensure relevance and immediate employability." },
        { title:"Hands-On Live Projects",        description:"Work on real-world projects that simulate actual job scenarios, building a portfolio employers can see." },
        { title:"Expert Instructors",            description:"Learn from industry veterans with 10+ years of experience — not just professors." },
        { title:"Flexible Schedules",            description:"Weekend, weekday, and fast-track batches to fit students, working professionals, and career-changers." },
        { title:"Certification Support",         description:"Prepare for globally recognized certifications with dedicated exam prep, mock tests, and study materials." },
      ]}
      industries={[
        { icon:<GraduationCap size={20}/>, title:"Education" },
        { icon:<Briefcase size={20}/>,     title:"IT Services" },
        { icon:<Banknote size={20}/>,      title:"BFSI" },
        { icon:<HeartPulse size={20}/>,    title:"Healthcare IT" },
        { icon:<ShoppingBag size={20}/>,   title:"E-commerce" },
        { icon:<Globe size={20}/>,         title:"Consulting" },
        { icon:<Truck size={20}/>,         title:"Logistics" },
        { icon:<Factory size={20}/>,       title:"Manufacturing" },
      ]}
      techTitle="Technologies We Train"
      techDesc="We train on the most in-demand technologies that top companies are actively hiring for."
      techStack={[
        { icon:<SiPython size={28} color="#3776AB"/>,     name:"Python" },
        { icon:<FaJava size={28} color="#ED8B00"/>,       name:"Java" },
        { icon:<SiJavascript size={28} color="#F7DF1E"/>, name:"JavaScript" },
        { icon:<SiReact size={28} color="#61DAFB"/>,      name:"React" },
        { icon:<SiMysql size={28} color="#4479A1"/>,      name:"SQL" },
        { icon:<FaAws size={28} color="#FF9900"/>,         name:"AWS" },
        { icon:<SiDocker size={28} color="#2496ED"/>,     name:"Docker" },
        { icon:<SiGit size={28} color="#F05032"/>,        name:"Git" },
      ]}
    />
  );
}
