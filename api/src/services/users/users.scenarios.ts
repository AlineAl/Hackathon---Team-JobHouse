import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
