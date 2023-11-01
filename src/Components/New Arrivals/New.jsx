import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import './style.css'
const New = () => {
    return (
        <div className='container'>
            <div className=" d-flex flex-wrap justify-content-between mt-5" style={{ borderBottom: '1px solid lightgray' }}>
                <h2>New Arrivals</h2>
                <div className="div menu">
                    <button className='btn btn-sm btn-dark'>All</button>
                    <button className='btn btn-sm btn-outline'>Wheel Covers</button>
                    <button className='btn btn-sm btn-outline'>Timing Belts</button>
                    <button className='btn btn-sm btn-outline'>Oil Plans</button>
                    <button className='btn btn-sm me-2' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormPrevious fontSize={'19px'} /></button>
                    <button className='btn btn-sm' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormNext fontSize={'19px'} /></button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-md-3 gap-lg-1 pt-3" >
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-1-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-2-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-3-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-4-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-md-3 gap-lg-1 pt-3" >
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-1-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-2-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-3-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-1' style={{ border: '1px solid lightgray',width:'20rem' }}>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <img src="/Images/arrivals/product-4-245x245.jpg" width={'100px'} alt="" />
                        </div>
                        <div className="col-md-9 px-4 py-3">
                            <h6 >Brandix Spark Plug Kit ASR-400</h6>
                            <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                <div className="icons">
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                    <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                </div>
                                <span color='gray'>4 on 3 reviews</span>
                            </div>
                            <h6 >$19</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" d-flex flex-wrap justify-content-between mt-5" style={{ borderBottom: '1px solid lightgray' }}>
                <h2>Latest News</h2>
                <div className="div menu">
                    <button className='btn btn-sm btn-dark'>All</button>
                    <button className='btn btn-sm btn-outline'>Special Offers</button>
                    <button className='btn btn-sm btn-outline'>New Arrivals</button>
                    <button className='btn btn-sm btn-outline'>Reviews</button>
                    <button className='btn btn-sm me-2' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormPrevious fontSize={'19px'} /></button>
                    <button className='btn btn-sm' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormNext fontSize={'19px'} /></button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around gap-1 my-4">
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news1.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Special Offers</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news2.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Latest News</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news3.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>New Arrivals</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news4.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Special Offers</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="container my-5 brands">
                <div className="d-flex flex-wrap justify-content-center gap-4">

                    <div >
                        <img src="/Images/Brands/brand-1.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-2.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-3.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-4.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-5.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-6.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-7.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-10.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-11.png" alt="" />
                    </div>
                    <div >
                        <img src="/Images/Brands/brand-12.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New