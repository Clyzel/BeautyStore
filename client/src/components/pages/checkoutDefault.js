import React from "react";
import { useState, useEffect } from "react";

const CheckoutDefault = () => {
  const [joinItems, setJoinItems] = useState([]);
  const [addedJoinItems, setAddedJoinItems] = useState([]);
  const [maxItems, setMaxItems] = useState([]);
  const [searchString, setSearchString] = useState({
    firstname: "",
    lastname: "",
    address: "",
    state:"",
    zip: "",
    nameoncard: ""
});

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
    return fetch("http://localhost:5000/addedjointable", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(joinItem),
    }).then((response) => {
      console.log("THE RESPONSE IS HERE", response);
      if (response.ok) {
        //setaddItems(null);
        console.log("A Delete Was Made ", response);
        loadAddedJoinItems();
      }
    });
  };

  let displayFav = (
    <ul>
      {joinItems.map((item, index) => (
        <li key={index}>
          <h2>{item.title}</h2>
        </li>
      ))}
    </ul>
  );

  let displayAddedItemName = (
    <ul>
      {addedJoinItems.map((item, index) => (
        <li key={index}>
          <h2>
            <img src={item.image} alt="" width="100" height="100" />
            <br />
            {item.title}
            <br />${item.price}
            <br />
            <button onClick={() => deleteAddedItem(item)}>delete</button>
          </h2>
        </li>
      ))}
    </ul>
  );

  const handlefirstname = (event) => {
    const firstname = event.target.value;
    setSearchString((searchString) => ({ ...searchString, firstname }));
}

const handlelastname = (event) => {
  const lastname = event.target.value;
  setSearchString((searchString) => ({ ...searchString, lastname }));
}

const handleadress = (event) => {
  const address = event.target.value;
  setSearchString((searchString) => ({ ...searchString, address }));
}

const handlestate = (event) => {
  const state = event.target.value;
  setSearchString((searchString) => ({ ...searchString, state }));
}

const handleZip = (event) => {
  const zip = event.target.value;
  setSearchString((searchString) => ({ ...searchString, zip }));
}

const handlenameoncard = (event) => {
  const nameoncard = event.target.value;
  setSearchString((searchString) => ({ ...searchString, nameoncard }));
}

  let subtotal = maxItems.map((number) => number.max * 100);

  return (
    <div className="pogebody">
      <div class="bigColumn">
        <div class="column">
          {/* This are the two colums of bigColumn 1 */}
          <div class="row">
            <div class="column">
              <h1 className="items">Items</h1>
              {displayAddedItemName}
            </div>

            <div class="column">
              <div className="favorites">
                <h1>Favorites</h1>
                {displayFav}
              </div>
            </div>
          </div>
          <hr></hr>
          <h1>Payment</h1>
          <div>
            <form>
              <fieldset>
                <label>First Name</label>
                <input
                  type="text"
                  value={searchString.firstname}
                  onChange={handlefirstname}

                />
                <br />
                <label>Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder=""
                  required
                  value={searchString.lastname}
                  onChange={handlelastname}
                />
                <br />
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder=""
                  required
                  value={searchString.address}
                  onChange={handleadress}
                />
                <br />
                <label>State</label>
                <input
                  type="text"
                  id="add-user-lastname"
                  placeholder=""
                  required
                  value={searchString.state}
                  onChange={handlestate}
                />
                <br />
                <label>ZIP</label>
                <input
                  type="text"
                  id="add-user-lastname"
                  placeholder=""
                  required
                  value={searchString.zip}
                  onChange={handleZip}
                />
                <br />
                <label>Name On Card</label>
                <input
                  type="text"
                  id="add-user-lastname"
                  placeholder=""
                  required
                  value={searchString.nameoncard}
                  onChange={handlenameoncard}
                />
                <br />
                <br />
                *Info won't be taken, Educational Purposes only*
                <br />
                <br />
                <input type="submit" value="Submit" />
              </fieldset>
            </form>
          </div>
        </div>
        <div class="column">
          <div className="subtotal">
            <h1>Total:</h1>
            Shipping free
            <br />
            <br />${subtotal}.00
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDefault;
