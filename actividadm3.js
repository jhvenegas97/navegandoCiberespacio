(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"actividadm3_atlas_", frames: [[1492,936,307,239],[1282,419,303,267],[0,1026,263,138],[1587,419,330,239],[1587,660,273,274],[1282,0,626,417],[0,0,1280,720],[0,722,1490,302]]}
];


// symbols:



(lib.actividades = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ayuda = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(img.CachedTexturedBitmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4107,2315);


(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(img.CachedTexturedBitmap_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3273,2024);


(lib.continuar = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.historia = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.inicio = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sopadeletras = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.títuloTecnicasAtacantes = function() {
	this.initialize(ss["actividadm3_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.inicio();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6175,0.6175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Inicio, new cjs.Rectangle(0,0,168.6,169.2), null);


(lib.Historia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.historia();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5225,0.5225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Historia, new cjs.Rectangle(0,0,172.4,124.9), null);


(lib.FondoBlanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-0.95,-0.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoBlanco, new cjs.Rectangle(-0.9,-0.9,1091,674.6), null);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo, new cjs.Rectangle(0,0,1369,771.7), null);


(lib.my_youtube = function(options) {
	this._element = new $.my.youtube(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Continuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.continuar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.26,1.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Continuar, new cjs.Rectangle(0,0,331.4,173.9), null);


(lib.Ayuda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ayuda();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ayuda, new cjs.Rectangle(0,0,172.7,152.2), null);


(lib.Actividades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.actividades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Actividades, new cjs.Rectangle(0,0,198.3,154.4), null);


// stage content:
(lib.actividadm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		
		this.stop();
		
		var sombraTexto = 5;
		
		var parpadearContinuarIniTick = parpadearContinuarIni.bind(this);
		
		this.continuarIni.addEventListener('tick', parpadearContinuarIniTick);
		
		function parpadearContinuarIni(){
			if(sombraTexto>= 5 && sombraTexto<25){
				raiz.continuarIni.shadow = new createjs.Shadow("#000000", 6, 6, sombraTexto);
				sombraTexto++;
			}
			else if(sombraTexto>=25 && sombraTexto<45){
				raiz.continuarIni.shadow = new createjs.Shadow("#000000", 6, 6,49-sombraTexto);
				sombraTexto++;
				//console.log(sombra);
			}
			if(sombraTexto == 45)
				sombraTexto = 5;
		}
		
		this.inicio.addEventListener("click", function(){moverse(raiz.inicio)});
		this.actividades.addEventListener("click", function(){moverse(raiz.actividades)});
		this.historia.addEventListener("click", function(){moverse(raiz.historia)});
		this.ayuda.addEventListener("click", function(){moverse(raiz.ayuda)});
		this.continuar.addEventListener("click", function(){moverse(raiz.continuar)});
		this.continuarIni.addEventListener("click", function(){moverse(raiz.continuarIni)});
		
		//Control de la pantalla informativa
		var contadorTiempo = 0;
		
		var tiempoPantalla = tiempo.bind(this);
		
		function tiempo(){
			contadorTiempo++;
			if(contadorTiempo>180){
				contadorTiempo=0;
				this.gotoAndPlay(2);
				this.removeEventListener('tick', tiempoPantalla);
			}
		}
		
		function moverse(e){
			switch(e.name){
				case "inicio":
					window.open("./inicio.html", "_self");
					break;
				case "historia":
					window.open("./contenidosm3.html", "_self");
					break;
				case "actividades":
					window.open("./actividadm3.html", "_self");
					break;
				case "ayuda":
					window.open("./ayudam3.html", "_self");
					break;
				case "continuar":
					window.open("./actividadm4.html", "_self");
					break;
				case "continuarIni":
					raiz.addEventListener('tick', tiempoPantalla);
					instanciaAudioFondo = createjs.Sound.createInstance(fondo);
					instanciaAudioFondo.volume = 0.3;
					instanciaAudioFondo.play({interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
					raiz.gotoAndStop(1);
					break;
			}
			
		}
		
		stage.enableMouseOver();
		
		this.inicio.addEventListener("mouseover",function(){maximizar(raiz.inicio)});
		this.inicio.addEventListener("mouseout",function(){normal(raiz.inicio)});
		
		this.historia.addEventListener("mouseover",function(){maximizar(raiz.historia)});
		this.historia.addEventListener("mouseout",function(){normal(raiz.historia)});
		
		this.actividades.addEventListener("mouseover",function(){maximizar(raiz.actividades)});
		this.actividades.addEventListener("mouseout",function(){normal(raiz.actividades)});
		
		this.ayuda.addEventListener("mouseover",function(){maximizar(raiz.ayuda)});
		this.ayuda.addEventListener("mouseout",function(){normal(raiz.ayuda)});
		
		this.continuar.addEventListener("mouseover",function(){maximizar(raiz.continuar)});
		this.continuar.addEventListener("mouseout",function(){normal(raiz.continuar)});
		
		this.continuarIni.addEventListener("mouseover",function(){maximizar(raiz.continuarIni)});
		this.continuarIni.addEventListener("mouseout",function(){normal(raiz.continuarIni)});
		
		
		
		var fondo = "fondo";
		var campana = "campana";
		var arrPirata = "arrPirata";
		var monedas = "monedas";
		var relojtictac = "relojtictac";
		var recogerMoneda = "recogerMoneda";
		var instrucciones = "instrucciones";
		var continuar = "beep08";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"./sounds/campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"./sounds/arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"./sounds/monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"./sounds/relojtictac.mp3"});
		createjs.Sound.registerSound({id:"recogerMoneda",src:"./sounds/recogerMoneda.mp3"});
		createjs.Sound.registerSound({id:"instrucciones",src:"./sounds/instrucciones.mp3"});
		createjs.Sound.registerSound({id:"beep08",src:"./sounds/beep08.mp3"});
		
		function maximizar(e){
		
			if(e.name == "continuar"){
				e.scaleX = 0.45;
				e.scaleY = 0.45;
			}
			else if(e.name == "continuarIni"){
				e.scaleX = 1.25;
				e.scaleY = 1.25;
			}
			else{
				e.scaleX = 1.1;
				e.scaleY = 1.1;
			}
			e.shadow = new createjs.Shadow("#000000", 10, 8, 10);
			switch(e.name){
				case "inicio":
					instanciaAudio = createjs.Sound.createInstance(campana);	
					instanciaAudio.play();
					break;
				case "historia":
					instanciaAudio = createjs.Sound.createInstance(arrPirata);
					instanciaAudio.play();
					break;
				case "actividades":
					instanciaAudio = createjs.Sound.createInstance(monedas);
					instanciaAudio.play();
					break;
				case "ayuda":
					instanciaAudio = createjs.Sound.createInstance(relojtictac);
					instanciaAudio.play();
					break;
				case "continuar":
					instanciaAudio = createjs.Sound.createInstance(continuar);
					instanciaAudio.play();
					break;
				case "continuarIni":
					instanciaAudio = createjs.Sound.createInstance(continuar);
					instanciaAudio.play();
					break;
			}
			//console.log(e.name);
		}
		
		function normal(e){
			if(e.name == "continuar"){
				e.scaleX = 0.4;
				e.scaleY = 0.4;
			}
			else if(e.name = "continuarIni"){
				e.scaleX = 1.15;
				e.scaleY = 1.15;
			}
			else{
				e.scaleX = 1;
				e.scaleY = 1;
			}
			e.shadow = null;
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(1));

	// PantallaInformativa
	this.instance = new lib.sopadeletras();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,1.07,1.07);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(24));

	// BotonContinuar
	this.continuarIni = new lib.Continuar();
	this.continuarIni.name = "continuarIni";
	this.continuarIni.parent = this;
	this.continuarIni.setTransform(739,530.85,1.15,1.15,0,0,0,165.8,87);

	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(1252.7,675.25,0.42,0.42,0,0,0,165.8,86.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.continuarIni}]}).to({state:[]},1).to({state:[{t:this.continuar}]},1).wait(24));

	// Titulo
	this.instance_1 = new lib.títuloTecnicasAtacantes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(483,29,0.43,0.43);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(24));

	// Iframe
	this.instance_2 = new lib.my_youtube({'id': 'instance_2', 'src':'http://buhoinformatico.com/sopaletras/', 'alt':'youtube video', 'frameborder':'0', 'allowfullscreen':'allowfullscreen', 'visible':true, 'class':'ui-youtube'});

	this.instance_2.setTransform(709.9,413.6,9.0977,5.9598,0,0,0,48.7,50.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(24));

	// Inicio
	this.inicio = new lib.Inicio();
	this.inicio.name = "inicio";
	this.inicio.parent = this;
	this.inicio.setTransform(-92.8,131.6,1,1,0,0,0,84.2,84.6);
	this.inicio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(2).to({_off:false},0).wait(1).to({regX:84.3,x:-12.1},0).wait(1).to({x:66.1},0).wait(1).to({x:125.3},0).wait(21));

	// Historia
	this.historia = new lib.Historia();
	this.historia.name = "historia";
	this.historia.parent = this;
	this.historia.setTransform(-96.8,300.4,1,1,0,0,0,86.2,62.4);
	this.historia._off = true;

	this.timeline.addTween(cjs.Tween.get(this.historia).wait(2).to({_off:false},0).wait(1).to({x:-60},0).wait(1).to({x:-24.25},0).wait(1).to({x:10.35},0).wait(1).to({x:43.9},0).wait(1).to({x:76.35},0).wait(1).to({x:107.7},0).wait(1).to({x:127.2},0).wait(17));

	// Actividades
	this.actividades = new lib.Actividades();
	this.actividades.name = "actividades";
	this.actividades.parent = this;
	this.actividades.setTransform(-107.8,471.2,1,1,0,0,0,99.2,77.2);
	this.actividades._off = true;

	this.timeline.addTween(cjs.Tween.get(this.actividades).wait(2).to({_off:false},0).wait(1).to({x:-82.75},0).wait(1).to({x:-58.45},0).wait(1).to({x:-34.9},0).wait(1).to({x:-12.1},0).wait(1).to({x:10},0).wait(1).to({x:31.35},0).wait(1).to({x:51.95},0).wait(1).to({x:71.8},0).wait(1).to({x:90.95},0).wait(1).to({x:109.3},0).wait(1).to({x:126.95},0).wait(1).to({x:129.2},0).wait(12));

	// Ayuda
	this.ayuda = new lib.Ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.parent = this;
	this.ayuda.setTransform(-108.6,646.1,1,1,0,0,0,86.4,76.1);
	this.ayuda._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(2).to({_off:false},0).wait(1).to({regX:86.3,x:-90.3},0).wait(1).to({x:-72.5},0).wait(1).to({x:-55.2},0).wait(1).to({x:-38.45},0).wait(1).to({x:-22.25},0).wait(1).to({x:-6.6},0).wait(1).to({x:8.5},0).wait(1).to({x:23.1},0).wait(1).to({x:37.15},0).wait(1).to({x:50.65},0).wait(1).to({x:63.6},0).wait(1).to({x:76},0).wait(1).to({x:87.85},0).wait(1).to({x:99.2},0).wait(1).to({x:110},0).wait(1).to({x:120.25},0).wait(1).to({x:127.3},0).wait(7));

	// FondoBlanco
	this.instance_3 = new lib.FondoBlanco();
	this.instance_3.parent = this;
	this.instance_3.setTransform(791,385.9,1,1,0,0,0,544.5,336.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(24));

	// TextoContinuar
	this.text = new cjs.Text("Haz clic para continuar", "96px 'Berlin Sans FB'", "#FFCC00");
	this.text.lineHeight = 105;
	this.text.parent = this;
	this.text.setTransform(269.8,164.8);
	this.text.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(25));

	// FondoAzul
	this.instance_4 = new lib.Fondo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(682.9,385.8,1,1,0,0,0,684.5,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1).to({_off:false},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,383,892.5999999999999,388.70000000000005);
// library properties:
lib.properties = {
	id: '7E109F3DC2B3534FB2E8D4C490340531',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1.png?1599163715697", id:"CachedTexturedBitmap_1"},
		{src:"images/CachedTexturedBitmap_2.png?1599163715697", id:"CachedTexturedBitmap_2"},
		{src:"images/actividadm3_atlas_.png?1599163715673", id:"actividadm3_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1599163715697", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1599163715697", id:"sdk/anwidget.js"},
		{src:"components/mycomponents/src/myyoutube.js?1599163715697", id:"my.youtube"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7E109F3DC2B3534FB2E8D4C490340531'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;