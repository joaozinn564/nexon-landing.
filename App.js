import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const whatsappNumber = "+5549933801680";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navigation */}
      <header className="w-full border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
              NX
            </div>
            <div>
              <h1 className="text-lg font-semibold">Nexon Studio</h1>
              <p className="text-xs text-slate-500">Seu negócio online começa aqui.</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-indigo-600">Início</a>
            <a href="#about" className="hover:text-indigo-600">Sobre</a>
            <a href="#services" className="hover:text-indigo-600">Serviços</a>
            <a href="#contact" className="hover:text-indigo-600">Contato</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow-sm hover:brightness-95"
            >
              Conversar no WhatsApp
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Sites que vendem e impressionam</h2>
            <p className="mt-6 text-lg text-slate-600">Na Nexon Studio criamos landing pages e sites profissionais, minimalistas e focados em conversão — prontos para mostrar ao cliente e converter visitantes em clientes.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:brightness-95"
              >
                Solicitar orçamento
              </a>

              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
                Nossos serviços
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-500">
              <div className="p-3 bg-slate-50 rounded">Entrega rápida</div>
              <div className="p-3 bg-slate-50 rounded">Design minimalista</div>
              <div className="p-3 bg-slate-50 rounded">SEO básico</div>
              <div className="p-3 bg-slate-50 rounded">Suporte e manutenção</div>
            </div>
          </motion.section>

          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-400 font-semibold"
          >
            Hero (imagem ilustrativa removida)
          </motion.figure>
        </div>

        {/* About */}
        <section id="about" className="mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Sobre a Nexon Studio</h3>
              <p className="mt-4 text-slate-600">Somos uma agência focada em criar experiências digitais minimalistas e eficientes. Atuamos desde landing pages de alta conversão até sites institucionais e lojas virtuais simples — tudo pensado pra gerar resultados reais.</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="p-3 bg-slate-50 rounded">Processo ágil de entrega</li>
                <li className="p-3 bg-slate-50 rounded">Design responsivo</li>
                <li className="p-3 bg-slate-50 rounded">SEO básico e performance</li>
                <li className="p-3 bg-slate-50 rounded">Suporte mensal opcional</li>
              </ul>
            </div>

            <div className="hidden md:flex h-64 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 font-semibold">
              Sobre (imagem removida)
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20">
          <h3 className="text-2xl font-semibold">Serviços</h3>
          <p className="mt-2 text-slate-600">Escolha o que seu projeto precisa — pacotes claros e opção de entrega rápida.</p>

          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 border rounded-lg text-center">
              <h4 className="font-semibold">Landing Page (Venda)</h4>
              <div className="mt-3 h-32 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-semibold">Imagem removida</div>
              <p className="mt-3 text-sm text-slate-600">Design minimalista, seção de benefícios, prova social e CTA otimizado. Ideal para lançar produtos e serviços.</p>
            </article>

            <article className="p-6 border rounded-lg text-center">
              <h4 className="font-semibold">Site Institucional</h4>
              <div className="mt-3 h-32 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-semibold">Imagem removida</div>
              <p className="mt-3 text-sm text-slate-600">Páginas essenciais (Início, Sobre, Serviços, Contato) com foco em profissionalismo e presença online.</p>
            </article>

            <article className="p-6 border rounded-lg text-center">
              <h4 className="font-semibold">Loja Virtual Simples</h4>
              <div className="mt-3 h-32 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-semibold">Imagem removida</div>
              <p className="mt-3 text-sm text-slate-600">Integração com meios de pagamento, catálogo simples e checkout funcional.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
