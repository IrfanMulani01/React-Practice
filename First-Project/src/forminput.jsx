import { use, useState } from "react";

const Forminput = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
        Name: 
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
        Email: 
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

            <button onClick={disp}>Submit</button>
        </>
    )

    function disp() {
        console.log("Name:", name);
        console.log("Email:", email);
        alert(`Name: ${name} \nEmail: ${email}`);
    }
}

export default Forminput;