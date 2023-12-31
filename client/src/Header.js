import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:3333/profile', {
      credentials: "include",
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    }); 
  }, []);

  function logout() {
    fetch("http://localhost:3333/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Nik's Blog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}


