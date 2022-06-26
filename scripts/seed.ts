import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const addresses: Prisma.AddressCreateArgs['data'][] = [
      {
        latitude: '48.844627059423196',
        longitude: '2.39074050309819',
        place: '7 Rue du Sergent Bauchat',
        city: 'Paris',
        zipCode: '75019',
        department: 'Paris',
        departmentCode: '75',
      },
      {
        latitude: '48.889856',
        longitude: '2.1561344',
        place: '8 rue Michel Bertier',
        city: 'Chatou',
        zipCode: '78400',
        department: 'Yvelines',
        departmentCode: '78',
      },
      {
        latitude: '48.755617545447386',
        longitude: '2.387018702856074',
        place: '20 avenue Guy de Maupassant',
        city: 'Thiais',
        zipCode: '94320',
        department: 'Val-de-Marne',
        departmentCode: '94',
      },
      {
        latitude: '43.29584056210526',
        longitude: '5.391224635618412',
        place: '67 Rue Henri Revoil',
        city: 'Marseille',
        zipCode: '13009',
        department: 'Bouches-du-Rhône',
        departmentCode: '13',
      },
    ]

    const users: Prisma.UserCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      {
        firstname: 'Alice',
        lastname: 'Jackman',
        email: 'alice@example.com',
        role: 'ADMIN',
        Address: {
          connect: {
            id: 2,
          },
        },
        FavoritesJobs: {
          create: {
            title: 'Job stylé',
            Address: {
              connect: {
                id: 2,
              },
            },
          },
        },
        Lessor: {
          create: {
            name: 'CROUS',
          },
        },
      },
      {
        firstname: 'Mark',
        lastname: 'Bonjean',
        email: 'mark@example.com',
        role: 'USER',
      },
      {
        firstname: 'Jackie',
        lastname: 'Petit',
        email: 'jackie@example.com',
        role: 'USER',
      },
      {
        firstname: 'Bob',
        lastname: 'Mars',
        email: 'bob@example.com',
        role: 'USER',
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      [
        addresses.map(async (data: Prisma.AddressCreateArgs['data']) => {
          const record = await db.address.create({ data })
          console.log(record)
        }),
        users.map(async (data: Prisma.UserCreateArgs['data']) => {
          const record = await db.user.create({ data })
          console.log(record)
        }),
      ]
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
