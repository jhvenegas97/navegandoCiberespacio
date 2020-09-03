(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"inicio_atlas_", frames: [[0,1129,728,684],[0,0,2004,1127],[730,1129,616,764]]},
		{name:"inicio_atlas_2", frames: [[1229,0,467,490],[0,197,415,265],[0,464,310,270],[671,197,236,390],[909,197,213,398],[417,197,252,411],[1698,0,321,499],[0,0,1227,195]]}
];


// symbols:



(lib.barcoIngles = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barcoPirata = function() {
	this.initialize(ss["inicio_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.continuar = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondoAzul = function() {
	this.initialize(ss["inicio_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.islaN = function() {
	this.initialize(ss["inicio_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jugar = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ninaBucanera = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ninaPirata = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ninoBucanero = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ninoPirata = function() {
	this.initialize(ss["inicio_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.olas = function() {
	this.initialize(img.olas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2309,265);


(lib.titulo = function() {
	this.initialize(ss["inicio_atlas_2"]);
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


(lib.NinoPirata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninoPirata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3391,0.3391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinoPirata, new cjs.Rectangle(0,0,108.9,169.2), null);


(lib.NinoBucanero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninoBucanero();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinoBucanero, new cjs.Rectangle(0,0,121,197.3), null);


(lib.NinaPirata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninaPirata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5138,0.5138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinaPirata, new cjs.Rectangle(0,0,109.5,204.5), null);


(lib.NinaBucanera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninaBucanera();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinaBucanera, new cjs.Rectangle(0,0,106.2,175.5), null);


(lib.Jugar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.jugar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Jugar, new cjs.Rectangle(0,0,347.2,302.4), null);


(lib.Continuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.continuar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Continuar, new cjs.Rectangle(0,0,415,265), null);


(lib.BarcoPirata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.barcoPirata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BarcoPirata, new cjs.Rectangle(0,0,356.7,335.2), null);


(lib.BarcoIngles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.barcoIngles();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BarcoIngles, new cjs.Rectangle(0,0,354.9,372.4), null);


// stage content:
(lib.inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		
		this.stop();
		
		var parpadearContinuarTick = parpadearContinuar.bind(this);
		this.continuar.addEventListener('tick', parpadearContinuarTick);
		
		var sombraTexto = 5;
		
		function parpadearContinuar(){
			if(sombraTexto>= 5 && sombraTexto<25){
				raiz.continuar.shadow = new createjs.Shadow("#000000", 6, 6, sombraTexto);
				sombraTexto++;
			}
			else if(sombraTexto>=25 && sombraTexto<45){
				raiz.continuar.shadow = new createjs.Shadow("#000000", 6, 6,49-sombraTexto);
				sombraTexto++;
				//console.log(sombra);
			}
			if(sombraTexto == 45)
				sombraTexto = 5;
		}
		
		this.continuar.addEventListener("click", function(){moverse(raiz.continuar)});
		
		this.jugar.addEventListener("tick",function(){parpadear(raiz.jugar)});
		
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
		
		stage.enableMouseOver();
		
		this.jugar.addEventListener("click", function(){moverse(raiz.jugar)});
		
		this.continuar.addEventListener("mouseover", function(){maximizar(raiz.continuar)});
		this.continuar.addEventListener("mouseout", function(){normal(raiz.continuar)});
		
		this.jugar.addEventListener("mouseover", function(){maximizar(raiz.jugar)});
		this.jugar.addEventListener("mouseout", function(){normal(raiz.jugar)});
		
		function moverse(e){
			switch(e.name){
				case "jugar":
					window.open("./contenidosm1.html", "_self");
					break;
				case "continuar":
					instanciaAudioFondo = createjs.Sound.createInstance(fondo);
					instanciaAudioFondo.volume = 0.3;
					instanciaAudioFondo.play({interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
					raiz.gotoAndPlay(1);
					break;
			}
			
		}
		
		var fondo = "fondo";
		var continuar = "beep08";
		var jugar = "elec05";
		
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"beep08",src:"./sounds/beep08.mp3"});
		createjs.Sound.registerSound({id:"elec05",src:"./sounds/elec05.mp3"});
		
		function maximizar(e){
			
			if(e.name == "continuar"){
				e.scaleX = 1.2;
				e.scaleY = 1.2;
				instanciaAudio = createjs.Sound.createInstance(continuar);
				instanciaAudio.play();
			}
			else{
				instanciaAudio = createjs.Sound.createInstance(jugar);
				instanciaAudio.play();
			}
			console.log(e.name);
		}
		
		function normal(e){
			e.scaleX = 1;
			e.scaleY = 1;
			e.shadow = null;
		}
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(3));

	// Olas
	this.instance = new lib.Olas();
	this.instance.parent = this;
	this.instance.setTransform(673.4,739.1,1,1,0,0,0,750.4,86.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:1.0004,scaleY:1.0004},0).wait(1).to({scaleX:1.0009,scaleY:1.0009,y:739.05},0).wait(1).to({scaleX:1.0013,scaleY:1.0013},0).wait(1).to({scaleX:1.0017,scaleY:1.0017,y:739.1},0).wait(1).to({scaleX:1.0022,scaleY:1.0022,x:673.45},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:673.4,y:739.05},0).wait(1).to({scaleX:1.003,scaleY:1.003,x:673.45},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,x:673.45},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0048,scaleY:1.0048,x:673.45},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0057,scaleY:1.0057,x:673.45},0).wait(1).to({scaleX:1.0061,scaleY:1.0061,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0065,scaleY:1.0065,x:673.45},0).wait(1).to({scaleX:1.007,scaleY:1.007,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0074,scaleY:1.0074,x:673.45},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0083,scaleY:1.0083,x:673.45},0).wait(1).to({scaleX:1.0087,scaleY:1.0087,x:673.4,y:739.1},0).wait(1).to({scaleX:1.0091,scaleY:1.0091},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,y:739.05},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.0096,scaleY:1.0096,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,x:673.4},0).wait(1).to({scaleX:1.0088,scaleY:1.0088,y:739.05},0).wait(1).to({scaleX:1.0083,scaleY:1.0083},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,x:673.4},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,y:739.05},0).wait(1).to({scaleX:1.0067,scaleY:1.0067},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,x:673.45,y:739.1},0).wait(1).to({scaleX:1.0058,scaleY:1.0058,x:673.4,y:739.05},0).wait(1).to({scaleX:1.0054,scaleY:1.0054},0).wait(1).to({scaleX:1.005,scaleY:1.005,y:739.1},0).wait(1).to({scaleX:1.0046,scaleY:1.0046,x:673.45},0).wait(1).to({scaleX:1.0042,scaleY:1.0042,y:739.05},0).wait(1).to({scaleX:1.0038,scaleY:1.0038,x:673.4},0).wait(1).to({scaleX:1.0033,scaleY:1.0033,y:739.1},0).wait(1).to({scaleX:1.0029,scaleY:1.0029,x:673.45,y:739.05},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:673.4},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,y:739.1},0).wait(1).to({scaleX:1.0017,scaleY:1.0017},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,x:673.45,y:739.05},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:673.4},0).wait(1).to({scaleX:1.0004,scaleY:1.0004,y:739.1},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(1));

	// NinoBucanero
	this.instance_1 = new lib.NinoBucanero();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1578.5,326.7,1,1,0,0,0,60.5,98.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regY:98.6,x:1471.1,y:326.6},0).wait(1).to({x:1366},0).wait(1).to({x:1263.2},0).wait(1).to({x:1162.7},0).wait(1).to({x:1064.5},0).wait(1).to({x:968.65},0).wait(1).to({x:875.1},0).wait(1).to({x:818.5},0).wait(39).to({_off:true},1).wait(1));

	// NinaBucanera
	this.instance_2 = new lib.NinaBucanera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1496.1,471.8,1,1,0,0,0,53.1,87.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regY:87.7,x:1388.7,y:471.7},0).wait(1).to({x:1283.6},0).wait(1).to({x:1180.8},0).wait(1).to({x:1080.3},0).wait(1).to({x:982.1},0).wait(1).to({x:886.25},0).wait(1).to({x:792.7},0).wait(1).to({x:736.1},0).wait(39).to({_off:true},1).wait(1));

	// NinaPirata
	this.instance_3 = new lib.NinaPirata();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1785.7,406.2,1,1,0,0,0,54.7,102.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regY:102.3,x:1678.3,y:406.3},0).wait(1).to({x:1573.2},0).wait(1).to({x:1470.4},0).wait(1).to({x:1369.9},0).wait(1).to({x:1271.7},0).wait(1).to({x:1175.85},0).wait(1).to({x:1082.3},0).wait(1).to({x:1025.7},0).wait(39).to({_off:true},1).wait(1));

	// NinoPirata
	this.instance_4 = new lib.NinoPirata();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1877.4,474.6,1,1,0,0,0,54.4,84.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({x:1770},0).wait(1).to({x:1664.9},0).wait(1).to({x:1562.1},0).wait(1).to({x:1461.6},0).wait(1).to({x:1363.4},0).wait(1).to({x:1267.55},0).wait(1).to({x:1174},0).wait(1).to({x:1117.4},0).wait(39).to({_off:true},1).wait(1));

	// BarcoPirata
	this.instance_5 = new lib.BarcoPirata();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1932.3,538.6,1,1,0,0,0,178.3,167.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regX:178.4,x:1829.8},0).wait(1).to({x:1729.25},0).wait(1).to({x:1630.8},0).wait(1).to({x:1534.45},0).wait(1).to({x:1440.3},0).wait(1).to({x:1348.15},0).wait(1).to({x:1258.1},0).wait(1).to({x:1172.4},0).wait(39).to({_off:true},1).wait(1));

	// BarcoIngles
	this.instance_6 = new lib.BarcoIngles();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1557.5,519.2,1,1,0,0,0,177.5,186.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({x:1450.1},0).wait(1).to({x:1345},0).wait(1).to({x:1242.2},0).wait(1).to({x:1141.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:947.65},0).wait(1).to({x:854.1},0).wait(1).to({x:797.5},0).wait(39).to({_off:true},1).wait(1));

	// Jugar
	this.jugar = new lib.Jugar();
	this.jugar.name = "jugar";
	this.jugar.parent = this;
	this.jugar.setTransform(333.6,492.2,1,1,0,0,0,173.6,151.2);
	this.jugar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jugar).wait(1).to({_off:false},0).wait(49));

	// Titulo
	this.instance_7 = new lib.Titulo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1005.1,-67.4,1,1,0,0,0,355.8,56.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({regY:56.5,y:-54.55},0).wait(1).to({y:-41.9},0).wait(1).to({y:-29.5},0).wait(1).to({y:-17.4},0).wait(1).to({y:-5.6},0).wait(1).to({y:5.95},0).wait(1).to({y:17.2},0).wait(1).to({y:28.2},0).wait(1).to({y:38.9},0).wait(1).to({y:49.35},0).wait(1).to({y:56.7},0).wait(36).to({_off:true},1).wait(1));

	// Isla
	this.instance_8 = new lib.islaN();
	this.instance_8.parent = this;
	this.instance_8.setTransform(19,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(49));

	// BotonContinuar
	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(727.5,498.5,1,1,0,0,0,207.5,132.5);

	this.timeline.addTween(cjs.Tween.get(this.continuar).to({_off:true},1).wait(49));

	// TextoContinuar
	this.text = new cjs.Text("Haz clic para continuar", "96px 'Berlin Sans FB'", "#FFCC00");
	this.text.lineHeight = 105;
	this.text.parent = this;
	this.text.setTransform(269.8,164.8);
	this.text.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(49));

	// Fondo
	this.instance_9 = new lib.fondoAzul();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(598.6,260,1512.1,566.1);
// library properties:
lib.properties = {
	id: 'EEC56AA17A727F4BB2DD84100584B006',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/olas.png?1595384856463", id:"olas"},
		{src:"images/inicio_atlas_.png?1595384856428", id:"inicio_atlas_"},
		{src:"images/inicio_atlas_2.png?1595384856428", id:"inicio_atlas_2"}
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