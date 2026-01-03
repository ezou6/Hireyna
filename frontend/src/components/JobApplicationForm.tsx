import { useState } from "react"

export default function JobApplicationForm({ onCreated }: { onCreated: (job: any) => void }) {
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/applications/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_name: company,
        position,
      }),
    })

    const created = await res.json()
    onCreated(created)

    setCompany("")
    setPosition("")
  }

  return (
    <form onSubmit={submit}>
      <input
        value={company}
        onChange={e => setCompany(e.target.value)}
        placeholder="Company"
      />
      <input
        value={position}
        onChange={e => setPosition(e.target.value)}
        placeholder="Position"
      />
      <button type="submit">Add Job</button>
    </form>
  )
}
