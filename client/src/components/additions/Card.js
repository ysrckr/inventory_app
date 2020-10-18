import React from 'react'

const Card = () => {
    return (
        <div className="card-container">
 <div className='card bg-gray'>
            <div className="img">
                <img src="https://res.cloudinary.com/ysrckr55/image/upload/v1599037268/sample.jpg" alt="flowers"/>
            </div>
            <div className="size">
                <div className="size-header txt-bold mb-1 pa-1">BEDEN</div>
                <div className="size-text">46,48,50,52</div>
            </div>
            <div className="inventory">
                <div className="inventory-header txt-bold mb-1 pa-1">ADET</div>
                <div className="inventory-text">30</div>
            </div>
            <div className="barcode">
                <div className="barcode-header txt-bold mb-1 pa-1">BARCODE</div>
                <div className="barcode-text">3536543624</div>
            </div>
            <div className="place">
                <div className="place-header txt-bold mb-1 pa-1">YER</div>
                <div className="place-text">Fabrika Üst Depo</div>
            </div>
        </div>
        </div>
       
    )
}

export default Card