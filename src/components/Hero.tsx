import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-800 via-amber-700 to-stone-800 flex items-center justify-center overflow-hidden">
      {/* Animated background blocks */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-20 w-8 h-8 bg-green-500 animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-amber-500 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-16 w-10 h-10 bg-stone-500 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-8 h-8 bg-green-400 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Icon
            name="Crown"
            size={64}
            className="mx-auto mb-4 text-yellow-400"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
          HISTORYCRAFT
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Проживи каждую эпоху истории человечества
          <br />
          От каменного века до космической эры
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Начать путешествие
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8 py-4"
            onClick={() => (window.location.href = "/rules")}
          >
            <Icon name="BookOpen" className="mr-2" size={20} />
            Правила игры
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">7+</div>
            <div className="text-gray-300">Исторических эпох</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">100+</div>
            <div className="text-gray-300">Игроков онлайн</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300">Стабильная работа</div>
          </div>
        </div>
      </div>
    </section>
  );
}
