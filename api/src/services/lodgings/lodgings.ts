import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const lodgings: QueryResolvers['lodgings'] = () => {
  return db.lodging.findMany()
}

export const lodging: QueryResolvers['lodging'] = ({ id }) => {
  return db.lodging.findUnique({
    where: { id },
  })
}

export const createLodging: MutationResolvers['createLodging'] = ({
  input,
}) => {
  return db.lodging.create({
    data: input,
  })
}

export const updateLodging: MutationResolvers['updateLodging'] = ({
  id,
  input,
}) => {
  return db.lodging.update({
    data: input,
    where: { id },
  })
}

export const deleteLodging: MutationResolvers['deleteLodging'] = ({ id }) => {
  return db.lodging.delete({
    where: { id },
  })
}
