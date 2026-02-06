# LoL Random Champion Selector

A simple and user-friendly web application for selecting random League of Legends champions using Socket.IO and Vue.js, built for real-time team-based champion drafting.

## 🎮 Features

- **Real-time Communication**: Instant bi-directional communication using Socket.IO
- **Team-Based Selection**: Separate random champion selection for two teams
- **Visual Interface**: Rich visual experience with champion avatars  
- **No Duplicates**: Selected champions cannot be picked again
- **Responsive Design**: Modern and user-friendly interface
- **172 Champions**: Complete roster including all 2026 champions (Aurora, Ambessa, Mel, Yunara, Zaheen)

## 🚀 Installation

To run the project on your local machine:

```bash
# Clone the repository
git clone https://github.com/anilsolmaz/LOL-Random-Picker.git

# Navigate to project directory
cd LOL-Random-Picker

# Install dependencies
npm install

# Start development server
npm run dev
```

## 💻 Usage

1. Open `http://localhost:5000` in your web browser
2. Set the number of champions per team
3. Click "Add Random Champion" for each team
4. Use the "Reset" button to clear selections

## 🖼️ Champion Images

All champion portrait images are sourced from **[Community Dragon](https://www.communitydragon.org/)**, a community-driven CDN for League of Legends assets.

**Latest Champions (2024-2026):**
- ✅ Ambessa (ID: 799)
- ✅ Aurora (ID: 893)
- ✅ Mel (ID: 800)
- ✅ Yunara (ID: 804)
- ✅ Zaheen (ID: 950)

**Download URL Format:**
```
https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/{championId}.png
```

## 🛠️ Technologies

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: Vue.js 2, HTML5, CSS3
- **Dev Tools**: Nodemon

## 📝 Commands

```bash
# Run in production mode
npm start

# Run in development mode (auto-restart)
npm run dev
```

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 🙏 Credits

- **Champion Images**: [Community Dragon](https://www.communitydragon.org/) - Community-driven CDN for LoL assets
- **Game Data**: League of Legends® and all related content © Riot Games, Inc.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
