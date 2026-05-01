import { Injectable, computed, signal } from '@angular/core';

export type Lang = 'en' | 'pt';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('en');
  readonly t = computed(() => (this.lang() === 'en' ? en : pt));

  toggle(): void {
    this.lang.update(l => (l === 'en' ? 'pt' : 'en'));
  }
}

const en = {
  nav: { about: 'About', services: 'Services', experience: 'Experience', projects: 'Projects', talk: "Let's talk →" },
  hero: {
    status: 'Online Now', greeting: "Hi, I'm", developer: 'Developer.',
    description: '3+ years building scalable web applications using C#, .NET, Java, Angular, and React. Based in Salvador, Brazil.',
    ctaProjects: 'See my projects →', ctaContact: 'Contact me',
  },
  about: {
    title: 'About Me',
    bio1: "I'm a Fullstack Developer with 3+ years of professional experience building scalable web applications. I work across the full stack — from robust REST APIs, structuring of databases to support scalability to high-performance front-end interfaces.",
    bio2: "Pursuing a Bachelor's in Software Engineering at the Catholic University of Salvador (2023–2027).",
    aiLabel: 'AI-Enhanced Workflow',
    aiText: 'I use Claude Code, Cursor, and Codex as daily tools — delivering production-quality code faster without compromising on architecture or best practices.',
    yearsLabel: 'Years exp.', projectsLabel: 'Projects', linesLabel: 'Lines of Code', stackTitle: 'Tech Stack',
  },
  services: {
    title: 'My Services', ctaTitle: "Let's work together",
    ctaDesc: "Got a project in mind? I'd love to help you build something great — from API design to pixel-perfect UI.",
    ctaBtn: 'Contact me →',
  },
  experience: { title: 'My Experience', current: 'Current', education: 'Education', degree: "Bachelor's in Software Engineering" },
  projects: { title: 'Featured Projects', visit: 'Visit site →', github: 'GitHub →' },
  footer: {
    label: "05 / Let's connect", heading: 'Got a project?', highlight: "Let's build it.",
    subtitle: "I'm open to new opportunities, freelance projects, and collaborations. Drop me a message!",
    copyBtn: 'Copy email', copied: '✓ Copied!',
    built: 'Built with Angular & TailwindCSS', rights: '© 2026 Davi Luquini. All rights reserved.',
  },
};

const pt: typeof en = {
  nav: { about: 'Sobre', services: 'Serviços', experience: 'Experiência', projects: 'Projetos', talk: 'Fale comigo →' },
  hero: {
    status: 'Online Agora', greeting: 'Olá, sou', developer: 'Desenvolvedor.',
    description: '3+ anos construindo aplicações web escaláveis com C#, .NET, Java, Angular e React. Baseado em Salvador, Brasil.',
    ctaProjects: 'Ver projetos →', ctaContact: 'Fale comigo',
  },
  about: {
    title: 'Sobre Mim',
    bio1: 'Sou um Desenvolvedor Fullstack com mais de 3 anos de experiência profissional construindo aplicações web escaláveis. Atuo em toda a stack — de APIs REST robustas e estruturação de banco de dados até interfaces front-end de alta performance.',
    bio2: 'Cursando Bacharelado em Engenharia de Software na Universidade Católica do Salvador (2023–2027).',
    aiLabel: 'Workflow com IA',
    aiText: 'Utilizo Claude Code, Cursor e Codex como ferramentas do dia a dia — entregando código de qualidade mais rápido sem abrir mão de arquitetura ou boas práticas.',
    yearsLabel: 'Anos exp.', projectsLabel: 'Projetos', linesLabel: 'Linhas de Código', stackTitle: 'Stack',
  },
  services: {
    title: 'Serviços', ctaTitle: 'Vamos trabalhar juntos',
    ctaDesc: 'Tem um projeto em mente? Adoraria ajudar a construir algo incrível — do design da API à UI pixel-perfect.',
    ctaBtn: 'Fale comigo →',
  },
  experience: { title: 'Minha Experiência', current: 'Atual', education: 'Formação', degree: 'Bacharelado em Engenharia de Software' },
  projects: { title: 'Projetos em Destaque', visit: 'Ver site →', github: 'GitHub →' },
  footer: {
    label: '05 / Vamos conectar', heading: 'Tem um projeto?', highlight: 'Vamos construir.',
    subtitle: 'Estou aberto a novas oportunidades, projetos freelance e colaborações. Manda uma mensagem!',
    copyBtn: 'Copiar email', copied: '✓ Copiado!',
    built: 'Feito com Angular & TailwindCSS', rights: '© 2026 Davi Luquini. Todos os direitos reservados.',
  },
};
