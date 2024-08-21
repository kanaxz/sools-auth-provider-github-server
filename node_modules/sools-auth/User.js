const { Model, String } = require('sools-modeling/types')
const mixer = require('sools-core/mixer')
const Pageable = require('sools-modeling/mixins/Pageable')
const Wikiable = require('sools-wiki/mixins/Wikiable')
const setup = require('./setup')

module.exports = class User extends mixer.extends(Model, [Pageable, Wikiable, ...setup.user]) {
  toString() {
    return this.username
  }
}
  .define({
    name: 'user',
    pluralName: 'users',
    root: true,
    codeField: 'username',
    searchField: 'username',
    titleField: 'username',
  })
  .indexes({
    username: {
      properties: ['username'],
      unique: true,
    },
    email: {
      properties: ['email'],
      unique: true,
    }
  })
  .properties({
    username: {
      type: String,
      state: {
        required: true,
      }
    },
    email: {
      type: String,
      state: {
        required: true,
      }
    },
  })