import '../css/Test.css'
import { useState } from 'react';


function MisinfoContainer(){

    const [image, setImage] = useState('./images/misinfo/misinfo1.jpeg');
    const [count, setCount] = useState(0)

    function changePhoto(){

        if (count > 3 ){
            setCount(0)
        }
        else{
            setCount(count + 1)
        }
    
        setImage(`./images/misinfo/misinfo${count}.jpeg`)
        console.log(count)
    }

    return (
        <body>
            <div className="container">
                <div id = 'redbox' className="box">
                <img className = "defaultImage" src = './images/Template.png' alt='template'/>
                </div>
                <div id = 'misinfo-box' className="box stack-top">
                    <img alt = 'missing' id = 'misinfo-picture' src = {image} ></img>
                </div>
                <button onClick = {changePhoto} id = 'image-selection'>Click Here to Change Photo</button>
            </div>
        </body>
    )

}

export default MisinfoContainer