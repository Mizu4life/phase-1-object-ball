function gameObject() {
    return {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson": {"number": 0,"shoe": 16,"points": 22,"rebounds": 12,"assists": 12,"steals": 3,"blocks": 1,"slamDunks": 1},
                "Reggie Evans": {"number": 30,"shoe": 14,"points": 12,"rebounds": 12,"assists": 12,"steals": 12,"blocks": 12,"slamDunks": 7},
                "Brook Lopez": {"number": 11,"shoe": 17,"points": 17,"rebounds": 19,"assists": 10,"steals": 3,"blocks": 1,"slamDunks": 15},
                "Mason Plumlee": {"number": 1,"shoe": 19,"points": 26,"rebounds": 12,"assists": 6,"steals": 3,"blocks": 8,"slamDunks": 5},
                "Jason Terry": {"number": 31,"shoe": 15,"points": 19,"rebounds": 2,"assists": 2,"steals": 4,"blocks": 11,"slamDunks": 1}
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {"number": 4,"shoe": 18,"points": 10,"rebounds": 1,"assists": 1,"steals": 2,"blocks": 7,"slamDunks": 2},
                "Bismak Biyombo": {"number": 0,"shoe": 16,"points": 12,"rebounds": 4,"assists": 7,"steals": 7,"blocks": 15,"slamDunks": 10},
                "DeSagna Diop": {"number": 2,"shoe": 14,"points": 24,"rebounds": 12,"assists": 12,"steals": 4,"blocks": 5,"slamDunks": 5},
                "Ben Gordon": {"number": 8,"shoe": 15,"points": 33,"rebounds": 3,"assists": 2,"steals": 1,"blocks": 1,"slamDunks": 0},
                "Brendan Haywood": {"number": 33,"shoe": 15,"points": 6,"rebounds": 12,"assists": 12,"steals": 22,"blocks": 5,"slamDunks": 12}
            }
        }
    }
}

function numPointsScored (player){
    let game = gameObject();
    for (let gameKey in game) {
        debugger;
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            debugger;
            let  playerObj = teamObj[teamKey];
            for(let playerKey in playerObj){
                if (playerKey === player) {
                    debugger;
                    let x = playerObj[playerKey]["points"];
                    debugger;
                    return x
                }
            };  
        }
    }
}
// console.log(numPointsScored("Alan Anderson"));

function shoeSize(player){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let  playerObj = teamObj[teamKey];
            for(let playerKey in playerObj){
                if (playerKey === player) {
                    let x = playerObj[playerKey]["shoe"];
                    return x
                }
            };  
        }
    }
}
// console.log(shoeSize("Alan Anderson"));

function teamColors(teamName){
    let game = gameObject();
    for (let teamKey in game) {
        let teamObj = game[teamKey];
        // compare with the first key in the object:
        if (teamObj[Object.keys(teamObj)[0]] === teamName) {
            return teamObj[Object.keys(teamObj)[1]];
        }
    }
};
// console.log(teamColors("Brooklyn Nets"));

function teamNames(){
    let game = gameObject();
    let  teams = [];
    // debugger;
    for(let teamKey in game){
        let teamObj = game[teamKey];
        // debugger;
        let teamNameKeys = Object.keys(teamObj);
        teams.push(teamObj[teamNameKeys[0]]); 
        // debugger
    }
    // debugger;
    return teams;
}
// console.log(teamNames());

function playerNumbers(teamName){
    let numbers = [];
    let game = gameObject();
    for (let teamKey in game) {
        let teamObj = game[teamKey];
        if (teamObj[Object.keys(teamObj)[0]] === teamName) {
            debugger
            for(let playerKey in teamObj[Object.keys(teamObj)[2]]){  // Object.keys(teamObj)[2] = players
                let playerObj = teamObj[Object.keys(teamObj)[2]][playerKey]
                debugger
                numbers.push(playerObj["number"])
                debugger
            }
        }
    }
    return numbers;
}
// console.log(playerNumbers("Charlotte Hornets"));


function playerStats(player){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let  playerObj = teamObj[teamKey];
            for(let playerKey in playerObj){
                if (playerKey === player) {
                    return playerObj[playerKey];
                }
            };  
        }
    }
}
// console.log(playerStats("Alan Anderson"));

//////////////////// Adjusted these functions after creating 'playerStats' function, for cleaner code ////////////////////

// function numPointsScored (player){
//     let stat = playerStats(player);
//     return stat["points"];
// }
// function shoeSize(player){
//     let stat = playerStats(player);
//     return stat["shoe"];
// }



// function that takes teamName and return an array with the players names
function getAllPlayerNames(teamName){
    let players = [];
    game = gameObject();
    for (let teamKey in game) {
        let teamObj = game[teamKey];
        if (teamObj[Object.keys(teamObj)[0]] === teamName) {
            debugger
            for(let playerKey in teamObj[Object.keys(teamObj)[2]]){  // Object.keys(teamObj)[2] = players
                debugger
                players.push(playerKey)
                debugger
            }
        }
    }
    return players;
}


function bigShoeRebounds(){
    let game = gameObject();
    let allPlayers = []
    for(teamKey in game){
        let teamObj = game[teamKey];
        allPlayers.push(...getAllPlayerNames(teamObj[Object.keys(teamObj)[0]])) // Object.keys(teamObj)[0] = teamName
        debugger;
    }
    let bigShoe = 0;
    let playerName;
    for(let player in allPlayers){
        debugger;
        if (bigShoe < shoeSize(allPlayers[player])){
            debugger;
            bigShoe = shoeSize(allPlayers[player]);
            playerName = allPlayers[player];
            debugger;
        }
    }
    let stat = playerStats(playerName);
    return `"${playerName}" has the biggest shoe size (${bigShoe}) and he has (${stat["rebounds"]}) rebounds!!`;
}
// console.log(bigShoeRebounds())




////////// Bonus Questions ///////////



function mostPointsScored(){
    let game = gameObject();
    let allPlayers = []
    for(teamKey in game){
        let teamObj = game[teamKey];
        allPlayers.push(...getAllPlayerNames(teamObj[Object.keys(teamObj)[0]])) // Object.keys(teamObj)[0] = teamName
        debugger;
    }
    let mostPoints = 0;
    let playerName;
    for(let player in allPlayers){
        debugger;
        if (mostPoints < numPointsScored(allPlayers[player])){
            debugger;
            mostPoints = numPointsScored(allPlayers[player]);
            playerName = allPlayers[player];
            debugger;
        }
    }
    return `"${playerName}" has the most points (${mostPoints})!!`;
}
// console.log(mostPointsScored());


function totalPoints(teamName){
    let game = gameObject();
    let allPlayers = []
    for(teamKey in game){
        let teamObj = game[teamKey];
        if (teamObj[Object.keys(teamObj)[0]] === teamName) { // Object.keys(teamObj)[0] = teamName
            allPlayers.push(...getAllPlayerNames(teamObj[Object.keys(teamObj)[0]])) 
            debugger;
        }
    }
    let totalPoints = 0;
    for(let player in allPlayers){
        debugger;
        totalPoints += numPointsScored(allPlayers[player])
    }
    return totalPoints;
}
// console.log(`Total Points: ${totalPoints("Charlotte Hornets")}`);

function winningTeam(){
    let game = gameObject();
    let win = "";
    let morePoints = 0;
    for(teamKey in game){
        let teamObj = game[teamKey];
        if (morePoints < totalPoints(teamObj[Object.keys(teamObj)[0]])){
            morePoints = totalPoints(teamObj[Object.keys(teamObj)[0]]);
            win = teamObj[Object.keys(teamObj)[0]];
        }
    }
    return `${win} is winning with ${morePoints} points!!`;
}
console.log(winningTeam());

function playerWithLongestName(){
    game = gameObject();
    let allPlayers = [];
    for(teamKey in game){
            let teamObj = game[teamKey];
            allPlayers.push(...getAllPlayerNames(teamObj[Object.keys(teamObj)[0]])) // Object.keys(teamObj)[0] = teamName
            debugger;
        
    }
    let longestName="";
    for(let player in allPlayers){
        debugger;
        if (longestName.length < allPlayers[player].length){
            debugger;
            longestName = allPlayers[player];
            debugger;
        }
    }
    return longestName;
}
// console.log(playerWithLongestName());


/////////// Super Bonus ///////////

function mostSteal(){
    let game = gameObject();
    let allPlayers = []
    for(teamKey in game){
        let teamObj = game[teamKey];
        allPlayers.push(...getAllPlayerNames(teamObj[Object.keys(teamObj)[0]])) // Object.keys(teamObj)[0] = teamName
        debugger;
    }
    let mostSteal = 0;
    for(let player in allPlayers){
        debugger;
        let stat = playerStats(allPlayers[player]);
        if (mostSteal < stat['steals']){
            debugger;
            mostSteal = stat['steals'];
            debugger;
        }
    }
    return mostSteal;
}
// console.log(mostSteal());

function doesLongNameStealATon(){
    let longestName =  playerWithLongestName();
    let stat =  playerStats(longestName);
    debugger;
    if (stat['steals'] >=  mostSteal()){
        debugger;
        return `The person with the longest name, "${longestName}", steals a ton!`
    } else {
        return `No.`
    }
}
console.log(doesLongNameStealATon());