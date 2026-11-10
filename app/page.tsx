const projects = [
  {
    title: 'MarketPulse',
    category: 'Data Engineering & Development',
    year: '2024',
  },
  {
    title: 'Plantix',
    category: 'Deep Learning & Computer Vision',
    year: '2023',
  },
  {
    title: 'IntelliCast',
    category: 'NLP, LLM & RAG',
    year: '2023',
  },
  {
    title: 'QuickShow',
    category: 'Together',
    year: '2022',
  },
]

export default function Page() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aadarsh Rai home">
          AR<span>.</span>
        </a>
        <a className="availability" href="mailto:aadarshrai1801@gmail.com">
          <span className="availability-dot" aria-hidden="true" />
          Available for work
        </a>
      </header>

      <div id="top" className="content-wrap">
        <section className="hero" aria-labelledby="intro-heading">
          <p className="eyebrow">Located in Dubai, UAE</p>
          <h1 id="intro-heading">
            Aadarsh Rai<span className="dash">—</span>
          </h1>
          <p className="intro">
            Building practical <em>AI</em> that solves real-world problems.
          </p>
          <p className="bio">
            I&apos;m an aspiring AI and Machine Learning Engineer focused on
            building production-oriented machine learning systems and
            intelligent applications — from data collection and preprocessing
            to model training, evaluation, API development and deployment.
          </p>
        </section>

        <section className="projects-section" aria-labelledby="projects-heading">
          <div className="section-heading">
            <h2 id="projects-heading">Selected work</h2>
            <span>(04)</span>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <a className="project-row" href="#contact" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <p className="eyebrow">Let&apos;s build something</p>
          <h2 id="contact-heading">Have an idea? <a href="mailto:aadarshrai1801@gmail.com">Get in touch<span>↗</span></a></h2>
        </section>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Aadarsh Rai</span>
        <div className="footer-links">
          <a href="mailto:aadarshrai1801@gmail.com">Email</a>
          <a href="tel:+918434501384">Phone</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}
