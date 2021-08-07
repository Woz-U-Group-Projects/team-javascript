import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";


function Profile() {
  let { id } = useParams();
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/basicinfo/${id}`).then((response) => {
      setUsername(response.data);
    });

    axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  
  
   
 return (
    
    <div className="row py-12 px-px">
      <div className="">

        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">

              <div className="media-body mb-5 text-white">

                <h4 className="mt-0 mb-0 text-dark">{authState.username} </h4>

                
                <form>
                <input

                  type="file"
                  name="image"
                  id="file"
                 accept=".jpeg, .png, .jpg" 
                 />
                <input type="submit" className="btn btn-outline-dark btn-sm btn-block" />
                </form>
                
                {authState.username === username && (
                  <button className="text-dark"
                    onClick={() => {
                      history.push("/changepassword");
                    }}
                  >
                    {" "}
                    Change My Password
                  </button>
                )}

              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block"></h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Blogs</small>
              </li>
             
            </ul>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">About</h5>
            <div className="profile mr-3"><img /><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">Input</p>
              <p className="font-italic mb-0">Input</p>

            </div>
          </div>
          
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">Recent posts</h5><a href="#" className="btn btn-link text-muted">Show all</a>
            </div>

            <div >
              {listOfPosts.map((value, key) => {
                return (
                  <div key={key} >
                    <div > {value.title} </div>
                    <div
                      
                      onClick={() => {
                        history.push(`/post/${value.id}`);
                      }}
                    >
                      {value.postText}
                    </div>
                    <div >
                      <div >{value.username}</div>
                      <div >
                        <label> {value.Likes.length}</label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-2 pr-lg-1"><img src="" /></div>
            <div className="col-lg-6 mb-2 pl-lg-1"><img src="" /></div>
            <div className="col-lg-6 pr-lg-1 mb-2"><img src="" /></div>
            <div className="col-lg-6 pl-lg-1"><img src="" /></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Profile;

