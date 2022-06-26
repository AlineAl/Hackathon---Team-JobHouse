import type {
  QueryResolvers,
  MutationResolvers,
  LessorResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const lessors: QueryResolvers['lessors'] = () => {
  return db.lessor.findMany()
}

export const lessor: QueryResolvers['lessor'] = ({ id }) => {
  return db.lessor.findUnique({
    where: { id },
  })
}

export const createLessor: MutationResolvers['createLessor'] = ({ input }) => {
  return db.lessor.create({
    data: input,
  })
}

export const updateLessor: MutationResolvers['updateLessor'] = ({
  id,
  input,
}) => {
  return db.lessor.update({
    data: input,
    where: { id },
  })
}

export const deleteLessor: MutationResolvers['deleteLessor'] = ({ id }) => {
  return db.lessor.delete({
    where: { id },
  })
}

export const Lessor: LessorResolvers = {
  users: (_obj, { root }) =>
    db.lessor.findUnique({ where: { id: root.id } }).users(),
  jobs: (_obj, { root }) =>
    db.lessor.findUnique({ where: { id: root.id } }).jobs(),
  Lodging: (_obj, { root }) =>
    db.lessor.findUnique({ where: { id: root.id } }).Lodging(),
}
