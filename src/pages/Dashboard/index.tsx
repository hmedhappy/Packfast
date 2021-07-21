import React from 'react'

export default function index() {
    return (
        <>
          <div className="main">
 <div className="main-content">
    <div className="row">
      <div className="col-3 col-md-6 col-sm-12">
        <div className="box box-hover">
          {/* COUNTER */}
          <div className="counter">
            <div className="counter-title">
              total order
            </div>
            <div className="counter-info">
              <div className="counter-count">
                6578
              </div>
              <i className="bx bx-shopping-bag" />
            </div>
          </div>
          {/* END COUNTER */}
        </div>
      </div>
      <div className="col-3 col-md-6 col-sm-12">
        <div className="box box-hover">
          {/* COUNTER */}
          <div className="counter">
            <div className="counter-title">
              conversion rate
            </div>
            <div className="counter-info">
              <div className="counter-count">
                30.5%
              </div>
              <i className="bx bx-chat" />
            </div>
          </div>
          {/* END COUNTER */}
        </div>
      </div>
      <div className="col-3 col-md-6 col-sm-12">
        <div className="box box-hover">
          {/* COUNTER */}
          <div className="counter">
            <div className="counter-title">
              total profit
            </div>
            <div className="counter-info">
              <div className="counter-count">
                $9,780
              </div>
              <i className="bx bx-line-chart" />
            </div>
          </div>
          {/* END COUNTER */}
        </div>
      </div>
      <div className="col-3 col-md-6 col-sm-12">
        <div className="box box-hover">
          {/* COUNTER */}
          <div className="counter">
            <div className="counter-title">
              daily visitors
            </div>
            <div className="counter-info">
              <div className="counter-count">
                690
              </div>
              <i className="bx bx-user" />
            </div>
          </div>
          {/* END COUNTER */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-3 col-md-6 col-sm-12">
        {/* TOP PRODUCT */}
        <div className="box f-height">
          <div className="box-header">
            top product
          </div>
          <div className="box-body">
            <ul className="product-list">
              <li className="product-list-item">
                <div className="item-info">
                  <img src="./images/thumb-7.jpg" alt="product" />
                  <div className="item-name">
                    <div className="product-name">Jacket</div>
                    <div className="text-second">Cloths</div>
                  </div>
                </div>
                <div className="item-sale-info">
                  <div className="text-second">Sales</div>
                  <div className="product-sales">$5,930</div>
                </div>
              </li>
              <li className="product-list-item">
                <div className="item-info">
                  <img src="./images/sneaker.jpg" alt="product" />
                  <div className="item-name">
                    <div className="product-name">sneaker</div>
                    <div className="text-second">Cloths</div>
                  </div>
                </div>
                <div className="item-sale-info">
                  <div className="text-second">Sales</div>
                  <div className="product-sales">$5,930</div>
                </div>
              </li>
              <li className="product-list-item">
                <div className="item-info">
                  <img src="./images/headphone.jpg" alt="product" />
                  <div className="item-name">
                    <div className="product-name">headphone</div>
                    <div className="text-second">Devices</div>
                  </div>
                </div>
                <div className="item-sale-info">
                  <div className="text-second">Sales</div>
                  <div className="product-sales">$5,930</div>
                </div>
              </li>
              <li className="product-list-item">
                <div className="item-info">
                  <img src="./images/backpack.jpg" alt="product" />
                  <div className="item-name">
                    <div className="product-name">Backpack</div>
                    <div className="text-second">Bags</div>
                  </div>
                </div>
                <div className="item-sale-info">
                  <div className="text-second">Sales</div>
                  <div className="product-sales">$5,930</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* TOP PRODUCT */}
      </div>
      <div className="col-4 col-md-6 col-sm-12">
        {/* CATEGORY CHART */}
        <div className="box f-height">
          <div className="box-body">
            <div id="category-chart" />
          </div>
        </div>
        {/* END CATEGORY CHART */}
      </div>
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
    </div>
  </div>
</div>
   
        </>
    )
}
