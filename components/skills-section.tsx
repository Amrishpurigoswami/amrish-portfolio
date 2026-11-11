import { Badge } from '@/components/ui/badge'
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Lightbulb,
  ListOrdered,
  MessagesSquare,
  Network,
  Presentation,
  Puzzle,
  ScanFace,
  Search,
  Waypoints,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiLangchain,
  SiLanggraph,
  SiMysql,
  SiNeo4J,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
} from 'react-icons/si'

type SkillIcon = IconType | LucideIcon

type Skill = {
  name: string
  icon: SkillIcon
  color?: string
}

type SkillGroup = {
  label: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'C', icon: SiC, color: '#5b6b79' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Java (Basics)', icon: SiOpenjdk, color: '#ed8b00' },
      { name: 'SQL', icon: Database },
      { name: 'Dart', icon: SiDart, color: '#0175c2' },
    ],
  },
  {
    label: 'GenAI & RAG',
    skills: [
      { name: 'RAG', icon: Network },
      { name: 'LangChain', icon: SiLangchain, color: '#1c6b55' },
      { name: 'LangGraph', icon: SiLanggraph, color: '#2389c9' },
      { name: 'Agentic Workflows', icon: Workflow },
      { name: 'Graph RAG', icon: Waypoints },
      { name: 'Multimodal RAG', icon: BrainCircuit },
      { name: 'Prompt Engineering', icon: Lightbulb },
    ],
  },
  {
    label: 'Retrieval & AI',
    skills: [
      { name: 'FAISS', icon: Search },
      { name: 'Neo4j', icon: SiNeo4J, color: '#4581c3' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#e3a900' },
      { name: 'Sentence Transformers', icon: BrainCircuit },
      { name: 'HyDE', icon: Search },
      { name: 'RRF', icon: ListOrdered },
      { name: 'Vector Search', icon: Search },
      { name: 'Knowledge Graphs', icon: Waypoints },
    ],
  },
  {
    label: 'ML / DL',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
      { name: 'APIs', icon: Code2 },
      { name: 'Pandas', icon: SiPandas, color: '#60409b' },
      { name: 'NumPy', icon: SiNumpy, color: '#326790' },
      { name: 'NLTK', icon: BookOpen },
      { name: 'Data Wrangling', icon: Workflow },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'AWS (EC2, S3, RDS, VPC, IAM)', icon: FaAws, color: '#ed8b00' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#59636e' },
      { name: 'Streamlit', icon: SiStreamlit, color: '#e74c3c' },
      { name: 'MySQL', icon: SiMysql, color: '#00758f' },
      { name: 'Tool Use', icon: Wrench },
    ],
  },
  {
    label: 'Coursework',
    skills: [
      { name: 'Data Structures & Algorithms', icon: Code2 },
      { name: 'Machine Learning', icon: BrainCircuit },
      { name: 'DBMS', icon: Database },
      { name: 'CNN', icon: ScanFace },
      { name: 'NLP', icon: MessagesSquare },
    ],
  },
  {
    label: 'Soft Skills',
    skills: [
      { name: 'Operational Problem Solving', icon: Puzzle },
      { name: 'Self-learning', icon: Lightbulb },
      { name: 'Presentation', icon: Presentation },
      { name: 'Communication', icon: MessagesSquare },
      { name: 'Multi-step Reasoning', icon: Workflow },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TOOLS I REACH FOR <span>04 / 04</span></p>
          <h2 id="skills-title">My toolkit<span className="accent">.</span></h2>
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-category" key={group.label}>
            <div className="skill-category-heading">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.label}</h3>
              <span className="skill-count">{String(group.skills.length).padStart(2, '0')}</span>
            </div>
            <div className="skill-badges">
              {group.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <Badge className="skill-badge h-auto min-h-7 gap-2 rounded-xl border px-3 py-1.5 text-[10px] font-medium leading-none tracking-normal whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-sm" key={skill.name} variant="outline">
                    <Icon aria-hidden="true" data-icon="inline-start" className="skill-badge-icon" style={skill.color ? { color: skill.color } : undefined} />
                    <span>{skill.name}</span>
                  </Badge>
                )
              })}
            </div>
          </article>
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
  )
}
