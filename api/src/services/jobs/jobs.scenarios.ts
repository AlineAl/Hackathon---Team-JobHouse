import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: { data: { longitude: 9029582, latitude: 6443572 } },
    two: { data: { longitude: 8070172, latitude: 2274599 } },
  },
})

export type StandardScenario = typeof standard
