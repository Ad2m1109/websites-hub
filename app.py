from flask import Flask, send_from_directory
app = Flask(__name__)

# Corrected routes with leading slashes
@app.route('/Harmonia')
def show_harmonia():
    return send_from_directory('Harmonia', 'index.html')

@app.route('/mp3-mp4-converter')  # Added slash and hyphens
def show_converter():
    return send_from_directory('MP3-MP4-Converter', 'index.html')

@app.route('/california-housing')  # Added slash and hyphens
def show_housing():
    return send_from_directory('California-Housing-Price', 'index.html')

@app.route('/')
def home():
    return "Welcome! Access /Harmonia, /mp3-mp4-converter, or /california-housing", 200

if __name__ == '__main__':
    app.run()