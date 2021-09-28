import React from "react";

function Home(props) {
  debugger;
  let userDetails = JSON.parse(localStorage.getItem("userDetail"));
  return (
    <div className="flex justify-center my-20">
      <div className="w-1/3 shadow p-9 border border-grey-900 bg-blue-100">
        <div className="text-2xl text-black-200">
          Email: {userDetails.user.email}
        </div>
        <div className="text-2xl text-black-200">
          Name: {userDetails.user.name}
        </div>
        <div className="text-2xl text-black-200">
          Username: {userDetails.user.username}
        </div>
      </div>
    </div>
  );
}

export default Home;
