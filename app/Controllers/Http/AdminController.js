'use strict'

const Admin = use('App/Models/Admin')

class AdminController {

  async index({response}) {
    let Admins = await Admin.all()

    return response.json(Admins)
  }

  async show({params, response}) {
    const admin = await Admin.find(params.id)

    return response.json(admin)
  }

  async store({request, response}) {
    const adminInfo = request.only([
      'model',
      'bgmain',
      'btn1',
      'btn2',
      'btn3',
      'btn4',
    ])

    const admin = new Admin()
    admin.model = adminInfo.model
    admin.bgmain = adminInfo.bgmain
    admin.btn1 = adminInfo.btn1
    admin.btn2 = adminInfo.btn2
    admin.btn3 = adminInfo.btn3
    admin.btn4 = adminInfo.btn4

    await admin.save()

    return response.status(201).json(admin)
  }

  async update({params, request, response}) {
    const adminInfo = request.only([
      'model',
      'bgmain',
      'btn1',
      'btn2',
      'btn3',
      'btn4'
    ])

    const admin = await Admin.find(params.id)
    if (!admin) {
      return response.status(404).json({data: 'Resource not found'})
    }
    admin.model = adminInfo.model
    admin.bgmain = adminInfo.bgmain
    admin.btn1 = adminInfo.btn1
    admin.btn2 = adminInfo.btn2
    admin.btn3 = adminInfo.btn3
    admin.btn4 = adminInfo.btn4

    await admin.save()

    return response.status(200).json(admin)
  }

  async delete({params, response}) {
    const admin = await Admin.find(params.id)
    if (!admin) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await admin.delete()

    return response.status(204).json(null)
  }

}

module.exports = AdminController
