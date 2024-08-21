const { HasMany, OwnMany, } = require('sools-modeling/types')
const Group = require('./Group')
const User = require('./User')
const Identity = require('./Identity')

Group.properties({
  users: {
    type: HasMany.of(User),
    on: 'groups'
  }
})

Identity.properties({
  user: {
    type: User,
  }
})

User.properties({
  groups: {
    type: OwnMany.of(Group),
  },
  identities: {
    type: HasMany.of(Identity)
  }
})

module.exports = {
  Group,
  User,
  Credentials: require('./Credentials'),
}