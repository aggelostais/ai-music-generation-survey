// Initialize the current question and total questions variables
let currentQuestion = 0;
const totalQuestions = 6;  
    		
// Select the progress bar, progress and percentage elements
const progressBar = document.querySelector('.progress');
const progress = progressBar.querySelector('.progress-moved .progress-bar');
const percentage = progressBar.querySelector('.percentage');

// Calculate the progress percentage
const progressPercent = (currentQuestion / totalQuestions) * 100;
// Update the width of the progress element
progress.style.width = `${progressPercent}%`;
// Update the text content of the percentage element
percentage.textContent = `${Math.round(progressPercent)}%`;


function playbtn(){
	if (audio.duration > 0 && !audio.paused){
		img.src = "static/images/play.png";
		audio.pause();
	}else{
		img.src = "static/images/pause.png";
		audio.play();
	}
}

function change_musician(){
	musician = document.querySelector('input[name="musician"]:checked').value;
	if (musician == "basic"){
		document.getElementById('m1').src = 'static/images/1b.png';
		document.getElementById('m5').src = 'static/images/5.png';
	}
	else {
		document.getElementById('m1').src = 'static/images/1.png';
		document.getElementById('m5').src = 'static/images/5b.png';
	}
}

function check_musician(){
	scale_check = document.querySelector('input[name="scale_check"]:checked').value;
	// Musician has not been selected
	if(musician==0) return;
	if (scale_check== "major"){
		musician='basic';
	}
	$('#Minor').prop("disabled", true);
	$('#Major').prop("disabled", true);
	$('#basic-mus').prop("disabled", true);
	$('#pro-mus').prop("disabled", true);
}

function change_creator(){
	creator = document.querySelector('input[name="creator"]:checked').value;
	if (creator == 2) {
		document.getElementById('human').src = 'static/images/humanw.png';
		document.getElementById('ai').src = 'static/images/computer.png';
	}
	else {
		document.getElementById('human').src = 'static/images/human.png';
		document.getElementById('ai').src = 'static/images/computerw.png';
	}
	make_enable();
}

function change_similar_music(){
	similar_music = document.querySelector('input[name="similar_music"]:checked').value;
	document.getElementById('s1').src = 'static/images/1w.png';
	document.getElementById('s2').src = 'static/images/2.png';
	document.getElementById('s3').src = 'static/images/3.png';
	document.getElementById('s4').src = 'static/images/4.png';
	document.getElementById('s5').src = 'static/images/5.png';
	if (similar_music > 1) document.getElementById('s2').src = 'static/images/2w.png';
	if (similar_music > 2) document.getElementById('s3').src = 'static/images/3w.png';
	if (similar_music > 3) document.getElementById('s4').src = 'static/images/4w.png';
	if (similar_music > 4) document.getElementById('s5').src = 'static/images/5w.png';
	make_enable();
}

function change_emotions(){
	emotions = document.querySelector('input[name="emotions"]:checked').value;
	document.getElementById('e1').src = 'static/images/1w.png';
	document.getElementById('e2').src = 'static/images/2.png';
	document.getElementById('e3').src = 'static/images/3.png';
	document.getElementById('e4').src = 'static/images/4.png';
	document.getElementById('e5').src = 'static/images/5.png';
	if (emotions > 1) document.getElementById('e2').src = 'static/images/2w.png';
	if (emotions > 2) document.getElementById('e3').src = 'static/images/3w.png';
	if (emotions > 3) document.getElementById('e4').src = 'static/images/4w.png';
	if (emotions > 4) document.getElementById('e5').src = 'static/images/5w.png';
	make_enable();
}

function change_melody(){
	melody = document.querySelector('input[name="melody"]:checked').value;
	document.getElementById('me1').src = 'static/images/1w.png';
	document.getElementById('me2').src = 'static/images/2.png';
	document.getElementById('me3').src = 'static/images/3.png';
	document.getElementById('me4').src = 'static/images/4.png';
	document.getElementById('me5').src = 'static/images/5.png';
	if (melody > 1) document.getElementById('me2').src = 'static/images/2w.png';
	if (melody > 2) document.getElementById('me3').src = 'static/images/3w.png';
	if (melody > 3) document.getElementById('me4').src = 'static/images/4w.png';
	if (melody > 4) document.getElementById('me5').src = 'static/images/5w.png';
	make_enable();
}

function change_harmony(){
	harmony = document.querySelector('input[name="harmony"]:checked').value;
	document.getElementById('h1').src = 'static/images/1w.png';
	document.getElementById('h2').src = 'static/images/2.png';
	document.getElementById('h3').src = 'static/images/3.png';
	document.getElementById('h4').src = 'static/images/4.png';
	document.getElementById('h5').src = 'static/images/5.png';
	if (harmony > 1) document.getElementById('h2').src = 'static/images/2w.png';
	if (harmony > 2) document.getElementById('h3').src = 'static/images/3w.png';
	if (harmony > 3) document.getElementById('h4').src = 'static/images/4w.png';
	if (harmony > 4) document.getElementById('h5').src = 'static/images/5w.png';
	make_enable();
}

function change_rhythm(){
	rhythm = document.querySelector('input[name="rhythm"]:checked').value;
	document.getElementById('rh1').src = 'static/images/1w.png';
	document.getElementById('rh2').src = 'static/images/2.png';
	document.getElementById('rh3').src = 'static/images/3.png';
	document.getElementById('rh4').src = 'static/images/4.png';
	document.getElementById('rh5').src = 'static/images/5.png';
	if (rhythm > 1) document.getElementById('rh2').src = 'static/images/2w.png';
	if (rhythm > 2) document.getElementById('rh3').src = 'static/images/3w.png';
	if (rhythm > 3) document.getElementById('rh4').src = 'static/images/4w.png';
	if (rhythm > 4) document.getElementById('rh5').src = 'static/images/5w.png';
	make_enable();
}

function change_genre(){
	genre = document.querySelector('input[name="genre"]:checked').value;
	document.getElementById('ge1').src = 'static/images/1w.png';
	document.getElementById('ge2').src = 'static/images/2.png';
	document.getElementById('ge3').src = 'static/images/3.png';
	document.getElementById('ge4').src = 'static/images/4.png';
	document.getElementById('ge5').src = 'static/images/5.png';
	if (genre > 1) document.getElementById('ge2').src = 'static/images/2w.png';
	if (genre > 2) document.getElementById('ge3').src = 'static/images/3w.png';
	if (genre > 3) document.getElementById('ge4').src = 'static/images/4w.png';
	if (genre > 4) document.getElementById('ge5').src = 'static/images/5w.png';
	make_enable();
}

function change_rating(){
	rating = document.querySelector('input[name="rating"]:checked').value;
	document.getElementById('r1').src = 'static/images/1w.png';
	document.getElementById('r2').src = 'static/images/2.png';
	document.getElementById('r3').src = 'static/images/3.png';
	document.getElementById('r4').src = 'static/images/4.png';
	document.getElementById('r5').src = 'static/images/5.png';
	if (rating > 1) document.getElementById('r2').src = 'static/images/2w.png';
	if (rating > 2) document.getElementById('r3').src = 'static/images/3w.png';
	if (rating > 3) document.getElementById('r4').src = 'static/images/4w.png';
	if (rating > 4) document.getElementById('r5').src = 'static/images/5w.png';
	make_enable();
}

setInterval(function(){ make_enable() }, 1000);
// 80% of song duration has to be played to allow to submit the answers
function make_enable(){
	if (audio.currentTime>audio.duration*0.8 && creator!=0 && emotions!=0 && rating!=0 && 
		(similar_music != 0 || (melody!=0 && harmony!=0 && rhythm!=0 && genre!=0))){
		$('#next').prop("disabled", false);
	}
}

function insert(){
	if (!(creator!=0 && emotions!=0 && rating!=0 && 
		(similar_music != 0 || (melody!=0 && harmony!=0 && rhythm!=0 && genre!=0))))
			return;
	$.ajax({
        data : {
        	'musician' : musician,
        	'source' : songs[0],
        	'creator' : creator,
        	'similar_music' : similar_music,
			'melody' : melody,
			'harmony': harmony,
			'rhythm': rhythm,
			'genre': genre,
        	'emotions' : emotions,
			'rating': rating
        },
        url: "/insert",
        type: "POST",
        success: function(resp){
        	console.log(resp.data);
        	if (resp.data === "Open Modal"){
	            $("#red").css("color","#8d0c0c");
	            $('#red').text("Just a small step and off we go!")
	            if (($("#myModal").data('bs.modal') || {}).isShown) $('#myModal').modal('hide');
	            if (($("#myModal2").data('bs.modal') || {}).isShown) $('#myModal2').modal('hide');
	            if (($("#myModal3").data('bs.modal') || {}).isShown) $('#myModal3').modal('hide'); 
		        setTimeout(function (){
					$('#myModal3').modal('show'); 
					}, 200);
	            playbtn()
	            return;
        	}
        	playbtn();
			$.ajax({
				data : {
					'sample' : songs[0]
				},
				url: "/download_sample",
				type: "POST",
				async: false,
				success: function(resp){
					audio.src = resp.link;
					songs.shift();
				}
			});

		    $('#next').prop("disabled", true);
		    document.getElementById('human').src = 'static/images/human.png';
			document.getElementById('ai').src = 'static/images/computer.png';

			document.getElementById('s1').src = 'static/images/1.png';
		    document.getElementById('s2').src = 'static/images/2.png';
			document.getElementById('s3').src = 'static/images/3.png';
			document.getElementById('s4').src = 'static/images/4.png';
			document.getElementById('s5').src = 'static/images/5.png';

			document.getElementById('e1').src = 'static/images/1.png';
		    document.getElementById('e2').src = 'static/images/2.png';
			document.getElementById('e3').src = 'static/images/3.png';
			document.getElementById('e4').src = 'static/images/4.png';
			document.getElementById('e5').src = 'static/images/5.png';

			document.getElementById('r1').src = 'static/images/1.png';
		    document.getElementById('r2').src = 'static/images/2.png';
			document.getElementById('r3').src = 'static/images/3.png';
			document.getElementById('r4').src = 'static/images/4.png';
			document.getElementById('r5').src = 'static/images/5.png';

			document.getElementById('me1').src = 'static/images/1.png';
		    document.getElementById('me2').src = 'static/images/2.png';
			document.getElementById('me3').src = 'static/images/3.png';
			document.getElementById('me4').src = 'static/images/4.png';
			document.getElementById('me5').src = 'static/images/5.png';

			document.getElementById('h1').src = 'static/images/1.png';
		    document.getElementById('h2').src = 'static/images/2.png';
			document.getElementById('h3').src = 'static/images/3.png';
			document.getElementById('h4').src = 'static/images/4.png';
			document.getElementById('h5').src = 'static/images/5.png';

			document.getElementById('rh1').src = 'static/images/1.png';
		    document.getElementById('rh2').src = 'static/images/2.png';
			document.getElementById('rh3').src = 'static/images/3.png';
			document.getElementById('rh4').src = 'static/images/4.png';
			document.getElementById('rh5').src = 'static/images/5.png';

			document.getElementById('ge1').src = 'static/images/1.png';
		    document.getElementById('ge2').src = 'static/images/2.png';
			document.getElementById('ge3').src = 'static/images/3.png';
			document.getElementById('ge4').src = 'static/images/4.png';
			document.getElementById('ge5').src = 'static/images/5.png';

			creator = 0;
			similar_music = 0;
			melody = 0;
			harmony = 0;
			rhythm = 0;
			genre = 0;
			emotions = 0;
			rating=0;
			setTimeout(function (){
				playbtn();
				}, 200);

			// Increment the current question
			currentQuestion++;
			// Calculate the progress percentage
			const progressPercent = (currentQuestion / totalQuestions) * 100;
			// Update the width of the progress element
			progress.style.width = `${progressPercent}%`;
			// Update the text content of the percentage element
			percentage.textContent = `${Math.round(progressPercent)}%`;

        }
		
    });
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
