from flask import Flask, send_from_directory, abort, request
import os

app = Flask(__name__)
# Specific routes for backward compatibility
@app.route('/Harmonia')
def harmonia_redirect():
    return send_from_directory('Harmonia', 'index.html')

@app.route('/mp3-mp4-converter')
def converter_redirect():
    return send_from_directory('MP3-MP4-Converter', 'index.html')

@app.route('/california-housing')
def housing_redirect():
    return send_from_directory('California-Housing-Price', 'index.html')

@app.route('/')
def home():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Projects Portfolio</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .project { margin: 20px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .project h3 { margin-top: 0; color: #333; }
            .project a { color: #0066cc; text-decoration: none; font-weight: bold; }
            .project a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <h1>Welcome to My Projects Portfolio</h1>
        <div class="project">
            <h3>🧠 Harmonia - Alzheimer's Support App</h3>
            <p>A privacy-first Flutter app designed to help Alzheimer's patients maintain independence.</p>
            <a href="/Harmonia">View Project →</a>
        </div>
        <div class="project">
            <h3>🎵 MP3/MP4 Converter</h3>
            <p>Convert between MP3 and MP4 formats easily.</p>
            <a href="/mp3-mp4-converter">View Project →</a>
        </div>
        <div class="project">
            <h3>🏠 California Housing Price Predictor</h3>
            <p>Predict housing prices using machine learning.</p>
            <a href="/california-housing">View Project →</a>
        </div>
    </body>
    </html>
    """, 200

if __name__ == '__main__':
    app.run(debug=True)