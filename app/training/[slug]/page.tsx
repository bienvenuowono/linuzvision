import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailPage } from "@/components/CourseDetailPage";
import { getCourseBySlug } from "@/lib/content";

// Courses are published from the dashboard; each page is rendered on first visit and refreshed on change.
export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseBySlug((await params).slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description.slice(0, 300),
    alternates: { canonical: `/training/${course.slug}` },
    openGraph: {
      title: `${course.title} | LinuZvision`,
      description: course.description.slice(0, 300),
      url: `/training/${course.slug}`,
      images: [{ url: course.cover, alt: course.title }],
    },
  };
}

export default async function Page({ params }: Props) {
  const course = getCourseBySlug((await params).slug);
  if (!course) notFound();
  return <CourseDetailPage course={course} />;
}
