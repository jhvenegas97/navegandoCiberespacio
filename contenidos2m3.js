(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"contenidos2m3_atlas_", frames: [[0,984,2025,982],[0,0,2025,982]]},
		{name:"contenidos2m3_atlas_2", frames: [[0,0,2025,982],[0,984,2024,982]]},
		{name:"contenidos2m3_atlas_3", frames: [[0,722,1280,720],[0,0,1280,720]]},
		{name:"contenidos2m3_atlas_4", frames: [[912,722,307,239],[0,722,303,267],[1282,419,662,349],[1221,770,209,209],[0,0,1280,720],[1432,770,263,138],[305,722,330,239],[637,722,273,274],[1282,0,626,417]]}
];


// symbols:



(lib.actividades = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ayuda = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BotonSeguir = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_528 = function() {
	this.initialize(img.CachedTexturedBitmap_528);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4107,2315);


(lib.CachedTexturedBitmap_529 = function() {
	this.initialize(img.CachedTexturedBitmap_529);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3273,2024);


(lib.CachedTexturedBitmap_530 = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clasificacionatacantes = function() {
	this.initialize(ss["contenidos2m3_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.clasificacionataques = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.continuar = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.estrategia1 = function() {
	this.initialize(ss["contenidos2m3_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.historia = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Imagen1 = function() {
	this.initialize(ss["contenidos2m3_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Imagen2 = function() {
	this.initialize(ss["contenidos2m3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Imagen3 = function() {
	this.initialize(ss["contenidos2m3_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Imagen4 = function() {
	this.initialize(ss["contenidos2m3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.inicio = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["contenidos2m3_atlas_4"]);
	this.gotoAndStop(8);
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


(lib.Siguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.BotonSeguir();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Siguiente, new cjs.Rectangle(0,0,165.5,87.3), null);


(lib.Punto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_530();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Punto, new cjs.Rectangle(0,0,69.7,69.7), null);


(lib.Inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.inicio();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6175,0.6175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Inicio, new cjs.Rectangle(0,0,168.6,169.2), null);


(lib.Imagen6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Imagen4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen6, new cjs.Rectangle(0,0,1012,491), null);


(lib.Imagen5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Imagen3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen5, new cjs.Rectangle(0,0,1012.5,491), null);


(lib.Imagen4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Imagen2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen4_1, new cjs.Rectangle(0,0,1012.5,491), null);


(lib.Imagen3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Imagen1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen3_1, new cjs.Rectangle(0,0,1012.5,491), null);


(lib.Imagen2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.clasificacionataques();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen2_1, new cjs.Rectangle(0,0,883.2,496.8), null);


(lib.Imagen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.clasificacionatacantes();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagen1_1, new cjs.Rectangle(0,0,883.2,496.8), null);


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
	this.instance = new lib.CachedTexturedBitmap_529();
	this.instance.parent = this;
	this.instance.setTransform(-0.95,-0.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoBlanco, new cjs.Rectangle(-0.9,-0.9,1091,674.6), null);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_528();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo, new cjs.Rectangle(0,0,1369,771.7), null);


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
	this.instance.setTransform(0,0,0.5699,0.5699);

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
(lib.contenidos2m3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		var ordenadas = 0;
		
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
		
		
		
		
		function sombra(e){
			//e.scaleX = 1.1;
			//e.scaleY = 1.1;
			e.shadow = new createjs.Shadow("#000000", 10, 8, 10);
			//instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
			//instanciaAudio.play();
			
			/*switch(e.name){
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
			}*/
			//console.log(e.name);
		}
		
		
		var raiz = this;
		
		this.inicio.addEventListener("click", function(){moverse(raiz.inicio)});
		this.actividades.addEventListener("click", function(){moverse(raiz.actividades)});
		this.historia.addEventListener("click", function(){moverse(raiz.historia)});
		this.ayuda.addEventListener("click", function(){moverse(raiz.ayuda)});
		this.continuar.addEventListener("click", function(){moverse(raiz.continuar)});
		this.continuarIni.addEventListener("click", function(){moverse(raiz.continuarIni)});
		
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
					window.open("./actividadm3.html", "_self");
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
		
		this.continuar.addEventListener("mouseover", function(){maximizar(raiz.continuar)});
		this.continuar.addEventListener("mouseout", function(){normal(raiz.continuar)});
		
		this.continuarIni.addEventListener("mouseover", function(){maximizar(raiz.continuarIni)});
		this.continuarIni.addEventListener("mouseout", function(){normal(raiz.continuarIni)});
		
		
		var fondo = "fondo";
		var campana = "campana";
		var arrPirata = "arrPirata";
		var monedas = "monedas";
		var relojtictac = "relojtictac";
		var recogerMoneda = "recogerMoneda";
		var instrucciones = "instrucciones";
		var caidametal = "caidametal";
		var beep01 = "beep01";
		var continuar = "beep08";
		var blop = "blop";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"./sounds/campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"./sounds/arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"./sounds/monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"./sounds/relojtictac.mp3"});
		createjs.Sound.registerSound({id:"recogerMoneda",src:"./sounds/recogerMoneda.mp3"});
		createjs.Sound.registerSound({id:"instrucciones",src:"./sounds/instrucciones.mp3"});
		createjs.Sound.registerSound({id:"caidametal",src:"./sounds/caidametal.mp3"});
		createjs.Sound.registerSound({id:"beep01",src:"./sounds/beep01.mp3"});
		createjs.Sound.registerSound({id:"beep08",src:"./sounds/beep08.mp3"});
		createjs.Sound.registerSound({id:"blop",src:"./sounds/blop.mp3"});
		
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
				case "continuarIni":
					instanciaAudio = createjs.Sound.createInstance(continuar);
					instanciaAudio.play();
					
					break;
				case "continuar":
					instanciaAudio = createjs.Sound.createInstance(continuar);
					instanciaAudio.play();
					break;
			}
			//console.log(e.name);
		}
		
		function normal(e){
			e.scaleX = 1;
			e.scaleY = 1;
			e.shadow = null;
		}
		
		
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
		
		
		//Código control de botones
		//BotonSiguiente
		this.botonSiguiente1.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente1)});
		this.botonSiguiente2.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente2)});
		this.botonSiguiente3.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente3)});
		this.botonSiguiente4.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente4)});
		this.botonSiguiente5.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente5)});
		this.botonSiguiente6.addEventListener("click", function(){botonSiguiente(raiz.botonSiguiente6)});
		
		function botonSiguiente(e){
			switch (e.name){
				case "botonSiguiente1":
					raiz.gotoAndStop(27);
					break;
				case "botonSiguiente2":
					raiz.gotoAndStop(28);
					break;
				case "botonSiguiente3":
					raiz.gotoAndStop(29);
					break;
				case "botonSiguiente4":
					raiz.gotoAndStop(30);
					break;
				case "botonSiguiente5":
					raiz.gotoAndStop(31);
					break;
				case "botonSiguiente6":
					raiz.gotoAndStop(32);
					break;
			}
		}
		
		//Puntos Imagen1
		this.punto1Imagen1.addEventListener("click", function(){controlBotones(raiz.punto1Imagen1)});
		this.punto1Imagen1.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		//Puntos Imagen2
		this.punto1Imagen2.addEventListener("click", function(){controlBotones(raiz.punto1Imagen2)});
		this.punto1Imagen2.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		//Puntos Imagen3
		this.punto1Imagen3.addEventListener("click", function(){controlBotones(raiz.punto1Imagen3)});
		this.punto1Imagen3.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		//Puntos Imagen4
		this.punto1Imagen4.addEventListener("click", function(){controlBotones(raiz.punto1Imagen4)});
		this.punto1Imagen4.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		//Puntos Imagen5
		this.punto1Imagen5.addEventListener("click", function(){controlBotones(raiz.punto1Imagen5)});
		this.punto1Imagen5.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		//Puntos Imagen6
		this.punto1Imagen6.addEventListener("click", function(){controlBotones(raiz.punto1Imagen6)});
		this.punto1Imagen6.shadow = new createjs.Shadow("#000000", 10, 8, 10);
		
		function controlBotones(e){
			instanciaAudio = createjs.Sound.createInstance(blop);
					instanciaAudio.play();
			switch(e.name){
				//Imagen1
				case "punto1Imagen1":
					raiz.punto2Imagen1.addEventListener("click", function(){controlBotones(raiz.punto2Imagen1)});
					raiz.punto1Imagen1.shadow = null;
					raiz.punto2Imagen1.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen1.visible = false;
					raiz.imagen1.alpha = 0.25;
					break;
				case "punto2Imagen1":
					raiz.punto3Imagen1.addEventListener("click", function(){controlBotones(raiz.punto3Imagen1)});
					raiz.punto2Imagen1.shadow = null;
					raiz.punto3Imagen1.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen1.visible = false;
					raiz.imagen1.alpha = 0.50;
					break;
				case "punto3Imagen1":
					raiz.punto4Imagen1.addEventListener("click", function(){controlBotones(raiz.punto4Imagen1)});
					raiz.punto3Imagen1.shadow = null;
					raiz.punto4Imagen1.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen1.visible = false;
					raiz.imagen1.alpha = 0.75;
					break;
				case "punto4Imagen1":
					raiz.imagen1.alpha = 1;
					raiz.punto4Imagen1.visible = false;
					raiz.punto4Imagen1.shadow = null;
					raiz.botonSiguiente1.visible = true;
					break;
				//Imagen2
				case "punto1Imagen2":
					raiz.punto2Imagen2.addEventListener("click", function(){controlBotones(raiz.punto2Imagen2)});
					raiz.punto1Imagen2.shadow = null;
					raiz.punto2Imagen2.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen2.visible = false;
					raiz.imagen2.alpha = 0.25;
					break;
				case "punto2Imagen2":
					raiz.punto3Imagen2.addEventListener("click", function(){controlBotones(raiz.punto3Imagen2)});
					raiz.punto2Imagen2.shadow = null;
					raiz.punto3Imagen2.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen2.visible = false;
					raiz.imagen2.alpha = 0.50;
					break;
				case "punto3Imagen2":
					raiz.punto4Imagen2.addEventListener("click", function(){controlBotones(raiz.punto4Imagen2)});
					raiz.punto3Imagen2.shadow = null;
					raiz.punto4Imagen2.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen2.visible = false;
					raiz.imagen2.alpha = 0.75;
					break;
				case "punto4Imagen2":
					raiz.imagen2.alpha = 1;
					raiz.punto4Imagen2.visible = false;
					raiz.punto4Imagen2.shadow = null;
					raiz.botonSiguiente2.visible = true;
					break;
				//Imagen3
				case "punto1Imagen3":
					raiz.punto2Imagen3.addEventListener("click", function(){controlBotones(raiz.punto2Imagen3)});
					raiz.punto1Imagen3.shadow = null;
					raiz.punto2Imagen3.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen3.visible = false;
					raiz.imagen3.alpha = 0.20;
					break;
				case "punto2Imagen3":
					raiz.punto3Imagen3.addEventListener("click", function(){controlBotones(raiz.punto3Imagen3)});
					raiz.punto2Imagen3.shadow = null;
					raiz.punto3Imagen3.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen3.visible = false;
					raiz.imagen3.alpha = 0.40;
					break;
				case "punto3Imagen3":
					raiz.punto4Imagen3.addEventListener("click", function(){controlBotones(raiz.punto4Imagen3)});
					raiz.punto3Imagen3.shadow = null;
					raiz.punto4Imagen3.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen3.visible = false;
					raiz.imagen3.alpha = 0.60;
					break;
				case "punto4Imagen3":
					raiz.punto5Imagen3.addEventListener("click", function(){controlBotones(raiz.punto5Imagen3)});
					raiz.punto4Imagen3.shadow = null;
					raiz.punto5Imagen3.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto4Imagen3.visible = false;
					raiz.imagen3.alpha = 0.80;
					break;
				case "punto5Imagen3":
					raiz.imagen3.alpha = 1;
					raiz.punto5Imagen3.visible = false;
					raiz.punto5Imagen3.shadow = null;
					raiz.botonSiguiente3.visible = true;
					break;
				//Imagen4
				case "punto1Imagen4":
					raiz.punto2Imagen4.addEventListener("click", function(){controlBotones(raiz.punto2Imagen4)});
					raiz.punto1Imagen4.shadow = null;
					raiz.punto2Imagen4.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen4.visible = false;
					raiz.imagen4.alpha = 0.20;
					break;
				case "punto2Imagen4":
					raiz.punto3Imagen4.addEventListener("click", function(){controlBotones(raiz.punto3Imagen4)});
					raiz.punto2Imagen4.shadow = null;
					raiz.punto3Imagen4.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen4.visible = false;
					raiz.imagen4.alpha = 0.40;
					break;
				case "punto3Imagen4":
					raiz.punto4Imagen4.addEventListener("click", function(){controlBotones(raiz.punto4Imagen4)});
					raiz.punto3Imagen4.shadow = null;
					raiz.punto4Imagen4.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen4.visible = false;
					raiz.imagen4.alpha = 0.60;
					break;
				case "punto4Imagen4":
					raiz.punto5Imagen4.addEventListener("click", function(){controlBotones(raiz.punto5Imagen4)});
					raiz.punto4Imagen4.shadow = null;
					raiz.punto5Imagen4.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto4Imagen4.visible = false;
					raiz.imagen4.alpha = 0.80;
					break;
				case "punto5Imagen4":
					raiz.imagen4.alpha = 1;
					raiz.punto5Imagen4.visible = false;
					raiz.punto5Imagen4.shadow = null;
					raiz.botonSiguiente4.visible = true;
					break;
				//Imagen5
				case "punto1Imagen5":
					raiz.punto2Imagen5.addEventListener("click", function(){controlBotones(raiz.punto2Imagen5)});
					raiz.punto1Imagen5.shadow = null;
					raiz.punto2Imagen5.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen5.visible = false;
					raiz.imagen5.alpha = 0.20;
					break;
				case "punto2Imagen5":
					raiz.punto3Imagen5.addEventListener("click", function(){controlBotones(raiz.punto3Imagen5)});
					raiz.punto2Imagen5.shadow = null;
					raiz.punto3Imagen5.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen5.visible = false;
					raiz.imagen5.alpha = 0.40;
					break;
				case "punto3Imagen5":
					raiz.punto4Imagen5.addEventListener("click", function(){controlBotones(raiz.punto4Imagen5)});
					raiz.punto3Imagen5.shadow = null;
					raiz.punto4Imagen5.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen5.visible = false;
					raiz.imagen5.alpha = 0.60;
					break;
				case "punto4Imagen5":
					raiz.punto5Imagen5.addEventListener("click", function(){controlBotones(raiz.punto5Imagen5)});
					raiz.punto4Imagen5.shadow = null;
					raiz.punto5Imagen5.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto4Imagen5.visible = false;
					raiz.imagen5.alpha = 0.80;
					break;
				case "punto5Imagen5":
					raiz.imagen5.alpha = 1;
					raiz.punto5Imagen5.visible = false;
					raiz.punto5Imagen5.shadow = null;
					raiz.botonSiguiente5.visible = true;
					break;
				//Imagen6
				case "punto1Imagen6":
					raiz.punto2Imagen6.addEventListener("click", function(){controlBotones(raiz.punto2Imagen6)});
					raiz.punto1Imagen6.shadow = null;
					raiz.punto2Imagen6.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto1Imagen6.visible = false;
					raiz.imagen6.alpha = 0.20;
					break;
				case "punto2Imagen6":
					raiz.punto3Imagen6.addEventListener("click", function(){controlBotones(raiz.punto3Imagen6)});
					raiz.punto2Imagen6.shadow = null;
					raiz.punto3Imagen6.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto2Imagen6.visible = false;
					raiz.imagen6.alpha = 0.40;
					break;
				case "punto3Imagen6":
					raiz.punto4Imagen6.addEventListener("click", function(){controlBotones(raiz.punto4Imagen6)});
					raiz.punto3Imagen6.shadow = null;
					raiz.punto4Imagen6.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto3Imagen6.visible = false;
					raiz.imagen6.alpha = 0.60;
					break;
				case "punto4Imagen6":
					raiz.punto5Imagen6.addEventListener("click", function(){controlBotones(raiz.punto5Imagen6)});
					raiz.punto4Imagen6.shadow = null;
					raiz.punto5Imagen6.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.punto4Imagen6.visible = false;
					raiz.imagen6.alpha = 0.80;
					break;
				case "punto5Imagen6":
					raiz.imagen6.alpha = 1;
					raiz.punto5Imagen6.visible = false;
					raiz.punto5Imagen6.shadow = null;
					raiz.botonSiguiente6.visible = true;
					break;
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(25).call(this.frame_26).wait(5).call(this.frame_31).wait(1).call(this.frame_32).wait(1));

	// BotonSiguiente
	this.botonSiguiente1 = new lib.Siguiente();
	this.botonSiguiente1.name = "botonSiguiente1";
	this.botonSiguiente1.parent = this;
	this.botonSiguiente1.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente1.visible = false;

	this.botonSiguiente2 = new lib.Siguiente();
	this.botonSiguiente2.name = "botonSiguiente2";
	this.botonSiguiente2.parent = this;
	this.botonSiguiente2.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente2.visible = false;

	this.botonSiguiente3 = new lib.Siguiente();
	this.botonSiguiente3.name = "botonSiguiente3";
	this.botonSiguiente3.parent = this;
	this.botonSiguiente3.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente3.visible = false;

	this.botonSiguiente4 = new lib.Siguiente();
	this.botonSiguiente4.name = "botonSiguiente4";
	this.botonSiguiente4.parent = this;
	this.botonSiguiente4.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente4.visible = false;

	this.botonSiguiente5 = new lib.Siguiente();
	this.botonSiguiente5.name = "botonSiguiente5";
	this.botonSiguiente5.parent = this;
	this.botonSiguiente5.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente5.visible = false;

	this.botonSiguiente6 = new lib.Siguiente();
	this.botonSiguiente6.name = "botonSiguiente6";
	this.botonSiguiente6.parent = this;
	this.botonSiguiente6.setTransform(807.8,676.6,1,1,0,0,0,82.8,43.6);
	this.botonSiguiente6.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSiguiente1}]},26).to({state:[{t:this.botonSiguiente2}]},1).to({state:[{t:this.botonSiguiente3}]},1).to({state:[{t:this.botonSiguiente4}]},1).to({state:[{t:this.botonSiguiente5}]},1).to({state:[{t:this.botonSiguiente6}]},1).to({state:[]},1).wait(1));

	// PuntosImagen6
	this.punto4Imagen6 = new lib.Punto();
	this.punto4Imagen6.name = "punto4Imagen6";
	this.punto4Imagen6.parent = this;
	this.punto4Imagen6.setTransform(1286.95,383.55,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen6 = new lib.Punto();
	this.punto3Imagen6.name = "punto3Imagen6";
	this.punto3Imagen6.parent = this;
	this.punto3Imagen6.setTransform(1217.25,590.15,1,1,0,0,0,34.9,34.9);

	this.punto5Imagen6 = new lib.Punto();
	this.punto5Imagen6.name = "punto5Imagen6";
	this.punto5Imagen6.parent = this;
	this.punto5Imagen6.setTransform(801.3,126.25,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen6 = new lib.Punto();
	this.punto2Imagen6.name = "punto2Imagen6";
	this.punto2Imagen6.parent = this;
	this.punto2Imagen6.setTransform(374.1,583.25,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen6 = new lib.Punto();
	this.punto1Imagen6.name = "punto1Imagen6";
	this.punto1Imagen6.parent = this;
	this.punto1Imagen6.setTransform(304.4,383.55,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen6},{t:this.punto2Imagen6},{t:this.punto5Imagen6},{t:this.punto3Imagen6},{t:this.punto4Imagen6}]},31).to({state:[]},1).wait(1));

	// Imagen6
	this.imagen6 = new lib.Imagen6();
	this.imagen6.name = "imagen6";
	this.imagen6.parent = this;
	this.imagen6.setTransform(801.5,360.5,1,1,0,0,0,506,245.5);
	this.imagen6.alpha = 0;
	this.imagen6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen6).wait(31).to({_off:false},0).to({_off:true},1).wait(1));

	// PuntosImagen5
	this.punto4Imagen5 = new lib.Punto();
	this.punto4Imagen5.name = "punto4Imagen5";
	this.punto4Imagen5.parent = this;
	this.punto4Imagen5.setTransform(1286.95,383.55,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen5 = new lib.Punto();
	this.punto3Imagen5.name = "punto3Imagen5";
	this.punto3Imagen5.parent = this;
	this.punto3Imagen5.setTransform(1217.25,590.15,1,1,0,0,0,34.9,34.9);

	this.punto5Imagen5 = new lib.Punto();
	this.punto5Imagen5.name = "punto5Imagen5";
	this.punto5Imagen5.parent = this;
	this.punto5Imagen5.setTransform(801.3,126.25,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen5 = new lib.Punto();
	this.punto2Imagen5.name = "punto2Imagen5";
	this.punto2Imagen5.parent = this;
	this.punto2Imagen5.setTransform(374.1,583.25,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen5 = new lib.Punto();
	this.punto1Imagen5.name = "punto1Imagen5";
	this.punto1Imagen5.parent = this;
	this.punto1Imagen5.setTransform(304.4,383.55,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen5},{t:this.punto2Imagen5},{t:this.punto5Imagen5},{t:this.punto3Imagen5},{t:this.punto4Imagen5}]},30).to({state:[]},1).wait(2));

	// Imagen5
	this.imagen5 = new lib.Imagen5();
	this.imagen5.name = "imagen5";
	this.imagen5.parent = this;
	this.imagen5.setTransform(801.2,360.5,1,1,0,0,0,506.2,245.5);
	this.imagen5.alpha = 0;
	this.imagen5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen5).wait(30).to({_off:false},0).to({_off:true},1).wait(2));

	// PuntosImagen4
	this.punto4Imagen4 = new lib.Punto();
	this.punto4Imagen4.name = "punto4Imagen4";
	this.punto4Imagen4.parent = this;
	this.punto4Imagen4.setTransform(1286.95,383.55,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen4 = new lib.Punto();
	this.punto3Imagen4.name = "punto3Imagen4";
	this.punto3Imagen4.parent = this;
	this.punto3Imagen4.setTransform(1217.25,590.15,1,1,0,0,0,34.9,34.9);

	this.punto5Imagen4 = new lib.Punto();
	this.punto5Imagen4.name = "punto5Imagen4";
	this.punto5Imagen4.parent = this;
	this.punto5Imagen4.setTransform(801.3,126.25,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen4 = new lib.Punto();
	this.punto2Imagen4.name = "punto2Imagen4";
	this.punto2Imagen4.parent = this;
	this.punto2Imagen4.setTransform(374.1,583.25,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen4 = new lib.Punto();
	this.punto1Imagen4.name = "punto1Imagen4";
	this.punto1Imagen4.parent = this;
	this.punto1Imagen4.setTransform(304.4,383.55,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen4},{t:this.punto2Imagen4},{t:this.punto5Imagen4},{t:this.punto3Imagen4},{t:this.punto4Imagen4}]},29).to({state:[]},1).wait(3));

	// Imagen4
	this.imagen4 = new lib.Imagen4_1();
	this.imagen4.name = "imagen4";
	this.imagen4.parent = this;
	this.imagen4.setTransform(801.2,360.5,1,1,0,0,0,506.2,245.5);
	this.imagen4.alpha = 0;
	this.imagen4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen4).wait(29).to({_off:false},0).to({_off:true},1).wait(3));

	// PuntosImagen3
	this.punto4Imagen3 = new lib.Punto();
	this.punto4Imagen3.name = "punto4Imagen3";
	this.punto4Imagen3.parent = this;
	this.punto4Imagen3.setTransform(1286.9,383.6,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen3 = new lib.Punto();
	this.punto3Imagen3.name = "punto3Imagen3";
	this.punto3Imagen3.parent = this;
	this.punto3Imagen3.setTransform(1217.2,590.2,1,1,0,0,0,34.9,34.9);

	this.punto5Imagen3 = new lib.Punto();
	this.punto5Imagen3.name = "punto5Imagen3";
	this.punto5Imagen3.parent = this;
	this.punto5Imagen3.setTransform(801.25,126.3,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen3 = new lib.Punto();
	this.punto2Imagen3.name = "punto2Imagen3";
	this.punto2Imagen3.parent = this;
	this.punto2Imagen3.setTransform(374.05,583.3,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen3 = new lib.Punto();
	this.punto1Imagen3.name = "punto1Imagen3";
	this.punto1Imagen3.parent = this;
	this.punto1Imagen3.setTransform(304.35,383.6,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen3},{t:this.punto2Imagen3},{t:this.punto5Imagen3},{t:this.punto3Imagen3},{t:this.punto4Imagen3}]},28).to({state:[]},1).wait(4));

	// Imagen3
	this.imagen3 = new lib.Imagen3_1();
	this.imagen3.name = "imagen3";
	this.imagen3.parent = this;
	this.imagen3.setTransform(801.2,360.5,1,1,0,0,0,506.2,245.5);
	this.imagen3.alpha = 0;
	this.imagen3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen3).wait(28).to({_off:false},0).to({_off:true},1).wait(4));

	// PuntosImagen2
	this.punto4Imagen2 = new lib.Punto();
	this.punto4Imagen2.name = "punto4Imagen2";
	this.punto4Imagen2.parent = this;
	this.punto4Imagen2.setTransform(1234.25,136.65,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen2 = new lib.Punto();
	this.punto3Imagen2.name = "punto3Imagen2";
	this.punto3Imagen2.parent = this;
	this.punto3Imagen2.setTransform(1234.25,620.95,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen2 = new lib.Punto();
	this.punto2Imagen2.name = "punto2Imagen2";
	this.punto2Imagen2.parent = this;
	this.punto2Imagen2.setTransform(356.05,620.95,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen2 = new lib.Punto();
	this.punto1Imagen2.name = "punto1Imagen2";
	this.punto1Imagen2.parent = this;
	this.punto1Imagen2.setTransform(356.05,136.65,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen2},{t:this.punto2Imagen2},{t:this.punto3Imagen2},{t:this.punto4Imagen2}]},27).to({state:[]},1).wait(5));

	// Imagen2
	this.imagen2 = new lib.Imagen2_1();
	this.imagen2.name = "imagen2";
	this.imagen2.parent = this;
	this.imagen2.setTransform(797.6,383.4,1,1,0,0,0,441.6,248.4);
	this.imagen2.alpha = 0;
	this.imagen2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen2).wait(27).to({_off:false},0).to({_off:true},1).wait(5));

	// PuntosImagen1
	this.punto4Imagen1 = new lib.Punto();
	this.punto4Imagen1.name = "punto4Imagen1";
	this.punto4Imagen1.parent = this;
	this.punto4Imagen1.setTransform(1238.25,148.55,1,1,0,0,0,34.9,34.9);

	this.punto3Imagen1 = new lib.Punto();
	this.punto3Imagen1.name = "punto3Imagen1";
	this.punto3Imagen1.parent = this;
	this.punto3Imagen1.setTransform(1238.25,632.85,1,1,0,0,0,34.9,34.9);

	this.punto2Imagen1 = new lib.Punto();
	this.punto2Imagen1.name = "punto2Imagen1";
	this.punto2Imagen1.parent = this;
	this.punto2Imagen1.setTransform(360.05,632.85,1,1,0,0,0,34.9,34.9);

	this.punto1Imagen1 = new lib.Punto();
	this.punto1Imagen1.name = "punto1Imagen1";
	this.punto1Imagen1.parent = this;
	this.punto1Imagen1.setTransform(360.05,148.55,1,1,0,0,0,34.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1Imagen1},{t:this.punto2Imagen1},{t:this.punto3Imagen1},{t:this.punto4Imagen1}]},2).to({state:[]},25).wait(6));

	// Imagen1
	this.imagen1 = new lib.Imagen1_1();
	this.imagen1.name = "imagen1";
	this.imagen1.parent = this;
	this.imagen1.setTransform(796.6,384.4,1,1,0,0,0,441.6,248.4);
	this.imagen1.alpha = 0;
	this.imagen1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen1).wait(2).to({_off:false},0).to({_off:true},25).wait(6));

	// BotonContinuar
	this.continuarIni = new lib.Continuar();
	this.continuarIni.name = "continuarIni";
	this.continuarIni.parent = this;
	this.continuarIni.setTransform(721.35,559.05,1,1,0,0,0,165.7,87);

	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(791.15,398.75,1,1,0,0,0,165.7,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.continuarIni}]}).to({state:[]},1).to({state:[{t:this.continuar}]},31).wait(1));

	// Inicio
	this.inicio = new lib.Inicio();
	this.inicio.name = "inicio";
	this.inicio.parent = this;
	this.inicio.setTransform(-92.8,131.6,1,1,0,0,0,84.2,84.6);
	this.inicio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(2).to({_off:false},0).wait(1).to({regX:84.3,x:-11.85},0).wait(1).to({x:67.15},0).wait(1).to({x:125.3},0).wait(28));

	// Historia
	this.historia = new lib.Historia();
	this.historia.name = "historia";
	this.historia.parent = this;
	this.historia.setTransform(-96.8,300.4,1,1,0,0,0,86.2,62.4);
	this.historia._off = true;

	this.timeline.addTween(cjs.Tween.get(this.historia).wait(2).to({_off:false},0).wait(1).to({x:-59.85},0).wait(1).to({x:-23.8},0).wait(1).to({x:11.5},0).wait(1).to({x:45.9},0).wait(1).to({x:79.5},0).wait(1).to({x:112.2},0).wait(1).to({x:127.2},0).wait(24));

	// Actividades
	this.actividades = new lib.Actividades();
	this.actividades.name = "actividades";
	this.actividades.parent = this;
	this.actividades.setTransform(-107.8,471.2,1,1,0,0,0,99.2,77.2);
	this.actividades._off = true;

	this.timeline.addTween(cjs.Tween.get(this.actividades).wait(2).to({_off:false},0).wait(1).to({x:-82.65},0).wait(1).to({x:-58.1},0).wait(1).to({x:-34.15},0).wait(1).to({x:-10.7},0).wait(1).to({x:12.15},0).wait(1).to({x:34.4},0).wait(1).to({x:56.15},0).wait(1).to({x:77.3},0).wait(1).to({x:97.9},0).wait(1).to({x:117.9},0).wait(1).to({x:129.2},0).wait(20));

	// Ayuda
	this.ayuda = new lib.Ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.parent = this;
	this.ayuda.setTransform(-108.6,646.1,1,1,0,0,0,86.4,76.1);
	this.ayuda._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(2).to({_off:false},0).wait(1).to({regX:86.3,x:-90.25},0).wait(1).to({x:-72.25},0).wait(1).to({x:-54.65},0).wait(1).to({x:-37.45},0).wait(1).to({x:-20.7},0).wait(1).to({x:-4.35},0).wait(1).to({x:11.6},0).wait(1).to({x:27.1},0).wait(1).to({x:42.25},0).wait(1).to({x:56.95},0).wait(1).to({x:71.2},0).wait(1).to({x:85.1},0).wait(1).to({x:98.5},0).wait(1).to({x:111.55},0).wait(1).to({x:124.15},0).wait(1).to({x:127.3},0).wait(15));

	// FondoBlanco
	this.instance = new lib.FondoBlanco();
	this.instance.parent = this;
	this.instance.setTransform(791,385.9,1,1,0,0,0,544.5,336.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(31));

	// Instruccion
	this.instance_1 = new lib.estrategia1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-1,1.07,1.07);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(31));

	// TextoContinuar
	this.text = new cjs.Text("Haz clic para continuar", "96px 'Berlin Sans FB'", "#FFCC00");
	this.text.lineHeight = 105;
	this.text.parent = this;
	this.text.setTransform(269.8,164.8);
	this.text.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(32));

	// FondoAzul
	this.instance_2 = new lib.Fondo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(682.9,385.8,1,1,0,0,0,684.5,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,383,891.4000000000001,388.70000000000005);
// library properties:
lib.properties = {
	id: '169B001951AFA64480829CC2F9D0500D',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_528.png?1595387919770", id:"CachedTexturedBitmap_528"},
		{src:"images/CachedTexturedBitmap_529.png?1595387919770", id:"CachedTexturedBitmap_529"},
		{src:"images/contenidos2m3_atlas_.png?1595387919740", id:"contenidos2m3_atlas_"},
		{src:"images/contenidos2m3_atlas_2.png?1595387919740", id:"contenidos2m3_atlas_2"},
		{src:"images/contenidos2m3_atlas_3.png?1595387919741", id:"contenidos2m3_atlas_3"},
		{src:"images/contenidos2m3_atlas_4.png?1595387919741", id:"contenidos2m3_atlas_4"}
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
an.compositions['169B001951AFA64480829CC2F9D0500D'] = {
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