from flask import Flask, send_from_directory, url_for
import os

app = Flask(__name__)

# Routes for main pages
@app.route('/Harmonia')
def show_harmonia():
    return send_from_directory('Harmonia', 'index.html')

@app.route('/mp3-mp4-converter')
def show_converter():
    return send_from_directory('MP3-MP4-Converter', 'index.html')

@app.route('/california-housing')
def show_housing():
    return send_from_directory('California-Housing-Price', 'index.html')

# Routes for serving static files (CSS, JS, images)
@app.route('/Harmonia/<path:filename>')
def harmonia_static(filename):
    return send_from_directory('Harmonia', filename)

@app.route('/MP3-MP4-Converter/<path:filename>')
def converter_static(filename):
    return send_from_directory('MP3-MP4-Converter', filename)

@app.route('/California-Housing-Price/<path:filename>')
def housing_static(filename):
    return send_from_directory('California-Housing-Price', filename)

@app.route('/')
def home():
    return "Welcome! Access /Harmonia, /mp3-mp4-converter, or /california-housing", 200

if __name__ == '__main__':
    app.run(debug=True)