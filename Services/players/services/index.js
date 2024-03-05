"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
var repository_1 = require("../../shared/repository");
var PlayerService = /** @class */ (function (_super) {
    __extends(PlayerService, _super);
    function PlayerService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPlayers = function () {
            return _this.getAll();
        };
        _this.getPlayer = function (id) {
            var player = _this.getOne(id);
            return player;
        };
        _this.addPlayer = function (player) {
            _this.addOne(player);
            return player;
        };
        _this.deletePlayer = function (id) {
            _this.deleteOne(id);
        };
        _this.updatePlayer = function (id, player) {
            _this.updateOne(id, player);
        };
        return _this;
    }
    return PlayerService;
}(repository_1.Repository));
exports.PlayerService = PlayerService;
var playerService = new PlayerService();
var player = playerService.getPlayer(1);
var addPlayer = playerService.addPlayer({
    name: "Harish",
    country: "Pakistan",
});
var addPlayer2 = playerService.addPlayer({
    name: "Shaheen",
    country: "Pakistan",
});
var updatePlayer = playerService.updatePlayer(1, {
    name: "Starc",
    country: "Australia",
});
// const deletePlayer = playerService.deletePlayer(1);
var players = playerService.getPlayers();
console.log(players);
