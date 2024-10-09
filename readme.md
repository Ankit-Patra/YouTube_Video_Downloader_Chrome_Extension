# YouTube Video Downloader Chrome Extension

## Overview
A Chrome extension that enables direct YouTube video downloads through your browser. This project combines a Chrome extension frontend with a Flask backend server that leverages `yt-dlp` for reliable video downloading. Features a modern dark theme UI for enhanced user experience.

## Features
- 🔄 Automatic URL detection when visiting YouTube videos
- ⚡ Fast downloads powered by `yt-dlp`
- 🎨 Modern, dark-themed user interface
- 📋 Multiple video quality options
- 🔔 Download progress indicators

## Project Structure
```
/video_downloader
├── /extension
│   ├── manifest.json    # Extension configuration
│   ├── popup.html       # Extension UI
│   ├── popup.js         # UI logic
│   ├── background.js    # Background processes
│   └── style.css        # UI styling
├── /server
│   ├── app.py           # Flask server
│   ├── requirements.txt # Python dependencies
│   └── /downloads       # Download directory
└── README.md
```

## Installation

### Prerequisites
- Python 3.7 or higher
- Google Chrome browser

### Server Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/video_downloader.git
   cd video_downloader/server
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the server:
   ```bash
   python app.py
   ```

### Extension Setup
1. Open Google Chrome
2. Go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the `extension` folder from the cloned repository

## Usage
1. Navigate to any YouTube video
2. Click the extension icon in your browser toolbar
3. Select your preferred video quality
4. Click "Download"
5. Find your downloaded video in the `server/downloads` directory

## Development

### Server
The Flask server handles:
- Video information retrieval
- Download processing
- File management

To modify the server:
1. Update `app.py` with your changes
2. Restart the server to apply changes

### Extension
The Chrome extension manages:
- User interface
- URL detection
- Communication with the server

To modify the extension:
1. Update relevant files in the `extension` directory
2. Refresh the extension in `chrome://extensions/`

## Troubleshooting
- **Server not responding**: Ensure the Flask server is running on `http://localhost:5000`
- **Download fails**: Check server logs for errors and verify `yt-dlp` is up to date
- **Extension not working**: Try refreshing or reinstalling the extension


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) for video downloading capabilities
- [Flask](https://flask.palletsprojects.com/) for the server framework

---
