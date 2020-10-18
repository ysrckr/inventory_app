import React from 'react'
import Card from '../additions/Card'
import { Navbar } from '../layout/Navbar'

const Main = () => {
    return (
        <>
        <Navbar/>
        <h1 className='main-header pa-1'>Inventory</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </>
    )
}


export default Main