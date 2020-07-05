import React, {useState} from 'react'
import styled from  '@emotion/styled'

const Campo = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-self: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
`
const InputRadio=styled.input`
    margin: 0 1rem;
`
const Boton=styled.button`
    background: #00838F;
    border:none;
    color:#ffffff;
    font-size:16px;
    font-weight:bold;
    margin-top:2rem;
    text-transform:uppercase;
    transition: background .3s ease;
    padding:1rem;
    width:100%;
    &:hover{
        background:#26c6d6;
        cursor:pointer;
    }
`

export const Formulario = () => {
    
    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    // extraer los valores del state    
    const {marca,year,plan}=datos

    // leer los datos del formulario y colocarlos en el state
    const obtenerDatos=e=>{
        setDatos({...datos,[e.target.name]:e.target.value})
    }

    return (
        <form>
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerDatos}
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerDatos}
                >
                <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan==='basico'}
                    onChange={obtenerDatos}
                />Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan==='completo'}
                    onChange={obtenerDatos}
                />Completo
            </Campo>
            <Boton type="button">
                Cotizar
            </Boton>
        </form>
    )
}
