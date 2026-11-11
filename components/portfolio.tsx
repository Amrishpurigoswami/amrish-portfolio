import Image from 'next/image'
import { CursorSpotlight } from '@/components/cursor-spotlight'
import { ParallaxGrid } from '@/components/parallax-grid'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    type: 'AI SYSTEMS · INTERNSHIP PROJECT',
    title: 'RAG Benchmark System',
    summary:
      'A unified framework for implementing and comparing retrieval-augmented generation architectures over a shared document collection.',
    stack: ['Python', 'LangChain', 'FAISS', 'ChromaDB', 'Neo4j'],
    detail:
      'Built seven approaches—Simple, Fusion, Self, Adaptive, Agentic, Graph, and Multimodal RAG—around document ingestion, retrieval, grounding, and answer evaluation. The work explores query expansion, reciprocal-rank fusion, verification loops, intent routing, and knowledge-graph retrieval. Private HR screenshots and records are intentionally not included.',
    className: 'project-featured',
  },
  {
    number: '02',
    type: 'GENERATIVE AI · PERSONAL PROJECT',
    title: 'AI Study Assistant',
    summary:
      'A conversational study companion that answers questions from uploaded documents with retrieval-grounded context.',
    stack: ['Python', 'LangChain', 'FAISS', 'Hugging Face', 'Streamlit'],
    detail:
      'Automates document ingestion and semantic retrieval, keeps conversational context, and connects a Streamlit interface to an LLM API with credentials managed through environment variables.',
    className: '',
  },
  {
    number: '03',
    type: 'AI · DIGITAL LITERACY',
    title: 'DigiMitra',
    summary:
      'A bilingual chatbot designed to make everyday digital tasks easier to understand and navigate.',
    stack: ['Streamlit', 'Flask', 'NLTK', 'LangChain'],
    detail:
      'Provides approachable guidance around email, UPI, WhatsApp, and online safety, with voice input and spoken responses alongside a Flask service and rule-based language support.',
    className: '',
  },
  {
    number: '04',
    type: 'MACHINE LEARNING · COMPUTER VISION',
    title: 'Image Classification with CNNs',
    summary:
      'An image-classification workflow covering data preparation, model training, and evaluation.',
    stack: ['TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    detail:
      'Prepared image data, trained and tuned a convolutional neural network, and visualized training accuracy and loss to inspect model performance.',
    className: '',
  },
]

const experience = [
  {
    period: 'MAY — SEP 2026',
    role: 'Generative AI Intern',
    organization: 'Maruti Suzuki Digital Enterprise',
    place: 'Gurugram',
    description:
      'Benchmarked RAG architectures and built retrieval workflows spanning PDF ingestion, chunking, embeddings, vector search, HyDE, reciprocal-rank fusion, reranking, and Neo4j GraphRAG.',
    technologies: 'Python · LangChain · LangGraph · FAISS · ChromaDB · Neo4j',
  },
  {
    period: 'JUN — JUL 2025',
    role: 'Cloud Computing Intern',
    organization: 'Maxgen Technologies Pvt. Ltd.',
    place: 'Pune',
    description:
      'Worked with AWS infrastructure and designed cloud architectures with attention to scalability, security, IAM policies, networking, and access control.',
    technologies: 'AWS · EC2 · S3 · RDS · VPC · IAM',
  },
  {
    period: 'APR — MAY 2025',
    role: 'Artificial Intelligence Intern',
    organization: 'Codec Technologies Pvt. Ltd.',
    place: '',
    description:
      'Built a CNN image-classification workflow, from preprocessing and dataset preparation through model training, evaluation, and parameter tuning.',
    technologies: 'TensorFlow · NumPy · Pandas · Scikit-learn',
  },
]

const skillGroups = [
  {
    label: 'Generative AI',
    skills: 'RAG · LangChain · LangGraph · Agentic workflows · Prompt engineering',
  },
  {
    label: 'Retrieval & knowledge',
    skills: 'FAISS · Neo4j · ChromaDB · Hugging Face · Embeddings · Vector search',
  },
  {
    label: 'Machine learning',
    skills: 'TensorFlow · Scikit-learn · Pandas · NumPy · NLTK · CNNs',
  },
  {
    label: 'Languages & cloud',
    skills: 'Python · C · C++ · SQL · Java (basics) · AWS · Git',
  },
]

export function Portfolio() {
  return (
    <main className="portfolio" id="top">
      <CursorSpotlight />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Amrish Puri Goswami, home">
          APG<span>.</span>
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="topbar-actions">
          <a className="top-contact" href="mailto:amrishpurigoswami4@gmail.com">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <ParallaxGrid />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AI / ML ENGINEER IN THE MAKING</p>
          <h1 id="hero-title">I build AI that<br /><span>knows what it knows.</span></h1>
          <p className="hero-intro">
            I&apos;m Amrish Puri Goswami, a Computer Science student focused on
            Generative AI, retrieval systems, and useful machine-learning products.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowDownRight aria-hidden="true" /></a>
            <a className="text-link" href="/amrish-resume.pdf" download>
              <Download aria-hidden="true" /> Download résumé
            </a>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown aria-hidden="true" /> SCROLL TO EXPLORE</a>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <Image
              className="hero-portrait"
              src="/amrish-portrait.jpg"
              alt="Portrait of Amrish Puri Goswami wearing a suit and glasses"
              width={898}
              height={868}
              priority
            />
          </div>
          <span className="portrait-index">FIG. 01 — AMRISH</span>
          <div className="portrait-stamp" aria-hidden="true">BUILD<br />WITH<br />PURPOSE</div>
        </div>
        <div className="hero-index" aria-hidden="true">PORTFOLIO / 2026</div>
      </section>

      <section className="intro-strip" id="about" aria-labelledby="about-title">
        <div className="section-wrap intro-grid">
          <p className="eyebrow">A LITTLE ABOUT ME <span>01 / 04</span></p>
          <div>
            <h2 id="about-title">Curious by nature.<br /><em>Grounded by evidence.</em></h2>
            <p className="about-copy">
              I&apos;m pursuing a B.Tech in Computer Science at Jodhpur Institute of
              Engineering and Technology. I enjoy turning complex ideas into
              explainable systems—from document-grounded assistants to graph-based
              retrieval—and learning by building, testing, and iterating.
            </p>
            <div className="education-note">
              <span className="micro-label">CURRENTLY STUDYING</span>
              <strong>B.Tech, Computer Science</strong>
              <span>JIET · 2023—2027 · CGPA 7.8</span>
            </div>
          </div>
          <div className="about-aside">
            <span className="aside-mark" aria-hidden="true">“</span>
            <p>Useful AI should be more than impressive. It should be understandable, grounded, and built for a real problem.</p>
            <span className="micro-label">MY BUILDING PRINCIPLE</span>
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED PROJECTS <span>02 / 04</span></p>
            <h2 id="work-title">Things I&apos;ve built<span className="accent">.</span></h2>
          </div>
          <span className="section-count">04 PROJECTS</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className="project-topline"><span>{project.number} / 04</span><span>{project.type}</span></div>
              {project.number === '01' ? (
                <div className="rag-art" aria-label="Illustration of a retrieval-augmented generation pipeline">
                  <div className="rag-art-title">ONE QUESTION.<br />SEVEN WAYS TO RETRIEVE.</div>
                  <div className="rag-flow" aria-hidden="true">
                    <span>DOCS</span><i /><span>RETRIEVE</span><i /><span>REASON</span><i /><span>ANSWER</span>
                  </div>
                  <div className="rag-tags" aria-hidden="true"><span>VECTOR</span><span>GRAPH</span><span>AGENTIC</span></div>
                  <span className="rag-orbit orbit-one" aria-hidden="true" /><span className="rag-orbit orbit-two" aria-hidden="true" />
                </div>
              ) : (
                <div className={`project-art project-art-${project.number}`} aria-hidden="true">
                  <span>{project.number}</span><ArrowUpRight />
                </div>
              )}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tech-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                <details className="project-details">
                  <summary>Project notes <ArrowUpRight aria-hidden="true" /></summary>
                  <p>{project.detail}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">INTERNSHIPS &amp; HANDS-ON EXPERIENCE <span>03 / 04</span></p>
              <h2 id="experience-title">Internships<span className="accent">.</span></h2>
            </div>
            <a className="text-link" href="/amrish-resume.pdf" download>Full résumé <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.organization}>
                <span className="experience-date">{item.period}</span>
                <div className="experience-main">
                  <div className="experience-titleline"><h3>{item.role}</h3><span>{item.place}</span></div>
                  <p className="experience-org">{item.organization}</p>
                  <p className="experience-description">{item.description}</p>
                  <p className="experience-tools">{item.technologies}</p>
                </div>
                <ArrowUpRight className="experience-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOOLS I REACH FOR <span>04 / 04</span></p>
            <h2 id="skills-title">My toolkit<span className="accent">.</span></h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.label}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.skills}</p>
            </div>
          ))}
        </div>
        <div className="credentials-row">
          <div>
            <span className="micro-label">EDUCATION</span>
            <strong>Jodhpur Institute of Engineering &amp; Technology</strong>
            <span>B.Tech Computer Science · 2023—2027</span>
          </div>
          <a className="credential-link" href="/msde-certificate.pdf" target="_blank" rel="noreferrer">
            <span><span className="micro-label">CERTIFICATION</span><strong>Generative AI Internship · MSDE</strong></span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">HAVE A GOOD PROBLEM? <span>LET&apos;S TALK</span></p>
          <h2 id="contact-title">Let&apos;s make<br /><em>something matter.</em></h2>
          <a className="contact-email" href="mailto:amrishpurigoswami4@gmail.com">
            amrishpurigoswami4@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:amrishpurigoswami4@gmail.com">Send me an email <Mail aria-hidden="true" /></a>
            <a className="social-link" href="https://www.linkedin.com/in/amrish-puri-goswami-145b7927a/" target="_blank" rel="noopener noreferrer"><span className="social-monogram" aria-hidden="true">in</span> LinkedIn <ArrowRight aria-hidden="true" /></a>
            <a className="social-link" href="https://github.com/Amrishpurigoswami" target="_blank" rel="noopener noreferrer"><span className="social-monogram" aria-hidden="true">GH</span> GitHub <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top" aria-label="Back to top">APG<span>.</span></a>
        <span>BUILT WITH CURIOSITY · © {new Date().getFullYear()} AMRISH PURI GOSWAMI</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}
