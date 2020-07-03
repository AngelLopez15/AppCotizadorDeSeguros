import React from 'react'
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #26c6da;
    color: #ffffff;
    font-weight: bold;
    padding: 10px;
`
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family:'Slabo 27px', serif;
    text-align:center;
`


export const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    )
}
