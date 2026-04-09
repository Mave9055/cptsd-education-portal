import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Streamdown } from "streamdown";
import lecturesData from "@/data/lectures.json";

interface Lecture {
  id: number;
  title: string;
  subtitle: string;
  learning_objectives: Array<{ action: string; description: string }>;
  content: string;
  discussion_questions: string[];
  facilitator_note: string;
}

export default function LectureDetail() {
  const params = useParams();
  const [, navigate] = useLocation();
  const lectureId = parseInt(params.id as string, 10);
  const [lecture, setLecture] = useState<Lecture | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const foundLecture = lecturesData.lectures.find((l) => l.id === lectureId);
    if (foundLecture) {
      setLecture(foundLecture);
      window.scrollTo(0, 0);
    }
  }, [lectureId]);

  if (!lecture) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Lecture not found</p>
          <Button onClick={() => navigate("/")} className="mt-4">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const prevLecture = lecture.id > 1 ? lecture.id - 1 : null;
  const nextLecture = lecture.id < lecturesData.total_lectures ? lecture.id + 1 : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ChevronLeft className="h-5 w-5" />
              Back
            </Button>
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">
                Lecture {lecture.id} of {lecturesData.total_lectures}
              </p>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Lecture Header */}
          <article className="mb-12">
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-lg bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                Lecture {lecture.id}
              </div>
              <h1 className="mb-4 font-serif text-5xl font-bold text-slate-900">
                {lecture.title}
              </h1>
              {lecture.subtitle && (
                <p className="text-xl italic text-slate-600">
                  {lecture.subtitle}
                </p>
              )}
            </div>

            {/* Learning Objectives */}
            {lecture.learning_objectives.length > 0 && (
              <Card className="mb-8 border-slate-200 bg-slate-50 p-6">
                <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900">
                  Learning Objectives
                </h2>
                <ul className="space-y-3">
                  {lecture.learning_objectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </span>
                      <div>
                        <span className="font-semibold text-primary">
                          {obj.action}
                        </span>
                        {" "}
                        <span className="text-slate-700">{obj.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Main Content */}
            <div className="mb-12 space-y-8 prose prose-slate max-w-none">
              <Streamdown>{lecture.content}</Streamdown>
            </div>

            {/* Discussion Questions */}
            {lecture.discussion_questions.length > 0 && (
              <Card className="mb-8 border-slate-200 p-6">
                <h2 className="mb-6 font-serif text-2xl font-bold text-slate-900">
                  Discussion Questions
                </h2>
                <div className="space-y-4">
                  {lecture.discussion_questions.map((question, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 p-4 transition-all hover:border-primary/50"
                    >
                      <button
                        onClick={() =>
                          setExpandedSection(
                            expandedSection === `q-${idx}` ? null : `q-${idx}`
                          )
                        }
                        className="flex w-full items-start gap-3 text-left"
                      >
                        <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="text-xs font-bold">{idx + 1}</span>
                        </span>
                        <span className="flex-1 font-medium text-slate-900">
                          {question}
                        </span>
                        <ChevronRight
                          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${
                            expandedSection === `q-${idx}` ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {expandedSection === `q-${idx}` && (
                        <div className="mt-3 border-t border-slate-200 pt-3 text-slate-600">
                          <p>
                            Take time to reflect on this question. Consider how it applies to your own experience or professional practice.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Facilitator Note */}
            {lecture.facilitator_note && (
              <Card className="mb-8 border-l-4 border-l-secondary border-slate-200 bg-secondary/5 p-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">
                  Facilitator Note
                </h3>
                <p className="text-slate-700">{lecture.facilitator_note}</p>
              </Card>
            )}
          </article>

          {/* Navigation Footer */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-8">
            {prevLecture ? (
              <Button
                variant="outline"
                onClick={() => navigate(`/lecture/${prevLecture}`)}
                className="gap-2"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous Lecture
              </Button>
            ) : (
              <div />
            )}

            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <BookOpen className="h-5 w-5" />
              All Lectures
            </Button>

            {nextLecture ? (
              <Button
                onClick={() => navigate(`/lecture/${nextLecture}`)}
                className="gap-2"
              >
                Next Lecture
                <ChevronRight className="h-5 w-5" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

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
