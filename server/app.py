from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask-cors
import yt_dlp
import os

app = Flask(__name__)
CORS(app)  # Enable CORS
DOWNLOAD_FOLDER = '../downloads'

# Create the downloads folder if it doesn't exist
if not os.path.exists(DOWNLOAD_FOLDER):
    os.makedirs(DOWNLOAD_FOLDER)




@app.route('/download', methods=['POST'])
def download_video():
    data = request.get_json()
    video_url = data.get('url')

    if not video_url:
        return jsonify(success=False, error="No video URL provided"), 400

    ydl_opts = {
    'format': 'bestvideo+bestaudio/best',  # Download best video and best audio
    'outtmpl': os.path.join(DOWNLOAD_FOLDER, '%(title)s.%(ext)s'),
    'merge_output_format': 'mp4',  # Merge video and audio into mp4
    'verbose': True,
}

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])
        return jsonify(success=True)
    except Exception as e:
        return jsonify(success=False, error=str(e))

if __name__ == '__main__':
    app.run(port=5000)
