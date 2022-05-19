import React from "react";
import { useState, useEffect } from "react";

const CheckoutDefault = () => {
  const [joinItems, setJoinItems] = useState([]);
  const [addedJoinItems, setAddedJoinItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);

  const loadFavJoinItems = () => {
    fetch("http://localhost:5000/favejointable")
      .then((response) => response.json())
      .then((joinItems) => {
        //console.log(joinItems);
        setJoinItems(joinItems);
      });
  };

  const loadAddedJoinItems = () => {
    fetch("http://localhost:5000/addedjointable")
      .then((response) => response.json())
      .then((addedJoinItems) => {
        //console.log(joinItems);
        setAddedJoinItems(addedJoinItems);
      });
  };

  const loadMaxAddItems = () => {
    fetch("http://localhost:5000/maxitems")
      .then((response) => response.json())
      .then((maxitems) => {
        //console.log(additems);
        setMaxItems(maxitems);
      });
  };

  useEffect(() => {
    loadMaxAddItems();
    loadFavJoinItems();
    loadAddedJoinItems();
  }, []);

  const deleteAddedItem = (joinItem) => {
      return fetch('http://localhost:5000/addedjointable', {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(joinItem)
   }).then((response) =>{
          console.log("THE RESPONSE IS HERE",response);
          if(response.ok){
              //setaddItems(null);
          console.log("A Delete Was Made ", response);
           loadAddedJoinItems();
          }
      })
  }

  let displayFav = (
    <ol>
      {joinItems.map((item, index) => (
        <li key={index}>
          <h2>{item.title}</h2>
        </li>
      ))}
    </ol>
  );

  let displayAddedItemName = (
    <ul>
      {addedJoinItems.map((item, index) => (
        <li key={index}>
          <h2>
          <img
            src={item.image}
            alt=""
            width="100"
            height="100"
          />
          {item.title} || ${item.price}{" "} <button onClick={() => deleteAddedItem(item)}>delete</button>
            
          </h2>
        </li>
      ))}
    </ul>
  );
  
 
  // let subtotal = addedJoinItems.filter((items) => {
  //   return items.price
  // }).map((item, index) => {
  //   item.reduce((a, b) => a + b, 0)
  // });

  // console.log("I'm HEEEEEREE", subtotal)
  
  let subtotal = maxItems.map((number) => number.max * 100);

  
  return (
    <div className="pogebody">
      <h1>Checkout</h1>
      {/* column 1 & (a column in a column) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 20,
            }}
          >
            <div>
              Items
              
                {displayAddedItemName} 
                <br />
              
              {/* lower left of this column 1 */}
              <hr></hr>
              <h1>Payment</h1>
              <form>
                <h4>
                  {" "}
                  First Name
                  <input type="text" placeholder="" />
                  Last Name
                  <input type="text" placeholder="" />
                  Address
                  <input type="text" placeholder="" />
                  Zip
                  <input type="text" placeholder="" />
                  City
                  <input type="text" placeholder="" />
                  State{" "}
                </h4>
                <input type="text" placeholder="" />
                <input type="button" value="Submit" />
              </form>
            </div>
            {/* upper right side of this coulmn 1 */}
            <div>
              <div style={{ display: "flex" }}>
                <hr></hr>
                Favorites
                {displayFav}
              </div>
            </div>
          </div>
        </div>

        {/* column 2 */}
        <div>
          <div style={{ display: "flex" }}>
            <hr></hr>
            <p>
              Subtotal: ${subtotal}.00
              <br />
              Shipping
              free
              <br />
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDefault;
