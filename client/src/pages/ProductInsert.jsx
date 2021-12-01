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

class ProductInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: '',
            flavor : '',
            price : '',
            state : ''
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

    
  

    handleIncludeProduct = async () => {
        const { 
            name,
            category,
            flavor,
            price,
            state
         } = this.state
        //const arrayTime = time.split('/')
        const payload = {  
            name,
            category,
            flavor,
            price,
            state
        }
        var vacios = 0;
        if (name ===''){
            vacios = 1;
        window.confirm(
            `El nombre esta vacio`,
        )
        }
        if (category ===''){
            vacios = 1;
        window.confirm(
        `Seleccione la categoria`,
        )
        }
        if (flavor ===''){
            vacios = 1;
        window.confirm(
        `El sabor esta vacio`,
        )
        }
        if (price ===''){
            vacios = 1;
        window.confirm(
        `El precio esta vacio`,
        )
        }
        if (state ===''){
            vacios = 1;
        window.confirm(
        `Seleccione un estado`,
        )
        }

        if (vacios === 0){
            await api.productcreate(payload).then(res => {
                window.alert(res.data.message);
                this.setState({
                    name: '',
                    category: '',
                    flavor : '',
                    price : '',
                    state : ''
                })
            })

        }

      
    }

    render() {
        const { name, category, flavor, price, state } = this.state
        return (
            <Wrapper>
                <Title>Crear Producto</Title>

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


                <Button onClick={this.handleIncludeProduct}>Agregar Producto</Button>
                <CancelButton href={'/products/list'}>Cancelar</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductInsert
