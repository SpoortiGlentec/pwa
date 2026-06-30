import { useState } from "react";
import { saveUser } from "../services/userService";

function UserForm({ loadUsers }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {

        const user = {
            name,
            email,
            age
        };

        try {

            await saveUser(user);

            alert("User Saved Successfully");

            setName("");
            setEmail("");
            setAge("");
            

        }
        catch(error){

            console.log(error);

            alert("Unable to Save User");

        }

    };

    return (

        <div className="card p-4">

            <h3>Add User</h3>

            <input
                className="form-control mb-3"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                className="form-control mb-3"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                className="form-control mb-3"
                placeholder="Enter Age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Save User
            </button>

        </div>

    );

}

export default UserForm;