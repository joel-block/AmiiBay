import React from "react";
import { logoutUser } from "../../axios-services";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { setIsLoggedIn, setUser, setCart } = useAuth();
  async function clickHandler(e) {
    e.preventDefault();
    await logoutUser();
    setIsLoggedIn(false);
    setUser({});
    setCart([]);
  }
  return (
    <Link onClick={clickHandler} to={"/"}>
      Logout
    </Link>
    // <form
    //   onSubmit={async (e) => {
    //     e.preventDefault();
    //     await logoutUser();
    //     setIsLoggedIn(false);
    //   }}
    // >
    //   <button type="submit">Logout</button>;
    // </form>
  );
};

export default Logout;
