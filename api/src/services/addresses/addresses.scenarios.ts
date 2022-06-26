import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: { data: { longitude: 'String', latitude: 'String' } },
    two: { data: { longitude: 'String', latitude: 'String' } },
  },
})

export type StandardScenario = typeof standard
