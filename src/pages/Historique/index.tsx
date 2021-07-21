import React from 'react'

export default function index() {
    return (
        <>
          <div className="col-12">
        {/* ORDERS TABLE */}
        <div className="box" style={{margin:"15px"}}>
          <div className="box-header">
            Recent orders
          </div>
          <div className="box-body overflow-scroll">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Order status</th>
                  <th>Payment status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#2345</td>
                  <td>
                    <div className="order-owner">
                      <img src="./images/user-image.jpg" alt="user" />
                      <span>tuat tran anh</span>
                    </div>
                  </td>
                  <td>2021-05-09</td>
                  <td>
                    <span className="order-status order-ready">
                      Ready
                    </span>
                  </td>
                  <td>
                    <div className="payment-status payment-pending">
                      <div className="dot" />
                      <span>Pending</span>
                    </div>
                  </td>
                  <td>$123.45</td>
                </tr>
                <tr>
                  <td>#2345</td>
                  <td>
                    <div className="order-owner">
                      <img src="./images/user-image-2.png" alt="user" />
                      <span>John doe</span>
                    </div>
                  </td>
                  <td>2021-05-09</td>
                  <td>
                    <span className="order-status order-shipped">
                      Shipped
                    </span>
                  </td>
                  <td>
                    <div className="payment-status payment-paid">
                      <div className="dot" />
                      <span>Paid</span>
                    </div>
                  </td>
                  <td>$123.45</td>
                </tr>
                <tr>
                  <td>#2345</td>
                  <td>
                    <div className="order-owner">
                      <img src="./images/user-image-3.png" alt="user" />
                      <span>evelyn</span>
                    </div>
                  </td>
                  <td>2021-05-09</td>
                  <td>
                    <span className="order-status order-shipped">
                      Shipped
                    </span>
                  </td>
                  <td>
                    <div className="payment-status payment-paid">
                      <div className="dot" />
                      <span>Paid</span>
                    </div>
                  </td>
                  <td>$123.45</td>
                </tr>
                <tr>
                  <td>#2345</td>
                  <td>
                    <div className="order-owner">
                      <img src="./images/user-image-2.png" alt="user" />
                      <span>John doe</span>
                    </div>
                  </td>
                  <td>2021-05-09</td>
                  <td>
                    <span className="order-status order-shipped">
                      Shipped
                    </span>
                  </td>
                  <td>
                    <div className="payment-status payment-paid">
                      <div className="dot" />
                      <span>Paid</span>
                    </div>
                  </td>
                  <td>$123.45</td>
                </tr>
                <tr>
                  <td>#2345</td>
                  <td>
                    <div className="order-owner">
                      <img src="./images/user-image-3.png" alt="user" />
                      <span>evelyn</span>
                    </div>
                  </td>
                  <td>2021-05-09</td>
                  <td>
                    <span className="order-status order-shipped">
                      Shipped
                    </span>
                  </td>
                  <td>
                    <div className="payment-status payment-paid">
                      <div className="dot" />
                      <span>Paid</span>
                    </div>
                  </td>
                  <td>$123.45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* END ORDERS TABLE */}
      </div>
       
        </>
    )
}
