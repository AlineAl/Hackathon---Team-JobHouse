import type {
  QueryResolvers,
  MutationResolvers,
  JobConstraintResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobConstraints: QueryResolvers['jobConstraints'] = () => {
  return db.jobConstraint.findMany()
}

export const jobConstraint: QueryResolvers['jobConstraint'] = ({ id }) => {
  return db.jobConstraint.findUnique({
    where: { id },
  })
}

export const createJobConstraint: MutationResolvers['createJobConstraint'] = ({
  input,
}) => {
  return db.jobConstraint.create({
    data: input,
  })
}

export const updateJobConstraint: MutationResolvers['updateJobConstraint'] = ({
  id,
  input,
}) => {
  return db.jobConstraint.update({
    data: input,
    where: { id },
  })
}

export const deleteJobConstraint: MutationResolvers['deleteJobConstraint'] = ({
  id,
}) => {
  return db.jobConstraint.delete({
    where: { id },
  })
}

export const JobConstraint: JobConstraintResolvers = {
  jobs: (_obj, { root }) =>
    db.jobConstraint.findUnique({ where: { id: root.id } }).jobs(),
}
