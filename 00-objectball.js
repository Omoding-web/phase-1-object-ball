function gameObject() {
  let teamPlaying = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
      }
    }
  };
  return teamPlaying;
}
console.log(gameObject());


function homeTeamName() {
  return gameObject().home.teamName;  
}
console.log(homeTeamName());

function awayTeamName() {
  return gameObject().away.teamName;  
}
console.log(awayTeamName());


function numPointsScored(playerName) {
  const game = gameObject();
   for(const team in game) {
  if(game[team].players[playerName]){
      return game [team].players[playerName].points;
  }
} 
};

function shoeSize(playerName){
  const game = gameObject();
  for (let team in game) {
      if(game[team].players[playerName]) {
          return game [team].players[playerName].shoe;
      }
  }
} ;

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game)
  if(game[team].teamName === teamName) {
    return game[team].colors;
  }
};

function teamNames() {
  const game = gameObject()
  return [game.home.teamName,game.away.teamName];  
}

function playerNumbers(teamName) {
   const game = gameObject();
   for(const team in game) {
      if(game[team].teamName === teamName) {
          return Object.values(game[team].players).map(player =>
              player.number);

      
          }
        
      }
   }
  

function playerStats(playerName) {
 const game = gameObject();
 for(const team in game) {
  if(game[team].players.hasOwnProperty[playerName]) {
      return game[team].players[playerName]
  }
 } 
};

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = "";
  for(const team in game) {
  for(const player in game[team].players) {
  const currentShoeSize = game[team].players[player].shoe;
  if(currentShoeSize > largestShoeSize) {
      largestShoeSize = currentShoeSize;
        playerWithLargestShoe = player;
  }
  }
  }
  return game.home.players[playerWithLargestShoe].rebounds;
}


console.log (shoeSize("Alan Anderson"));
console.log(numPointsScored("Brooklyn Nets"));
console.log (teamColors("Charlotte Hornets"));
console.log(playerStats("Bismak Biyombo"));
console.log (teamNames("Ben Gordon"));
console.log(bigShoeRebounds());


