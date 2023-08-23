import React from 'react'
import { MenuList } from '../assets/files/data'
import Item from '../Components/Item';

const MenuPage = () => {


    return (
        <>
            <div className="container my-2 menuPage">
                <nav className="navbar navbar-expand-lg navbar-info bg-primary rounded-pill">
                    <div className="container d-flex flex-column">
                        <h1 className='menuPageTitle text-light'>Menu Page</h1>
                    </div>
                </nav>

                {/* MENU ITEMS CODE LOGIC */}
                <div className="row d-flex justify-content-around">
                    {
                        MenuList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Item item={item} index={index} />
                                </div >
                            );
                        })

                    }
                </div>

            </div>
        </>
    )
}

export default MenuPage
