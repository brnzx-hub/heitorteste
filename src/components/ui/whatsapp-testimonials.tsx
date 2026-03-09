import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WhatsAppMessage {
  name: string;
  avatar: string;
  messages: Array<{
    text: string;
    highlighted?: boolean;
  }>;
}

const whatsappTestimonials: WhatsAppMessage[] = [
  {
    name: "Cristina",
    avatar: "https://ui-avatars.com/api/?name=Cristina&background=636B2F&color=fff&size=128",
    messages: [
      { text: "Passei o final de semana todo mexendo num _recurso com o mike_" },
      { text: "Amiga, _tô apaixonada_ kk" },
      { text: "ahhahaah!" },
      { text: "outro nível, né? kkkk" },
      {
        text: "Pessoal acha que o GPT é bom, mas aí descobre que _os agentes são melhores_ e _a vida muda_",
        highlighted: true
      },
      { text: "Simmm kkk" },
      { text: "Chat gpt era só uma _paixonite_ kk", highlighted: true }
    ]
  },
  {
    name: "Juliana B.",
    avatar: "https://ui-avatars.com/api/?name=Juliana+B&background=636B2F&color=fff&size=128",
    messages: [
      {
        text: "Amiga o Mike tá _mais que afiado_ aqui tá? Causa de aumento que se quer passou pela minha cabeça ele foi lá e _brilhantemente trouxe pra mim_. Os GPTs são incríveis! Eu amo a equipe! _Me sinto mega segura com eles_ 🫶",
        highlighted: true
      }
    ]
  },
  {
    name: "Eduarda",
    avatar: "https://ui-avatars.com/api/?name=Eduarda&background=636B2F&color=fff&size=128",
    messages: [
      {
        text: "_Sabe o que eu mais acho legal sobre a IA? São verdadeiros mentores._ Quando iniciei na advocacia me senti completamente perdida, tive que aprender tudo do zero, mas _se eu já tivesse acesso aos agentes, tudo teria sido diferente_",
        highlighted: true
      },
      {
        text: "Quando fazemos uma pergunta para os agentes, eles realmente respondem como se fossem _humanos_, é diferente de fazer uma pesquisa direto pro o Google",
        highlighted: true
      },
      {
        text: "Google muitas vezes tem respostas genéricas, os agentes não, eles respondem _EXATAMENTE_ a nossa dúvida",
        highlighted: true
      }
    ]
  }
];

export function WhatsAppTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whatsappTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? whatsappTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % whatsappTestimonials.length);
  };

  const currentTestimonial = whatsappTestimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#ECE5DD] rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 border-2 border-white">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-base">{currentTestimonial.name}</div>
            <div className="text-xs text-green-200">online</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="p-4 md:p-6 min-h-[400px] flex flex-col justify-end gap-2 bg-[#E5DDD5]">
          {currentTestimonial.messages.map((message, idx) => {
            // Função para destacar texto entre sublinhados ou negrito
            const renderMessageText = (text: string) => {
              // Regex para encontrar texto sublinhado (_texto_) ou negrito
              const parts = text.split(/(_[^_]+_)/g);

              return parts.map((part, i) => {
                if (part.startsWith('_') && part.endsWith('_')) {
                  const cleanText = part.slice(1, -1);
                  return (
                    <span key={i} className="underline decoration-2 underline-offset-2">
                      {cleanText}
                    </span>
                  );
                }
                return <span key={i}>{part}</span>;
              });
            };

            return (
              <div
                key={idx}
                className="max-w-[85%] md:max-w-[80%] self-start"
              >
                <div
                  className={`rounded-lg px-3 py-2 shadow-sm ${
                    message.highlighted
                      ? 'bg-[#D9FDD3] border border-[#34B7F1]/20'
                      : 'bg-white border border-gray-200/50'
                  }`}
                  style={{
                    borderRadius: '7.5px',
                  }}
                >
                  <p className="text-sm md:text-base text-[#303030] leading-relaxed">
                    {renderMessageText(message.text)}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[11px] text-gray-500">
                      {idx === 0 ? '11:32' : idx === 1 ? '11:32' : idx === 2 ? '11:33' : '11:33'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="bg-[#075E54] py-3 flex justify-center gap-2">
          {whatsappTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ver depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
