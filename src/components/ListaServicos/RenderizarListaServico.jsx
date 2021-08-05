import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ServiceCard = styled.div`
    border: 1px solid black;
`




export default class RenderizarListaServico extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const headers = {headers: {Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"}}

        axios.get(url, headers)
        .then((response) => {
            this.setState({ jobs: response.data.jobs})
        }).catch((error) =>{
            console.log(error)
        })
    }


    render() {
        const novosJobs = this.state.jobs.map((job, index, array) => {
            return <ServiceCard key={job.id}>
                <p>Título: {job.title}</p>
                <p>Descrição: {job.description}</p>
                <p>Preço R$ {job.price}</p>
                <p><option>{job.paymentMethods}</option></p>
                <p>Prazo: {job.dueDate}</p>
            </ServiceCard>
        })

        
        return(
            <div>
            <h1>Lista de serviços</h1>
            <p>{novosJobs} </p>
            </div>
        )
    }
}