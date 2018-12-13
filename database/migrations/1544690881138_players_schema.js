'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlayersSchema extends Schema {
  up () {
    this.create('players', (table) => {
      table.increments()
      table.string('id_fb')
      table.string('nama_player')
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('players')
  }
}

module.exports = PlayersSchema
