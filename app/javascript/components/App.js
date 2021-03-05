import React, {useState} from 'react'

const Foo = () => {
    const [title, setTitle] = useState()
    const handleClick = () =>{
        console.log(title)
        setTitle('')
    }

    return (
        <div>
            <h1>FOO</h1>
            <p>title</p>
            <input value={title} 
             onChange={(e)=>setTitle(e.target.value)}
            />
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

const App = () => {
    return (
        <> 
          <h1>App</h1>
          <Foo />
          <Foo />
          <Foo />
          <Foo />
        </>
    )
}

export default App

