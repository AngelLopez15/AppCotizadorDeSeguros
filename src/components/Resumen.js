import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import {primerLetraMayuscula} from '../helper'

const ContenedorResumen = styled.div`
    background:#00838f;
    color: #fff;
    margin-top:1rem;
    padding: 1rem;
    text-align:center;
`


export const Resumen = ({datos}) => {
    // extraer datos
    const {marca, year, plan}=datos

    if (marca==='' || year === '' || plan === '') return null   

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerLetraMayuscula(marca)} </li>
                <li>Plan: {primerLetraMayuscula(plan)} </li>
                <li>Año del auto: {year} </li>
            </ul>
        </ContenedorResumen>
    )
}