import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import {  useSelector } from 'react-redux'
import { useMemo } from 'react';

import CardProduct from './Card';
import './style.css'
function Products() {
    
    const products =useMemo(()=>useSelector(state => state.products.allProducts),[]) 
    const topfourProducts =useMemo(()=>[...products].sort((a, b) => a.id > b.id ? 1 : -1).slice(0, 4),[])
    const lastfourProducts =useMemo(()=>[...products].sort((a, b) => a.id > b.id ? -1 : 1).slice(0, 4),[]) 

    return (
        <>
            <div className="container d-flex flex-wrap justify-content-between mt-5" style={{ borderBottom: '1px solid lightgray' }}>
                <h2>Featured Products</h2>
                <div className="div menu">
                    <button className='btn btn-sm btn-dark'>All</button>
                    <button className='btn btn-sm btn-outline'>Power Tools</button>
                    <button className='btn btn-sm btn-outline'>Hand Tools</button>
                    <button className='btn btn-sm btn-outline'>Plumbing</button>
                    <button className='btn btn-sm me-2' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormPrevious fontSize={'19px'} /></button>
                    <button className='btn btn-sm' style={{ backgroundColor: '#E52727'}}><GrFormNext fontSize={'19px'}  /></button>
                </div>
            </div>
            <div className="container my-5">
                <div className="row products1">
                    {topfourProducts.map((item) => {
                        return (
                            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 " key={item.id}>
                                <CardProduct id={item.id} name={item.name} img={item.img} text={item.text} price={item.price} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="offer text-center">
                <h2>Attention! Deal Zone</h2>
                <p>Hurry up! Discounts up to 70%</p>
            </div>

            <div className="products">
                <div className="container my-5  py-5">
                    <div className="row products1">
                        {lastfourProducts.map((item) => {
                            return (
                                <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2" key={item.id}>
                                    <CardProduct id={item.id} name={item.name} img={item.img} text={item.text} price={item.price} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-3 featured text-center p-0">
                        <div className="content p-5 d-flex flex-column gap-2" >
                            <h3 className='my-4' >Wheels & Tires</h3>
                            <a href="#" >Wheel Covers</a>
                            <a href="#">Brake Kits</a>
                            <a href="#">Tire Chains</a>
                            <a href="#">Wheel Disks</a>
                            <a href="#">Tires</a>
                            <a href="#">Sensors</a>
                            <a href="#">Accessories</a>
                            <button className='btn btn-sm my-4' style={{ backgroundColor: '#E52727', color: 'white' }}>Shop All</button>
                        </div>
                    </div>
                    <div className="col-xl-9">

                        <Tabs
                            defaultActiveKey="featured"
                            id="uncontrolled-tab-example"
                            className="mb-3 tabs mt-1"
                            color='black'
                        >
                            <Tab eventKey="featured" title="Featured" style={{ color: 'black' }}>
                                <div className="row cards">
                                    {topfourProducts.map((item) => {
                                        return (
                                            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 " key={item.id}>
                                                <CardProduct id={item.id} name={item.name} img={item.img} text={item.text} price={item.price} />
                                            </div>
                                        )
                                    })}

                                </div>
                            </Tab>
                            <Tab eventKey="bestsellers" title="BestSellers">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="popular" title="Popular" >
                                Tab content for Contact
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-3 featured2 text-center p-0">
                        <div className="content p-5 d-flex flex-column gap-2" >
                            <h3 className='my-4' >Interior Parts</h3>
                            <a href="#" >Dashboards</a>
                            <a href="#">Seat Covers</a>
                            <a href="#">Floor Mats</a>
                            <a href="#">Sun Shades</a>
                            <a href="#">Visors</a>
                            <a href="#">Car Covers</a>
                            <a href="#">Accessories</a>
                            <button className='btn btn-sm my-4' style={{ backgroundColor: '#E52727', color: 'white' }}>Shop All</button>
                        </div>
                    </div>
                    <div className="col-xl-9">

                        <Tabs
                            defaultActiveKey="featured"
                            id="uncontrolled-tab-example"
                            className="mb-3 tabs mt-1"
                            color='black'
                        >
                            <Tab eventKey="featured" title="Featured" style={{ color: 'black' }}>
                                <div className="row cards">
                                    {lastfourProducts.map((item, index) => {
                                        return (
                                            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2" key={index}>
                                                <CardProduct id={item.id} name={item.name} img={item.img} text={item.text} price={item.price} />
                                            </div>
                                        )
                                    })}


                                </div>
                            </Tab>
                            <Tab eventKey="bestsellers" title="BestSellers">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="popular" title="Popular" >
                                Tab content for Contact
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-3 featured text-center p-0">
                        <div className="content p-5 d-flex flex-column gap-2" >
                            <h3 className='my-4' >Wheels & Tires</h3>
                            <a href="#" >Wheel Covers</a>
                            <a href="#">Brake Kits</a>
                            <a href="#">Tire Chains</a>
                            <a href="#">Wheel Disks</a>
                            <a href="#">Tires</a>
                            <a href="#">Sensors</a>
                            <a href="#">Accessories</a>
                            <button className='btn btn-sm my-4' style={{ backgroundColor: '#E52727', color: 'white' }}>Shop All</button>
                        </div>
                    </div>
                    <div className="col-xl-9">

                        <Tabs
                            defaultActiveKey="featured"
                            id="uncontrolled-tab-example"
                            className="mb-3 tabs mt-1"
                            color='black'
                        >
                            <Tab eventKey="featured" title="Featured" style={{ color: 'black' }}>
                                <div className="row cards">
                                    {topfourProducts.map((item) => {
                                        return (
                                            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 " key={item.id}>
                                                <CardProduct id={item.id} name={item.name} img={item.img} text={item.text} price={item.price} />
                                            </div>
                                        )
                                    })}

                                </div>
                            </Tab>
                            <Tab eventKey="bestsellers" title="BestSellers">
                                Tab content for Profile
                            </Tab>
                            <Tab eventKey="popular" title="Popular" >
                                Tab content for Contact
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Products
    ;