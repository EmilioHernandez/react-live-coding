import React, { useState } from "react";
import {useLocation} from "wouter"
import useUser from 'hooks/useUser'
import { useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation()
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form class='form' onSubmit={handleSubmit}>
          <div>
            <label>username
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            </label>
          </div>
          <div>
          <label>password
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          </label>
          </div>
          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  );
}
