import type {
  QueryResolvers,
  MutationResolvers,
  JobSectorResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobSectors: QueryResolvers['jobSectors'] = () => {
  return db.jobSector.findMany()
}

export const jobSector: QueryResolvers['jobSector'] = ({ id }) => {
  return db.jobSector.findUnique({
    where: { id },
  })
}

export const createJobSector: MutationResolvers['createJobSector'] = ({
  input,
}) => {
  return db.jobSector.create({
    data: input,
  })
}

export const updateJobSector: MutationResolvers['updateJobSector'] = ({
  id,
  input,
}) => {
  return db.jobSector.update({
    data: input,
    where: { id },
  })
}

export const deleteJobSector: MutationResolvers['deleteJobSector'] = ({
  id,
}) => {
  return db.jobSector.delete({
    where: { id },
  })
}

export const JobSector: JobSectorResolvers = {
  Job: (_obj, { root }) =>
    db.jobSector.findUnique({ where: { id: root.id } }).Job(),
}
