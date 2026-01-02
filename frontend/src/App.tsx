import { useEffect } from "react";
import './App.css'

function App() {
  useEffect(() => {
    const fetchHealth = async () => {
      const res = await fetch("/api/health/")
      const data = await res.json()
      console.log(data)
    }

    fetchHealth()
  }, []) // run once on mount

  return (
    <div>
      <h1>My App</h1>
    </div>
  )
}

export default App