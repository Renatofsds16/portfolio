import { getProfile, getProjects } from "@/src/services/api"

export default async function Home() {
  const profile = await getProfile()
  const projects = await getProjects()

  const getImageUrl = (image: string) => {
    if (!image) return ""

    if (image.startsWith("http")) {
      return image
    }

    if (image.startsWith("/media")) {
      return `http://localhost:8000${image}`
    }

    return `http://localhost:8000/media/${image}`
  }

  const getResumeUrl = (resumePath: string) => {
    if (!resumePath) return ""
    if (resumePath.startsWith("http")) return resumePath
    return `http://localhost:8000${resumePath}`
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500/30 selection:text-violet-200 antialiased scroll-smooth">

      <header className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 z-50 transition-all">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4">
          
          <div className="flex items-center gap-3">
            {profile.photo && (
              <img
                src={getImageUrl(profile.photo)}
                alt=""
                className="w-7 h-7 rounded-full object-cover border border-slate-700/60"
              />
            )}
            <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r flow-root from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              {profile.full_name}
            </h1>
          </div>

          <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-slate-400 items-center">
            <a className="hover:text-slate-100 transition-colors duration-200" href="#sobre">Sobre</a>
            <a className="hover:text-slate-100 transition-colors duration-200" href="#entregas">Entregas</a>
            <a className="hover:text-slate-100 transition-colors duration-200" href="#projetos">Projetos</a>
            <a className="hover:text-slate-100 transition-colors duration-200" href="#tecnologias">Tecnologias</a>
            <a className="hover:text-slate-100 transition-colors duration-200" href="#contato">Contato</a>
            
            {profile.resume && (
              <a 
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-semibold border border-emerald-500/30 px-2.5 py-1 rounded-lg bg-emerald-500/5 text-xs sm:text-sm"
                href={getResumeUrl(profile.resume)}
                target="_blank"
                rel="noreferrer"
                download={`Curriculo_${profile.full_name.replace(/\s+/g, '_')}.pdf`}
              >
                PDF CV
              </a>
            )}
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
        
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
            {profile.full_name}
          </h2>

          <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mt-4">
            {profile.title}
          </p>

          <p className="mt-6 text-slate-400 text-sm sm:text-lg leading-relaxed font-normal">
            Desenvolvendo soluções robustas e escaláveis de ponta a ponta, combinando eficiência no ecossistema de backend com interfaces modernas no frontend.
          </p>

          <div className="mt-4 text-xs sm:text-sm text-slate-500 flex items-center gap-1 font-medium">
            <span>📍</span> {profile.location}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {profile.github && (
              <a
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-black/20"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {profile.linkedin && (
              <a
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-600/10"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}

            {profile.resume && (
              <a
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-emerald-600/10 flex items-center gap-2"
                href={getResumeUrl(profile.resume)}
                target="_blank"
                rel="noreferrer"
                download={`Curriculo_${profile.full_name.replace(/\s+/g, '_')}.pdf`}
              >
                <span>📥</span> Baixar Currículo
              </a>
            )}

            {profile.whatsapp && (
              <a
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-emerald-600/20 flex items-center gap-2"
                href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>💬</span> Iniciar Projeto
              </a>
            )}
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-200 tracking-tight">
          Sobre mim
        </h3>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {profile.photo && (
            <div className="relative w-full md:w-64 aspect-square md:h-64 shrink-0 rounded-2xl overflow-hidden group border border-slate-800 bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-60" />
              <img
                src={getImageUrl(profile.photo)}
                alt={`Foto de de ${profile.full_name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          <div className="flex-1 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/80 p-6 sm:p-8 text-slate-300 text-sm sm:text-base leading-relaxed shadow-xl h-full min-h-[16rem]">
            {profile.bio}
          </div>

        </div>
      </section>

      {/* Seção "O que eu entrego" corrigida e dinâmica baseada na API do Django */}
      {profile?.deliveries && profile.deliveries.length > 0 && (
        <section id="entregas" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-200 tracking-tight">
            O Que Eu Entrego
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mb-8">
            Soluções eficientes e direcionadas para as necessidades do seu negócio ou projeto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profile.deliveries.map((delivery: any, index: number) => (
              <div 
                key={index}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all duration-300 shadow-xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-2xl shadow-inner">
                  {delivery.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-white mb-2">
                    {delivery.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {delivery.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Seção de Projetos - Só exibe se houver dados retornados */}
      {projects && projects.length > 0 && (
        <section id="projetos" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-200 tracking-tight">
            Projetos em Destaque
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700/80 hover:bg-slate-900/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {project.image && (
                    <div className="w-full h-48 overflow-hidden border-b border-slate-800/60">
                      <img
                        src={getImageUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h4 className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies?.map((tech: any) => (
                        <span
                          key={tech.id}
                          className="text-xs bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/30 font-medium"
                        > 
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 flex flex-wrap gap-4 text-sm font-medium border-t border-slate-800/60">
                  <a href={project.github_url} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    Código →
                  </a>

                  {project.live_url && (
                    <a href={project.live_url} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section id="tecnologias" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-200 tracking-tight">
          Ferramentas & Tecnologias
        </h3>

        <p className="text-sm sm:text-base text-slate-400 mb-6">
          Aqui estão as tecnologias que uso no dia a dia para dar vida a ideias.
        </p>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
          <div className="hidden sm:grid grid-cols-2 bg-slate-900/80 p-4 font-semibold text-slate-300 border-b border-slate-800/80 text-sm uppercase tracking-wider">
            <span>Área</span>
            <span>Tecnologias</span>
          </div>

          <div className="divide-y divide-slate-800/60">
            {[
              ["Backend", "Django, DRF, Python"],
              ["Frontend", "Next.js, React, TypeScript, Tailwind"],
              ["Mobile", "Flutter, Kotlin"],
              ["Banco de Dados", "PostgreSQL, SQLite"],
              ["Ferramentas", "Git, GitHub, Docker, Postman"],
            ].map(([area, tech], i) => (
              <div
                key={i}
                className="p-4 flex flex-col sm:grid sm:grid-cols-2 gap-1 sm:gap-0 hover:bg-slate-900/20 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-slate-200">
                  {area}
                </span>
                <span className="text-slate-400 text-sm sm:text-base font-normal">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 mb-12 scroll-mt-24">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-200 tracking-tight">
          Vamos conversar?
        </h3>

        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 rounded-2xl p-6 space-y-3 text-sm sm:text-base text-slate-300 shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl" />
          
          <p className="flex items-center gap-3">
            <span className="text-slate-500">📧</span> 
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors">{profile.email}</a>
          </p>
          
          <p className="flex items-center gap-3">
            <span className="text-slate-500">📱</span> 
            <a href={`https://wa.me/${profile.whatsapp?.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">{profile.whatsapp}</a>
          </p>
          
          <p className="flex items-center gap-3"><span className="text-slate-500">📍</span> {profile.location}</p>
        </div>
      </section>

      <footer className="text-center text-xs sm:text-sm text-slate-600 py-12 border-t border-slate-900">
        © {new Date().getFullYear()} • {profile.full_name} • Feito com Next.js
      </footer>

    </main>
  )
}