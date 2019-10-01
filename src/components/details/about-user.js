import React, { useState, useLayoutEffect, useReducer } from "react";

let initialState = {

}

let AboutUser = ({ user, props }) => {
    
  let [showForm, setShowForm] = useState(false);

  let [updateUser, serUpdateUser] = useState({});

  useLayoutEffect(() => {
    Object.keys(user).map(data => {
       updateUser[data] = user[data]
    });
    console.log(props);
  }, []);

  let setUserData = e => {
    serUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  let toggleShowForm = e => {
    console.log("AAAAA", e);
    setShowForm(!showForm);
    if(showForm){
        props.dashboardStore.updateUser(updateUser)
    }
  };

  return (
    <React.Fragment>
      {Object.keys(user)
        .filter(x => x !== "id")
        .map((data, i) => (
          <React.Fragment>
            {!showForm ? (
              <div className="test">
                <span key={i} style={spanStyle}>
                  {data.toUpperCase()} :
                </span>
                <span key={i}>{user[data]} </span>
              </div>
            ) : (
              <div>
                <label>{data.toUpperCase()}</label>
                <input
                  type="text"
                  name={data}
                  value={updateUser[data] ? updateUser[data] :  user[data]}
                  onChange={e => {
                    setUserData(e);
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      <div>
        <button
          onClick={toggleShowForm}
        >
          {showForm ? "UPDATE" : "EDIT"}
        </button>
      </div>
    </React.Fragment>
  );
};

let spanStyle = {
  color: "red"
};

let displayUser = {};

export default React.memo(AboutUser);
