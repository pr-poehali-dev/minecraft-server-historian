import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function StoneAge() {
  const events = [
    {
      name: "Первые орудия",
      description: "Освоение обработки камня и дерева",
      reward: "+10 опыта ремесла",
      status: "Доступно",
    },
    {
      name: "Овладение огнём",
      description: "Открывает новые возможности приготовления пищи",
      reward: "Разблокировка печи",
      status: "Требует 10 игроков",
    },
    {
      name: "Первые поселения",
      description: "Переход от кочевого к осёдлому образу жизни",
      reward: "Открытие бронзового века",
      status: "Нужно 5 поселений",
    },
  ];

  const resources = [
    { name: "Камень", icon: "Mountain", color: "text-gray-600" },
    { name: "Дерево", icon: "TreePine", color: "text-green-600" },
    { name: "Кости", icon: "Bone", color: "text-yellow-600" },
    { name: "Мех", icon: "Shirt", color: "text-amber-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
      {/* Header */}
      <div className="bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к эпохам
            </Link>
            <div className="flex items-center gap-4">
              <Badge className="bg-stone-600 text-white">Активно</Badge>
              <span className="text-white font-semibold">Эпоха 1 из 7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Icon name="Pickaxe" size={80} className="mx-auto text-stone-300" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">Каменный век</h1>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
            2.6 млн - 3300 г. до н.э. • Первые орудия труда, охота и
            собирательство
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Icon name="Users" className="mr-2" size={20} />
              Присоединиться
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800"
            >
              <Icon name="Map" className="mr-2" size={20} />
              Посмотреть карту
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events & Progress */}
          <div className="lg:col-span-2">
            <Card className="bg-black bg-opacity-30 border-stone-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Target" size={24} />
                  Ключевые события
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-stone-700 bg-opacity-50 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                          {event.name}
                        </h3>
                        <p className="text-stone-300 text-sm mb-2">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Icon
                            name="Gift"
                            size={16}
                            className="text-yellow-400"
                          />
                          <span className="text-yellow-400 text-sm">
                            {event.reward}
                          </span>
                        </div>
                      </div>
                      <Badge
                        className={`ml-4 ${
                          event.status === "Доступно"
                            ? "bg-green-600"
                            : "bg-orange-600"
                        }`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Resources & Info */}
          <div className="space-y-6">
            <Card className="bg-black bg-opacity-30 border-stone-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Основные ресурсы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-stone-700 bg-opacity-50 rounded-lg p-3 text-center"
                    >
                      <Icon
                        name={resource.icon}
                        size={32}
                        className={`mx-auto mb-2 ${resource.color}`}
                      />
                      <span className="text-white text-sm font-medium">
                        {resource.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black bg-opacity-30 border-stone-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="BarChart3" size={24} />
                  Прогресс сервера
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">Общий прогресс</span>
                    <span className="text-white font-semibold">32%</span>
                  </div>
                  <div className="w-full bg-stone-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">47</div>
                  <div className="text-stone-300 text-sm">Игроков онлайн</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <Button disabled className="bg-stone-600 text-stone-400">
              <Icon name="ChevronLeft" className="mr-2" size={20} />
              Предыдущая
            </Button>
            <span className="text-white font-semibold">Каменный век</span>
            <Link to="/epochs/bronze-age">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Следующая
                <Icon name="ChevronRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
