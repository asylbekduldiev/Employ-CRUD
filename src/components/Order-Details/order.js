import { Component } from 'react';
import './order.css'

class Order extends Component {
    
    render() {
        return (
            <div className='Order-details'>
                    <h2>Order Details</h2>
                    <p>Order status: <strong>COMPLETED</strong></p>
                    <p>Date: <strong>03-05-2021</strong></p>
                    <p>Order ID: <strong>#43363899363535</strong></p>
                    <p>Total amount paid: <strong>$180</strong></p>
                    <p>Payment method: <strong>Mastercard</strong></p>
                    <h3>Product Details</h3>
            </div>
        )
    }
}

export default Order;