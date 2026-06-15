import StoryCard from "@/components/StoryCard";
import Title from "@/components/Title";
import React from "react";

const Stories = () => {
  const devStories = [
    {
      id: "1",
      name: "Sarah Jenkins",
      designation: "Senior Frontend Engineer",
      company: "Vercel",
      experience: 6,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      story:
        "I started my career in graphic design but felt limited by static layouts. I taught myself JavaScript through open-source contributions. Transitioning to Next.js was a game-changer for me because it bridged the gap between complex performance optimization and beautiful user experiences. My proudest moment was refactoring our core dashboard to achieve a perfect 100 Lighthouse score.",
      about:
        "Passionate about web performance, design systems, and making the web accessible to everyone. Outside of coding, you can find me mountain biking or experimenting with specialty coffee.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "2",
      name: "Alex Chen",
      designation: "Backend Tech Lead",
      company: "Stripe",
      experience: 8,
      skills: ["Go", "Python", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      story:
        "I used to be a structural engineer, designing physical bridges. One day I realized building digital infrastructure was faster, just as complex, and didn't require high-vis jackets. I joined a bootcamp, fell in love with distributed systems, and now I help scale payment pipelines that process millions of transactions per second.",
      about:
        "Systems thinker who thrives on breaking down complex architectural bottlenecks. Avid chess player and mentor to career-switchers.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "3",
      name: "Amara Okafor",
      designation: "Full Stack Developer",
      company: "Canva",
      experience: 4,
      skills: ["Node.js", "React", "Next.js", "MongoDB", "Express", "Prisma"],
      story:
        "Living in Lagos, reliable internet was always a hurdle, which forced me to learn how to build highly optimized, offline-first web apps. Building my first complete SaaS application solo caught the eye of international recruiters. Today, I build collaborative tools used by millions globally, proving that tech talent has no borders.",
      about:
        "Full-stack generalist focused on building seamless developer tools. Technical writer and advocate for the African tech ecosystem.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "4",
      name: "Marcus Lindqvist",
      designation: "DevOps Engineer",
      company: "Spotify",
      experience: 5,
      skills: [
        "Terraform",
        "GitHub Actions",
        "Linux",
        "Bash",
        "Prometheus",
        "GCP",
      ],
      story:
        "I spent my early tech days as a sysadmin fixing broken servers at 3 AM. I quickly realized that if I automated my entire job, I could sleep through the night. That realization led me straight into the world of Infrastructure as Code (IaC) and CI/CD pipelines. Now, I make deployment pipelines so smooth that developers don't even notice them.",
      about:
        "Automation enthusiast who believes human error is just a missing automation script. Record collector and synthesizer hobbyist.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "5",
      name: "Elena Rostova",
      designation: "AI Integration Engineer",
      company: "Hugging Face",
      experience: 3,
      skills: ["Python", "JavaScript", "OpenAI API", "LangChain", "Next.js"],
      story:
        "I graduated with a degree in Linguistics, thinking I'd work in translation. Instead, large language models exploded, and I found my niche connecting human language concepts with machine learning APIs. I bridge the gap between heavy data science models and clean consumer-facing web interfaces using Next.js AI SDK.",
      about:
        "Fascinated by the intersection of natural language and software architecture. When I'm not tweaking prompts, I bake artisanal sourdough.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "6",
      name: "David Kim",
      designation: "Mobile App Developer",
      company: "Airbnb",
      experience: 7,
      skills: ["React Native", "Swift", "Kotlin", "JavaScript", "Firebase"],
      story:
        "My journey began by building quirky iOS utility apps in my university dorm room. When React Native matured, I realized I could double my impact by writing single-codebase apps without sacrificing native performance. I love crafting micro-interactions and transitions that make an app feel alive when you touch it.",
      about:
        "UI/UX-focused mobile engineer dedicated to pixel-perfection. Absolute fanatic for indoor rock climbing and bouldering.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "7",
      name: "Sofia Rodriguez",
      designation: "Security Engineer",
      company: "Auth0",
      experience: 6,
      skills: [
        "OAuth2",
        "JWT",
        "Node.js",
        "Penetration Testing",
        "OWASP",
        "Rust",
      ],
      story:
        "I was always the kid who tried to find loopholes in video games to see how they worked underneath. That curiosity evolved into ethical hacking. I transitioned into application security to help developers write secure code *before* it ships to production, rather than cleaning up messes after a breach.",
      about:
        "Cybersecurity advocate helping developers demystify cryptography and web tokens. Cat mom and competitive video game player.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "8",
      name: "Liam O'Connor",
      designation: "Junior Frontend Developer",
      company: "Freelance / Indie Hacker",
      experience: 1,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      story:
        "Twelve months ago, I didn't know what a `div` was. I was working in retail sales and feeling stuck. I committed to coding 2 hours every single night after my shifts. It was brutal, but building my own side projects and shipping them to actual users gave me the confidence to land my first few client contracts.",
      about:
        "Hungry junior developer learning in public. Documenting my journey from retail worker to full-time remote developer.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "9",
      name: "Priya Sharma",
      designation: "Data Engineer",
      company: "Netflix",
      experience: 5,
      skills: [
        "Apache Spark",
        "Python",
        "SQL",
        "Snowflake",
        "Hadoop",
        "Airflow",
      ],
      story:
        "While studying statistics, I realized equations are only useful if you have clean data to feed them. I gravitated away from data modeling and toward building the massive, resilient pipelines that transport petabytes of data seamlessly. Keeping real-time streaming pipelines functional during high-traffic global events is my ultimate adrenaline rush.",
      about:
        "Data infrastructure plumber. Big fan of data integrity and automation. Loves doing landscape photography on long weekend hikes.",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: "10",
      name: "Yuki Tanaka",
      designation: "Staff Engineer",
      company: "Figma",
      experience: 11,
      skills: ["WebAssembly", "C++", "TypeScript", "React", "Canvas API"],
      story:
        "I spent the first half of my career working on heavy desktop software architectures. Seeing the web browser evolve into a powerful sandbox capable of running high-performance graphics via WebAssembly changed everything for me. I joined the movement to bring desktop-grade creativity software directly into the browser tab.",
      about:
        "Low-level web performance geek specializing in rendering engines and browser optimization. Mentor, tea enthusiast, and amateur woodworker.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];


  return (
    <div>
      <Title>Explore Stories of developers</Title>
      <div className="grid grid-cols-3 gap-10">
        {
            devStories.map(story => <StoryCard key={story.id} story={story}></StoryCard>)
        }
      </div>
    </div>
  );
};

export default Stories;
