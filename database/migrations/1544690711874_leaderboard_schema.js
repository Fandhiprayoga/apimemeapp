'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeaderboardSchema extends Schema {
  up () {
    this.create('leaderboards', (table) => {
      table.increments()
      table.string('id_fb')
      table.integer('score')
      table.string('voucher')
      table.timestamps()
    })
  }

  down () {
    this.drop('leaderboards')
  }
}

module.exports = LeaderboardSchema
