// import { MatchService } from "../Services/match/services/index";
import { PlayerService } from "../Services/players/services/index.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const matches = [];
// const teams = [];
// const matchService = new MatchService();
// const matches = matchService.getAll();
// const teamService = new TeamService();
const playerService = new PlayerService();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/createPlayer", (req, res) => {
  // check if team exists
  // const matchId = matchService.addMatch(request.body);
  // const match = matchService.getOneMatch(matchId);
  // response.status(201).json(match);

  response = {
    team1: req.body.team1,
    team2: req.body.team2,
    date: req.body.date,
  };
  if (response.team1.trim().length < 3 && response.team2.trim().length < 3) {
    throw new Error("Invalid Country name");
  }
  if (response.team1 == response.team2) {
    throw new Error("Same team cannot be selected");
  }
  matches.push(response);
  console.log(matches);
  res.send(JSON.stringify(response));
});

app.post("/createMatch", (req, res) => {
  // check if team exists
  // const matchId = matchService.addMatch(request.body);
  // const match = matchService.getOneMatch(matchId);
  // response.status(201).json(match);

  response = {
    team1: req.body.team1,
    team2: req.body.team2,
    date: req.body.date,
  };
  if (response.team1.trim().length < 3 && response.team2.trim().length < 3) {
    throw new Error("Invalid Country name");
  }
  if (response.team1 == response.team2) {
    throw new Error("Same team cannot be selected");
  }
  // matches.forEach((match) => {
  //   if (
  //     match.team1 == req.body.team1 &&
  //     match.startTime == req.body.startTime
  //   ) {
  //     throw new Error(`Match for ${match.team1} already Exist`);
  //   }
  //   if (
  //     match.team2 == req.body.team2 &&
  //     match.startTime == req.body.startTime
  //   ) {
  //     throw new Error(`Match for ${match.team2} already Exist`);
  //   }
  // });
  matches.push(response);
  console.log(matches);
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
