import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import product1 from '/Images/product1.jpg'
import product2 from '/Images/product2.jpg'
import product3 from '/Images/product3.jpg'
import product4 from '/Images/product4.jpg'
import product5 from '/Images/product5.jpg'
import { MdDone } from 'react-icons/md'
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import { BsCartCheck } from 'react-icons/bs'
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import './style.css'
function Products() {
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
                    <button className='btn btn-sm' style={{ backgroundColor: '#E52727', color: 'white' }}><GrFormNext fontSize={'19px'} /></button>
                </div>
            </div>
            <div className="container my-5">
                <div className="row products1">
                    <div className="col-md-6  col-lg-3 my-2">
                        <Card className='card' >
                            <Card.Img variant="top" src={product1} />
                            <Card.Body>
                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <div className="icons">
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                    </div>
                                    <span color='gray'>4 on 3 reviews</span>
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <Card.Title >$354.00</Card.Title>
                                    <a href="#"><BsCartCheck /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6  col-lg-3 my-2">
                        <Card className='card'>
                            <Card.Img variant="top" src={product2} />
                            <Card.Body>
                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <div className="icons">
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                    </div>
                                    <span color='gray'>4 on 3 reviews</span>
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <Card.Title >$354.00</Card.Title>
                                    <a href="#"><BsCartCheck /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6  col-lg-3 my-2">
                        <Card className='card'>
                            <Card.Img variant="top" src={product3} />
                            <Card.Body>
                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <div className="icons">
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                    </div>
                                    <span color='gray'>4 on 3 reviews</span>
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <Card.Title >$354.00</Card.Title>
                                    <a href="#"><BsCartCheck /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6  col-lg-3 my-2">
                        <Card className='card'>
                            <Card.Img variant="top" src={product4} />
                            <Card.Body>
                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <div className="icons">
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                    </div>
                                    <span color='gray'>4 on 3 reviews</span>
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <Card.Title >$354.00</Card.Title>
                                    <a href="#"><BsCartCheck /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>

            <div className="offer text-center">
                <h2>Attention! Deal Zone</h2>
                <p>Hurry up! Discounts up to 70%</p>
            </div>

            <div className="products">
                <div className="container my-5  py-5">
                    <div className="row products1">
                        <div className="col-md-6  col-lg-3 my-2">
                            <Card className='card' >
                                <Card.Img variant="top" src={product1} />
                                <Card.Body>
                                    <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                    <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                    <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="icons">
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                        </div>
                                        <span color='gray'>4 on 3 reviews</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <Card.Title >$354.00</Card.Title>
                                        <a href="#"><BsCartCheck /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6  col-lg-3 my-2">
                            <Card className='card'>
                                <Card.Img variant="top" src={product2} />
                                <Card.Body>
                                    <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                    <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                    <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="icons">
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                        </div>
                                        <span color='gray'>4 on 3 reviews</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <Card.Title >$354.00</Card.Title>
                                        <a href="#"><BsCartCheck /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6  col-lg-3 my-2">
                            <Card className='card'>
                                <Card.Img variant="top" src={product3} />
                                <Card.Body>
                                    <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                    <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                    <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="icons">
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                        </div>
                                        <span color='gray'>4 on 3 reviews</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <Card.Title >$354.00</Card.Title>
                                        <a href="#"><BsCartCheck /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6  col-lg-3 my-2">
                            <Card className='card'>
                                <Card.Img variant="top" src={product4} />
                                <Card.Body>
                                    <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                    <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                    <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <div className="icons">
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                        </div>
                                        <span color='gray'>4 on 3 reviews</span>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <Card.Title >$354.00</Card.Title>
                                        <a href="#"><BsCartCheck /></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
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
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 ">
                                        <Card className='product' >
                                            <Card.Img variant="top" src={product1} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3  my-2 ">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product2} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product3} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product4} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
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
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 ">
                                        <Card className='product' >
                                            <Card.Img variant="top" src={'/Images/arrivals/product-3-245x245.jpg'} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3  my-2 ">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={'/Images/arrivals/product-4-245x245.jpg'} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={'/Images/arrivals/product-5-245x245.jpg'} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={'/Images/arrivals/product-7-245x245.jpg'} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
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
                    <div className="col-xl-3 featured3 text-center p-0">
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
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 ">
                                        <Card className='product' >
                                            <Card.Img variant="top" src={product1} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3  my-2 ">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product2} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product3} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2">
                                        <Card className='product'>
                                            <Card.Img variant="top" src={product4} />
                                            <Card.Body>
                                                <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
                                                <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>SKU:753-3875-12</p>
                                                <Card.Title style={{ fontSize: "18px" }}>Brandix Brake Kit BDX-7507370-S</Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <div className="icons">
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                                        <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                                    </div>
                                                    <span color='gray'>4 on 3 reviews</span>
                                                </div>
                                                <div className="d-flex justify-content-between my-2">
                                                    <Card.Title >$354.00</Card.Title>
                                                    <a href="#"><BsCartCheck /></a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
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