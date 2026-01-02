import { useEffect } from "react";
import './App.css'

function App() {

  
  useEffect(() => {
    const fetchHealth = async () => {
      const res = await fetch("/api/health/")
      const data = await res.json()
      console.log("FROM REACT, data:", data)
    }

    fetchHealth()
  }, []) // run once on mount

  return (
    <div>
      <h1>My App!!!</h1>
      <h1 className="text-3xl font-bold underline">Hello Tailwind</h1>
    </div>
  )
}

export default App