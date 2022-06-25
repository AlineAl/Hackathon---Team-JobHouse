import {
  departments,
  department,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './departments'
import type { StandardScenario } from './departments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('departments', () => {
  scenario('returns all departments', async (scenario: StandardScenario) => {
    const result = await departments()

    expect(result.length).toEqual(Object.keys(scenario.department).length)
  })

  scenario(
    'returns a single department',
    async (scenario: StandardScenario) => {
      const result = await department({ id: scenario.department.one.id })

      expect(result).toEqual(scenario.department.one)
    }
  )

  scenario('deletes a department', async (scenario: StandardScenario) => {
    const original = await deleteDepartment({ id: scenario.department.one.id })
    const result = await department({ id: original.id })

    expect(result).toEqual(null)
  })
})
