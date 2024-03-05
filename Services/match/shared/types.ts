import { Team } from "../../teams/shared/types";

export type Match = {
  teams: Team[];
  startTime: number;
  endTime: number;
};

export type ScoreBoard = {
  runs: number;
  wickets: number;
  overs: number;
  extras: string[];
};
