from flask import Flask, send_from_directory, abort
import os
from urllib.parse import unquote
import mimetypes

app = Flask(__name__)
mimetypes.add_type('image/webp', '.webp')
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
@app.route('/Harmonia')
def harmonia_redirect():
    harmonia_path = os.path.join(BASE_DIR, 'Harmonia', 'index.html')
    if os.path.exists(harmonia_path):
        return send_from_directory(os.path.join(BASE_DIR, 'Harmonia'), 'index.html')
    abort(404)

@app.route('/Harmonia/<path:filename>')
def harmonia_static(filename):
    try:
        decoded_filename = unquote(filename)
        directory = os.path.join(BASE_DIR, 'Harmonia')
        return send_from_directory(directory, decoded_filename)
    except:
        abort(404)
@app.route('/MP3-MP4-Converter')
def converter_redirect():
    try:
        return send_from_directory(os.path.join(BASE_DIR, 'MP3-MP4-Converter'), 'index.html')
    except FileNotFoundError:
        abort(404)
@app.route('/California-Housing-Price')
def housing_redirect():
    try:
        return send_from_directory(os.path.join(BASE_DIR, 'California-Housing-Price'), 'index.html')
    except FileNotFoundError:
        abort(404)
@app.route('/')
def home():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Projects Portfolio</title>
        <style>
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                margin: 0; 
                padding: 40px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                color: white;
            }
            .container {
                max-width: 1000px;
                margin: 0 auto;
            }
            h1 {
                text-align: center;
                font-size: 2.5rem;
                margin-bottom: 2rem;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 2rem;
            }
            .project { 
                background: rgba(255,255,255,0.1);
                padding: 2rem;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .project:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }
            .project h3 { 
                margin-top: 0; 
                color: #fff;
                font-size: 1.4rem;
                margin-bottom: 1rem;
            }
            .project p {
                color: rgba(255,255,255,0.9);
                line-height: 1.6;
                margin-bottom: 1.5rem;
            }
            .project a { 
                color: #4fc3f7;
                text-decoration: none; 
                font-weight: bold;
                padding: 0.8rem 1.5rem;
                background: rgba(79,195,247,0.2);
                border-radius: 25px;
                border: 2px solid #4fc3f7;
                display: inline-block;
                transition: all 0.3s ease;
            }
            .project a:hover { 
                background: #4fc3f7;
                color: white;
                transform: scale(1.05);
            }
            .emoji {
                font-size: 2rem;
                margin-right: 0.5rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 My Projects Portfolio</h1>
            <div class="projects-grid">
                <div class="project">
                    <h3><span class="emoji">🧠</span>Harmonia - Alzheimer's Support App</h3>
                    <p>A privacy-first Flutter app designed to help Alzheimer's patients maintain independence with smart reminders, family profiles, and emergency features.</p>
                    <a href="/Harmonia">View Project →</a>
                </div>
                <div class="project">
                    <h3><span class="emoji">🎵</span>MP3/MP4 Converter</h3>
                    <p>Convert between MP3 and MP4 formats easily with a user-friendly web interface.</p>
                    <a href="/MP3-MP4-Converter">View Project →</a>
                </div>
                <div class="project">
                    <h3><span class="emoji">🏠</span>California Housing Price Predictor</h3>
                    <p>Predict housing prices using machine learning algorithms and data analysis.</p>
                    <a href="/California-Housing-Price">View Project →</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    """, 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)