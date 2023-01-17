var flag= true;

function playbtn(){
	if (flag) change_melodies();
	if (audio.duration > 0 && !audio.paused){
		img.src = "static/images/play.png";
		audio.pause();
	}else{
		img.src = "static/images/pause.png";
		audio.play();
	}
}

function change(){
	img.src = 'static/images/play.png';
	audio.pause();
	flag = true;
}

var global_prefix;
var global_possible_songs = [];

function change_melodies(){
    img.src = "static/images/play.png";
    audio.pause();
    var model = document.querySelector('input[name="toggle_option"]:checked').value;
	var prm = document.querySelector('input[name="toggle_option_prm"]:checked').value;
	var dataset = document.querySelector('input[name="toggle_option_dts"]:checked').value;
	var balanced = document.querySelector('input[name="toggle_option_balanced"]:checked').value;
	var init = document.querySelector('input[name="toggle_option_init"]:checked').value;
	prefix = model+ dataset + balanced +init + prm;
	if (prefix != global_prefix || global_possible_songs.length == 0){
			global_possible_songs = get_melodies(prefix);
			if (global_possible_songs.length == 0){
				global_possible_songs = get_melodies("APIP512");
			} 
			global_possible_songs = shuffle(global_possible_songs);
			global_prefix = prefix;
	}
	source = 'static/samples/' + global_possible_songs[0];
	audio.src = source;
	global_possible_songs.shift();
	flag = false;
	document.getElementById("download").href= source; 
}

function get_melodies(prefix){
    var possible_songs= []
	for (i=0; i < files.length; i ++){
	    if (files[i].split("_")[0] == prefix) possible_songs.push(files[i]);
    }
    return (shuffle(possible_songs));
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
