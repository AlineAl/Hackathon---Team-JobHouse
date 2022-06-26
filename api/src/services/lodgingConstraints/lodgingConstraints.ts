import type {
  QueryResolvers,
  MutationResolvers,
  LodgingConstraintResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lodgingConstraints: QueryResolvers['lodgingConstraints'] = () => {
  return db.lodgingConstraint.findMany()
}

export const lodgingConstraint: QueryResolvers['lodgingConstraint'] = ({
  id,
}) => {
  return db.lodgingConstraint.findUnique({
    where: { id },
  })
}

export const createLodgingConstraint: MutationResolvers['createLodgingConstraint'] =
  ({ input }) => {
    return db.lodgingConstraint.create({
      data: input,
    })
  }

export const updateLodgingConstraint: MutationResolvers['updateLodgingConstraint'] =
  ({ id, input }) => {
    return db.lodgingConstraint.update({
      data: input,
      where: { id },
    })
  }

export const deleteLodgingConstraint: MutationResolvers['deleteLodgingConstraint'] =
  ({ id }) => {
    return db.lodgingConstraint.delete({
      where: { id },
    })
  }

export const LodgingConstraint: LodgingConstraintResolvers = {
  Lodging: (_obj, { root }) =>
    db.lodgingConstraint.findUnique({ where: { id: root.id } }).Lodging(),
}
