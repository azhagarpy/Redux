import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { User1, User2, User3, User4 } from "./Actions/UserActions";
import { useState } from "react";
import { UserStore } from "./Store/UserStore";
function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const {UserReducer} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="states bg-info p-3 ">
        <h1>Your States</h1>
        <h4 className="mt-5">AGE &nbsp;&nbsp; : {UserReducer.Age}</h4>
        <h4>Name : {UserReducer.Name}</h4>
      </div>
      <div className="row my-4" >
        {" "}
        <button
          className="col-2 btn btn-success mx-2 ms-3"
          onClick={() => {
            dispatch(User1());
          }}
        >
          Get User 1
        </button>
        <button
          className="col-2 btn btn-info mx-2"
          onClick={() => {
            dispatch(User2());
          }}
        >
          Get User 2
        </button>
        <button
          className="col-2 btn btn-danger  mx-2"
          onClick={() => {
            dispatch(User3());
          }}
        >
          Get User 3
        </button>
        <button
          className="col-2 btn btn-primary  mx-2"
          onClick={() => {
            UserStore.dispatch({ type: 22 });
          }}
        >
          Get default User
        </button>
      </div>
      <div className="px-5 bg-primary">
        <h1 className="text-center">Custom State</h1>
      Name
      <input
      className="form-control"
      type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      Age
      <input
      className="form-control"
        type="number"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button
      className="btn btn-success my-5"
        onClick={() => {
          dispatch(User4(Name, Age));
        }}
      >
        Custom User
      </button>
      </div>
      <small className="text-info">* You Can access all the states from any commponents</small>
    </div>
  );
}

export default App;
