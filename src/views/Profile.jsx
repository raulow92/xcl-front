import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { setIsLogged } = useContext(TokenContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getProfile = async () => {
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
      } else {
        navigate("/login");
      }
    };
    getProfile();
  }, [navigate]);

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/login");
  }

  return (
    <>
      {username && (
          <Card className="mt-20 mx-auto md:w-3/6 p-6">
            <CardHeader className="flex justify-center">
                <p className="text-2xl font-bold text-center">{username}</p>
            </CardHeader>
            <Divider />
            <CardBody className="p-4 gap-2">
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center mt-2">
                <Button onClick={onLogout} variant="bordered">Logout</Button>
            </CardFooter>
          </Card>
      )}
    </>
  );
};

export default Profile;
