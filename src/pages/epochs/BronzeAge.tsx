import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function BronzeAge() {
  const events = [
    {
      name: "Открытие металлургии",
      description: "Первая плавка меди и олова для создания бронзы",
      reward: "Разблокировка плавильни",
      status: "Требует 15 игроков",
    },
    {
      name: "Появление письменности",
      description: "Создание первых систем письма для учёта и торговли",
      reward: "Открытие библиотеки",
      status: "Нужно 3 города",
    },
    {
      name: "Расцвет торговли",
      description: "Установление торговых маршрутов между цивилизациями",
      reward: "Переход к железному веку",
      status: "Нужен караван из 10 кораблей",
    },
  ];

  const resources = [
    { name: "Медь", icon: "Coins", color: "text-orange-500" },
    { name: "Олово", icon: "Gem", color: "text-gray-400" },
    { name: "Бронза", icon: "Shield", color: "text-amber-600" },
    { name: "Золото", icon: "Crown", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-amber-700 to-orange-900">
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
              <Badge className="bg-orange-600 text-white">Заблокировано</Badge>
              <span className="text-white font-semibold">Эпоха 2 из 7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Icon name="Hammer" size={80} className="mx-auto text-amber-300" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">Бронзовый век</h1>
          <p className="text-xl text-amber-200 mb-8 max-w-3xl mx-auto">
            3300 - 1200 г. до н.э. • Первые металлы, письменность и города
          </p>
          <div className="flex justify-center gap-4">
            <Button disabled className="bg-gray-600 text-gray-400">
              <Icon name="Lock" className="mr-2" size={20} />
              Недоступно
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-800"
            >
              <Icon name="Info" className="mr-2" size={20} />
              Условия открытия
            </Button>
          </div>
        </div>

        {/* Unlock Requirements */}
        <div className="mb-12">
          <Card className="bg-black bg-opacity-30 border-amber-600">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Unlock" size={24} />
                Условия для открытия эпохи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-900 bg-opacity-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      3/5
                    </div>
                    <div className="text-amber-200">Поселений построено</div>
                    <div className="w-full bg-amber-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-amber-400 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      7/10
                    </div>
                    <div className="text-amber-200">Объединённых игроков</div>
                    <div className="w-full bg-amber-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-amber-400 h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">
                      1/1
                    </div>
                    <div className="text-amber-200">Ключевое событие</div>
                    <div className="w-full bg-green-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-amber-200 mt-4">
                  Осталось построить 2 поселения и объединить 3 игроков
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Future Events */}
          <div className="lg:col-span-2">
            <Card className="bg-black bg-opacity-30 border-amber-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  Будущие события
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-amber-900 bg-opacity-30 rounded-lg p-4 border border-amber-600"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                          {event.name}
                        </h3>
                        <p className="text-amber-200 text-sm mb-2">
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
                      <Badge className="ml-4 bg-orange-600">
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Resources & Preview */}
          <div className="space-y-6">
            <Card className="bg-black bg-opacity-30 border-amber-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Новые ресурсы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-amber-900 bg-opacity-30 rounded-lg p-3 text-center border border-amber-600"
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

            <Card className="bg-black bg-opacity-30 border-amber-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Eye" size={24} />
                  Превью эпохи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="bg-amber-900 bg-opacity-50 rounded-lg p-4 mb-4">
                    <Icon
                      name="Building2"
                      size={48}
                      className="mx-auto text-amber-400 mb-2"
                    />
                    <p className="text-amber-200 text-sm">
                      Первые города-государства с развитой архитектурой и
                      торговлей
                    </p>
                  </div>
                  <Badge className="bg-amber-600 text-white">
                    Откроется скоро
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <Link to="/epochs/stone-age">
              <Button className="bg-stone-600 hover:bg-stone-700 text-white">
                <Icon name="ChevronLeft" className="mr-2" size={20} />
                Каменный век
              </Button>
            </Link>
            <span className="text-white font-semibold">Бронзовый век</span>
            <Button disabled className="bg-gray-600 text-gray-400">
              Железный век
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
