import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LessorCreateArgs>({
  lessor: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = typeof standard
