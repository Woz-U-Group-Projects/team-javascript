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
      setUsername(response.data.username);
    });

    axios.get(`http://localhost:3001/posts/byuserId/${id}`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div class="row py-5 px-4">
      <div class="col-md-5 mx-auto">

        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <div class="media align-items-end profile-head">
              <div class="profile mr-3"><img /><a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
              <div class="media-body mb-5 text-white">
                <h4 class="mt-0 mb-0">Welcome {username} </h4>
                {authState.username === username && (
                  <button
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
          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block"></h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Blogs</small>
              </li>
              <li class="list-inline-item">
                <h5 class="font-weight-bold mb-0 d-block"></h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Friends</small>
              </li>

            </ul>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">About</h5>
            <div class="profile mr-3"><img /><a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">Input</p>
              <p class="font-italic mb-0">Input</p>

            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent posts</h5><a href="#" class="btn btn-link text-muted">Show all</a>
            </div>

            <div className="listOfPosts">
              {listOfPosts.map((value, key) => {
                return (
                  <div key={key} className="post">
                    <div className="title"> {value.title} </div>
                    <div
                      className="body"
                      onClick={() => {
                        history.push(`/post/${value.id}`);
                      }}
                    >
                      {value.postText}
                    </div>
                    <div className="footer">
                      <div className="username">{value.username}</div>
                      <div className="buttons">
                        <label> {value.Likes.length}</label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-2 pr-lg-1"><img src="" /></div>
            <div class="col-lg-6 mb-2 pl-lg-1"><img src="" /></div>
            <div class="col-lg-6 pr-lg-1 mb-2"><img src="" /></div>
            <div class="col-lg-6 pl-lg-1"><img src="" /></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Profile;

