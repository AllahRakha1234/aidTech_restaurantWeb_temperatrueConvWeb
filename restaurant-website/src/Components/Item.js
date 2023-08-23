import React, { useState } from 'react'

const Item = (props) => {

    const [quantity, setQuantity] = useState(1);
    const [showDesc, setShowDesc] = useState(false);


    const handleOpenShow = () => {
        setShowDesc(!showDesc)
    }

    const handleCloseShow = () => {
        setShowDesc(!showDesc)
    }

    const handleAddToCarBtn = () => {
        alert("Item 🍚🍚 Added To Cart Successfully ✅✅✅");
    }


    return (
        <div className="pizzaBox shadow-lg p-3 bg-white rounded" style={{ marginLeft: "40px", marginTop: "30px", marginBottom: "50px" }}
            key={props.index}
        >
            <div className="mb-2">
                <h4 onClick={handleOpenShow}>{props.item.name}</h4>
                <hr />
                <img onClick={handleOpenShow} src={props.item.image} className='itemImg img-fluid mx-auto' alt="No pizza" />
                <hr />
            </div>
            <div className="d-flex mb-2">
                <div className="quantityBox w-100">
                    <p><b>Quantity:</b> </p>
                    <select className='mb-2 form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} >
                        {[...Array(10).keys()].map((object, index) => {
                            return <option value={index + 1} key={index}>{index + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="d-flex">
                <div className='mt-1 w-100' style={{ marginRight: "3px" }}>
                    <h6><b>Price: {props.item.price * quantity} Rs/-</b></h6>
                </div>

                <div className='w-100'>
                    <button onClick={handleAddToCarBtn} className="btn btn-danger btn-sm">
                        <b className='p-1'>Add to Cart</b>
                    </button>
                </div>
            </div>
            {/* MODAL CODE */}

            {showDesc && (
                <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{props.item.name}</h4>
                            </div>
                            <div className="modal-body">
                                <img src={props.item.image} style={{ width: "30vw", height: "40vh" }}
                                    className='modalImg img-fluid mx-auto' alt="No pizza" />
                                <h5 className='mt-2'>Description: {props.item.description}</h5>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" onClick={handleCloseShow}>
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Item
