import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function getProfile() {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await axios.get("http://localhost:8000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setUsername(data.username);
        setEmail(data.email);
        setPhone(data.phone);
      }
    }
    getProfile();
  }, []);
  return (
    <>
      <h1>Profile Page</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
};

export default Profile;
