import { Team } from "../../teams/shared/types";

export type Innings = {
  battingTeam: Team;
  bowlingTeam: Team;
  overs: number;
};
