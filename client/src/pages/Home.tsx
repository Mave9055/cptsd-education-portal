import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BookOpen } from "lucide-react";
import lecturesData from "@/data/lectures.json";

interface Lecture {
  id: number;
  title: string;
  subtitle: string;
  learning_objectives: Array<{ action: string; description: string }>;
}

export default function Home() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    setLectures(lecturesData.lectures);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663253975545/ZUM5rhvCzZ8KMuehMbne5p/hero-main-DmhwPvXMcjb9LY59HRp7WY.webp"
            alt="Hero background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Education Portal</span>
            </div>
            <h1 className="mb-4 font-serif text-5xl font-bold text-slate-900 md:text-6xl">
              The Silence & The Truth
            </h1>
            <p className="mb-8 text-xl text-slate-700">
              A Comprehensive Education on Complex PTSD, Trauma Recovery, and the Human Experience
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              Through the story of Daniel and clinical insights, explore how trauma shapes the nervous system, relationships, and identity. Designed for mental health professionals, educators, survivors, and anyone seeking to understand trauma through compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12">
            <h2 className="mb-2 font-serif text-4xl font-bold text-slate-900">
              {lectures.length} Lectures
            </h2>
            <p className="text-lg text-slate-600">
              Explore each lecture at your own pace. Each includes learning objectives, detailed content, discussion questions, and facilitator notes.
            </p>
          </div>

          {/* Lectures Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {lectures.map((lecture) => (
              <Link key={lecture.id} href={`/lecture/${lecture.id}`}>
                <Card className="group relative overflow-hidden border-slate-200 bg-white p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                  
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <div className="mb-2 inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                        Lecture {lecture.id}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900">
                        {lecture.title}
                      </h3>
                    </div>
                  </div>

                  {lecture.subtitle && (
                    <p className="mb-4 text-sm italic text-slate-600">
                      {lecture.subtitle}
                    </p>
                  )}

                  {lecture.learning_objectives.length > 0 && (
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Learning Objectives
                      </p>
                      <ul className="space-y-1">
                        {lecture.learning_objectives.slice(0, 2).map((obj, idx) => (
                          <li key={idx} className="text-sm text-slate-700">
                            <span className="font-semibold text-primary">{obj.action}</span> {obj.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex items-center gap-2 text-primary transition-all duration-300 group-hover:gap-3">
                    <span className="font-semibold">Read Lecture</span>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 font-serif text-4xl font-bold text-slate-900">
            About This Course
          </h2>
          <div className="space-y-6 text-slate-700">
            <p>
              This educational portal presents a groundbreaking approach to understanding Complex PTSD (CPTSD) through the lens of attachment trauma, nervous system dysregulation, and the human capacity for healing.
            </p>
            <p>
              Each lecture combines clinical knowledge with compassionate storytelling, using the real experiences of individuals navigating trauma recovery. The content is designed to challenge conventional thinking about mental health and to foster a trauma-informed perspective across all professional and personal contexts.
            </p>
            <p>
              Whether you're a mental health professional, educator, survivor, or simply someone seeking to understand trauma better, these lectures offer evidence-based insights wrapped in genuine human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto max-w-5xl px-4 text-center text-sm text-slate-600">
          <p>
            © 2026 The Silence & The Truth: A CPTSD Education Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
