import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Select = styled.select.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            category: '',
            flavor: '',
            price: '',
            state: '',
        }
    }

    handleChangeInputname = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputcategory = async event => {
        const category = event.target.value
        this.setState({ category })
    }

    handleChangeInputflavor = async event => {
        const flavor = event.target.value
        this.setState({ flavor })
    }

    handleChangeInputprice = async event => {
        const price = event.target.value
        this.setState({ price })
    }
    handleChangeInputstate = async event => {
        const state = event.target.value
        this.setState({ state })
    }



    handleUpdateproduct = async () => {
        const { 
            id,
            name,
            category,
            flavor,
            price,
            state
        } = this.state
        
        const payload = {
            id,
            name,
            category,
            flavor,
            price,
            state
         }

        await api.productupdate(id, payload).then(res => {
           
            window.alert(res.data.message);           
        })
    }

    componentDidMount = async () => {
        
        const { id } = this.state
        
        const product = await api.productsearch(id)
        //console.log(product.data[0]._id);
        this.setState({
            id: product.data[0]._id,
            name: product.data[0].name,
            category: product.data[0].category,
            flavor: product.data[0].flavor,
            price: product.data[0].price,
            state: product.data[0].state            
        })
    }

    render() {
        const {  name,
            category,
            flavor,
            price,
            state } = this.state
        return (
            <Wrapper>
            <Title>Actualizar Producto</Title>

            <Label>Nombre del Producto: </Label>
            <InputText
                type="text"
                value={name}
                onChange={this.handleChangeInputname}
            />
            <Label>Categoria: </Label>         

            <Select value={category} onChange={this.handleChangeInputcategory}>
                <option value="" hidden>
                Seleccione
                </option>
                <option value="verdura">Verdura</option>
                <option value="Fruta">Fruta</option>
            </Select>


            <Label>Sabor: </Label>
            <InputText
                type="text"
                value={flavor}
                onChange={this.handleChangeInputflavor }
            />

            <Label>Precio: </Label>
            <InputText
                type="number"
                value={price}
                onChange={this.handleChangeInputprice}
            />

            <Label>Estado: </Label>
            <Select value={state} onChange={this.handleChangeInputstate}>
                <option value="" hidden>
                Seleccione
                </option>
                <option value="true">Disponible</option>
                <option value="false">No Disponible</option>
            </Select>


            <Button onClick={this.handleUpdateproduct}>Actualizar Producto</Button>
            <CancelButton href={'/products/list'}>Cancelar</CancelButton>
        </Wrapper>
        )
    }
}

export default ProductUpdate
