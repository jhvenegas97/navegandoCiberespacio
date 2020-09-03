(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ayudam2_atlas_", frames: [[275,1041,307,239],[628,622,303,267],[628,891,330,239],[0,1041,273,274],[0,622,626,417],[0,0,1009,620]]}
];


// symbols:



(lib.actividades = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ayuda = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_522 = function() {
	this.initialize(img.CachedTexturedBitmap_522);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2738,1543);


(lib.CachedTexturedBitmap_523 = function() {
	this.initialize(img.CachedTexturedBitmap_523);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2182,1349);


(lib.historia = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.inicio = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.videoFondo = function() {
	this.initialize(ss["ayudam2_atlas_"]);
	this.gotoAndStop(5);
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


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



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
	this.instance = new lib.CachedTexturedBitmap_523();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoBlanco, new cjs.Rectangle(-1,-1,1091,674.5), null);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_522();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo, new cjs.Rectangle(0,0,1369,771.5), null);


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
(lib.ayudam2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		
		
		
		/* Aumento progresivo de un clip de película
		Muestra progresivamente la instancia del símbolo aumentando su propiedad alpha en un evento Tick hasta que es totalmente visible.
		
		Instrucciones:
		1. Para modificar la velocidad a la que aumenta progresivamente la instancia del símbolo, cambie el valor 0.01 siguiente (el número debe ser mayor que 0 y menor o igual que 1). Cuanto mayor sea el valor, más rápido será el aumento progresivo.
		2. Dado que la animación utiliza un evento Tick, avanza únicamente cuando la cabeza lectora se mueve hasta un nuevo fotograma. La velocidad de la animación también se ve afectada por la velocidad de fotogramas del documento.
		*/
		
		this.inicio.addEventListener("click", function(){moverse(raiz.inicio)});
		this.actividades.addEventListener("click", function(){moverse(raiz.actividades)});
		this.historia.addEventListener("click", function(){moverse(raiz.historia)});
		this.ayuda.addEventListener("click", function(){moverse(raiz.ayuda)});
		
		function moverse(e){
			switch(e.name){
				case "inicio":
					window.open("./inicio.html", "_self");
					break;
				case "historia":
					window.open("./contenidosm2.html", "_self");
					break;
				case "actividades":
					window.open("./actividadm2.html", "_self");
					break;
				case "ayuda":
					window.open("./ayudam2.html", "_self");
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
		
		var fondo = "fondo";
		var campana = "campana";
		var arrPirata = "arrPirata";
		var monedas = "monedas";
		var relojtictac = "relojtictac";
		var excelente = "excelente";
		var destapar = "destapar";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"./sounds/campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"./sounds/arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"./sounds/monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"./sounds/relojtictac.mp3"});
		createjs.Sound.registerSound({id:"excelente",src:"./sounds/excelente.mp3"});
		createjs.Sound.registerSound({id:"destapar",src:"./sounds/destapar.mp3"});
		
		function maximizar(e){
		
			e.scaleX = 1.1;
			e.scaleY = 1.1;
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
			}
			console.log(e.name);
		}
		
		function normal(e){
			e.scaleX = 1;
			e.scaleY = 1;
			e.shadow = null;
		}
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Inicio
	this.inicio = new lib.Inicio();
	this.inicio.name = "inicio";
	this.inicio.parent = this;
	this.inicio.setTransform(-92.8,131.6,1,1,0,0,0,84.2,84.6);

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(1).to({regX:84.3,x:-12.1},0).wait(1).to({x:66.1},0).wait(1).to({x:125.3},0).wait(21));

	// Historia
	this.historia = new lib.Historia();
	this.historia.name = "historia";
	this.historia.parent = this;
	this.historia.setTransform(-96.8,300.4,1,1,0,0,0,86.2,62.4);

	this.timeline.addTween(cjs.Tween.get(this.historia).wait(1).to({x:-60},0).wait(1).to({x:-24.25},0).wait(1).to({x:10.35},0).wait(1).to({x:43.9},0).wait(1).to({x:76.35},0).wait(1).to({x:107.7},0).wait(1).to({x:127.2},0).wait(17));

	// Actividades
	this.actividades = new lib.Actividades();
	this.actividades.name = "actividades";
	this.actividades.parent = this;
	this.actividades.setTransform(-107.8,471.2,1,1,0,0,0,99.2,77.2);

	this.timeline.addTween(cjs.Tween.get(this.actividades).wait(1).to({x:-82.75},0).wait(1).to({x:-58.45},0).wait(1).to({x:-34.9},0).wait(1).to({x:-12.1},0).wait(1).to({x:10},0).wait(1).to({x:31.35},0).wait(1).to({x:51.95},0).wait(1).to({x:71.8},0).wait(1).to({x:90.95},0).wait(1).to({x:109.3},0).wait(1).to({x:126.95},0).wait(1).to({x:129.2},0).wait(12));

	// Ayuda
	this.ayuda = new lib.Ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.parent = this;
	this.ayuda.setTransform(-108.6,646.1,1,1,0,0,0,86.4,76.1);

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(1).to({regX:86.3,x:-90.3},0).wait(1).to({x:-72.5},0).wait(1).to({x:-55.2},0).wait(1).to({x:-38.45},0).wait(1).to({x:-22.25},0).wait(1).to({x:-6.6},0).wait(1).to({x:8.5},0).wait(1).to({x:23.1},0).wait(1).to({x:37.15},0).wait(1).to({x:50.65},0).wait(1).to({x:63.6},0).wait(1).to({x:76},0).wait(1).to({x:87.85},0).wait(1).to({x:99.2},0).wait(1).to({x:110},0).wait(1).to({x:120.25},0).wait(1).to({x:127.3},0).wait(7));

	// Video
	this.videoContenido = new lib.an_Video({'id': 'videoContenido', 'src':'videos/ayuda.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/miniaturaAyuda.png', 'preload':true, 'class':'video'});

	this.videoContenido.setTransform(806.65,384.8,1.84,1.3799,0,0,0,200.2,149.9);

	this.timeline.addTween(cjs.Tween.get(this.videoContenido).wait(24));

	// FondoVideo
	this.instance = new lib.videoFondo();
	this.instance.parent = this;
	this.instance.setTransform(295,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// FondoBlanco
	this.instance_1 = new lib.FondoBlanco();
	this.instance_1.parent = this;
	this.instance_1.setTransform(791,385.9,1,1,0,0,0,544.5,336.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// FondoAzul
	this.instance_2 = new lib.Fondo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(682.9,385.8,1,1,0,0,0,684.5,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,384,891.4000000000001,387.5);
// library properties:
lib.properties = {
	id: '3F7240E85A486E4FBBC77B5A537B3848',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_522.png?1595387761584", id:"CachedTexturedBitmap_522"},
		{src:"images/CachedTexturedBitmap_523.png?1595387761584", id:"CachedTexturedBitmap_523"},
		{src:"images/ayudam2_atlas_.png?1595387761567", id:"ayudam2_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1595387761584", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1595387761584", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1595387761584", id:"an.Video"}
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
an.compositions['3F7240E85A486E4FBBC77B5A537B3848'] = {
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