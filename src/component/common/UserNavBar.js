import React from "react";

const UserNavBar = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      {/* <h1 className="text-xl font-bold">Dashboard</h1> */}
      <nav>
        <a href="/dashboard" className="mr-4">Dashboard</a><br/>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
};

export default UserNavBar;
