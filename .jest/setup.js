import { cleanUpTestSpaces } from '@contentful/integration-test-utils'
import { initConfig } from '../test/contentful-config'

beforeAll(() => {
  return initConfig()
})

afterAll(async () => {
  return await cleanUpTestSpaces({ threshold: 60 * 1000 })
})
