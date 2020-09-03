(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"contenidosm1_atlas_", frames: [[0,0,1542,1298]]},
		{name:"contenidosm1_atlas_2", frames: [[0,0,1774,841],[0,843,1774,841]]},
		{name:"contenidosm1_atlas_3", frames: [[0,677,1422,675],[0,0,1422,675]]},
		{name:"contenidosm1_atlas_4", frames: [[0,1141,307,239],[1018,989,303,267],[1018,722,415,265],[0,0,960,720],[1323,1021,330,239],[1655,1021,273,274],[0,722,626,417],[1435,722,363,297],[628,722,388,602],[962,0,960,720]]}
];


// symbols:



(lib.actividades = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ayuda = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_464 = function() {
	this.initialize(img.CachedTexturedBitmap_464);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4107,2315);


(lib.CachedTexturedBitmap_465 = function() {
	this.initialize(img.CachedTexturedBitmap_465);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3273,2024);


(lib.continuar = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elciberespacio = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.historia = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hoja = function() {
	this.initialize(ss["contenidosm1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.inicio = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mensaje = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ninoPirata = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sabiasque = function() {
	this.initialize(ss["contenidosm1_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sombreroAzul = function() {
	this.initialize(ss["contenidosm1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sombreroNaranja = function() {
	this.initialize(ss["contenidosm1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sombreroRojo = function() {
	this.initialize(ss["contenidosm1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sombreroVerde = function() {
	this.initialize(ss["contenidosm1_atlas_3"]);
	this.gotoAndStop(1);
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


(lib.SombreroVerde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombreroVerde();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.115,0.115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SombreroVerde, new cjs.Rectangle(0,0,163.5,77.6), null);


(lib.SombreroRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombreroRojo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.115,0.115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SombreroRojo, new cjs.Rectangle(0,0,163.5,77.6), null);


(lib.SombreroNaranja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombreroNaranja();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.092,0.092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SombreroNaranja, new cjs.Rectangle(0,0,163.2,77.4), null);


(lib.SombreroAzul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombreroAzul();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.092,0.092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SombreroAzul, new cjs.Rectangle(0,0,163.2,77.4), null);


(lib.Papel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.hoja();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Papel, new cjs.Rectangle(0,0,848.1,649), null);


(lib.Mensaje = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.inicio();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6175,0.6175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Inicio, new cjs.Rectangle(0,0,168.6,169.2), null);


(lib.imagen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.instance = new lib.CachedTexturedBitmap_465();
	this.instance.parent = this;
	this.instance.setTransform(-0.95,-0.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoBlanco, new cjs.Rectangle(-0.9,-0.9,1091,674.6), null);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_464();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo, new cjs.Rectangle(0,0,1369,771.7), null);


(lib.Continuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.continuar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Continuar, new cjs.Rectangle(0,0,415,265), null);


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
(lib.contenidosm1 = function(mode,startPosition,loop) {
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
		
		var sombrero1_FadeInCbk = fl_FadeSymbolIn.bind(this);
		var parpadearTick = parpadear.bind(this);
		this.addEventListener('tick', sombrero1_FadeInCbk);
		this.sombrero1.alpha = 0;
		this.sombrero2.alpha = 0;
		this.sombrero3.alpha = 0;
		this.sombrero4.alpha = 0;
		
		
		
		var sombra = 5;
		
		function parpadear(){
			if(sombra>= 5 && sombra<25){
				raiz.instruccion.shadow = new createjs.Shadow("#000000", 6, 6, sombra);
				sombra++;
			}
			else if(sombra>=25 && sombra<45){
				raiz.instruccion.shadow = new createjs.Shadow("#000000", 6, 6,49-sombra);
				sombra++;
				console.log(sombra);
			}
			if(sombra == 45)
				sombra = 5;
		}
		
		function fl_FadeSymbolIn()
		{
			//this.papel.rotation +=7;
			
			
			if(this.sombrero1.alpha <= 1){
				this.sombrero1.alpha += 0.05;
				console.log(this.sombrero1.alpha);
			}
			if(this.sombrero1.alpha >= 0.5 && this.sombrero2.alpha <=1){
				this.sombrero2.alpha += 0.05;
			}
			if(this.sombrero2.alpha >= 0.5 && this.sombrero3.alpha<=1){
				this.sombrero3.alpha += 0.05;
			}
			if(this.sombrero3.alpha >= 0.5 && this.sombrero4.alpha<=1){
				this.sombrero4.alpha += 0.05;
			}
			if(this.sombrero4.alpha>=1){
				this.removeEventListener('tick', sombrero1_FadeInCbk);
				this.addEventListener('tick', parpadearTick);
			}
		}
		
		this.sombrero1.addEventListener("mouseover",function(){girar(raiz.sombrero1)});
		this.sombrero1.addEventListener("mouseout",function(){regresar(raiz.sombrero1)});
		this.sombrero2.addEventListener("mouseover",function(){girar(raiz.sombrero2)});
		this.sombrero2.addEventListener("mouseout",function(){regresar(raiz.sombrero2)});
		this.sombrero3.addEventListener("mouseover",function(){girar(raiz.sombrero3)});
		this.sombrero3.addEventListener("mouseout",function(){regresar(raiz.sombrero3)});
		this.sombrero4.addEventListener("mouseover",function(){girar(raiz.sombrero4)});
		this.sombrero4.addEventListener("mouseout",function(){regresar(raiz.sombrero4)});
		
		
		this.sombrero1.addEventListener("click",function(){mostrarImagenes(raiz.sombrero1)});
		this.sombrero2.addEventListener("click",function(){mostrarImagenes(raiz.sombrero2)});
		this.sombrero3.addEventListener("click",function(){mostrarImagenes(raiz.sombrero3)});
		this.sombrero4.addEventListener("click",function(){mostrarImagenes(raiz.sombrero4)});
		
		//this.miCursor.x = stage.mouseX;
		//this.miCursor.y = stage.mouseY;
		
		function mostrarImagenes(e){
			this.removeEventListener('tick', parpadearTick);
			
			raiz.instruccion.visible = false;
			raiz.imagen.removeChildAt(0);
			raiz.mensaje.removeChildAt(0);
			switch(e.name){
				case "sombrero1":
					var libImage = new lib.sabiasque();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					console.log(raiz.imagen.getBounds());
					break;
				case "sombrero2":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero3":
					window.open("./contenidos2m1.html","_self");
					break;
				case "sombrero4":
					
					var libImage = new lib.ninoPirata();
					var libMensaje = new lib.mensaje();
					libMensaje.scaleX = 0.9;
					libMensaje.scaleY = 0.9;
					libImage.scaleX = 0.8;
					libImage.scaleY = 0.8;
					
					instanciaAudio = createjs.Sound.createInstance(excelente);	
					instanciaAudio.play();
					raiz.imagen.addChild(libImage);
					raiz.mensaje.addChild(libMensaje);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
			}
		}
		
		
		function girar(e){
			instanciaAudio = createjs.Sound.createInstance(destapar);	
			instanciaAudio.play();
			switch(e.name){
				case "sombrero1":
					raiz.sombrero1.rotation +=10;
					break;
				case "sombrero2":
					raiz.sombrero2.rotation +=10;
					break;
				case "sombrero3":
					raiz.sombrero3.rotation +=10;
					break;
				case "sombrero4":
					raiz.sombrero4.rotation +=10;
					break;
			}
		}
		
		function regresar(e){
			raiz.sombrero1.rotation = 0;
			raiz.sombrero2.rotation = 0;
			raiz.sombrero3.rotation = 0;
			raiz.sombrero4.rotation = 0;
		}
		
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
					window.open("./contenidosm1.html", "_self");
					break;
				case "actividades":
					window.open("./actividadm1.html", "_self");
					break;
				case "ayuda":
					window.open("./ayuda.html", "_self");
					break;
				case "continuar":
					instanciaAudioFondo = createjs.Sound.createInstance(fondo);
					instanciaAudioFondo.volume = 0.3;
					instanciaAudioFondo.play({interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
					raiz.gotoAndPlay(1);
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
		
		this.continuar.addEventListener("mouseover", function(){maximizar(raiz.continuar)});
		this.continuar.addEventListener("mouseout", function(){normal(raiz.continuar)});
		
		var fondo = "fondo";
		var campana = "campana";
		var arrPirata = "arrPirata";
		var monedas = "monedas";
		var relojtictac = "relojtictac";
		var excelente = "excelente";
		var destapar = "destapar";
		var continuar = "beep08";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"./sounds/campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"./sounds/arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"./sounds/monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"./sounds/relojtictac.mp3"});
		createjs.Sound.registerSound({id:"excelente",src:"./sounds/excelente.mp3"});
		createjs.Sound.registerSound({id:"destapar",src:"./sounds/destapar.mp3"});
		createjs.Sound.registerSound({id:"beep08",src:"./sounds/beep08.mp3"});
		
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
				case "continuar":
					instanciaAudio = createjs.Sound.createInstance(continuar);
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
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Inicio
	this.inicio = new lib.Inicio();
	this.inicio.name = "inicio";
	this.inicio.parent = this;
	this.inicio.setTransform(-92.8,131.6,1,1,0,0,0,84.2,84.6);
	this.inicio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(1).to({_off:false},0).wait(1).to({regX:84.3,x:-12.1},0).wait(1).to({x:66.1},0).wait(1).to({x:125.3},0).wait(21));

	// Historia
	this.historia = new lib.Historia();
	this.historia.name = "historia";
	this.historia.parent = this;
	this.historia.setTransform(-96.8,300.4,1,1,0,0,0,86.2,62.4);
	this.historia._off = true;

	this.timeline.addTween(cjs.Tween.get(this.historia).wait(1).to({_off:false},0).wait(1).to({x:-60},0).wait(1).to({x:-24.25},0).wait(1).to({x:10.35},0).wait(1).to({x:43.9},0).wait(1).to({x:76.35},0).wait(1).to({x:107.7},0).wait(1).to({x:127.2},0).wait(17));

	// Actividades
	this.actividades = new lib.Actividades();
	this.actividades.name = "actividades";
	this.actividades.parent = this;
	this.actividades.setTransform(-107.8,471.2,1,1,0,0,0,99.2,77.2);
	this.actividades._off = true;

	this.timeline.addTween(cjs.Tween.get(this.actividades).wait(1).to({_off:false},0).wait(1).to({x:-82.75},0).wait(1).to({x:-58.45},0).wait(1).to({x:-34.9},0).wait(1).to({x:-12.1},0).wait(1).to({x:10},0).wait(1).to({x:31.35},0).wait(1).to({x:51.95},0).wait(1).to({x:71.8},0).wait(1).to({x:90.95},0).wait(1).to({x:109.3},0).wait(1).to({x:126.95},0).wait(1).to({x:129.2},0).wait(12));

	// Ayuda
	this.ayuda = new lib.Ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.parent = this;
	this.ayuda.setTransform(-108.6,646.1,1,1,0,0,0,86.4,76.1);
	this.ayuda._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(1).to({_off:false},0).wait(1).to({regX:86.3,x:-90.3},0).wait(1).to({x:-72.5},0).wait(1).to({x:-55.2},0).wait(1).to({x:-38.45},0).wait(1).to({x:-22.25},0).wait(1).to({x:-6.6},0).wait(1).to({x:8.5},0).wait(1).to({x:23.1},0).wait(1).to({x:37.15},0).wait(1).to({x:50.65},0).wait(1).to({x:63.6},0).wait(1).to({x:76},0).wait(1).to({x:87.85},0).wait(1).to({x:99.2},0).wait(1).to({x:110},0).wait(1).to({x:120.25},0).wait(1).to({x:127.3},0).wait(7));

	// SombreroRojo
	this.sombrero4 = new lib.SombreroRojo();
	this.sombrero4.name = "sombrero4";
	this.sombrero4.parent = this;
	this.sombrero4.setTransform(1213.8,571.8,1,1,0,0,0,81.8,38.8);
	this.sombrero4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sombrero4).wait(1).to({_off:false},0).wait(24));

	// SombreroNaranja
	this.sombrero3 = new lib.SombreroNaranja();
	this.sombrero3.name = "sombrero3";
	this.sombrero3.parent = this;
	this.sombrero3.setTransform(1213.5,444.6,1,1,0,0,0,81.5,38.6);
	this.sombrero3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sombrero3).wait(1).to({_off:false},0).wait(24));

	// SombreroAzul
	this.sombrero2 = new lib.SombreroAzul();
	this.sombrero2.name = "sombrero2";
	this.sombrero2.parent = this;
	this.sombrero2.setTransform(1213.5,309.6,1,1,0,0,0,81.5,38.6);
	this.sombrero2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sombrero2).wait(1).to({_off:false},0).wait(24));

	// SombreroVerde
	this.sombrero1 = new lib.SombreroVerde();
	this.sombrero1.name = "sombrero1";
	this.sombrero1.parent = this;
	this.sombrero1.setTransform(1213.8,177.8,1,1,0,0,0,81.8,38.8);
	this.sombrero1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sombrero1).wait(1).to({_off:false},0).wait(24));

	// Mensaje
	this.mensaje = new lib.Mensaje();
	this.mensaje.name = "mensaje";
	this.mensaje.parent = this;
	this.mensaje.setTransform(730.15,168.85);
	this.mensaje._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mensaje).wait(1).to({_off:false},0).wait(24));

	// Imagen
	this.imagen = new lib.imagen();
	this.imagen.name = "imagen";
	this.imagen.parent = this;
	this.imagen.setTransform(384.55,147);
	this.imagen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen).wait(1).to({_off:false},0).wait(24));

	// Texto
	this.instruccion = new cjs.Text("Haz clic\nen cada\nsombrero", "96px 'Berlin Sans FB'", "#FFFFFF");
	this.instruccion.name = "instruccion";
	this.instruccion.textAlign = "center";
	this.instruccion.lineHeight = 107;
	this.instruccion.parent = this;
	this.instruccion.setTransform(682.8,221.05);
	this.instruccion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instruccion).wait(1).to({_off:false},0).wait(24));

	// PapelAntiguo
	this.papel = new lib.Papel();
	this.papel.name = "papel";
	this.papel.parent = this;
	this.papel.setTransform(683.05,381.7,0.9,0.9,0,0,0,423.9,324.4);
	this.papel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.papel).wait(1).to({_off:false},0).wait(1).to({regX:424,regY:324.5,scaleX:0.9085,scaleY:0.9085,x:683.1,y:381.75},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,y:381.8},0).wait(1).to({scaleX:0.9244,scaleY:0.9244,x:683.15,y:381.75},0).wait(1).to({scaleX:0.9318,scaleY:0.9318,x:683.1},0).wait(1).to({scaleX:0.9387,scaleY:0.9387},0).wait(1).to({scaleX:0.9454,scaleY:0.9454,x:683.15},0).wait(1).to({scaleX:0.9516,scaleY:0.9516,x:683.1,y:381.8},0).wait(1).to({scaleX:0.9575,scaleY:0.9575},0).wait(1).to({scaleX:0.9629,scaleY:0.9629,x:683.15,y:381.75},0).wait(1).to({scaleX:0.968,scaleY:0.968,y:381.8},0).wait(1).to({scaleX:0.9728,scaleY:0.9728,y:381.75},0).wait(1).to({scaleX:0.9771,scaleY:0.9771},0).wait(1).to({scaleX:0.9811,scaleY:0.9811},0).wait(1).to({scaleX:0.9847,scaleY:0.9847},0).wait(1).to({scaleX:0.9879,scaleY:0.9879,x:683.1},0).wait(1).to({scaleX:0.9907,scaleY:0.9907,y:381.8},0).wait(1).to({scaleX:0.9932,scaleY:0.9932},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:683.15,y:381.75},0).wait(1).to({scaleX:0.997,scaleY:0.997,x:683.1},0).wait(1).to({scaleX:0.9983,scaleY:0.9983,y:381.8},0).wait(1).to({scaleX:0.9992,scaleY:0.9992},0).wait(1).to({scaleX:0.9998,scaleY:0.9998},0).wait(1).to({scaleX:1,scaleY:1,x:683.15},0).wait(1));

	// FondoBlanco
	this.instance = new lib.FondoBlanco();
	this.instance.parent = this;
	this.instance.setTransform(791,385.9,1,1,0,0,0,544.5,336.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(24));

	// BotonContinuar
	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(727.5,498.5,1,1,0,0,0,207.5,132.5);

	this.timeline.addTween(cjs.Tween.get(this.continuar).to({_off:true},1).wait(24));

	// TextoContinuar
	this.text = new cjs.Text("Haz clic para continuar", "96px 'Berlin Sans FB'", "#FFCC00");
	this.text.lineHeight = 105;
	this.text.parent = this;
	this.text.setTransform(269.8,164.8);
	this.text.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(24));

	// FondoAzul
	this.instance_1 = new lib.Fondo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(682.9,385.8,1,1,0,0,0,684.5,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,384,891.4000000000001,387.70000000000005);
// library properties:
lib.properties = {
	id: '3F7240E85A486E4FBBC77B5A537B3848',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_464.png?1595385154418", id:"CachedTexturedBitmap_464"},
		{src:"images/CachedTexturedBitmap_465.png?1595385154418", id:"CachedTexturedBitmap_465"},
		{src:"images/contenidosm1_atlas_.png?1595385154391", id:"contenidosm1_atlas_"},
		{src:"images/contenidosm1_atlas_2.png?1595385154391", id:"contenidosm1_atlas_2"},
		{src:"images/contenidosm1_atlas_3.png?1595385154391", id:"contenidosm1_atlas_3"},
		{src:"images/contenidosm1_atlas_4.png?1595385154392", id:"contenidosm1_atlas_4"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;