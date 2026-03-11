import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle2, ArrowDown, Check, X, ChevronDown, ChevronUp, CirclePlay as PlayCircle, BookOpen, RefreshCw, Smartphone, MessageCircle, TriangleAlert as AlertTriangle, BrainCircuit, Target, Zap, ShieldCheck, Mail, Download, CircleCheck as CheckCircle, Infinity, Monitor, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-[#000000] bg-[#FFFFFF] selection:bg-[#636B2F] selection:text-[#FFFFFF] overflow-x-hidden">

      {/* SEÇÃO 1: HEADLINE + SUBHEADLINE */}
      <section className="bg-white pt-12 px-4 relative overflow-hidden flex flex-col items-center">
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
              <span className="text-2xl font-light text-[#000000] leading-none tracking-tight">Extrator de <span className="font-semibold">Essênc<span style={{ color: '#636B2F' }}><strong>IA</strong></span></span></span>
              <span className="text-sm text-[#878787] leading-tight mt-1">Torne seu posicionamento único</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#000000] leading-tight mb-4 text-center max-w-4xl mx-auto">
            O agente que transforma o que existe dentro de você em <span className="font-bold" style={{ color: '#636B2F' }}>posicionamento claro</span> e <span className="font-bold" style={{ color: '#636B2F' }}>conteúdos únicos</span>.
          </h1>

          <p className="text-xl md:text-2xl text-[#000000] text-center mb-8 max-w-3xl mx-auto">
            Transforme sua confusão mental em uma mensagem forte e pare de criar conteúdos que parecem iguais aos de todo mundo.
          </p>

          <div className="flex flex-col gap-3 mb-16 md:mb-8 max-w-3xl mx-auto w-full items-center z-20 relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem sente que o seu conteúdo está genérico e não sabe como mudar.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem já tentou outras IAs e recebeu textos desalinhados.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem tem muito para dizer, mas trava na hora de comunicar.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#00C950] shrink-0" strokeWidth={4} />
                <span className="text-lg md:text-xl text-[#000000] font-medium">Para quem quer clareza do que dizer sem copiar fórmulas mágicas.</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-3xl mx-auto flex justify-center relative z-10 -mb-16 md:-mb-24">
            <img
              src="https://i.imgur.com/y6GTyWd.jpeg"
              alt="Comparação: Sem clareza vs Com Extrator"
              className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px] object-bottom"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: DEPOIMENTOS SELECIONADOS */}
      <section className="py-24 bg-[#FAFAF9] px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#000000]"
          >
            Resultados reais de quem já usou o <span style={{ color: '#636B2F' }}>Extrator de Essênc<strong>IA</strong></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'https://i.imgur.com/iIpYBmM.jpeg',
              'https://i.imgur.com/yh0Ebv1.jpeg',
              'https://i.imgur.com/dEQ2KDa.jpeg',
              'https://i.imgur.com/9WjS54A.png'
            ].map((imgUrl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl shadow-lg overflow-hidden transition-transform duration-300"
              >
                <img
                  src={imgUrl}
                  alt={`Depoimento ${idx + 1}`}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: O PROBLEMA */}
      <section className="py-8 md:py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a]">
            O Mercado te ensinou a criar conteúdo começando pelo lugar errado.
          </h2>

          <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
            Você está criando do lado de fora para dentro.
          </p>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-red-700">
                <X className="w-5 h-5 shrink-0" /> Seu conteúdo parece igual ao de todo mundo.
              </li>
              <li className="flex items-center gap-3 text-red-700">
                <X className="w-5 h-5 shrink-0" /> Seu posicionamento não se sustenta.
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
        </div>
      </section>

      {/* SEÇÃO 4: IMAGEM */}
      <section className="py-8 md:py-16 bg-white px-4">
        <div className="max-w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#0f172a]">
            E se existisse um caminho diferente?
          </h2>
          <img
            src="https://i.imgur.com/PP5wFYf.jpeg"
            alt="E se existisse um caminho diferente?"
            className="w-full object-contain md:max-w-2xl md:mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* SEÇÃO 5: SOLUÇÃO EM 3 PASSOS */}
      <section className="py-8 md:py-16 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
            >
              Foi exatamente para responder essas perguntas que o Extrator de Essênc<strong style={{ color: '#636B2F' }}>IA</strong> foi criado.
            </motion.h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">Esse agente extrai a sua essência e cria o mapa completo do seu movimento em apenas três passos.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#636B2F] before:to-transparent">

            {/* Passo 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">Acessar sua Essência</h3>
                <p className="text-gray-600">Você entra no Extrator de Essência e responde perguntas que organizam o que está confuso na sua cabeça. Ideias, crenças, visão estratégica e experiências começam a ganhar forma, sem fórmulas prontas e sem precisar copiar ninguém.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">O Agente Cria Seu Mapa de Movimento</h3>
                <p className="text-gray-600">Com base nas suas respostas, o agente organiza tudo e cria um mapa claro mostrando: seu posicionamento, sua linha de mensagem, os temas do seu conteúdo, a direção dos seus produtos. Pela primeira vez, tudo passa a fazer sentido.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#636B2F] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#636B2F] mb-2">Crie com Clareza e Constância</h3>
                <p className="text-gray-600">Agora você não precisa mais decidir do zero o que dizer. Você sabe no que acredita, o que defende, sobre o que falar e como transformar em mensagem. Criar conteúdo deixa de ser um esforço e vira consequência da sua clareza. Você para de travar, para de se confundir e começa a criar conteúdo com muito mais fluidez.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6: BENEFÍCIOS */}
      <section className="py-8 md:py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f172a]">
            Com o <span className="text-[#0f172a]">Extrator de Essênc<strong style={{ color: '#636B2F' }}>IA</strong></span> você vai conseguir:
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Criar um posicionamento claro e impossível de confundir com qualquer outra pessoa",
              "Produzir conteúdos que realmente representam quem você é",
              "Gerar conteúdos que se conectam com as pessoas certas.",
              "Parar de parecer igual a todo o mundo",
              "Ter clareza do que dizer e por que dizer",
              "Criar conteúdos com mais fluidez e menos esforço mental",
              "Estruturar produtos com alma, não apenas com técnica",
              "Ter um norte claro para suas decisões estratégicas",
              "Crescer sem precisar forçar um personagem",
              "Parar de copiar fórmulas e começar a construir sua própria linha de mensagem"
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
      <section className="py-20 md:py-32 text-white px-4" style={{ background: 'linear-gradient(135deg, #636B2F 0%, #7a8440 50%, #4a5023 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8"
          >
            Tudo o que você vai receber hoje
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-center text-lg md:text-xl mb-12 md:mb-20 max-w-2xl mx-auto"
          >
            Ao entrar no Extrator de Essênc<strong>IA</strong>
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Item 1 - DESTAQUE PRINCIPAL (ocupa toda a largura) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 relative group"
            >
              <div className="relative bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-12 hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#636B2F] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                  Vitalício
                </div>
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                    <Infinity className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Acesso Vitalício ao Extrator de Essênc<strong>IA</strong></h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-white/90 bg-white/10 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Uso ilimitado</span>
                      <span className="text-white/90 bg-white/10 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Sem mensalidade</span>
                      <span className="text-white/90 bg-white/10 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">Acesso imediato</span>
                    </div>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">O agente que <strong className="text-white font-semibold">organiza o que existe dentro de você</strong> e transforma isso em: <strong className="text-white font-semibold">posicionamento claro,</strong> <strong className="text-white font-semibold">linha de mensagem,</strong> <strong className="text-white font-semibold">direção de conteúdo,</strong> <strong className="text-white font-semibold">estrutura de produtos.</strong> Tudo a partir da sua própria essência.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 2 - Treinamento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Monitor className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Treinamento Potencializando seu uso</h3>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">Uma aula rápida e prática mostrando como usar o Extrator de Essênc<strong>IA</strong> da forma correta, como interpretar o mapa gerado, e como transformar isso em posicionamento e conteúdo.</p>
              </div>
            </motion.div>

            {/* Item 3 - Atualizações */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Atualizações Contínuas</h3>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">Seu agente evolui junto com a tecnologia e você recebe todas as atualizações sem pagar nada a mais por isso.</p>
              </div>
            </motion.div>

            {/* Item 4 - SUPER BÔNUS (ocupa toda a largura) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 relative group"
            >
              <div className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border-2 border-amber-300/40 rounded-3xl p-8 md:p-12 hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Super Bônus
                </div>
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-amber-100/20 backdrop-blur-sm border border-amber-200/30 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-amber-200" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Agente Criador de Conteúdo</h3>
                    <p className="text-white/95 leading-relaxed text-base md:text-lg">Você ainda leva um outro agente que, em poucos minutos, é capaz de criar conteúdos 100% alinhados com sua essência e que conectam com as pessoas certas.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: PARA QUEM É */}
      <section className="py-8 md:py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0f172a]">
            O Extrator de Essência é para você que:
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <ul className="space-y-4 mb-8">
              {[
                "Tem muito conteúdo, mas sente que falta clareza interna.",
                "Sua comunicação perdeu força e parece igual a de todo mundo.",
                "Você se confunde e não consegue manter constância na produção de conteúdo.",
                "Tem muito para dizer, mas não consegue dar forma.",
                "Não sabe simplificar sem se sentir raso.",
                "Seu posicionamento não fica de pé.",
                "Cresceu, mas se perdeu no caminho e se sente frustrado.",
                "Trava porque não quer parecer igual a todo mundo, mas também não sabe por onde começar.",
                "Está cansado de receitas prontas e quer clareza de verdade."
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
                Se você sente que tem muito para dizer, mas pouca clareza para comunicar…<br/>
                <span className="text-[#636B2F] font-bold mt-2 block">O Extrator de Essência é para você!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 & 10: RECAPITULAÇÃO E OFERTA */}
      <section className="py-8 md:py-16 bg-gray-50 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-8 text-center text-white" style={{ background: 'radial-gradient(circle at 50% 20%, #7a8440 0%, #636B2F 50%, #3f451b 100%)' }}>
              <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide text-white">Recapitulando...</h2>
              <p className="text-lg text-white">Veja tudo que você vai receber hoje!</p>
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
                <p className="text-sm text-gray-600 mb-6">Mas hoje você pode ter acesso vitalício ao Extrator de Essênc<strong>IA</strong> junto com todos os bônus por um valor muito mais acessível.</p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <div className="text-sm text-green-800 font-semibold uppercase tracking-wider mb-2">Oferta Especial</div>
                  <div className="flex items-baseline justify-center gap-1 text-green-600">
                    <span className="text-2xl font-bold">12x</span>
                    <span className="text-6xl font-normal tracking-tighter">R$ 6,57</span>
                  </div>
                  <div className="text-green-700 mt-2 font-medium">ou R$ 63,50 à vista</div>
                </div>

                <button className="w-full text-white text-xl font-bold py-5 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: 'radial-gradient(circle at 50% 20%, #7a8440 0%, #636B2F 50%, #3f451b 100%)' }}>
                  <Zap className="w-6 h-6" />
                  Quero acessar agora!
                </button>
              </div>

              <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
                <div className="font-bold text-gray-700">ACESSO ILIMITADO ! VOCÊ SÓ PAGA UMA ÚNICA VEZ!</div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra 100% segura</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso imediato</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 7 dias de garantia</span>
                </div>
                <div className="mt-2 text-xs">Sem mensalidade. Sem surpresas. Sem compromisso futuro.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: COMO FUNCIONA */}
      <section className="py-8 md:py-16 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-12">
            Compre agora e receba seu acesso no e-mail <span className="text-green-500">imediatamente!</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0f172a] uppercase text-sm tracking-wider">Acesse seu e-mail</h3>
              <p className="text-gray-600 text-sm">Assim que finalizar sua compra, você vai receber seu acesso no email com tudo pronto.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-green-500" />
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
      <section className="py-12 md:py-16 text-white px-4" style={{ background: 'radial-gradient(circle at 50% 20%, #7a8440 0%, #636B2F 50%, #3f451b 100%)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-300/40 shrink-0 bg-gray-800">
            <img src="https://i.imgur.com/GReISTP.jpeg" alt="Heitor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Heitor Camine</h2>
            <p className="text-yellow-300 font-medium mb-6 uppercase tracking-wider text-sm">Criador do Extrator de Essênc<strong>IA</strong> e método M.A.E</p>
            <div className="space-y-4 text-white">
              <p>
                Heitor é mentor, estrategista e arquiteto de movimento com +14 anos de experiência nos bastidores do digital.
              </p>
              <p>
                Ele trabalhou com grandes experts, empresários e líderes que queriam crescer com verdade, não com fórmulas prontas e viu de perto o que funciona e o que não funciona quando falta essência.
              </p>
              <p>
                Por isso codificou tudo isso em um método que seus mentorados usam e amam: o M.A.E. Seus mentorados já saíram de 400k para 7 milhões de visualizações. Encontraram propósito. Descobriram sua essência.
              </p>
              <p className="font-bold text-white">
                Agora ele quer disponibilizar esse acesso para quem está pronto para crescer no digital com clareza, mantendo sua própria essência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13: DICOTOMIA DE ESCOLHA */}
      <section className="py-12 md:py-16 bg-gray-50 px-4">
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
                Ignorar tudo isso. Continuar criando conteúdo que não te diferencia. Continuar copiando fórmulas prontas que não refletem quem você é. Continuar crescendo, mas sem se sentir alinhado com quem você é de verdade. Continuar vendo outros crescerem com clareza enquanto você fica preso no caos. Continuar vendo o mercado passar enquanto você fica preso em fórmulas que não funcionam para você.
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
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 uppercase tracking-wider text-sm">Opção 2: Começar Agora</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Criar uma comunicação única e conectada com a sua essência, criar o mapa completo do seu movimento, gerar conteúdos que se conectam com as pessoas certas porque estão alinhados com você. Crescer de forma verdadeira, sustentável e congruente, sem se perder no meio do processo. Finalmente saber exatamente o que criar e por quê criar.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-xl font-medium text-[#0f172a] mb-2">A escolha é sua. Mas lembre-se: <span className="font-bold" style={{ color: '#00C950' }}>A opção 2 é a mais inteligente e é a que você precisa.</span></p>
            <p className="text-gray-500 mt-4">Cada dia que passa sem agir é mais um dia desperdiçando o seu tempo.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 14: OFERTA FINAL */}
      <section className="py-8 md:py-12 text-white px-4 text-center" style={{ background: 'radial-gradient(circle at 50% 20%, #7a8440 0%, #636B2F 50%, #3f451b 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1 text-green-400 mb-2">
              <span className="text-3xl font-bold">12x</span>
              <span className="text-7xl font-normal tracking-tighter">R$ 6,57</span>
            </div>
            <div className="text-gray-300 text-xl">ou R$ 63,50 à vista</div>
          </div>

          <button className="w-full max-w-md mx-auto text-white text-xl font-bold py-5 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2 mb-8" style={{ background: '#636B2F' }}>
            <Zap className="w-6 h-6" />
            É isso! Quero acessar agora!
          </button>

          <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
            <div className="font-bold text-white uppercase tracking-wider">ACESSO ILIMITADO ! VOCÊ SÓ PAGA UMA ÚNICA VEZ!</div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra 100% segura</span>
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 7 dias de garantia</span>
            </div>
            <div className="mt-2 text-xs">Sem mensalidade. Sem surpresas. Sem compromisso futuro.</div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 15: FAQ */}
      <FAQSection />

{/* FOOTER */}
      <footer className="bg-[#020617] text-gray-500 py-8 text-center text-sm px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BrainCircuit className="w-5 h-5 text-gray-600" />
            <span className="font-bold text-gray-400">Extrator de Essênc<strong>IA</strong></span>
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
      answer: "Não. Você paga apenas uma única vez (R$ 63,50 à vista ou 12x R$ 6,57) e tem acesso vitalício. Sem mensalidade. Sem surpresas. Sem compromisso futuro."
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
    <section className="py-12 md:py-16 bg-white px-4">
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

