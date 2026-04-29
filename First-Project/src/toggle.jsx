import { useState } from "react";

const Toggle = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <input type={showPassword? "text":"password"} id="pass" />
            <button onClick={() => setShowPassword(true)}>Show</button>
            <button onClick={() => setShowPassword(false)}>Hide</button>
        </>
    )
}

export default Toggle;