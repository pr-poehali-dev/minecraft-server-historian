import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const epochs = [
  {
    id: 1,
    name: "Каменный век",
    period: "2.6 млн - 3300 г. до н.э.",
    icon: "Pickaxe",
    color: "from-stone-600 to-stone-700",
    textColor: "text-stone-100",
    description: "Первые орудия труда, охота и собирательство",
  },
  {
    id: 2,
    name: "Бронзовый век",
    period: "3300 - 1200 г. до н.э.",
    icon: "Hammer",
    color: "from-amber-600 to-amber-700",
    textColor: "text-amber-100",
    description: "Первые металлы, письменность и города",
  },
  {
    id: 3,
    name: "Железный век",
    period: "1200 - 550 г. до н.э.",
    icon: "Sword",
    color: "from-gray-600 to-gray-700",
    textColor: "text-gray-100",
    description: "Совершенствование оружия и сельского хозяйства",
  },
  {
    id: 4,
    name: "Античность",
    period: "800 г. до н.э. - 476 г. н.э.",
    icon: "Building",
    color: "from-purple-600 to-purple-700",
    textColor: "text-purple-100",
    description: "Расцвет наук, искусства и империй",
  },
  {
    id: 5,
    name: "Средневековье",
    period: "476 - 1453 гг. н.э.",
    icon: "Castle",
    color: "from-green-700 to-green-800",
    textColor: "text-green-100",
    description: "Рыцарство, замки и великие путешествия",
  },
  {
    id: 6,
    name: "Новое время",
    period: "1453 - 1789 гг. н.э.",
    icon: "Ship",
    color: "from-blue-600 to-blue-700",
    textColor: "text-blue-100",
    description: "Великие географические открытия",
  },
  {
    id: 7,
    name: "Индустриальная эра",
    period: "1760 - 1840 гг. н.э.",
    icon: "Cog",
    color: "from-orange-600 to-orange-700",
    textColor: "text-orange-100",
    description: "Промышленная революция и паровые машины",
  },
];

export default function EpochsTimeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Исторические эпохи
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Проживите каждую эпоху вместе с другими игроками,
            <br />
            от первых орудий до современных технологий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {epochs.map((epoch, index) => (
            <Card
              key={epoch.id}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <CardContent
                className={`p-0 bg-gradient-to-br ${epoch.color} text-white h-80`}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <Icon
                        name={epoch.icon}
                        size={48}
                        className={`${epoch.textColor} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{epoch.name}</h3>
                    <p className="text-sm opacity-80 mb-3">{epoch.period}</p>
                    <p className="text-sm leading-relaxed">
                      {epoch.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-semibold opacity-80">
                      Эпоха {epoch.id}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center`}
                    >
                      <Icon
                        name="ChevronRight"
                        size={16}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Каждая эпоха открывается последовательно, когда игроки достигают
            определённых целей
          </p>
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
            <Icon name="Users" size={20} />
            Сейчас активна: Каменный век
          </div>
        </div>
      </div>
    </section>
  );
}
