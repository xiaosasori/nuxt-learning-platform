import courseData from './courseData'
import type { Chapter, Course, Lesson, LessonWithPath } from '~/types/course'

export function useCourse(): Course {
  const chapters: Chapter[] = courseData.chapters.map((chapter: Chapter) => {
    const lessons: LessonWithPath[] = chapter.lessons.map((lesson: Lesson) => ({
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
