function ModuleList({ modules }) {
  return (
    <ul className="module-list">
      {modules.map((module) => (
        <li key={module.title}>
          {module.title} ({module.duration} hours)
        </li>
      ))}
    </ul>
  )
}

export default ModuleList;