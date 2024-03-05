import { Repository } from "../../shared/repository";
import { Player } from "../shared/types";

export class PlayerService extends Repository<Player> {
  public getPlayers = (): Player[] => {
    return this.getAll();
  };

  public getPlayer = (id: number): Player | undefined => {
    const player = this.getOne(id);

    return player;
  };

  public addPlayer = (player: Player): Player => {
    this.addOne(player);
    return player;
  };

  public deletePlayer = (id: number) => {
    this.deleteOne(id);
  };

  public updatePlayer = (id: number, player: Player) => {
    this.updateOne(id, player);
  };
}

const playerService = new PlayerService();

const player = playerService.getPlayer(1);

const addPlayer = playerService.addPlayer({
  name: "Harish",
  country: "Pakistan",
});
const addPlayer2 = playerService.addPlayer({
  name: "Shaheen",
  country: "Pakistan",
});

const updatePlayer = playerService.updatePlayer(1, {
  name: "Starc",
  country: "Australia",
});
// const deletePlayer = playerService.deletePlayer(1);
const players = playerService.getPlayers();

console.log(players);
