import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

const CartModel = ({ handleShow, openmodel }) => {
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch()
  return (
    <>
      <Modal show={openmodel} onHide={handleShow(false)}  >
        <Modal.Header closeButton>
          <Modal.Title>Cart Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProducts.map((item, index) => {
            return (
              <div className="row mb-2 border-bottom" key={index} >
                <div className="col-3">
                  <img src={item.img} alt={item.name} style={{ width: '80px', height: '100px' }} />
                </div>
                <div className="col-9">
                  <div className='row'>
                    <div className="col-md-9"><h5>{item.name}</h5></div>
                    <div className="col-md-3"><h5>${item.price}</h5></div>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <h6>Quantity : {item.quantity}</h6>
                    <button onClick={() => dispatch(removefromcart(item))} className='btn btn-sm btn-danger'>Remove</button>
                  </div>
                </div>
              </div>
            )
          })}

        </Modal.Body>
        <Modal.Footer>
          <h6>Total Price : ${totalPrice}</h6>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default CartModel;