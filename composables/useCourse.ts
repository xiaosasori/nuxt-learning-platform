import courseData from './courseData'

interface Lesson {
  title: string
  slug: string
  number: number
  downloadUrl: string
  videoId: number
  text: string
  sourceUrl?: string
}

interface Chapter {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}

interface Course {
  title: string
  chapters: Chapter[]
}

export function useCourse(): Course {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }))
    return {
      ...chapter,
      lessons,
    }
  })
  return {
    ...courseData,
    chapters,
  }
}
