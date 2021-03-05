import React from 'react'

const Foo = () => {
    return (
        <div>
            <h1>FOO</h1>
        </div>
    )
}

const App = () => {
    return (
        <> 
          <h1>App</h1>
          <Foo />
        </>
    )
}

export default App
