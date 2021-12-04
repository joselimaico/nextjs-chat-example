import React, {useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {

  const {setUserName,setSecret, username,secret} = useContext(Context);
  const router = useRouter();

  const onSubmit =(e)=>{
    e.preventDefault();
    if(username.length === 0 || secret.length === 0) return;

    axios.put("https://api.chatengine.io/users/",
    {username,secret},
    {headers:{"Private-key":"87ea9a91-acf2-4a16-97ad-423651b2a366"}})
    .then((_response)=>{
      router.push("/chats");
    })
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-title"> Next JS App</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e)=>setSecret(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Login / Sign up
          </button>
        </form>
      </div>

    </div>
  );
}
