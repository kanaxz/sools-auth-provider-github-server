const { Model, String } = require('sools-modeling/types')
const mixer = require('sools-core/mixer')

module.exports = class Identity extends mixer.extends(Model, []) {

}
  .define({
    name: 'identity',
    pluralName: 'identities',
    root: true,
  })
  .indexes({
    username: {
      properties: ['username'],
      unique: true,
    }
  })
  .properties({
    provider: {
      type: String,
      state: {
        required: true,
      }
    },
  })
