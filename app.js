const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Initialize team data
let teamData = {
    teamSize: 0,
    team1Members: [],
    team2Members: []
};

// Handle setting team size
function setChampionsPerTeam(championsPerTeam) {
    teamData.teamSize = championsPerTeam;
    io.emit('teamsVisible', championsPerTeam);
}

// Handle selecting a random champion for a team
function getRandomChampion(team) {
    const availableChampions = getAvailableChampions();
    if (availableChampions.length === 0) {
        io.emit('randomChampion', { champion: null });
        return;
    }
    const randomIndex = Math.floor(Math.random() * availableChampions.length);
    const selectedChampion = availableChampions[randomIndex];
    if (team === 'team1' && teamData.team1Members.length < teamData.teamSize) {
        teamData.team1Members.push(selectedChampion);
    } else if (team === 'team2' && teamData.team2Members.length < teamData.teamSize) {
        teamData.team2Members.push(selectedChampion);
    }
    io.emit('randomChampion', { champion: selectedChampion, team1Members: teamData.team1Members, team2Members: teamData.team2Members });
}

// Handle resetting selections
function resetSelections() {
    teamData.teamSize = 0;
    teamData.team1Members = [];
    teamData.team2Members = [];
    io.emit('selectionsReset'); // Emit event to all clients
}

// Get available champions not yet selected
function getAvailableChampions() {
    const allChampions = [
        "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol",
        "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki",
        "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora",
        "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger",
        "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista",
        "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled",
        "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite",
        "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus",
        "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke",
        "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven",
        "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed",
        "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon",
        "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot",
        "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah",
        "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra",
        "Akshan", "Briar", "Bel'Veth", "Hwei", "K'Sante", "Milio", "Naafiri", "Nilah", "Smolder", "Vex", "Viego"
    ];
    let selectedChampions = [...teamData.team1Members, ...teamData.team2Members];
    return allChampions.filter(champion => !selectedChampions.includes(champion));
}

// Handle getting picked champions
function getPickedChampions() {
    io.emit('pickedChampions', { team1Members: teamData.team1Members, team2Members: teamData.team2Members });
}

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for setting team size
    socket.on('setChampionsPerTeam', setChampionsPerTeam);

    // Listen for selecting a random champion for a team
    socket.on('getRandomChampion', getRandomChampion);

    // Listen for resetting selections
    socket.on('resetSelections', resetSelections);

    // Listen for getting picked champions
    socket.on('getPickedChampions', getPickedChampions);

    // Listen for checking team size
    socket.on('checkTeamSize', () => {
        if (teamData.teamSize > 0) {
            socket.emit('teamSize', teamData.teamSize);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});