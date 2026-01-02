import { useEffect, useState } from "react"
import JobApplicationForm from "../components/JobApplicationForm"

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/applications/")
      .then(r => r.json())
      .then(setJobs)
  }, [])

  return (
    <div>
      <h1>My Job Applications</h1>

      <JobApplicationForm
        onCreated={(job) => setJobs(prev => [job, ...prev])}
      />

      <ul>
        {jobs.map(j => (
          <li key={j.id}>{j.company_name} — {j.position}</li>
        ))}
      </ul>
    </div>
  )
}
