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

> [!IMPORTANT]
> **Missing Champion Images**: The following new champions need their portrait images downloaded manually:
> - Ambessa.png
> - Aurora.png
> - Mel.png
> - Yunara.png (if officially released)
> - Zaheen.png (if officially released)
>
> **How to add images:**
> 1. Download champion icons from Riot's Data Dragon: `https://ddragon.leagueoflegends.com/cdn/[version]/img/champion/[ChampionName].png`
> 2. Get latest version from: `https://ddragon.leagueoflegends.com/api/versions.json`
> 3. Save as 50x50px PNG files in `public/img/` directory
> 4. Use exact champion name (e.g., `Aurora.png`, `Ambessa.png`, `Mel.png`)

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

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
