
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface TeamData {
  position: number;
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: string[];
}

const LeaguePortugal = () => {
  const teamsData: TeamData[] = [
    {
      position: 1,
      name: "Спортинг",
      logo: "https://images.unsplash.com/photo-1572078156768-6f159f3da606?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 25,
      drawn: 3,
      lost: 2,
      goalsFor: 79,
      goalsAgainst: 22,
      points: 78,
      form: ["W", "W", "W", "D", "W"],
    },
    {
      position: 2,
      name: "Бенфика",
      logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 23,
      drawn: 3,
      lost: 4,
      goalsFor: 71,
      goalsAgainst: 24,
      points: 72,
      form: ["W", "W", "L", "W", "W"],
    },
    {
      position: 3,
      name: "Порту",
      logo: "https://images.unsplash.com/photo-1550408483-bafa35b0a433?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 20,
      drawn: 5,
      lost: 5,
      goalsFor: 61,
      goalsAgainst: 28,
      points: 65,
      form: ["W", "D", "W", "W", "L"],
    },
    {
      position: 4,
      name: "Брага",
      logo: "https://images.unsplash.com/photo-1544922993-62368caec3ea?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 18,
      drawn: 5,
      lost: 7,
      goalsFor: 54,
      goalsAgainst: 33,
      points: 59,
      form: ["W", "L", "W", "W", "D"],
    },
    {
      position: 5,
      name: "Витория Гимарайнш",
      logo: "https://images.unsplash.com/photo-1553778263-73a83c0446e4?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 14,
      drawn: 8,
      lost: 8,
      goalsFor: 45,
      goalsAgainst: 34,
      points: 50,
      form: ["D", "W", "L", "W", "D"],
    },
    {
      position: 6,
      name: "Фамаликао",
      logo: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 11,
      drawn: 9,
      lost: 10,
      goalsFor: 38,
      goalsAgainst: 36,
      points: 42,
      form: ["D", "W", "D", "L", "W"],
    },
    {
      position: 7,
      name: "Морейренсе",
      logo: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 10,
      drawn: 10,
      lost: 10,
      goalsFor: 38,
      goalsAgainst: 40,
      points: 40,
      form: ["L", "D", "D", "W", "L"],
    },
    {
      position: 8,
      name: "Боавишта",
      logo: "https://images.unsplash.com/photo-1511886929837-354984c0190d?q=80&w=1374&auto=format&fit=crop",
      played: 30,
      won: 11,
      drawn: 6,
      lost: 13,
      goalsFor: 36,
      goalsAgainst: 41,
      points: 39,
      form: ["W", "L", "L", "W", "D"],
    },
  ];

  const getFormBadgeColor = (result: string) => {
    switch (result) {
      case "W":
        return "bg-green-500 hover:bg-green-600";
      case "D":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "L":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Навигация */}
      <nav className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <Icon name="Gamepad2" size={30} className="text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">EFM</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-purple-400 transition-colors">Главная</Link>
            <a href="#standings" className="hover:text-purple-400 transition-colors">Таблица</a>
            <a href="#matches" className="hover:text-purple-400 transition-colors">Матчи</a>
          </div>
        </div>
      </nav>

      {/* Заголовок лиги */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594806766625-b1179dce11a4?q=80&w=1473&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-green-600 flex items-center justify-center rounded-full">
              <Icon name="Medal" size={40} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Лига Португалии</h1>
              <p className="text-slate-300 mt-2">Сезон 2024/2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Турнирная таблица */}
      <section id="standings" className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle>Турнирная таблица</CardTitle>
              <CardDescription className="text-slate-300">
                Обновлено: 7 мая 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-slate-600/50">
                      <TableHead className="text-slate-300 w-[60px]">Поз</TableHead>
                      <TableHead className="text-slate-300">Команда</TableHead>
                      <TableHead className="text-slate-300 text-center">И</TableHead>
                      <TableHead className="text-slate-300 text-center">В</TableHead>
                      <TableHead className="text-slate-300 text-center">Н</TableHead>
                      <TableHead className="text-slate-300 text-center">П</TableHead>
                      <TableHead className="text-slate-300 text-center">ЗМ</TableHead>
                      <TableHead className="text-slate-300 text-center">ПМ</TableHead>
                      <TableHead className="text-slate-300 text-center">РМ</TableHead>
                      <TableHead className="text-slate-300 text-center">О</TableHead>
                      <TableHead className="text-slate-300 text-center">Форма</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamsData.map((team) => (
                      <TableRow key={team.name} className="hover:bg-slate-600/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600">
                            {team.position}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-500">
                              <div 
                                className="absolute inset-0 bg-cover bg-center" 
                                style={{ backgroundImage: `url(${team.logo})` }}
                              ></div>
                            </div>
                            <span className="font-medium">{team.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">{team.played}</TableCell>
                        <TableCell className="text-center">{team.won}</TableCell>
                        <TableCell className="text-center">{team.drawn}</TableCell>
                        <TableCell className="text-center">{team.lost}</TableCell>
                        <TableCell className="text-center">{team.goalsFor}</TableCell>
                        <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                        <TableCell className="text-center">{team.goalsFor - team.goalsAgainst}</TableCell>
                        <TableCell className="text-center font-bold">{team.points}</TableCell>
                        <TableCell>
                          <div className="flex gap-1 justify-center">
                            {team.form.map((result, index) => (
                              <Badge 
                                key={index} 
                                className={`${getFormBadgeColor(result)} w-6 h-6 flex items-center justify-center rounded-full text-xs`}
                              >
                                {result}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-300">Лига Чемпионов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-slate-300">Лига Европы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-slate-300">Зона вылета</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Последние матчи */}
      <section id="matches" className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Последние матчи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { home: "Спортинг", away: "Бенфика", scoreHome: 2, scoreAway: 1, date: "04 мая 2025" },
              { home: "Порту", away: "Брага", scoreHome: 3, scoreAway: 0, date: "03 мая 2025" },
              { home: "Витория Гимарайнш", away: "Фамаликао", scoreHome: 1, scoreAway: 1, date: "02 мая 2025" },
              { home: "Морейренсе", away: "Боавишта", scoreHome: 0, scoreAway: 2, date: "01 мая 2025" }
            ].map((match, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-slate-300 border-slate-600">
                      {match.date}
                    </Badge>
                    <Badge className="bg-green-600">Завершен</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col items-center text-center w-2/5">
                      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold">{match.home.charAt(0)}</span>
                      </div>
                      <span className="text-sm">{match.home}</span>
                    </div>
                    <div className="flex-none text-center">
                      <div className="text-2xl font-bold">
                        {match.scoreHome} - {match.scoreAway}
                      </div>
                      <span className="text-xs text-slate-400">Финальный счет</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-2/5">
                      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                        <span className="text-xl font-bold">{match.away.charAt(0)}</span>
                      </div>
                      <span className="text-sm">{match.away}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/league/portugal/matches">
              <Button className="bg-purple-600 hover:bg-purple-700 inline-flex gap-2 items-center">
                Все матчи
                <Icon name="ArrowRight" size={16} />
              </Button>
            </Link>
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

export default LeaguePortugal;
