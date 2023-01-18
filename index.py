from flask import Flask, render_template, request, jsonify
import os
from io_dict import *
import threading

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('vote.html')

@app.route('/get_melodies', methods=['POST'])
def get_melodies():
	files = os.listdir('static/samples')
	return jsonify({'files': files})


@app.route('/insert', methods=['POST'])
def insert():
	musician = request.form['musician']
	song = request.form['source']
	similar_music = request.form['similar_music']
	melody = request.form['melody']
	harmony = request.form['harmony']
	rhythm = request.form['rhythm']
	genre = request.form['genre']
	emotions = request.form['emotions']
	creator = request.form['creator']
	rating = request.form['rating']

	if (not(creator!=0 and emotions!=0 and rating!=0 and
		(similar_music != 0 or (melody!=0 and harmony!=0 and rhythm!=0 and genre!=0)))):
		return jsonify({'data': 'Open Modal'})

	path = 'static/ratings/' + musician
	try:
		lock = threading.Lock()
		with lock:
			# Load save pkl file
			d = load_obj(path)
			d[song][0].append(similar_music)
			d[song][1].append(emotions)
			d[song][2].append(melody)
			d[song][3].append(harmony)
			d[song][4].append(rhythm)
			d[song][5].append(genre)
			d[song][6].append(creator)
			d[song][7].append(rating)
			save_obj(d, path)
		return jsonify({'data': 'Ok'})
	except Exception as e:
		return jsonify({'data': str(e) })

if __name__ == '__main__':
	app.run(debug=False, threaded=False)
