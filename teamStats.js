// App that adds opponents and players to a team object
// Part of JavaScript Syntax Part II

const team = {
  // Array of player objects
  _players: [
    { 
      firstName: 'Christian',
      lastName: 'Gomez',
      age: 28
    },
    {
      firstName: 'Jaime',
      lastName: 'Moreno',
      age: 32
    },
    {
      firstName: 'Ben',
      lastName: 'Olsen',
      age: 28
    }
  ],
  
  // Array of games objects
  _games: [
    {
      opponent: 'New York Red Bulls',
      teamPoints: 4,
      opponentPoints: 0
    },
    {
      opponent: 'Los Angeles Galaxy',
      teamPoints: 3,
      opponentPoints: 2
    },
    {
      opponent: 'Chicago Fire',
      teamPoints: 2,
      opponentPoints: 1
    }
  ],

  // Getters that return players or games
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Adds player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  },

  // Adds game information to a team
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Tests
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);
