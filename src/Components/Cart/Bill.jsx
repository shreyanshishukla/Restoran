export default ({ cartitems }) => {
  return (
    <>
      <div className="Bill">
        <h5>Bill Details</h5>
        <div className="billlist">
          <div className="billitem">
            <div className="billitemname">Item Total</div>
            <div className="billitemnamount">₹{cartitems.cartTotal}</div>
          </div>
          <div className="billitem">
            <div className="billitemname">DeliveryFee | 5.5Km</div>
            <div className="billitemnamount">₹89</div>
          </div>
          <div className="discount">
            <div className="billdis">
              <div className="dis">Item Discount</div>
              <div className="disamt">₹89</div>
            </div>
          </div>
          <div className="billitem">
            <div className="billitemname">Platform Fee</div>
            <div className="billitemnamount">₹2</div>
          </div>
          <div className="billitem">
            <div className="billitemname">GST and Other Charges</div>
            <div className="billitemnamount">₹89</div>
          </div>
        </div>
      </div>
      <div className="PayAmount">
        <div className="ToPay"> To Pay</div>
        <div className="ToPayAmount"> ₹{cartitems.cartTotal + 89 + 2 + 89}</div>
      </div>
    </>
  );
};
