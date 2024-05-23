import './order.css'

const Order = () => {
    return(
        <div className='Order-details'>
                <h2>Order Details</h2>
                <p>Order status: <strong>COMPLETED</strong></p>
                <p>Date: <strong>03-05-2021</strong></p>
                <p>Order ID: <strong>#43363899363535</strong></p>
                <p>Total amount paid: <strong>$180</strong></p>
                <p>Payment method: <strong>Mastercard</strong></p>
                <h3>Product Details</h3>
                {/* <img src="image-url.jpg" alt="Product"> */}
                <p>Nara Desert Escape - Sonara Camp Dubai</p>
                <h3>Customer Details</h3>
                <p>Name: <strong>Akintunde John</strong></p>
                <p>Location: <strong>Lagos, Nigeria</strong></p>
        </div>
    )
}

export default Order;