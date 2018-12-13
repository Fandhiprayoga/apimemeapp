'use strict'

const Leaderboard = use('App/Models/Leaderboard')

class LeaderboardController {

  async index({response}) {
    let leaderboards = await Leaderboard.all()

    return response.json(leaderboards)
  }

  async show({params, response}) {
    const leaderboard = await Leaderboard.find(params.id)

    return response.json(leaderboard)
  }

  async store({request, response}) {
    const leadInfo = request.only([
      'id_fb',
      'score',
      'voucher',
    ])

    const lead = new Leaderboard()
    lead.id_fb = leadInfo.id_fb
    lead.score = leadInfo.score
    lead.voucher = leadInfo.voucher

    await lead.save()

    return response.status(201).json(lead)
  }

  async update({params, request, response}) {
    const leadInfo = request.only([
      'id_fb',
      'score',
      'voucher',
    ])

    const lead = await Leaderboard.find(params.id)
    if (!lead) {
      return response.status(404).json({data: 'Resource not found'})
    }
      lead.id_fb = leadInfo.id_fb
      lead.score = leadInfo.score
      lead.voucher = leadInfo.voucher

    await lead.save()

    return response.status(200).json(lead)
  }

  async delete({params, response}) {
    const lead = await Leaderboard.find(params.id)
    if (!lead) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await lead.delete()

    return response.status(204).json(null)
  }
}

module.exports = LeaderboardController
