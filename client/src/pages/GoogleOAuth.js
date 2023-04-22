import React from "react";
import "./styles.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// get env vars
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
const drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;
const baseURL = "http://localhost:8000";
// const user={userId:4343,goldToken:5,silverToken:[{day:4,time:3,expiryTime:'13/09/2023'}]}

const handleGoogleLogin = (response, navigate) => {
  // console.log(response);

  const result = jwt_decode(response.credential);

  // console.log(response);
  axios
    .post(`${baseURL}/auth/login/`, {
      token: result,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: drfClientId,
      client_secret: drfClientSecret,
    })
    .then((res) => {
      console.log("here is data ", res);
      const user = {
        name: "Arpit Gupta",
        username: "104965000415928072233",
        email: "20bcs041@iiitdmj.ac.in",
        type: "admin",
      };

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
};

const GoogleOAuth = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={(response) => handleGoogleLogin(response, navigate)}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="button"
            class="login-with-google-btn"
          >
            Sign in with Google
          </button>
        )}
        onFailure={(err) => console.log("Google Login failed", err)}
      />
    </div>
  );
};

export default GoogleOAuth;
