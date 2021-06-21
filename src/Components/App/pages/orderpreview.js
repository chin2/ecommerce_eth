import React from 'react';
// import {Link} from 'react-router-dom';
const OrdersPage =  () => {
    return(
        <div className="container">
        <div className="row">
          <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <address>
                  <strong>Elf Cafe</strong>
                  <br />
                  2135 Sunset Blvd
                  <br />
                  Los Angeles, CA 90026
                  <br />
                  <abbr title="Phone">P:</abbr> (213) 484-6829
                </address>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                <p>
                  <em>Date: 1st November, 2013</em>
                </p>
                <p>
                  <em>Receipt #: 34522677W</em>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="text-center">
                <h1>Receipt</h1>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>#</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-md-9"><em>Baked Rodopa Sheep Feta</em></td>
                    <td className="col-md-1" style={{textAlign: 'center'}}> 2 </td>
                    <td className="col-md-1 text-center">$13</td>
                    <td className="col-md-1 text-center">$26</td>
                  </tr>
                  <tr>
                    <td className="col-md-9"><em>Lebanese Cabbage Salad</em></td>
                    <td className="col-md-1" style={{textAlign: 'center'}}> 1 </td>
                    <td className="col-md-1 text-center">$8</td>
                    <td className="col-md-1 text-center">$8</td>
                  </tr>
                  <tr>
                    <td className="col-md-9"><em>Baked Tart with Thyme and Garlic</em></td>
                    <td className="col-md-1" style={{textAlign: 'center'}}> 3 </td>
                    <td className="col-md-1 text-center">$16</td>
                    <td className="col-md-1 text-center">$48</td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td className="text-right">
                      <p>
                        <strong>Subtotal:&nbsp;</strong>
                      </p>
                      <p>
                        <strong>Tax:&nbsp;</strong>
                      </p></td>
                    <td className="text-center">
                      <p>
                        <strong>$6.94</strong>
                      </p>
                      <p>
                        <strong>$6.94</strong>
                      </p></td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td className="text-right"><h4><strong>Total:&nbsp;</strong></h4></td>
                    <td className="text-center text-danger"><h4><strong>$31.53</strong></h4></td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className="btn btn-success btn-lg btn-block">
                Pay Now&nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    );
 }

export default OrdersPage;