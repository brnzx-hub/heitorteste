import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowDown, Check, X, ChevronDown, ChevronUp, PlayCircle, BookOpen, RefreshCw, Smartphone, MessageCircle, AlertTriangle, BrainCircuit, Target, Zap, ShieldCheck, Mail, Download, CheckCircle } from 'lucide-react';
import { CircularTestimonials } from './components/ui/circular-testimonials';

const testimonials = [
  {
    quote: "Antes eu estava perdida, sem saber como me posicionar. Consegui extrair o melhor de mim com essa IA. Agora sei como me posicionar, quais conteúdos criar e como falar com meu público da forma certa — e que converte.",
    name: "Aluna M.A.E",
    designation: "Mentoria",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote: "O M.A.E me fez parar para pensar com profundidade sobre quem eu sou. Não é uma ferramenta rasa. O resultado compensa: clareza, coerência e um material riquíssimo.",
    name: "Mentorado",
    designation: "Mentoria M.A.E",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1368&auto=format&fit=crop"
  },
  {
    quote: "De 400k para 7 milhões de visualizações em 1 mês. De 128k para 154k seguidores em 2 meses. Essa ferramenta mudou o jogo para mim e me deu a clareza que eu precisava!",
    name: "Criador de Conteúdo",
    designation: "Aluno M.A.E",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1368&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans text-[#000000] bg-[#FFFFFF] selection:bg-[#636B2F] selection:text-[#FFFFFF]">
      
      {/* SEÇÃO 1: HEADLINE + SUBHEADLINE */}
      <section className="bg-white pt-12 px-4 relative overflow-hidden flex flex-col items-center border-b border-[#D3D3D3]">
        {/* Watermark background */}
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/4 opacity-[0.03] pointer-events-none">
          <BrainCircuit className="w-[800px] h-[800px] text-[#000000]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center">
          
          {/* Header / Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 bg-[#000000] rounded-full flex items-center justify-center overflow-hidden shadow-md">
              <BrainCircuit className="w-8 h-8 text-[#FFFFFF]" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-light text-[#000000] leading-none tracking-tight">Extrator de <span className="font-semibold">Essência</span></span>
              <span className="text-sm text-[#878787] leading-tight mt-1">Agente de Posicionamento</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#000000] leading-tight mb-8 text-center max-w-4xl mx-auto">
            Use esse agente para, <span className="text-[#636B2F] font-bold">criar um posicionamento único e verdadeiro e gerar conteúdos que conectam com as pessoas certas!</span><br/> 
          </h1>
          
          <div className="flex flex-col gap-3 mb-0 max-w-3xl mx-auto w-full items-center z-20 relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem sente que o seu conteúdo está genérico e não sabe como mudar</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem já tentou outras IAs e recebeu textos desalinhados</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem quer parar de ficar para trás enquanto outros crescem com clareza e essência</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="-mt-12 md:-mt-24 w-full max-w-3xl mx-auto flex justify-center relative z-10">
            <img 
              src="https://i.imgur.com/yjwWGi9.png" 
              alt="Extrator de Essência" 
              className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px] object-bottom"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: NÚMEROS E DEPOIMENTOS */}
      <section className="py-12 md:py-20 bg-[#FFFFFF] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000000]">
            Resultados reais de quem já usou o <span className="text-[#636B2F]">Extrator de Essência</span>
          </h2>
          
          <div className="bg-[#636B2F] p-8 md:p-16 rounded-3xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative shadow-lg">
            <div
              className="items-center justify-center relative flex w-full"
              style={{ maxWidth: "1456px" }}
            >
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                colors={{
                  name: "#FFFFFF",
                  designation: "#D3D3D3",
                  testimony: "#FFFFFF",
                  arrowBackground: "#FFFFFF",
                  arrowForeground: "#000000",
                  arrowHoverBackground: "#EAE0C8",
                }}
                fontSizes={{
                  name: "24px",
                  designation: "16px",
                  quote: "18px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: O PROBLEMA */}
      <section className="py-12 md:py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">
            O mercado te ensinou a criar conteúdo de um jeito.
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            Fórmulas prontas. Estruturas que 'funcionam'. Técnicas que 'vendem'.
          </p>
          
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 mb-4 font-semibold">Mas aí você segue tudo isso à risca e ainda assim...</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-red-700">
                <X className="w-5 h-5 shrink-0" /> Seu conteúdo não conecta.
              </li>
              <li className="flex items-center gap-3 text-red-700">
                <X className="w-5 h-5 shrink-0" /> Seu posicionamento não diferencia.
              </li>
              <li className="flex items-center gap-3 text-red-700">
                <X className="w-5 h-5 shrink-0" /> Seu produto não vende como deveria.
              </li>
            </ul>
            <p className="text-gray-700 italic">E você fica se perguntando: 'Por que isso não está funcionando?'</p>
          </div>

          <div className="inline-block bg-[#FFFFFF] text-black px-8 py-4 rounded-xl text-xl font-bold shadow-xl">
            A resposta é simples: <span className="text-[#636B2F]">falta essência.</span>
          </div>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Você está criando do lado de fora para dentro. E o mercado já está cheio disso.
          </p>
        </div>
      </section>

      {/* SEÇÃO 4: PERGUNTA PROVOCADORA */}
      <section className="py-12 md:py-20 bg-[#636B2F] text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            E se existisse um caminho diferente?
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Um agente que não te dá mais fórmulas, mas que te ajuda a descobrir sua essência e a transformar isso em um posicionamento irresistível.
          </p>
          <p className="text-lg md:text-xl font-medium bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            Onde tudo que você cria (posicionamento, produto, comunicação) flui naturalmente porque está alinhado com quem você é de verdade.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ArrowDown className="w-10 h-10 animate-bounce text-white" />
        </div>
      </section>

      {/* SEÇÃO 5: SOLUÇÃO EM 3 PASSOS */}
      <section className="py-12 md:py-24 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Como o Extrator de Essência funciona?
            </motion.h2>
            <p className="text-xl text-gray-600">Ter um agente que extrai sua essência e cria um mapa completo do seu movimento em apenas 3 passos.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#636B2F] before:to-transparent">
            
            {/* Passo 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">Se conecte com a Sua Essência</h3>
                <p className="text-gray-600">Você acessa o Extrator de Essência e através de perguntas ele te guia para descobrir quem você é de verdade, sem fórmulas prontas, sem máscaras.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">Mapeie Seu Movimento</h3>
                <p className="text-gray-600">O agente cria um mapa completo mostrando como sua essência se reflete em tudo: posicionamento, comunicação, conteúdo, produto, funis.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">Comece a Criar com Clareza</h3>
                <p className="text-gray-600">Agora você sabe exatamente o que criar, como falar e por quê. Tudo alinhado com sua verdade.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: BENEFÍCIOS */}
      <section className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f172a]">
            Com o <span className="text-[#636B2F]">Extrator de Essência</span> você vai conseguir:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Criar um posicionamento único que o mercado não consegue ignorar",
              "Gerar conteúdos que conectam com as pessoas certas",
              "Estruturar produtos com alma, não apenas com técnica",
              "Se conectar com a sua essência e perceber como ela reflete em tudo que você cria",
              "Falar com clareza e autenticidade em todas as suas comunicações",
              "Crescer sem se perder no processo",
              "Ter um norte claro para todas as suas decisões estratégicas",
              "Entender como sua essência reflete no posicionamento, comunicação e conteúdo",
              "Parar de copiar fórmulas e começar a criar sua própria verdade"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: TUDO QUE VOCÊ VAI RECEBER */}
      <section className="py-12 md:py-24 bg-[#0f172a] text-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Tudo que você vai receber hoje:
          </h2>

          <div className="space-y-8">
            {/* Item 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <BrainCircuit className="w-16 h-16 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Acesso Vitalício ao Extrator de Essência</h3>
                <p className="text-gray-300 mb-2 font-medium text-sm uppercase tracking-wider text-cyan-200/70">Ilimitado e sem mensalidade</p>
                <p className="text-gray-400">O agente que extrai sua verdade, cria um mapa completo do seu movimento e mostra exatamente como isso reflete no seu posicionamento, comunicação, e produtos.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Treinamento: Potencializando o seu uso</h3>
                <p className="text-gray-400">Uma aula rápida, completa e direto ao ponto, mostrando como usar o Extrator de Essência para obter seu melhor resultado.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <RefreshCw className="w-16 h-16 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-3">Atualizações Contínuas</h3>
                <p className="text-gray-400">Seu agente evolui junto com a tecnologia e você recebe todas as atualizações sem pagar nada a mais.</p>
              </div>
            </div>

            {/* Bônus */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Super Bônus</div>
              <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3">Agente Criador de Conteúdo</h3>
                <p className="text-gray-300">Em poucos minutos, crie conteúdos 100% alinhados com sua essência, que conectam com as pessoas certas e convertem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: PARA QUEM É */}
      <section className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f172a]">
            O Extrator de Essência é para você que:
          </h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <ul className="space-y-4 mb-8">
              {[
                "Tem muito conteúdo, mas sente que falta clareza interna.",
                "Sua comunicação perdeu força e parece igual a todo mundo.",
                "Você se confunde e não consegue manter constância na produção de conteúdo.",
                "Tem muito para dizer, mas não consegue dar forma.",
                "Não sabe simplificar sem se sentir raso.",
                "Seu posicionamento não fica de pé.",
                "Cresceu, mas se perdeu no caminho e se sente drenado.",
                "Trava porque não quer parecer igual a todo mundo, mas também não sabe por onde começar.",
                "Está cansado de receita pronta e quer clareza aplicada e verdade."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#00C950]/20 p-1 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-[#00C950]" />
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-[#636B2F]/5 border border-[#636B2F]/20 rounded-xl p-6 text-center">
              <p className="text-xl font-semibold text-[#4A5023]">
                Enfim... Se você quer parar de ter muito conteúdo e pouca clareza — e começar a comunicar com força e constância... <br/>
                <span className="text-[#636B2F] font-bold mt-2 block">O Extrator de Essência é para você!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 & 10: RECAPITULAÇÃO E OFERTA */}
      <section className="py-12 md:py-24 bg-gray-50 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-[#0f172a] p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide text-cyan-400">Recapitulando...</h2>
              <p className="text-lg text-gray-300">Veja tudo que você vai receber hoje!</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Acesso Vitalício ao Extrator de Essência</span>
                  </div>
                  <span className="text-gray-400 line-through">R$ 297,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Treinamento: Potencializando o seu uso</span>
                  </div>
                  <span className="text-gray-400 line-through">R$ 197,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Atualizações Contínuas</span>
                  </div>
                  <span className="text-gray-400 line-through">R$ 197,00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700 font-medium">Super Bônus: Agente Criador de Conteúdo</span>
                  </div>
                  <span className="text-gray-400 line-through">R$ 197,00</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-gray-500 mb-2">Tudo isso deveria custar: <span className="line-through font-semibold">R$ 888,00</span></p>
                <p className="text-sm text-gray-600 mb-6">Mas hoje você pode ter acesso vitalício ao Extrator de Essência junto com todos os bônus por um valor muito mais acessível.</p>
                
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <div className="text-sm text-green-800 font-semibold uppercase tracking-wider mb-2">Oferta Especial</div>
                  <div className="flex items-baseline justify-center gap-1 text-green-600">
                    <span className="text-2xl font-bold">12x</span>
                    <span className="text-6xl font-black tracking-tighter">R$6,40</span>
                  </div>
                  <div className="text-green-700 mt-2 font-medium">ou R$ 63,50 à vista</div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-5 px-8 rounded-xl shadow-lg shadow-green-500/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6" />
                  SIM, QUERO APROVEITAR A OFERTA
                </button>
              </div>

              <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
                <div className="font-bold text-gray-700">ACESSO ILIMITADO — VOCÊ SÓ PAGA UMA ÚNICA VEZ!!!</div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra 100% segura</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso imediato</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> Suporte online</span>
                </div>
                <div className="mt-2 text-xs">Sem mensalidade. Sem surpresas. Sem compromisso futuro.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: COMO FUNCIONA */}
      <section className="py-12 md:py-20 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-12">
            Compre agora e receba seu acesso no e-mail <span className="text-green-500">imediatamente!</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0f172a] uppercase text-sm tracking-wider">Acesse seu e-mail</h3>
              <p className="text-gray-600 text-sm">Assim que finalizar sua compra, você vai receber seu acesso no email com tudo pronto.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0f172a] uppercase text-sm tracking-wider">Acesse o Extrator</h3>
              <p className="text-gray-600 text-sm">Você entra no agente, responde as perguntas estratégicas e deixa ele trabalhar para extrair sua essência.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0f172a] uppercase text-sm tracking-wider">Tudo Pronto!</h3>
              <p className="text-gray-600 text-sm">Você recebe seu mapa completo da criação do seu movimento. Agora sabe exatamente como sua essência reflete no posicionamento, comunicação, conteúdo e produto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: AUTORIDADE */}
      <section className="py-24 bg-[#0f172a] text-white px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500/30 shrink-0 bg-gray-800">
            <img src="https://picsum.photos/seed/heitor/400/400" alt="Heitor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Heitor</h2>
            <p className="text-cyan-400 font-medium mb-6 uppercase tracking-wider text-sm">Criador do Extrator de Essência M.A.E.</p>
            <div className="space-y-4 text-gray-300">
              <p>
                Heitor é mentor, estrategista e arquiteto de movimento com 14+ anos de experiência nos bastidores do digital.
              </p>
              <p>
                Ele trabalhou com grandes experts, empresários e líderes que queriam crescer com verdade, não com fórmulas prontas e viu de perto o que funciona e o que não funciona quando falta essência.
              </p>
              <p>
                Por isso codificou tudo isso em um método que seus mentorados usam e amam: o M.A.E. Seus mentorados já saíram de 400k para 7 milhões de visualizações. Encontraram propósito. Descobriram sua essência.
              </p>
              <p className="font-semibold text-white">
                Agora ele quer disponibilizar esse acesso para quem está pronto para crescer no digital com clareza, mantendo sua própria essência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13: DICOTOMIA DE ESCOLHA */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-16">
            Agora você tem 2 escolhas:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Divisor "OU" para Desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center font-black text-2xl text-gray-300 shadow-sm z-10">
              OU
            </div>

            {/* Opção 1 */}
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 uppercase tracking-wider text-sm">Opção 1: Ficar Para Trás</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ignorar tudo isso. Continuar criando conteúdo que não te diferencia. Continuar copiando fórmulas prontas que não refletem quem você é. Continuar crescendo, mas sem se sentir alinhado. Continuar vendo outros crescerem com clareza enquanto você fica preso no caos. Continuar vendo o mercado passar enquanto você fica preso em fórmulas que não funcionam para você.
              </p>
            </div>

            {/* Divisor "OU" para Mobile */}
            <div className="md:hidden flex justify-center py-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-xl text-gray-300 shadow-sm">
                OU
              </div>
            </div>

            {/* Opção 2 */}
            <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg relative overflow-hidden transform md:scale-105 z-0">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 uppercase tracking-wider text-sm">Opção 2: Começar Agora com Essência</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Se conectar com a sua essência agora. Criar um mapa completo do seu movimento. Começar a gerar conteúdos que conectam porque estão alinhados com você. Crescer de forma verdadeira, sustentável e congruente, sem se perder no processo. Finalmente saber exatamente o que criar e por quê criar.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-xl font-medium text-[#0f172a] mb-2">A escolha é sua. Mas lembre-se:</p>
            <p className="text-xl font-bold text-red-600 mb-4">A opção 2 é a mais inteligente e é a que você precisa.</p>
            <p className="text-gray-500">Cada dia que passa sem agir é mais um dia desperdiçando o seu tempo.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 14: OFERTA FINAL */}
      <section className="py-12 md:py-20 bg-[#0f172a] text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1 text-green-400 mb-2">
              <span className="text-3xl font-bold">12x</span>
              <span className="text-7xl font-black tracking-tighter">R$6,40</span>
            </div>
            <div className="text-gray-300 text-xl">ou R$ 63,50 à vista</div>
          </div>

          <button className="w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-5 px-8 rounded-xl shadow-lg shadow-green-500/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2 mb-8">
            <Zap className="w-6 h-6" />
            SIM, QUERO APROVEITAR A OFERTA
          </button>

          <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
            <div className="font-bold text-white uppercase tracking-wider">ACESSO ILIMITADO — VOCÊ SÓ PAGA UMA ÚNICA VEZ!!!</div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra 100% segura</span>
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> Suporte online</span>
            </div>
            <div className="mt-2 text-xs">Sem mensalidade. Sem surpresas. Sem compromisso futuro.</div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 15: FAQ */}
      <FAQSection />

      {/* SEÇÃO 16: ÚLTIMA CHAMADA */}
      <section className="py-12 md:py-24 bg-cyan-600 text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Agora você já sabe tudo!</h2>
          
          <div className="space-y-4 text-lg md:text-xl font-medium mb-12 text-cyan-50">
            <p>Você sabe que conteúdo genérico não funciona.</p>
            <p>Você sabe que fórmulas prontas não refletem quem você é.</p>
            <p>Você sabe que crescer sem essência, é crescer o seu vazio.</p>
            <p className="text-white font-bold mt-8 text-2xl">E agora você tem a solução: o Extrator de Essência.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-12 text-left max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 shrink-0" />
                <span>Não é promessa vazia (Meus mentorados já comprovaram)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 shrink-0" />
                <span>Não é fórmula genérica. É especializado em extrair sua verdade.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 shrink-0" />
                <span>Não tem mensalidade cara. É um único investimento super acessível.</span>
              </li>
            </ul>
          </div>

          <p className="text-2xl font-bold mb-8">A pergunta agora é: você vai esperar mais quanto tempo para se conectar com sua essência?</p>
          
          <button className="bg-white text-cyan-700 hover:bg-gray-50 text-xl font-bold py-5 px-10 rounded-xl shadow-xl transform transition hover:-translate-y-1">
            COMPRE AGORA E COMECE HOJE MESMO
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-gray-500 py-8 text-center text-sm px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BrainCircuit className="w-5 h-5 text-gray-600" />
            <span className="font-bold text-gray-400">Extrator de Essência</span>
          </div>
          <p className="mb-4">© {new Date().getFullYear()} | Todos os Direitos Reservados</p>
          <p className="text-xs max-w-2xl mx-auto opacity-60">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs">
            <a href="#" className="hover:text-gray-300 transition">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente FAQ
function FAQSection() {
  const faqs = [
    {
      question: "O Extrator de Essência substitui o ChatGPT?",
      answer: "Não. O Extrator de Essência usa tecnologia de IA, mas é treinado especificamente para extrair sua essência e criar um mapa do seu movimento. Ele não é genérico. Ele é especializado em ajudar você a se conectar com quem você é de verdade."
    },
    {
      question: "Eu preciso pagar mensalidade?",
      answer: "Não. Você paga apenas uma única vez (R$ 63,50 à vista ou 12x R$ 6,40) e tem acesso vitalício. Sem mensalidade. Sem surpresas. Sem compromisso futuro."
    },
    {
      question: "Funciona para mim?",
      answer: "O Extrator de Essência funciona para qualquer pessoa que quer crescer com clareza e verdade. Se você cria conteúdo, produtos ou serviços e quer saber como sua essência reflete em tudo isso, funciona para você."
    },
    {
      question: "Eu não sei usar IA. O treinamento é fácil?",
      answer: "Sim. O treinamento é rápido, completo e direto ao ponto. Você não precisa ser expert em IA. Basta seguir os passos e deixar o agente trabalhar."
    },
    {
      question: "Em quanto tempo eu vejo resultado?",
      answer: "No mesmo instante que você terminar de responder as perguntas! Você recebe seu mapa completo e a partir daí, você já tem clareza para criar."
    },
    {
      question: "Tem garantia?",
      answer: "Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu investimento sem burocracia."
    }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f172a]">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-[#0f172a] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}

