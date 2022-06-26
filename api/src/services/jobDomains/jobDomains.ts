import type {
  QueryResolvers,
  MutationResolvers,
  JobDomainResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobDomains: QueryResolvers['jobDomains'] = () => {
  return db.jobDomain.findMany()
}

export const jobDomain: QueryResolvers['jobDomain'] = ({ id }) => {
  return db.jobDomain.findUnique({
    where: { id },
  })
}

export const createJobDomain: MutationResolvers['createJobDomain'] = ({
  input,
}) => {
  return db.jobDomain.create({
    data: input,
  })
}

export const updateJobDomain: MutationResolvers['updateJobDomain'] = ({
  id,
  input,
}) => {
  return db.jobDomain.update({
    data: input,
    where: { id },
  })
}

export const deleteJobDomain: MutationResolvers['deleteJobDomain'] = ({
  id,
}) => {
  return db.jobDomain.delete({
    where: { id },
  })
}

export const JobDomain: JobDomainResolvers = {
  Job: (_obj, { root }) =>
    db.jobDomain.findUnique({ where: { id: root.id } }).Job(),
}
