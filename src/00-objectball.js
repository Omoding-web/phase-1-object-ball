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


// To get the number of points scored by a player
function numPointsScored(playerName) {
  const gameObj = gameObject();

  for (const team in gameObj) {
    if (gameObj[team].players.hasOwnProperty(playerName)) {
      return gameObj[team].players[playerName].points;
    }
  }

  return null; // Return null if player not found
}

// To get the shoe size of a player
function shoeSize(playerName) {
  const gameObj = gameObject();

  for (const team in gameObj) {
    if (gameObj[team].players.hasOwnProperty(playerName)) {
      return gameObj[team].players[playerName].shoe;
    }
  }

  return null; // Return null if player not found
}

// To get the team colors based on the team name
function teamColors(teamName) {
  const gameObj = gameObject();

  for (const team in gameObj) {
    if (gameObj[team].teamName === teamName) {
      return gameObj[team].colors;
    }
  }

  return null; // Return null if team not found
}

// To get an array of team names
function teamNames() {
  const gameObj = gameObject();
  return [gameObj.home.teamName, gameObj.away.teamName];
}

// Function to get an array of player numbers for a given team
function playerNumbers(teamName) {
  const gameObj = gameObject();
  const team = gameObj.home.teamName === teamName ? gameObj.home : gameObj.away;

  return Object.values(team.players).map(player => player.number);
}

// Function to get the stats of a player
function playerStats(playerName) {
  const gameObj = gameObject();

  for (const team in gameObj) {
    if (gameObj[team].players.hasOwnProperty(playerName)) {
      return gameObj[team].players[playerName];
    }
  }

  return null; // Return null if player not found
}

// To find the player with the most points
function mostPointsScored() {
  const gameObj = gameObject();
  let maxPoints = 0;
  let playerWithMostPoints = null;

  for (const team in gameObj) {
    for (const player in gameObj[team].players) {
      const currentPoints = gameObj[team].players[player].points;
      if (currentPoints > maxPoints) {
        maxPoints = currentPoints;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints;
}

// To find the team with the most points
function winningTeam() {
  const gameObj = gameObject();
  let maxTeamPoints = 0;
  let winningTeamName = null;

  for (const team in gameObj) {
    let teamPoints = 0;
    for (const player in gameObj[team].players) {
      teamPoints += gameObj[team].players[player].points;
    }

    if (teamPoints > maxTeamPoints) {
      maxTeamPoints = teamPoints;
      winningTeamName = gameObj[team].teamName;
    }
  }

  return winningTeamName;
}

// To find the player with the longest name
function playerWithLongestName() {
  const gameObj = gameObject();
  let longestName = "";
  let playerWithLongestName = null;

  for (const team in gameObj) {
    for (const player in gameObj[team].players) {
      const currentName = player;
      if (currentName.length > longestName.length) {
        longestName = currentName;
        playerWithLongestName = player;
      }
    }
  }

  return playerWithLongestName;
}

// Function to check if the player with the longest name steals a ton
function doesLongNameStealATon() {
  const player = playerWithLongestName();
  if (player) {
    const steals = playerStats(player).steals;
    return steals >= 10;
  }
  return false;
}

function bigShoeRebounds(playersObj) {
  let biggestShoe = 0;
  let biggestShoePlayer;
 
  for (let playerName in playersObj) {
     if (playersObj[playerName].shoe > biggestShoe) {
       biggestShoe = playersObj[playerName].shoe;
       biggestShoePlayer = playerName;
     }
  }
 
  return playersObj[biggestShoePlayer].rebounds;
 }
 

//Tests to run

function testFunctions() {
  console.log("1. Number of Points Scored by Alan Anderson:", numPointsScored("Alan Anderson"));
  console.log("2. Shoe Size of Brook Lopez:", shoeSize("Brook Lopez"));
  console.log("3. Team Colors of Brooklyn Nets:", teamColors("Brooklyn Nets"));
  console.log("4. Team Names:", teamNames());
  console.log("5. Player Numbers of Charlotte Hornets:", playerNumbers("Charlotte Hornets"));
  console.log("6. Player Stats for Jason Terry:", playerStats("Jason Terry"));
 /* console.log("7. Rebounds for Player with Largest Shoe Size:", bigShoeRebounds("player"));*/
  console.log("8. Player with Most Points:", mostPointsScored());
  console.log("9. Winning Team:", winningTeam());
  console.log("10. Player with Longest Name:", playerWithLongestName());
  console.log("11. Does Player with Longest Name Steal a Ton?", doesLongNameStealATon());
}
// Call the test function to demonstrate outputs
testFunctions();

