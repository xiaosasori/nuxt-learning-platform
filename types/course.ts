export interface Lesson {
  title: string
  slug: string
  number: number
  downloadUrl: string
  videoId: number
  text: string
  sourceUrl?: string
}

export type LessonWithPath = Lesson & {
  path: string
}

export interface Chapter {
  title: string
  slug: string
  number: number
  lessons: Lesson[] | LessonWithPath[]
}

export interface Course {
  title: string
  chapters: Chapter[]
}

interface OutlineBase {
  title: string
  slug: string
  number: number
}

export type OutlineChapter = OutlineBase & {
  lessons: OutlineLesson[]
}

export type OutlineLesson = OutlineBase & {
  path: string
}

export interface CourseMeta {
  title: string
  chapters: OutlineChapter[]
}
