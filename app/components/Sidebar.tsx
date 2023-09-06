import { FC } from "react";
import LinkLeague from "./LinkLeague";

const Sidebar: FC = async () => {
  const Leagues = [
    {
      id: 1,
      name: "Premier League",
      href: "premier-league",
      emblem: "/leagues/premier_league.webp",
    },
    {
      id: 2,
      name: "Primera Division",
      href: "primera-division",
      emblem: "/leagues/laliga.svg",
    },
    {
      id: 3,
      name: "Bundesliga",
      href: "bundesliga",
      emblem: "/leagues/bundesliga.webp",
    },
    {
      id: 4,
      name: "Serie A",
      href: "serie-a",
      emblem: "/leagues/serie_a.webp",
    },
    {
      id: 5,
      name: "Ligue 1",
      href: "ligue-1",
      emblem: "/leagues/ligue_1.webp",
    },
    {
      id: 6,
      name: "Championship",
      href: "championship",
      emblem: "/leagues/championship.webp",
    },
    {
      id: 7,
      name: "Primeira Liga",
      href: "primeira-liga",
      emblem: "/leagues/liga_portugal.webp",
    },
    {
      id: 8,
      name: "Brazilian Championship Series A",
      href: "brazilian-series-a",
      emblem: "/leagues/brazilian_serie_a.webp",
    },
    {
      id: 9,
      name: "Copa Libertadores",
      href: "copa-libertadores",
      emblem: "/leagues/copa_libertadores.webp",
    },
  ];

  return (
    <section className=" padding-x rounded-xl p-8 bg-secondary">
      <div>
        <h1 className=" tracking-widest text-2xl font-bold leading-3 text-white ">
          GILA<span className="text-accent">BOLA</span>
        </h1>
        <ul className="space-y-2 padding-y">
          {Leagues.map((league) => (
            <div key={league?.id} className="flex text-white">
              <LinkLeague
                href={league.href}
                name={league.name}
                src={league.emblem}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
