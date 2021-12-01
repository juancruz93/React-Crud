import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Almacen de Productos
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/products/list" className="nav-link">
                                Lista Productos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/products/create" className="nav-link">
                                Crear Producto
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
