import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.lodgingCreateArgs>({
  lodging: {
    one: { data: { url: 'String', longitude: 4372470, latitude: 5362392 } },
    two: { data: { url: 'String', longitude: 6497133, latitude: 3923961 } },
  },
})

export type StandardScenario = typeof standard
