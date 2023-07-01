import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
  const { chapterSlug, lessonSlug } = event.context.params as {
    chapterSlug: string
    lessonSlug: string
  }

  const lesson = prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug,
      },
    },
  })

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found',
    })
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  }
})
