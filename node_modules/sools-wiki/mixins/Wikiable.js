const mixer = require('sools-core/mixer')
const Propertiable = require('sools-core/mixins/Propertiable')
const Markdown = require('sools-modeling/types/Markdown')

module.exports = mixer.mixin([Propertiable], (base) => {
  return class Wikiable extends base {

  }
})
  .define()
  .properties({
    wiki: {
      type: Markdown,
    }
  })