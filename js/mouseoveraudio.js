var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.play()
		}
		html5audio.pauseclip=function(){
			//html5audio.pause()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

var poca=createsoundbite("audio/Karloff.mp3");
var roed=createsoundbite("audio/Trussi.mp3");
var cock=createsoundbite("audio/Cockalot.mp3");
var Moffa=createsoundbite("audio/Moffa.mp3");
var tinder=createsoundbite("audio/Tinderella.mp3");
var skraev=createsoundbite("audio/Skraev.mp3");
var peter=createsoundbite("audio/Spul.mp3");
var piki=createsoundbite("audio/Piki.mp3");
var savfruen=createsoundbite("audio/Savfruen.mp3");
var lokke=createsoundbite("audio/Hansi.mp3");
var feer=createsoundbite("audio/Feerne.mp3");
