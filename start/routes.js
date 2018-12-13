'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
      Route.post('admins', 'AdminController.store')
      Route.get('admins', 'AdminController.index')
      Route.get('admins/:id', 'AdminController.show')
      Route.put('admins/:id', 'AdminController.update')
      Route.delete('admins/:id', 'AdminController.delete')

      Route.post('players', 'playerController.store')
      Route.get('players', 'playerController.index')
      Route.get('players/:id', 'playerController.show')
      Route.put('players/:id', 'playerController.update')
      Route.delete('players/:id', 'playerController.delete')

      Route.post('leaderboards', 'leaderboardController.store')
      Route.get('leaderboards', 'leaderboardController.index')
      Route.get('leaderboards/:id', 'leaderboardController.show')
      Route.put('leaderboards/:id', 'leaderboardController.update')
      Route.delete('leaderboards/:id', 'leaderboardController.delete')

    }).prefix('api/v1')
