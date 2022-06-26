import type {
  QueryResolvers,
  MutationResolvers,
  LodgingTypeResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lodgingTypes: QueryResolvers['lodgingTypes'] = () => {
  return db.lodgingType.findMany()
}

export const lodgingType: QueryResolvers['lodgingType'] = ({ id }) => {
  return db.lodgingType.findUnique({
    where: { id },
  })
}

export const createLodgingType: MutationResolvers['createLodgingType'] = ({
  input,
}) => {
  return db.lodgingType.create({
    data: input,
  })
}

export const updateLodgingType: MutationResolvers['updateLodgingType'] = ({
  id,
  input,
}) => {
  return db.lodgingType.update({
    data: input,
    where: { id },
  })
}

export const deleteLodgingType: MutationResolvers['deleteLodgingType'] = ({
  id,
}) => {
  return db.lodgingType.delete({
    where: { id },
  })
}

export const LodgingType: LodgingTypeResolvers = {
  Lodging: (_obj, { root }) =>
    db.lodgingType.findUnique({ where: { id: root.id } }).Lodging(),
}
