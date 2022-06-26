import type {
  QueryResolvers,
  MutationResolvers,
  JobResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobs: QueryResolvers['jobs'] = () => {
  return db.job.findMany()
}

export const job: QueryResolvers['job'] = ({ id }) => {
  return db.job.findUnique({
    where: { id },
  })
}

export const createJob: MutationResolvers['createJob'] = ({ input }) => {
  return db.job.create({
    data: input,
  })
}

export const updateJob: MutationResolvers['updateJob'] = ({ id, input }) => {
  return db.job.update({
    data: input,
    where: { id },
  })
}

export const deleteJob: MutationResolvers['deleteJob'] = ({ id }) => {
  return db.job.delete({
    where: { id },
  })
}

export const Job: JobResolvers = {
  Domain: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Domain(),
  Sector: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Sector(),
  Address: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Address(),
  Lessor: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Lessor(),
  Constraints: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).Constraints(),
  User: (_obj, { root }) =>
    db.job.findUnique({ where: { id: root.id } }).User(),
}
