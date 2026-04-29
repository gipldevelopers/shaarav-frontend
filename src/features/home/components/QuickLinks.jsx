const links = [
  {
    title: 'Documentation',
    text: 'Keep project-level setup under app and shared pieces under components.',
  },
  {
    title: 'Services',
    text: 'Put API clients in services and feature-specific UI inside each feature folder.',
  },
  {
    title: 'Contact',
    text: 'Add more pages later by expanding routes and feature modules.',
  },
]

function QuickLinks() {
  return (
    <section className="card-grid">
      {links.map((item) => (
        <article key={item.title} className="info-card">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  )
}

export default QuickLinks
