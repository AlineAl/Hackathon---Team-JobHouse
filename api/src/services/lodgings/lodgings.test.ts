import {
  lodgings,
  lodging,
  createLodging,
  updateLodging,
  deleteLodging,
} from './lodgings'
import type { StandardScenario } from './lodgings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lodgings', () => {
  scenario('returns all lodgings', async (scenario: StandardScenario) => {
    const result = await lodgings()

    expect(result.length).toEqual(Object.keys(scenario.lodging).length)
  })

  scenario('returns a single lodging', async (scenario: StandardScenario) => {
    const result = await lodging({ id: scenario.lodging.one.id })

    expect(result).toEqual(scenario.lodging.one)
  })

  scenario('creates a lodging', async () => {
    const result = await createLodging({
      input: { url: 'String', longitude: 2220072, latitude: 8194133 },
    })

    expect(result.url).toEqual('String')
    expect(result.longitude).toEqual(2220072)
    expect(result.latitude).toEqual(8194133)
  })

  scenario('updates a lodging', async (scenario: StandardScenario) => {
    const original = await lodging({ id: scenario.lodging.one.id })
    const result = await updateLodging({
      id: original.id,
      input: { url: 'String2' },
    })

    expect(result.url).toEqual('String2')
  })

  scenario('deletes a lodging', async (scenario: StandardScenario) => {
    const original = await deleteLodging({ id: scenario.lodging.one.id })
    const result = await lodging({ id: original.id })

    expect(result).toEqual(null)
  })
})
