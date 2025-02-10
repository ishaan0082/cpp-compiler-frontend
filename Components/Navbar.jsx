import { useState } from 'react';
import '../public/Navbar.css'
import axios from 'axios';

function Navbar({editor_value,setOutput}){
    const [buttonText,setButtonText] = useState("Run");

    async function run(){
        setButtonText("Running...")
        try{
            const output = await axios.post('http://localhost:3000/run',
                                            {code:editor_value});
            setOutput(output.data.output);
        }
        catch(err){
            setOutput(err.response.data.output);
        }
        setButtonText("Run");
    }

    return (
    <div className="navbar flex justify-between font-[Open_Sans]">
            <div className="title">
            C++ Online  Compiler
            </div>

            <h2 className='output_heading'>Output Section</h2>
            
            <div className='result'>
                <button onClick={run}>{buttonText}</button>
            </div>  
    </div>
    )
}

export default Navbar;