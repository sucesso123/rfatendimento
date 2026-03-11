import { MessageCircle, FileText, Wrench, MoreHorizontal, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '5511964323323';

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-claro-red shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Autoatendimento
          </h1>
          <p className="text-white/90 text-center mt-2 text-sm md:text-base">
            Estamos aqui para ajudar você
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de iniciar um atendimento seguro.')}
              className="group bg-white hover:bg-claro-red hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-claro-red transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-claro-red group-hover:bg-white transition-colors duration-300 rounded-full p-4">
                  <MessageCircle className="w-10 h-10 text-white group-hover:text-claro-red transition-colors duration-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 text-center">
                Iniciar Atendimento Seguro
              </h2>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 mt-2 text-center">
                Converse com nossa equipe via WhatsApp
              </p>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Preciso falar com o suporte.')}
              className="group bg-white hover:bg-claro-yellow hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-claro-yellow transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-claro-yellow group-hover:bg-white transition-colors duration-300 rounded-full p-4">
                  <Phone className="w-10 h-10 text-gray-800 group-hover:text-claro-yellow transition-colors duration-300" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-center">
                Falar com Suporte
              </h2>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mt-2 text-center">
                Suporte especializado para você
              </p>
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Serviços Disponíveis
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de solicitar a 2ª via de boleto.')}
              className="bg-white hover:bg-claro-red group transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 border border-gray-200 hover:border-claro-red"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-claro-red/10 group-hover:bg-white transition-colors duration-300 rounded-full p-3">
                  <FileText className="w-8 h-8 text-claro-red group-hover:text-claro-red transition-colors duration-300" />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  2ª Via de Boleto
                </span>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Preciso de suporte técnico.')}
              className="bg-white hover:bg-claro-red group transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 border border-gray-200 hover:border-claro-red"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-claro-red/10 group-hover:bg-white transition-colors duration-300 rounded-full p-3">
                  <Wrench className="w-8 h-8 text-claro-red group-hover:text-claro-red transition-colors duration-300" />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  Suporte Técnico
                </span>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Gostaria de tratar de outros assuntos.')}
              className="bg-white hover:bg-claro-red group transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 border border-gray-200 hover:border-claro-red"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-claro-red/10 group-hover:bg-white transition-colors duration-300 rounded-full p-3">
                  <MoreHorizontal className="w-8 h-8 text-claro-red group-hover:text-claro-red transition-colors duration-300" />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  Outros Assuntos
                </span>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('Olá! Gostaria de entrar em contato.')}
              className="bg-white hover:bg-claro-red group transition-all duration-300 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 border border-gray-200 hover:border-claro-red"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-claro-red/10 group-hover:bg-white transition-colors duration-300 rounded-full p-3">
                  <MessageCircle className="w-8 h-8 text-claro-red group-hover:text-claro-red transition-colors duration-300" />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  Fale Conosco
                </span>
              </div>
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-sm md:text-base">
            © 2026 Autoatendimento. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Atendimento via WhatsApp disponível 24/7
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
