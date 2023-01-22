from flask import Flask, render_template, request, jsonify
from io_dict import *
import threading
import firebase

# Set up Firebase Storage
config = {
  'apiKey': "",
  'authDomain': "",
  'projectId': "",
  'storageBucket': "",
  'messagingSenderId': "",
  'appId': "",
  'measurementId': "",
  'databaseURL': "",
  "serviceAccount": ""
}

firebase = firebase.initialize_app(config)
storage = firebase.storage()

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('vote.html')

@app.route('/get_melodies', methods=['POST'])
def get_melodies():
	with open('static/samples/samples-list.pkl', 'rb') as f:
		files=pickle.load(f)
	return jsonify({'files': files})

# Return requested sample link from Firebase Storage
@app.route('/download_sample', methods=['POST'])
def download_sample():
	try:
		sample=request.form['sample']
		return jsonify(link=storage.child('samples/ '+sample).get_url())
	except Exception as e:
		return jsonify({'result': str(e) })

@app.route('/insert', methods=['POST'])
def insert():
	musician = request.form['musician']
	song = request.form['source']
	similar_music = request.form['similar_music']
	genre = request.form['genre']
	melody = request.form['melody']
	harmony = request.form['harmony']
	rhythm = request.form['rhythm']
	emotions = request.form['emotions']
	creator = request.form['creator']
	rating = request.form['rating']

	if (not(creator!=0 and emotions!=0 and rating!=0 and
		(similar_music != 0 or (melody!=0 and harmony!=0 and rhythm!=0 and genre!=0)))):
		return jsonify({'data': 'Open Modal'})

	# They would have null values
	if(musician=='basic'):
		melody=0
		harmony=0 
		rhythm=0
		genre=0
	else:
		similar_music=0
	
	try:
		lock = threading.Lock()
		with lock:
			# Load ratings pkl file from firebase storage
			storage.child('ratings/'+musician+".pkl").download("/tmp/"+musician+".pkl")
			print(song)
			path = '/tmp/' + musician
			d = load_obj(path)
			d[song][0].append(int(similar_music))
			d[song][1].append(int(emotions))
			d[song][2].append(int(melody))
			d[song][3].append(int(harmony))
			d[song][4].append(int(rhythm))
			d[song][5].append(int(genre))
			d[song][6].append(int(creator))
			d[song][7].append(int(rating))
			save_obj(d, path)
			storage.child('ratings/'+musician+".pkl").put("/tmp/"+musician+".pkl")
			print(d[song])
		return jsonify({'data': 'Ok'})
	
	except Exception as e:
		return jsonify({'data': str(e) })

if __name__ == '__main__':
	app.run(debug=False, threaded=False)
