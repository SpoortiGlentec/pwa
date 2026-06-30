import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { getUsers } from "../services/userService";

function Home() {

    const [users, setUsers] = useState([]);

   const loadUsers = async () => {
    try {
        const response = await getUsers();

        console.log("API Response:", response.data);

        setUsers(response.data);

        console.log("State Updated");
    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {

        loadUsers();

    }, []);

    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <UserForm loadUsers={loadUsers} />

                <hr />

                <UserTable users={users} />

            </div>
        </>
    );
}

export default Home;