import { Repository } from "../../shared/repository";
import { TeamService } from "../../teams/services";
import { Team } from "../../teams/shared/types";
import { Innings } from "../shared/types";

export class MatchInnings extends Repository<Innings> {
  constructor(team: Team[]) {
    super();
    const teamService = new TeamService();
    teamService.addTeam(team[0]);
    teamService.addTeam(team[1]);
  }

  public addInning = (inning: Innings) => {
    return this.addOne(inning);
  };

  public startInnings = () => {};

  public overCount = () => {};
  public overEvent = () => {};
  public endInnings = () => {};
}
