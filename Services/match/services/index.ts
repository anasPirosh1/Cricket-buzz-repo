import { MatchInnings } from "../../inning/services";
import { Innings } from "../../inning/shared/types";
import { Repository } from "../../shared/repository";
import { Match } from "../shared/types";

export class MatchService extends Repository<Match> {
  //   constructor(inning: Innings) {
  //     super();
  //     const matchInnings = new MatchInnings([]);
  //     matchInnings.addInning(inning);
  //   }

  public getMatch = (id: number): Match | undefined => {
    return this.getOne(id);
  };

  public addMatch = (match: Match): Match[] => {
    if (match.teams.length != 2) {
      throw new Error("only_2_teams_can_play_match");
    }
    if (match.endTime < match.startTime) {
      throw new Error("end_time_earlier_than_start_time");
    }
    return this.addOne(match);
  };
}

const inning1 = {
  bowlingTeam: {
    name: "Aus",
    players: [{ name: "Starc", country: "Australia" }],
  },
  battingTeam: { name: "Ind", players: [{ name: "Bumrah", country: "India" }] },
  overs: 50,
};

const match = new MatchService(inning1);

const addMatch = match.addMatch({
  teams: [
    { name: "Ind", players: [{ name: "Bumrah", country: "India" }] },
    { name: "Aus", players: [{ name: "Starc", country: "Australia" }] },
  ],
  startTime: 12,
  endTime: 14,
});

console.log(addMatch);
