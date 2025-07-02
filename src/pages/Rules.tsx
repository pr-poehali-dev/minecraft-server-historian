import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const rulesData = [
    {
      id: "objective",
      title: "Цель игры",
      icon: "Target",
      color: "from-blue-600 to-blue-700",
      content: [
        "Провести человечество через все исторические эпохи",
        "Развить цивилизацию от каменного века до современности",
        "Открыть все достижения и технологии",
        "Построить процветающее общество",
      ],
    },
    {
      id: "progression",
      title: "Система прогресса",
      icon: "TrendingUp",
      color: "from-green-600 to-green-700",
      content: [
        "Каждая эпоха открывается после выполнения условий",
        "Собирайте ресурсы для развития технологий",
        "Исследуйте новые области знаний",
        "Принимайте важные решения для цивилизации",
      ],
    },
    {
      id: "resources",
      title: "Ресурсы и экономика",
      icon: "Coins",
      color: "from-yellow-600 to-yellow-700",
      content: [
        "Население — основа развития цивилизации",
        "Еда — необходима для роста населения",
        "Инструменты — ускоряют все процессы",
        "Знания — открывают новые технологии",
      ],
    },
    {
      id: "decisions",
      title: "Принятие решений",
      icon: "Scale",
      color: "from-purple-600 to-purple-700",
      content: [
        "Каждое решение влияет на развитие цивилизации",
        "Выбирайте между разными путями развития",
        "Учитывайте долгосрочные последствия",
        "Балансируйте между различными потребностями",
      ],
    },
    {
      id: "achievements",
      title: "Достижения",
      icon: "Trophy",
      color: "from-orange-600 to-orange-700",
      content: [
        "Открывайте особые достижения за успехи",
        "Получайте бонусы за выполнение целей",
        "Соревнуйтесь с другими игроками",
        "Отслеживайте свой прогресс в статистике",
      ],
    },
    {
      id: "tips",
      title: "Советы для игроков",
      icon: "Lightbulb",
      color: "from-teal-600 to-teal-700",
      content: [
        "Изучайте историю каждой эпохи",
        "Планируйте развитие на несколько ходов вперед",
        "Экспериментируйте с разными стратегиями",
        "Не бойтесь принимать рискованные решения",
      ],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="BookOpen" size={48} className="text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Правила игры
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Изучите основные принципы игры и станьте мастером развития
            цивилизаций
          </p>
          <Badge
            variant="outline"
            className="mt-4 text-purple-300 border-purple-300"
          >
            Версия правил 1.0
          </Badge>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {rulesData.map((section) => (
            <Card
              key={section.id}
              className="group hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm"
              onClick={() => toggleSection(section.id)}
            >
              <CardHeader
                className={`bg-gradient-to-r ${section.color} text-white`}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon
                      name={section.icon}
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span>{section.title}</span>
                  </div>
                  <Icon
                    name={
                      expandedSection === section.id
                        ? "ChevronUp"
                        : "ChevronDown"
                    }
                    size={20}
                    className="transition-transform duration-300"
                  />
                </CardTitle>
              </CardHeader>

              {expandedSection === section.id && (
                <CardContent className="p-6 bg-slate-800/80">
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-200"
                      >
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="mt-1 text-purple-400 flex-shrink-0"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none">
            <CardContent className="p-8">
              <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Готовы начать путешествие?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Теперь, когда вы знаете правила, пора отправиться в
                увлекательное путешествие через историю человечества!
              </p>
              <div className="flex items-center justify-center gap-2 text-sm opacity-80">
                <Icon name="Clock" size={16} />
                <span>Среднее время игры: 2-4 часа</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rules;
