from flask import Flask, send_from_directory
app = Flask(__name__)

# Serve Harmonia's website
@app.route('/Harmonia')
def show_harmonia():
    return send_from_directory('Harmonia', 'index.html')

@app.route("MP3-MP4-Converter")
def show_converter():
    return send_from_directory('MP3-MP4-Converter', 'index.html')

@app.route("California Housing Price")
def show_housing():
    return send_from_directory('California Housing Price', 'index.html')
# Optional: Welcome message at root
@app.route('/')
def home():
    return "Welcome to my Projects Hub! Access /project name", 200

if __name__ == '__main__':
    app.run()