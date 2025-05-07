import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const clubLeagues = [
    { name: "Серия А", icon: "trophy", bgColor: "bg-blue-600" },
    { name: "АПЛ", icon: "shield", bgColor: "bg-red-600" },
    { name: "Лига 1", icon: "flag", bgColor: "bg-blue-500" },
    { name: "Ла Лига", icon: "cup", bgColor: "bg-yellow-500" },
    { name: "Лига Португалии", icon: "medal", bgColor: "bg-green-600" },
    { name: "Лига Нидерландов", icon: "badge", bgColor: "bg-orange-500" },
    { name: "Лига Бельгии", icon: "award", bgColor: "bg-red-500" },
    { name: "Остальной мир", icon: "globe", bgColor: "bg-purple-600" },
  ];

  const confederations = [
    { name: "Европа", icon: "map-pin", bgColor: "bg-blue-700" },
    { name: "Южная Америка", icon: "palmtree", bgColor: "bg-yellow-600" },
    { name: "Северная Америка", icon: "map", bgColor: "bg-red-700" },
    { name: "Азия и Океания", icon: "sunrise", bgColor: "bg-green-700" },
    { name: "Африка", icon: "sunset", bgColor: "bg-orange-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Навигация */}
      <nav className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="Gamepad2" size={30} className="text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">EFM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#leagues" className="hover:text-purple-400 transition-colors">Лиги</a>
            <a href="#confederations" className="hover:text-purple-400 transition-colors">Сборные</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">О турнире</a>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
              Регистрация
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1473&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
              EFM Tournament
            </h1>
            <p className="text-xl mb-8 text-slate-300">
              Крупнейший международный турнир по eFootball с участием лучших клубов и сборных со всего мира
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">Участвовать</Button>
              <Button variant="outline" className="border-white">Узнать больше</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Клубные лиги */}
      <section id="leagues" className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Клубные лиги</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clubLeagues.map((league) => (
              <Card key={league.name} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors overflow-hidden group">
                <Link to={`/league/${league.name.toLowerCase().replace(/\s+/g, '-').replace(/[а-яё]/gi, c => ({
                  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 
                  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 
                  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
                  'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 
                  'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
                }[c.toLowerCase()] || c))}`}>
                  <CardContent className="p-0">
                    <div className={`h-20 ${league.bgColor} flex items-center justify-center`}>
                      <Icon name={league.icon} size={36} className="text-white transform group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{league.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">Турнирная таблица и матчи</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Турниры сборных */}
      <section id="confederations" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Турниры сборных</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confederations.map((confederation) => (
              <Card key={confederation.name} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors overflow-hidden group">
                <Link to={`/confederation/${confederation.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-0">
                    <div className={`h-28 ${confederation.bgColor} flex items-center justify-center`}>
                      <Icon name={confederation.icon} size={48} className="text-white transform group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-xl">{confederation.name}</h3>
                      <p className="text-slate-400 mt-2">Турнирная таблица и матчи сборных</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О турнире */}
      <section id="about" className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">О турнире EFM</h2>
            <p className="text-slate-300 mb-4">
              EFM (eFootball Masters) - это престижный международный турнир по eFootball, где игроки могут выбрать любимые клубы из ведущих лиг или представлять свою страну на международной арене.
            </p>
            <p className="text-slate-300 mb-4">
              Турнир проводится в формате регулярного чемпионата с плей-офф стадией для определения абсолютного чемпиона в каждой категории.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center mb-3">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="font-medium">128+ участников</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-3">
                  <Icon name="Trophy" size={24} className="text-white" />
                </div>
                <h3 className="font-medium">13 чемпионов</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-indigo-700 flex items-center justify-center mb-3">
                  <Icon name="Coins" size={24} className="text-white" />
                </div>
                <h3 className="font-medium">Призовой фонд</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Gamepad2" size={24} className="text-purple-400" />
              <span className="text-xl font-bold text-white">EFM Tournament</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitch" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} EFM Tournament. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;