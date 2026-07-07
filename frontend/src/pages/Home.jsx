import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { getUsers } from "../services/userService";
import UserPieChart from "../components/UserPieChart";

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
                <UserPieChart users={users} />
 <hr />
                <UserTable users={users} />

            </div>
        </>
    );
}

export default Home;