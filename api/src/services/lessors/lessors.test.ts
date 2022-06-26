import {
  lessors,
  lessor,
  createLessor,
  updateLessor,
  deleteLessor,
} from './lessors'
import type { StandardScenario } from './lessors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lessors', () => {
  scenario('returns all lessors', async (scenario: StandardScenario) => {
    const result = await lessors()

    expect(result.length).toEqual(Object.keys(scenario.lessor).length)
  })

  scenario('returns a single lessor', async (scenario: StandardScenario) => {
    const result = await lessor({ id: scenario.lessor.one.id })

    expect(result).toEqual(scenario.lessor.one)
  })

  scenario('creates a lessor', async () => {
    const result = await createLessor({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a lessor', async (scenario: StandardScenario) => {
    const original = await lessor({ id: scenario.lessor.one.id })
    const result = await updateLessor({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a lessor', async (scenario: StandardScenario) => {
    const original = await deleteLessor({ id: scenario.lessor.one.id })
    const result = await lessor({ id: original.id })

    expect(result).toEqual(null)
  })
})
