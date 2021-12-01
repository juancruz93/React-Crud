import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ProductList, ProductInsert, ProductUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/products/list" exact component={ProductList} />
                <Route path="/products/create" exact component={ProductInsert} />
                <Route
                    path="/products/update/:id"
                    exact
                    component={ProductUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
