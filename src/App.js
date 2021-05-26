import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Pegawai from './pages/pegawai'
import Register from './pages/register'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/register' component={Register} />
    </Switch>
)

export default Pages
