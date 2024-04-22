import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          {count %5 == 0 && count%3 == 0 && count != 0 && <h1>neue fische</h1>}
          {count %5 == 0 && count%3 != 0 && <h1>fische</h1>}
          {count %5 != 0 && count%3 == 0 && <h1>neue</h1>}
          {count %5 != 0 && count%3 != 0 && <h1>{count}</h1>}
          {count == 0 && <h1>{count}</h1>}

          <h2>{count}</h2>
          <div className="card">
              <button onClick={() => setCount((count) => count - 1)}>
                  -
              </button>
              <button onClick={() => setCount((count) => count + 1)}>
                  +
              </button>
          </div>
      </>
  )
}

export default App
