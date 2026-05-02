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
    status: 'Online Now', greeting: "Hi, I'm", article: 'a', developer: 'Developer.',
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
    cards: [
      { title: 'Backend Development', description: 'Robust REST APIs with C# and .NET, serverless AWS architecture (Lambda, API Gateway, S3), and clean architecture patterns — DDD and SOLID. Test coverage above 85%.' },
      { title: 'Frontend Development', description: 'High-performance SPAs with Angular and React. Scalable component architecture, TypeScript, and engaging, accessible user experiences.' },
      { title: 'Cloud & DevOps', description: 'CI/CD pipelines, Docker containerization, and cloud deployment on AWS and Azure. Reliable infrastructure for scalable, production-ready systems.' },
    ],
  },
  experience: {
    title: 'My Experience', current: 'Current', education: 'Education',
    degree: "Bachelor's in Software Engineering",
    present: 'Present', remote: 'Remote',
    jobs: [
      {
        bullets: [
          'Developing new screens and flows on the platform using ASP.NET MVC, ensuring continuous improvement of system functionality and user experience.',
          'Leading the migration of legacy ASP.NET MVC projects to Angular v20, modernizing the architecture, separating responsibilities, and delivering improvements in performance, maintainability, and scalability.',
        ],
      },
      {
        bullets: [
          'Backend: Designed and implemented robust REST APIs using C# (.NET/ASP.NET) with serverless AWS architecture (Lambda, API Gateway, S3). Increased test coverage to 85%+ using nUnit/Selenium and established CI/CD pipelines.',
          'Frontend: Led end-to-end development of an SPA platform using Angular and TypeScript, delivering high-performance and highly usable interfaces for students.',
        ],
      },
    ],
  },
  projects: {
    title: 'Featured Projects', visit: 'Visit site →', github: 'GitHub →',
    items: [
      { description: 'A Dle-style guessing game inspired by Loldle, using the public Rick and Morty API. Features an Angular SPA with a modular .NET backend following DDD/SOLID principles, JWT authentication, PostgreSQL storage, and Docker deployment.' },
      // { description: 'Open-source platform for technical and English assessment (ExamCreator). Wizard-style flow with browser audio recording and real-time AI conversation. Uses SignalR for live communication and the OpenAI API for AI-based assessments.' },
    ],
  },
  footer: {
    label: "05 / Let's connect", heading: 'Got a project?', highlight: "Let's build it.",
    subtitle: "I'm open to new freelance projects, and collaborations. Drop me a message!",
    copyBtn: 'Copy email', copied: '✓ Copied!',
    built: 'Built with Angular & TailwindCSS', rights: '© 2026 Davi Luquini. All rights reserved.',
  },
};

const pt: typeof en = {
  nav: { about: 'Sobre', services: 'Serviços', experience: 'Experiência', projects: 'Projetos', talk: 'Fale comigo →' },
  hero: {
    status: 'Online Agora', greeting: 'Olá, sou', article: 'um', developer: 'Developer.',
    description: '3+ anos construindo aplicações web escaláveis com C#, .NET, Java, Angular e React. Moro em Salvador, Brasil.',
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
    cards: [
      { title: 'Desenvolvimento Backend', description: 'APIs REST robustas com C# e .NET, arquitetura serverless na AWS (Lambda, API Gateway, S3) e padrões de arquitetura limpa — DDD e SOLID. Cobertura de testes acima de 85%.' },
      { title: 'Desenvolvimento Frontend', description: 'SPAs de alta performance com Angular e React. Arquitetura de componentes escalável, TypeScript e experiências de usuário envolventes e acessíveis.' },
      { title: 'Cloud & DevOps', description: 'Pipelines CI/CD, containerização com Docker e deploy na AWS e Azure. Infraestrutura confiável para sistemas escaláveis e prontos para produção.' },
    ],
  },
  experience: {
    title: 'Minha Experiência', current: 'Atual', education: 'Formação',
    degree: 'Bacharelado em Engenharia de Software',
    present: 'Presente', remote: 'Remoto',
    jobs: [
      {
        bullets: [
          'Desenvolvendo novas telas e fluxos na plataforma utilizando ASP.NET MVC, garantindo melhoria contínua da funcionalidade e experiência do usuário.',
          'Liderando a migração de projetos legados em ASP.NET MVC para Angular v20, modernizando a arquitetura, separando responsabilidades e entregando melhorias em performance, manutenibilidade e escalabilidade.',
        ],
      },
      {
        bullets: [
          'Backend: Projetei e implementei APIs REST robustas com C# (.NET/ASP.NET) e arquitetura serverless na AWS (Lambda, API Gateway, S3). Aumentei a cobertura de testes para 85%+ com nUnit/Selenium e estabeleci pipelines de CI/CD.',
          'Frontend: Liderei o desenvolvimento end-to-end de uma plataforma SPA com Angular e TypeScript, entregando interfaces de alta performance e alta usabilidade para alunos.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projetos em Destaque', visit: 'Ver site →', github: 'GitHub →',
    items: [
      { description: 'Jogo de adivinhação estilo Dle inspirado no Loldle, utilizando a API pública de Rick and Morty. Conta com um SPA em Angular e backend modular em .NET seguindo princípios DDD/SOLID, autenticação JWT, persistência em PostgreSQL e deploy com Docker.' },
      { description: 'Este projeto é um template open-source de Landing Page e Pricing Page criado com foco em alta conversão, voltado para um SaaS de criação de thumbnails com IA. O projeto tem a Landing Page e a Pricing Page prontas para uso.' },
    ],
  },
  footer: {
    label: '05 / Vamos conectar', heading: 'Tem um projeto?', highlight: 'Vamos construir.',
    subtitle: 'Estou aberto a novos projetos freelance e colaborações. Manda uma mensagem!',
    copyBtn: 'Copiar email', copied: '✓ Copiado!',
    built: 'Feito com Angular & TailwindCSS', rights: '© 2026 Davi Luquini. Todos os direitos reservados.',
  },
};
