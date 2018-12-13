'use strict'

const Player = use('App/Models/Player')

class PlayerController {
  async index({response}) {
    let players = await Player.all()

    return response.json(players)
  }

  async show({params, response}) {
    const player = await Player.find(params.id)

    return response.json(player)
  }

  async store({request, response}) {
    const playerInfo = request.only([
      'id_fb',
      'nama_player',
      'email',
    ])

    const player = new Player()
    player.id_fb = playerInfo.id_fb
    player.nama_player = playerInfo.nama_player
    player.email = playerInfo.email

    await player.save()

    return response.status(201).json(player)
  }

  async update({params, request, response}) {
    const playerInfo = request.only([
      'id_fb',
      'nama_player',
      'email',
    ])

    const player = await Player.find(params.id)
    if (!player) {
      return response.status(404).json({data: 'Resource not found'})
    }
    player.id_fb = playerInfo.id_fb
    player.nama_player = playerInfo.nama_player
    player.email = playerInfo.email

    await player.save()

    return response.status(200).json(player)
  }

  async delete({params, response}) {
    const player = await Player.find(params.id)
    if (!player) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await player.delete()

    return response.status(204).json(null)
  }
}

module.exports = PlayerController
