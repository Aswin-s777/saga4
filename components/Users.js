import React, { useEffect ,useState} from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS,remove_data,Removedata,array2} from "../reducer/action";
import axios from "axios";

export function Users(props) {
  useEffect(() => {
   props.getUsers();
  }, []);


  return <div className="container">
   <div class="new-card-design">
      <div class="new-container">
      {
                
                props.data.map((user, i) =>

      
        <div class="new-card">
          <div class="circle">
            <h2>{i}</h2>
          </div>
          <div class="new-content">
          <p>Name: {user.name}</p> 
             <p>Email-Id : {user.email}</p> 
          </div>
        </div>
                )}
      </div>
    </div> 
   
   
    </div>
}

const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
    data2: state.users.data2 || [],
  };
};

// const getUserDetails = () => {
//   return (dispatch, getState) => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
//       console.log("Data fetched", result.data);
//       dispatch({ type: SET_USERS, value: result.data });
//     });
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
        dispatch({ type: GET_USERS});
        
    },
    removedata:()=>{
      dispatch({ type: Removedata});
    },
    arr2:()=>{
      dispatch({type:array2})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);