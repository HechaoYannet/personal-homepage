import { useEffect, useRef, useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${visible ? 'animate-in' : 'opacity-0'} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

const projects = [
  {
    name: 'readwiseAI',
    description: '基于 FastAPI + 多 Agent 架构的智能高考英语学习系统',
    tech: ['Python', 'FastAPI', 'Multi-Agent', 'JWT', 'SM-2', 'Railway'],
    highlights: ['Orchestrator→Planner→Dispatcher→Verifier 四大 Agent 协作', '逐任务调度+即时重试+依赖解析', 'SM-2 间隔重复遗忘曲线', 'OpenAI/DeepSeek 多 LLM 支持'],
    color: 'from-violet-500 to-purple-600',
    url: 'https://github.com/HechaoYannet/readwiseAI',
    commits: 81,
  },
  {
    name: '3kingdom-unity',
    description: '融合三国杀与崩铁玩法的 Unity 卡牌战斗游戏',
    tech: ['C#', 'Unity', 'ShaderLab', 'HLSL'],
    highlights: ['战斗循环+屏幕空间 UI+卡牌系统', 'Claude Code Game Studios 驱动开发', 'URP 渲染管线', '完整游戏架构设计'],
    color: 'from-orange-500 to-red-500',
    url: 'https://github.com/HechaoYannet/3kingdom-unity',
    commits: 41,
  },
  {
    name: 'Tiny-Chinese-Transformer',
    description: '从零实现的 GPT-like 中文 Transformer，RTX 4060 训练',
    tech: ['Python', 'PyTorch', 'CUDA', 'NLP'],
    highlights: ['Multi-Head Attention 手写实现', 'DataLoader→训练→生成完整 Pipeline', 'RTX 4060 本地训练优化', 'GPT-like 自回归生成'],
    color: 'from-blue-500 to-cyan-500',
    url: 'https://github.com/HechaoYannet/Tiny-Chinese-Transformer',
    commits: 6,
  },
  {
    name: 'laborlawhelp',
    description: '劳动法 AI 辅助平台，案情提炼·赔偿测算·文书生成·HR 风险检查',
    tech: ['TypeScript', 'Next.js', 'shadcn/ui', 'pnpm'],
    highlights: ['案情提炼+赔偿测算+文书生成', 'HR 风险自动检查', '自定义 Node.js Server', '语音识别录入'],
    color: 'from-emerald-500 to-teal-500',
    url: 'https://github.com/HechaoYannet/laborlawhelp',
    commits: 0,
  },
  {
    name: 'phywiseAI',
    description: '面向中学生的物理受力分析 Agent 平台，画板优先工作台',
    tech: ['TypeScript', 'Python', 'Next.js', 'FastAPI', 'Monorepo'],
    highlights: ['画板优先+AI 自动建议', '前后端共享合约层', 'Monorepo 架构(5 packages)', '白板业务节点模型'],
    color: 'from-rose-500 to-pink-500',
    url: 'https://github.com/HechaoYannet/phywiseAI',
    commits: 0,
    star: 1,
    fork: 1,
  },
]

const miniProjects = [
  { name: 'Claude-Code-Game-Studios', desc: '48 AI Agents + 72 Skills，游戏开发工作室框架', url: 'https://github.com/HechaoYannet/Claude-Code-Game-Studios', lang: 'Shell' },
  { name: 'sam', desc: 'ViT 视觉模型研究，流形分析与维度坍缩诊断', url: 'https://github.com/HechaoYannet/sam', lang: 'Python', star: 1 },
  { name: 'MapSyncer', desc: 'AI 编写的 Minecraft NeoForge 模组', url: 'https://github.com/HechaoYannet/MapSyncer-for-XaeroWorldmap', lang: 'Java' },
  { name: 'markdown2docx', desc: 'AI 生成 Markdown→Word 转换工具', url: 'https://github.com/HechaoYannet/markdown2docx', lang: 'TypeScript', star: 1 },
]

const skillGroups = [
  {
    label: 'AI & Agent',
    skills: ['Multi-Agent 系统', 'Orchestrator/Planner', 'LLM 集成', 'RAG', 'PyTorch', 'NLP', '计算机视觉'],
  },
  {
    label: '游戏开发',
    skills: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'URP', '游戏架构', 'Minecraft Modding'],
  },
  {
    label: '全栈工程',
    skills: ['FastAPI', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'JWT 认证'],
  },
  {
    label: '基础设施',
    skills: ['CUDA 13.0', 'Railway', 'Vercel', 'pnpm', 'Monorepo', 'Shell', 'PowerShell'],
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f1f5f9] overflow-x-hidden selection:bg-violet-500/30">
      {/* Background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl pointer-events-none z-0">
        <div className="glow w-[500px] h-[500px] top-[-200px] left-[-100px] bg-violet-500" />
        <div className="glow w-[400px] h-[400px] top-[600px] right-[-150px] bg-blue-500" />
        <div className="glow w-[300px] h-[300px] top-[1400px] left-[10%] bg-cyan-500" />
        <div className="glow w-[350px] h-[350px] top-[2200px] right-[5%] bg-emerald-500" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* ─── HERO ─── */}
        <FadeIn>
          <section className="flex flex-col items-center text-center mb-24 md:mb-32">
            <div className="relative mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-violet-500/40 ring-offset-4 ring-offset-[#0a0a0f]">
                <img
                  src="https://github.com/HechaoYannet.png"
                  alt="Yan Hechao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
              Yan Hechao
            </h1>
            <p className="gradient-text text-lg md:text-xl font-semibold mb-6">
              AI Engineer & Game Developer
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#94a3b8] mb-8">
              <span className="flex items-center gap-1.5">
                <LocationIcon /> 西安 · 西安交通大学
              </span>
              <span className="flex items-center gap-1.5">
                <MailIcon /> yhcnet2021@163.com
              </span>
              <a
                href="https://github.com/HechaoYannet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-violet-400 transition-colors"
              >
                <GithubIcon /> HechaoYannet
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/HechaoYannet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-violet-500/15 border border-violet-500/30 rounded-full text-sm font-medium text-violet-300 hover:bg-violet-500/25 hover:border-violet-500/50 transition-all"
              >
                GitHub Profile
              </a>
              <a
                href="mailto:yhcnet2021@163.com"
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-[#94a3b8] hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </FadeIn>

        {/* ─── ABOUT ─── */}
        <FadeIn delay={100}>
          <section className="mb-24 md:mb-32">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">About</h2>
            <p className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl">
              西安交通大学在读，AI 工程与游戏开发双栖开发者。专注于{' '}
              <span className="text-white font-medium">多 Agent 协作系统</span>、{' '}
              <span className="text-white font-medium">NLP/Transformer</span> 以及{' '}
              <span className="text-white font-medium">Unity 游戏架构</span>。
              擅长用 AI 工具链（Claude Code / Codex）驱动完整工程项目，从原型设计到生产部署全覆盖。
            </p>
          </section>
        </FadeIn>

        {/* ─── SKILLS ─── */}
        <FadeIn delay={150}>
          <section className="mb-24 md:mb-32">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-6">Skills</h2>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-medium text-[#64748b] uppercase tracking-wider mb-2.5">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ─── PROJECTS ─── */}
        <FadeIn delay={200}>
          <section className="mb-24 md:mb-32">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-6">Featured Projects</h2>

            <div className="space-y-4">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover block p-5 md:p-6 rounded-2xl bg-[#111118] border border-[#1a1a25]"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                      <p className="text-sm text-[#94a3b8]">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748b] shrink-0">
                      {project.commits > 0 && (
                        <span className="px-2 py-0.5 bg-[#252536] rounded-full">{project.commits} commits</span>
                      )}
                      {project.star && <span className="flex items-center gap-1 px-2 py-0.5 bg-[#252536] rounded-full"><StarIcon /> {project.star}</span>}
                      {project.fork && <span className="px-2 py-0.5 bg-[#252536] rounded-full">🍴 {project.fork}</span>}
                    </div>
                  </div>

                  <ul className="mb-3 space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#94a3b8] flex items-start gap-2">
                        <span className="text-violet-400 mt-0.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#1a1a25] text-[#94a3b8] border border-[#252536]">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Mini projects row */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {miniProjects.map((mp) => (
                <a
                  key={mp.name}
                  href={mp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover p-4 rounded-xl bg-[#111118] border border-[#1a1a25] text-center"
                >
                  <h4 className="text-sm font-medium text-white mb-1 truncate">{mp.name}</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-2">{mp.desc}</p>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-[11px] px-2 py-0.5 bg-[#252536] rounded-full text-[#94a3b8]">{mp.lang}</span>
                    {mp.star && <span className="text-[11px] px-2 py-0.5 bg-[#252536] rounded-full text-[#94a3b8] flex items-center gap-0.5"><StarIcon />{mp.star}</span>}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ─── TIMELINE ─── */}
        <FadeIn delay={250}>
          <section className="mb-24 md:mb-32">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-6">Background</h2>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#111118] border border-[#1a1a25]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">西安交通大学</h3>
                  <span className="text-xs text-[#64748b] px-2 py-0.5 bg-[#252536] rounded-full">Current</span>
                </div>
                <p className="text-sm text-[#94a3b8]">Xi'an Jiao Tong University</p>
              </div>

              {/* GitHub stats */}
              <div className="p-5 rounded-2xl bg-[#111118] border border-[#1a1a25]">
                <h3 className="font-semibold text-white mb-3">GitHub Activity</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'Repos', value: '17' },
                    { label: 'Stars Earned', value: '5' },
                    { label: 'Yearly Contribs', value: '427+' },
                    { label: 'Achievements', value: '4' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#64748b]">
                  <span className="px-2 py-1 bg-[#1a1a25] rounded-md border border-[#252536]">🏆 Pair Extraordinaire x2</span>
                  <span className="px-2 py-1 bg-[#1a1a25] rounded-md border border-[#252536]">🏆 Pull Shark x2</span>
                  <span className="px-2 py-1 bg-[#1a1a25] rounded-md border border-[#252536]">🏆 YOLO</span>
                  <span className="px-2 py-1 bg-[#1a1a25] rounded-md border border-[#252536]">🏆 Quickdraw</span>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ─── CONTACT / FOOTER ─── */}
        <FadeIn delay={300}>
          <section className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-6">Connect</h2>
            <p className="text-lg text-[#94a3b8] mb-6">
              对 AI Agent 系统、游戏开发或任何有趣的项目感兴趣？<br />
              欢迎交流与合作。
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <a
                href="https://github.com/HechaoYannet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all"
              >
                <GithubIcon />
              </a>
              <a
                href="mailto:yhcnet2021@163.com"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all"
              >
                <MailIcon />
              </a>
            </div>
            <p className="text-xs text-[#475569]">
              © 2026 Yan Hechao · Built with Vite + React + Tailwind CSS
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  )
}
