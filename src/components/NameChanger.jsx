import { useState } from "react"

const NameChanger = ({setName}) => {
    const [newName, setNewName] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        setName(()=>{
            return newName
        })
        setNewName("")
    }
    
    return(
    <>
    
    <form className='namechanger' onSubmit={handleSubmit}>
        <label className='label' htmlFor="nameInput">Your Name: </label>
        <input id="nameInput" value={newName} onChange={((e)=>{
            setNewName(e.target.value)
        })}/>
        <button className="button">send</button>
    </form>
    </>
    ) 
}

export default NameChanger