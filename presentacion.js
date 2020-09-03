(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"presentacion_atlas_", frames: [[941,1326,415,265],[941,1593,386,277],[0,0,2004,1127],[0,1129,616,764],[1329,1593,311,270],[618,1326,321,499],[618,1129,1227,195]]}
];


// symbols:



(lib.continuar = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.creditos = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondoAzul = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.islaN = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.manualUsuario = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ninoPirata = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.olas = function() {
	this.initialize(img.olas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2309,265);


(lib.titulo = function() {
	this.initialize(ss["presentacion_atlas_"]);
	this.gotoAndStop(6);
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


(lib.Titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Titulo, new cjs.Rectangle(0,0,711.6,113.1), null);


(lib.Olas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.olas();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Olas, new cjs.Rectangle(0,0,1500.8,172.3), null);


(lib.ManualUsuario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.manualUsuario();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ManualUsuario, new cjs.Rectangle(0,0,171.1,148.5), null);


(lib.Creditos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.creditos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Creditos, new cjs.Rectangle(0,0,212.3,152.4), null);


(lib.Continuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.continuar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Continuar, new cjs.Rectangle(0,0,249,159), null);


// stage content:
(lib.presentacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		
		stage.enableMouseOver();
		
		
		this.continuar.addEventListener("click", function(){moverse(raiz.continuar)});
		this.continuar.addEventListener("mouseover",function(){maximizar(raiz.continuar)});
		this.continuar.addEventListener("mouseout",function(){normal(raiz.continuar)});
		
		this.manual.addEventListener("click", function(){moverse(raiz.manual)});
		this.manual.addEventListener("mouseover",function(){maximizar(raiz.manual)});
		this.manual.addEventListener("mouseout",function(){normal(raiz.manual)});
		
		this.creditos.addEventListener("click", function(){moverse(raiz.creditos)});
		this.creditos.addEventListener("mouseover",function(){maximizar(raiz.creditos)});
		this.creditos.addEventListener("mouseout",function(){normal(raiz.creditos)});
		
		this.continuar.addEventListener("tick",function(){parpadear(raiz.continuar)});
		
		createjs.Ticker.interval = 100;
		
		var sombra = 10;
		
		function parpadear(e){
		
			if(sombra>= 10 && sombra<30){
				e.shadow = new createjs.Shadow("#000000", 6, 6, sombra);
				sombra++;
			}
			else if(sombra>=30 && sombra<50){
				e.shadow = new createjs.Shadow("#000000", 6, 6,59-sombra);
				sombra++;
				console.log(sombra);
			}
			if(sombra == 50)
				sombra = 10;
		}
		
		
		function moverse(e){
			if(e.name == "manual"){
				window.open("https://drive.google.com/file/d/1An22HvzXpRrX1BblQtP_3Wsgbl-YkOtJ/view?usp=sharing","_blank");
			}
			else if(e.name == "continuar"){
				window.open("./inicio.html", "_self");
			}
			else if(e.name == "creditos"){
				window.open("./creditos.html", "_self");
			}
		}
		
		var fondo = "fondo";
		var manual = "beep07";
		var continuar = "beep08";
		var creditos = "boomerang";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"beep07",src:"./sounds/beep07.mp3"});
		createjs.Sound.registerSound({id:"beep08",src:"./sounds/beep08.mp3"});
		createjs.Sound.registerSound({id:"boomerang",src:"./sounds/boomerang.mp3"});
		
		function maximizar(e){
			e.scaleX = 1.2;
			e.scaleY = 1.2;
			switch(e.name){
				case "manual":
					instanciaAudio = createjs.Sound.createInstance(manual);	
					instanciaAudio.play();
					break;
				case "continuar":
					instanciaAudio = createjs.Sound.createInstance(continuar);
					instanciaAudio.play();
					break;
				case "creditos":
					instanciaAudio = createjs.Sound.createInstance(creditos);
					instanciaAudio.volume = 0.4;
					instanciaAudio.play();
					break;
			}
			if(e.name == "manual" || e.name == "creditos"){
				e.shadow = new createjs.Shadow("#000000", 6, 6, 30);
			}
			console.log(e.name);
		}
		
		function normal(e){
			e.scaleX = 1;
			e.scaleY = 1;
			if(e.name == "manual" || e.name == "creditos"){
				e.shadow = null;
			}
		}
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// Texto
	this.text = new cjs.Text("Bienvenido, este es un software educativo diseñado con el fin de reforzar en el estudiante habilidades en el manejo y uso responsable de herramientas TIC disponibles en su entorno y a través de las cuales se comunica con el mundo virtual fomentando la navegación responsable y segura en el ciberespacio.", "39px 'Berlin Sans FB'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 758;
	this.text.parent = this;
	this.text.setTransform(1746.9,140.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:1640.2726},0).wait(1).to({x:1535.9093},0).wait(1).to({x:1433.8101},0).wait(1).to({x:1334.0288},0).wait(1).to({x:1236.5117},0).wait(1).to({x:1141.3125},0).wait(1).to({x:1048.4313},0).wait(1).to({x:957.8142},0).wait(1).to({x:938.3},0).wait(39));

	// Titulo
	this.instance = new lib.Titulo();
	this.instance.parent = this;
	this.instance.setTransform(709.8,-63.65,1,1,0,0,0,355.8,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:56.5,y:-47.6},0).wait(1).to({y:-31.85},0).wait(1).to({y:-16.4},0).wait(1).to({y:-1.3},0).wait(1).to({y:13.45},0).wait(1).to({y:27.85},0).wait(1).to({y:41.85},0).wait(1).to({y:55.55},0).wait(1).to({y:58.5},0).wait(39));

	// Olas
	this.instance_1 = new lib.Olas();
	this.instance_1.parent = this;
	this.instance_1.setTransform(673.4,739.1,1,1,0,0,0,750.4,86.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0004,scaleY:1.0004},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,y:739.05},0).wait(1).to({scaleX:1.0013,scaleY:1.0013},0).wait(1).to({scaleX:1.0017,scaleY:1.0017,y:739.1},0).wait(1).to({scaleX:1.0022,scaleY:1.0022,x:673.45},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:673.4,y:739.05},0).wait(1).to({scaleX:1.003,scaleY:1.003,x:673.45},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,x:673.45},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0048,scaleY:1.0048,x:673.45},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0057,scaleY:1.0057,x:673.45},0).wait(1).to({scaleX:1.0061,scaleY:1.0061,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0065,scaleY:1.0065,x:673.45},0).wait(1).to({scaleX:1.007,scaleY:1.007,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0074,scaleY:1.0074,x:673.45},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0083,scaleY:1.0083,x:673.45},0).wait(1).to({scaleX:1.0087,scaleY:1.0087,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0091,scaleY:1.0091},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,y:739.05},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,x:673.4},0).wait(1).to({scaleX:1.0088,scaleY:1.0088,y:739.05},0).wait(1).to({scaleX:1.0083,scaleY:1.0083},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,x:673.4},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,y:739.05},0).wait(1).to({scaleX:1.0067,scaleY:1.0067},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0058,scaleY:1.0058,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0054,scaleY:1.0054},0).wait(1).to({scaleX:1.005,scaleY:1.005,y:739.1},0).wait(1).to({scaleX:1.0046,scaleY:1.0046,x:673.45},0).wait(1).to({scaleX:1.0042,scaleY:1.0042,y:739.05},0).wait(1).to({scaleX:1.0038,scaleY:1.0038,x:673.4},0).wait(1).to({scaleX:1.0033,scaleY:1.0033,y:739.1},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:673.45,y:739.05},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:673.4},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,y:739.1},0).wait(1).to({scaleX:1.0017,scaleY:1.0017},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,x:673.45,y:739.05},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:673.4},0).wait(1).to({scaleX:1.0004,scaleY:1.0004,y:739.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Continuar
	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(1204.5,778.5,1,1,0,0,0,124.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.continuar).wait(1).to({y:750.65},0).wait(1).to({y:723.4},0).wait(1).to({y:696.8},0).wait(1).to({y:670.75},0).wait(1).to({y:645.3},0).wait(1).to({y:620.45},0).wait(1).to({y:596.2},0).wait(1).to({y:572.55},0).wait(1).to({y:567.5},0).wait(39));

	// Creditos
	this.creditos = new lib.Creditos();
	this.creditos.name = "creditos";
	this.creditos.parent = this;
	this.creditos.setTransform(960.8,796.2,1,1,0,0,0,106.2,76.2);

	this.timeline.addTween(cjs.Tween.get(this.creditos).wait(1).to({regX:106.1,x:960.7,y:765.45},0).wait(1).to({y:735.4},0).wait(1).to({y:705.95},0).wait(1).to({y:677.2},0).wait(1).to({y:649.1},0).wait(1).to({y:621.65},0).wait(1).to({y:594.9},0).wait(1).to({y:568.8},0).wait(1).to({y:563.2},0).wait(39));

	// ManualUsuario
	this.manual = new lib.ManualUsuario();
	this.manual.name = "manual";
	this.manual.parent = this;
	this.manual.setTransform(748.5,782.2,1,1,0,0,0,85.5,74.2);

	this.timeline.addTween(cjs.Tween.get(this.manual).wait(1).to({y:753.55},0).wait(1).to({y:725.55},0).wait(1).to({y:698.15},0).wait(1).to({y:671.35},0).wait(1).to({y:645.2},0).wait(1).to({y:619.65},0).wait(1).to({y:594.75},0).wait(1).to({y:570.4},0).wait(1).to({y:565.2},0).wait(39));

	// NinoPirata
	this.instance_2 = new lib.ninoPirata();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// Isla
	this.instance_3 = new lib.islaN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

	// Fondo
	this.instance_4 = new lib.fondoAzul();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(598.6,263.8,1529.6,608.5999999999999);
// library properties:
lib.properties = {
	id: 'EEC56AA17A727F4BB2DD84100584B006',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/olas.png?1595394552228", id:"olas"},
		{src:"images/presentacion_atlas_.png?1595394552203", id:"presentacion_atlas_"}
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
an.compositions['EEC56AA17A727F4BB2DD84100584B006'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;