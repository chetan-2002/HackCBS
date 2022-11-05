import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

const LoginButton = () => {
  const {
    logout,
    isAuthenticated,
    isLoading,
    loginWithPopup,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
      getAccessTokenSilently()
        .then((token) => {
          localStorage.setItem("access_token", token);
          axios
            .get("http://localhost:5000/api/post/getAllPosts", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      // const access_token = localStorage.getItem("access_token");
    }
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <button
        onClick={() => {
          if (isAuthenticated) {
            logout({ returnTo: window.location.origin });
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
          } else {
            loginWithPopup();
          }
        }}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </>
  );
};

export default LoginButton;
