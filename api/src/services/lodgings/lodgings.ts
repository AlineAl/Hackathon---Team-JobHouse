import type {
  QueryResolvers,
  MutationResolvers,
  LodgingResolvers,
} from 'types/graphql'

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

export const Lodging: LodgingResolvers = {
  Type: (_obj, { root }) =>
    db.lodging.findUnique({ where: { id: root.id } }).Type(),
  Address: (_obj, { root }) =>
    db.lodging.findUnique({ where: { id: root.id } }).Address(),
  Lessor: (_obj, { root }) =>
    db.lodging.findUnique({ where: { id: root.id } }).Lessor(),
  constraints: (_obj, { root }) =>
    db.lodging.findUnique({ where: { id: root.id } }).constraints(),
  User: (_obj, { root }) =>
    db.lodging.findUnique({ where: { id: root.id } }).User(),
}
