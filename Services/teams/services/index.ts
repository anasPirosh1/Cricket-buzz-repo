import { Repository } from "../../shared/repository";
import { Team } from "../shared/types";

export class TeamService extends Repository<Team> {
  public getTeams = (): Team[] => {
    return this.getAll();
  };

  public getTeam = (id: number): Team | undefined => {
    const team = this.getOne(id);
    return team;
  };

  public addTeam = (team: Team): Team => {
    this.addOne(team);
    return team;
  };

  public deleteTeam = (id: number) => {
    this.deleteOne(id);
  };

  public updateTeam = (id: number, team: Team) => {
    this.updateOne(id, team);
  };
}
