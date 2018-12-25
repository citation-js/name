/* eslint-env mocha */

import fs from 'fs'
import path from 'path'
import assert from 'assert'

import * as name from '../src/'

let testPattern = /\.json$/
let testTypes = ['parse', 'format']

for (let testType of testTypes) {
  let testDir = path.join(__dirname, testType)

  fs.readdir(testDir, (err, files) => {
    describe(testType, () => {
      if (err) {
        throw err
      }

      for (let file of files) {
        if (!testPattern.test(file)) {
          continue
        }

        let { title, input, output: expected, options = [] } = require(path.join(__dirname, testType, file))

        it(title, () => {
          let actual = name[testType](input, ...options)
          assert.deepStrictEqual(actual, expected)
        })
      }
    })
  })
}

it('interface', () => {
  assert.strictEqual(typeof name.parse, 'function')
  assert.strictEqual(typeof name.format, 'function')
})
