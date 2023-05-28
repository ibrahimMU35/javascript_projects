const team = {
  _players: [
    {
      firstName: "Moriati",
      lastName: "JULIETTE",
      age: "25",
    },
    {
      firstName: "Pierre",
      lastName: "BENEDICT",
      age: "29",
    },
    {
      firstName: "Thomas",
      lastName: "MARIE",
      age: "36",
    },
  ],
  _games: [
    {
      opponent: "Javascript",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "C++",
      teamPoints: 59,
      opponentPoints: 12,
    },
    {
      opponent: "Golang",
      teamPoints: 35,
      opponentPoints: 17,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("bugs", "bunnyy", 78);
console.log(team.players);
team.addGame("tiatan", 100, 98);
console.log(team.games);
