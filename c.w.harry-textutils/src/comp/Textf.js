import React, {useState} from 'react'

export default function Textf(props) {
  


  const upclick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.salert(" convart up","success")
  }
  const loclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.salert(" convart lc","success")
  }
  const clr = ()=>{
    setText("")
  }
  const onchange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
    <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={onchange} id="mybox" rows="6"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upclick}>convartup</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={loclick}>convartlo</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clr}>clr</button>
</div>
<div className="container my-2">
  <h1>your text summry</h1>
  <p>{text.split(/\s+/).filter((el)=>{return el.length!==0}).length} words and {text.length} characters</p>
  <p>reading time{0.008* text.split(" ").filter((el)=>{return el.length!==0}).length}m</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"enter something to preview"}</p>
</div>
</>
  )
}
