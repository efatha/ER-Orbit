"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Timeline",
    date: "Mar 2025",
    content: "1 to 3 months to complete the project.",
    category: "Planning",
    icon: FileText,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Apr 2024",
    content: "UI/UX design, Responsive design, and Bootstrap.",
    category: "Design",
    icon: Clock,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Skills",
    date: "Mar 2024",
    content: "Python, JavaScript, React, Next.js, CSS.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 86,
  },
  {
    id: 4,
    title: "Testing",
    date: "Jan 2026",
    content: "Cypress, Manual testing, and unit tests.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "E potfolio",
    date: " since May 2024",
    content: "https://efatha.github.io/my-portofolio/",
    category: "Release",
    icon: Calendar,
    relatedIds: [4],
    status: "completed" as const,
    energy: 100,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </main>
  );
}