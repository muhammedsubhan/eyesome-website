import React, { useEffect, useState } from "react";
import { useUserAuth } from "../UserAuthContext/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";

const Profile = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const { logOut, user } = useUserAuth();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      localStorage.removeItem("auth");
      setLoggingOut(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const localUserName = JSON.parse(localStorage.getItem("username"));
    const localEmail = JSON.parse(localStorage.getItem("email"));
    if (user && localUserName && localEmail) {
      setUserName(localUserName);
      setEmail(localEmail);
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] min-w-md max-w-lg m-auto mt-10">
        <div className="h-full p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full">
          <h1 className="bg-[--primary-text-color] text-white  p-3 shadow-sm transition-colors text-center">
            Profile
          </h1>
          <div className="flex flex-col gap-4 w-full p-5">
            <p>
              <span className="text-gray-600 me-1">Username:</span>
              <span className="break-all">{userName}</span>
            </p>
            <p>
              <span className="text-gray-600 me-1">Email:</span>
              <span className="break-all">{email}</span>
            </p>
            <hr />
            <button
              className="w-1/2 text-sm bg-rose-600 py-2 px-4 text-white rounded-md hover:bg-rose-700"
              onClick={handleLogOut}
            >
              {loggingOut ? "Logging Out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
