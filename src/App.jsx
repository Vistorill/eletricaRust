import { useEffect, useState } from 'react';

const PHONE_MAIN = '(11) 98613-7714';
const PHONE_2 = '(11) 97257-5532';
const PHONE_3 = '(11) 55272114';
const ADDRESS = 'Av. Paulo Guilguer Reimberg, 1387 - Jardim Campinas, São Paulo - SP';
const INSTAGRAM = '@eletricarust';
const WHATSAPP_LINK = 'https://wa.me/5511986137714';

const services = [
  {
    icon: '⚡',
    title: 'Caixas de Luz',
    desc: 'Venda e instalação de caixas de medição individuais e coletivas para residências e comércios.',
  },
  {
    icon: '🏗️',
    title: 'Postes Elétricos',
    desc: 'Fornecimento e instalação de postes para redes de distribuição elétrica.',
  },
  {
    icon: '🔌',
    title: 'Materiais Elétricos',
    desc: 'Grande variedade de materiais elétricos diversos para sua obra ou projeto.',
  },
  {
    icon: '🛠️',
    title: 'Assessoria ENEL',
    desc: 'Assessoria completa junto à ENEL (antiga Eletropaulo) para regularização e ligação.',
  },
  {
    icon: '📦',
    title: 'Individualizações',
    desc: 'Individualização de medidores com toda documentação e suporte técnico.',
  },
  {
    icon: '🔧',
    title: 'Instalações Completas',
    desc: 'Execução de instalações elétricas do início ao fim com mão de obra especializada.',
  },
];

const reviews = [
  {
    name: 'Cliente Google',
    stars: 5,
    text: 'Ótimo prestador de serviço, trabalho bem feito, ótimo atendimento.',
  },
  {
    name: 'D. Cliente',
    stars: 5,
    text: 'Uma experiência excelente, convido a todos a visitar a loja.',
  },
  {
    name: 'D. Cliente',
    stars: 5,
    text: 'Equipe nota 10, preços acessíveis. Recomendo muito! ⚡💡🔌',
  },
];

function Stars({ count }) {
  return (
    <div className="text-amber-300 text-lg tracking-widest">
      {'★'.repeat(count)}
    </div>
  );
}

function BoltDivider({ flip }) {
  return (
    <div
      className={`w-full overflow-hidden leading-0 ${flip ? 'rotate-180' : ''}`}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-14"
      >
        <polygon points="0,0 720,60 1440,0 1440,60 0,60" fill="#F5C800" />
      </svg>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Por que nós', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 px-6 md:px-10 py-3 flex items-center justify-between ${
          scrolled ? 'bg-slate-950/95 border-b border-amber-500/60 shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3 text-2xl font-black tracking-[0.2em] text-amber-300">
          <span className="text-3xl">⚡</span>
          ELÉTRICA RUST
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase font-semibold tracking-[0.2em] text-white transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-950"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-3xl text-amber-300"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-slate-950 border-b border-amber-500/60 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-base font-semibold uppercase tracking-[0.2em] border-b border-slate-800 pb-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-amber-300 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-950"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}

      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-28 text-center md:px-10"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #111 0%, #1c1c00 50%, #111 100%)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5 text-[28rem]">
          ⚡
        </div>

        <span className="relative inline-flex rounded-full bg-amber-300 px-5 py-2 text-xs font-black uppercase tracking-[0.4em] text-slate-950">
          São Paulo • Jardim Campinas
        </span>

        <h1 className="relative mt-8 text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
          ELÉTRICA
          <br />
          <span className="text-amber-300">RUST</span>
        </h1>

        <p className="relative mt-6 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Venda e instalação de caixas de luz e postes.
          <br />
          Materiais elétricos, individualizações e assessoria ENEL.
        </p>

        <p className="relative mt-4 text-amber-300 font-bold tracking-[0.2em]">
          ★★★★★ 97 avaliações no Google — Nota 5.0
        </p>

        <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-amber-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 shadow-[0_20px_60px_rgba(245,200,0,0.25)] transition-transform duration-150 hover:-translate-y-1"
          >
            ⚡ Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-md border border-amber-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300 transition hover:bg-white/5"
          >
            Ver Serviços
          </a>
        </div>

        <div className="relative mt-16 grid gap-6 text-center sm:grid-cols-3">
          {[
            ['97+', 'Avaliações 5 estrelas'],
            ['10+', 'Anos de experiência'],
            ['ENEL', 'Parceiro autorizado'],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-5xl font-black tracking-[0.2em] text-amber-300">{num}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-slate-950 -mb-2">
        <BoltDivider />
      </div>

      <section id="servicos" className="bg-amber-300 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-amber-300">
            O que fazemos
          </span>
          <h2 className="mt-6 text-3xl font-black uppercase tracking-[-0.03em] text-slate-950 md:text-5xl">
            NOSSOS SERVIÇOS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-900 md:text-base">
            Tudo que você precisa em materiais e instalações elétricas em um só lugar.
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl bg-slate-950 p-8 shadow-lg transition-transform duration-200 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-[0.08em] text-amber-300">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-amber-300 -mb-2">
        <BoltDivider flip />
      </div>

      <section id="diferenciais" className="bg-slate-950 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-amber-300 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-950">
              Por que escolher
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.03em] text-white md:text-5xl">
              A ENERGIA CERTA <span className="text-amber-300">PARA SEU PROJETO</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 md:text-base">
              Há mais de 10 anos no mercado paulistano, a Elétrica Rust se especializou em soluções completas para regularização elétrica junto à ENEL. Atendemos desde pequenas residências até grandes empreendimentos com o mesmo padrão de qualidade e agilidade.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-md bg-amber-300 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-400"
            >
              Falar com especialista
            </a>
          </div>

          <div className="grid gap-5">
            {[
              ['⚡', 'Agilidade no atendimento', 'Respondemos rápido e executamos sem enrolação.'],
              ['✅', 'Parceiro ENEL certificado', 'Toda burocracia com a distribuidora resolvida por nós.'],
              ['💰', 'Preços acessíveis', 'Melhores preços da região sem abrir mão da qualidade.'],
              ['🏆', '97 avaliações 5 estrelas', 'Clientes satisfeitos são nossa maior propaganda.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl bg-slate-900 border-l-4 border-amber-300 p-6"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-[0.1em] text-amber-300">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-950 -mb-2">
        <BoltDivider />
      </div>

      <section id="avaliacoes" className="bg-amber-300 px-6 py-20 text-center md:px-10">
        <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-amber-300">
          O que dizem nossos clientes
        </span>
        <h2 className="mt-6 text-3xl font-black uppercase tracking-[-0.03em] text-slate-950 md:text-5xl">
          97 AVALIAÇÕES ★★★★★
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-900 md:text-base">
          Nota 5.0 no Google — Confira o que nossos clientes falam
        </p>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={index} className="rounded-3xl bg-slate-950 p-8 text-left">
              <Stars count={review.stars} />
              <p className="mt-4 text-sm leading-7 text-slate-300 italic">"{review.text}"</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-amber-300">— {review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-amber-300 -mb-2">
        <BoltDivider flip />
      </div>

      <section id="contato" className="bg-slate-950 px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-amber-300 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-950">
              Fale conosco
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.03em] text-white md:text-5xl">
              PRONTO PARA <span className="text-amber-300">LIGAR?</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 md:text-base">
              Entre em contato agora e receba um orçamento gratuito. Atendemos toda a Grande São Paulo com rapidez e qualidade garantida.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(37,211,102,0.25)] transition hover:bg-emerald-400"
            >
              💬 WhatsApp Agora
            </a>
          </div>

          <div className="grid gap-5">
            {[
              ['📞', 'Telefones', [PHONE_MAIN, PHONE_2, PHONE_3]],
              ['📍', 'Endereço', [ADDRESS]],
              ['🕐', 'Horário', ['Seg–Sex: 08h às 18h', 'Sáb: 08h às 13h']],
              ['📸', 'Instagram', [INSTAGRAM]],
            ].map(([icon, label, lines]) => (
              <div
                key={label}
                className="flex gap-4 rounded-3xl bg-slate-900 border-l-4 border-amber-300 p-6"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">{label}</h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-2 text-sm leading-7 text-slate-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-amber-500/50 py-10 text-center text-slate-400">
        <div className="text-amber-300 text-xl font-black tracking-[0.2em]">⚡ ELÉTRICA RUST</div>
        <p className="mt-3 text-sm">
          Vendas e instalação de caixas de luz e postes • Materiais elétricos diversos
        </p>
        <p className="mt-2 text-sm">{ADDRESS} • {PHONE_MAIN}</p>
        <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} Elétrica Rust. Todos os direitos reservados.</p>
      </footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1"
        title="Falar no WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
