import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LodgingCreateArgs>({
  lodging: {
    one: { data: { url: 'String' } },
    two: { data: { url: 'String' } },
  },
})

export type StandardScenario = typeof standard
