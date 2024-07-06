import React,{useState} from "react";

function CreateArea(props) {
  const[note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event)
  {
      const{name,value}=event.target
      setNote(prevNote=>{
        return{
          ...prevNote,
          [name]:value
        }
      })
  }
  function onsubmit(event)
  {
    props.onAdd(note); 
    event.preventDefault();
    setNote({
       title:"",
    content:""
    });
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button onClick={onsubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
