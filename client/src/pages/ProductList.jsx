import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateProduct extends Component {
    updateproduct = event => {
        event.preventDefault()

        window.location.href = `/products/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateproduct}>Editar</Update>
    }
}

class DeleteProduct extends Component {
    deleteproduct = event => {
        event.preventDefault()

        //console.log(this.props.id[1].name)
        if (
            window.confirm(
                `Desea eliminar la fruta ${this.props.id[1].name} permanentemente?`,
            )
        ) {
            api.productdelete(this.props.id[0].id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteproduct}>Eliminar</Delete>
    }
}



class ProductList extends Component {  
    constructor(props) {
        super(props)
       


        this.state = {
            products: [],
            columns: [],
            isLoading: false,
        }
    }

  
    componentDidMount = async () => {
        this.setState({ isLoading: true })
       
        await api.products().then(products => {
            
           // console.log(products.data);
            this.setState({
                products: products.data,
                isLoading: false,
                })

          
        })

        
        

    }

    render() {
        const { products, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'nombre',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'categoria',
                accessor: 'category',
                filterable: true,
            },
            {
                Header: 'sabor',
                accessor: 'flavor',              
            },
            {
                Header: 'precio',
                accessor: 'price',              
            },
            {
                Header: 'Borrar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteProduct id={ [{id: props.original._id},{name: props.original.name}]} />
                        </span>
                    )
                },
            },
            {
                Header: 'Actualizar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateProduct id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!products.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={products}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ProductList
