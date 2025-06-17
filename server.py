from flask import Flask, send_from_directory
app = Flask(__name__)

# Serve Harmonia's website
@app.route('/Harmonia')
def show_project():
    return send_from_directory('Harmonia', 'index.html')

# Optional: Welcome message at root
@app.route('/')
def home():
    return "Welcome to my Projects Hub! Access /Harmonia", 200

if __name__ == '__main__':
    app.run()