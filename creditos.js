(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"creditos_atlas_", frames: [[0,843,1422,675],[0,0,1774,841]]},
		{name:"creditos_atlas_2", frames: [[992,1645,443,204],[1437,1645,218,213],[1424,0,463,302],[0,677,960,720],[1175,1399,522,244],[628,1399,545,235],[1424,304,559,243],[0,1399,626,417],[1699,1399,330,269],[962,677,960,720],[0,0,1422,675],[628,1636,362,278]]}
];


// symbols:



(lib.autores = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_466 = function() {
	this.initialize(img.CachedTexturedBitmap_466);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4146,2346);


(lib.cerrar = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.colaboradores = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elciberespacio = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fondoMaderaN = function() {
	this.initialize(img.fondoMaderaN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2510,1679);


(lib.freepik = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.licencia = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logos = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mensaje = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ninoPirata = function() {
	this.initialize(img.ninoPirata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1580,2455);


(lib.sabiasque = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sombrerorojo = function() {
	this.initialize(ss["creditos_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sombreroverde = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sombrero = function() {
	this.initialize(ss["creditos_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sonidosmp3 = function() {
	this.initialize(ss["creditos_atlas_2"]);
	this.gotoAndStop(11);
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


(lib.Sombrero3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombreroverde();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.11,0.11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sombrero3, new cjs.Rectangle(0,0,156.4,74.3), null);


(lib.Sombrero2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombrerorojo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.11,0.11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sombrero2, new cjs.Rectangle(0,0,156.4,74.3), null);


(lib.Sombrero1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombrero();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sombrero1, new cjs.Rectangle(0,0,159.7,75.7), null);


(lib.ImagenCreditos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.logos();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ImagenCreditos, new cjs.Rectangle(0,0,559,243), null);


(lib.FondoVerde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_466();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoVerde, new cjs.Rectangle(-0.4,-0.4,1368.3000000000002,774.1999999999999), null);


(lib.FondoMadera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.fondoMaderaN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.62,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoMadera, new cjs.Rectangle(0,0,1556.2,789.1), null);


(lib.Cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cerrar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cerrar, new cjs.Rectangle(0,0,76.3,74.6), null);


// stage content:
(lib.creditos = function(mode,startPosition,loop) {
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
		
		var sombrero1_FadeInCbk = fl_FadeSymbolIn.bind(this);
		//var parpadearTick = parpadear.bind(this);
		this.addEventListener('tick', sombrero1_FadeInCbk);
		this.sombrero1.alpha = 0;
		this.sombrero2.alpha = 0;
		this.sombrero3.alpha = 0;
		this.sombrero4.alpha = 0;
		this.sombrero5.alpha = 0;
		this.sombrero6.alpha = 0;
		
		//var sombra = 5;
		
		/*function parpadear(){
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
		}*/
		
		function fl_FadeSymbolIn()
		{
			if(this.sombrero1.alpha <= 1){
				this.sombrero1.alpha += 0.10;
				console.log(this.sombrero1.alpha);
			}
			if(this.sombrero1.alpha >= 0.5 && this.sombrero2.alpha <=1){
				this.sombrero2.alpha += 0.10;
			}
			if(this.sombrero2.alpha >= 0.5 && this.sombrero3.alpha <= 1){
				this.sombrero3.alpha += 0.10;
			}
			if(this.sombrero3.alpha >= 0.5 && this.sombrero4.alpha <= 1){
				this.sombrero4.alpha += 0.10;
			}
			if(this.sombrero4.alpha >= 0.5 && this.sombrero5.alpha <= 1){
				this.sombrero5.alpha += 0.10
			}
			if(this.sombrero5.alpha >= 0.5 && this.sombrero6.alpha <= 1){
				this.sombrero6.alpha += 0.10;
			}
			if(this.sombrero6.alpha>=1){
				this.removeEventListener('tick', sombrero1_FadeInCbk);
				//this.addEventListener('tick', parpadearTick);
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
		
		this.sombrero5.addEventListener("mouseover",function(){girar(raiz.sombrero5)});
		this.sombrero5.addEventListener("mouseout",function(){regresar(raiz.sombrero5)});
		
		this.sombrero6.addEventListener("mouseover",function(){girar(raiz.sombrero6)});
		this.sombrero6.addEventListener("mouseout",function(){regresar(raiz.sombrero6)});
		
		this.cerrar.addEventListener("mouseover",function(){maximizar(raiz.cerrar)});
		this.cerrar.addEventListener("mouseout",function(){normal(raiz.cerrar)});
		
		raiz.cerrar.addEventListener("click",function(){regresarInicio(raiz.cerrar)});
		
		function regresarInicio(e){
			window.open("./presentacion.html", "_self");
		}
		
		function mostrarImagenes(e){
			//this.removeEventListener('tick', parpadearTick);
			raiz.imagen.removeChildAt(0);
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
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero4":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero5":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero6":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero7":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero8":
					var libImage = new lib.elciberespacio();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
			}
		}
		
		var posicionY = raiz.imagen.y;
		var posicionX = raiz.imagen.x;
		
		function girar(e){
			instanciaAudio = createjs.Sound.createInstance(destapar);	
			instanciaAudio.play();
			raiz.imagen.removeChildAt(0);
			raiz.imagen.y = posicionY;
			raiz.imagen.x = posicionX;
			switch(e.name){
				case "sombrero1":
					raiz.sombrero1.rotation +=10;
					var libImage = new lib.autores();
					libImage.scaleX = 1.3;
					libImage.scaleY = 1.3;
					raiz.imagen.addChild(libImage);
					break;
				case "sombrero2":
					raiz.sombrero2.rotation +=10;
					var libImage = new lib.sonidosmp3();
					raiz.imagen.x = posicionX + 90;
					libImage.scaleX = 1.1;
					libImage.scaleY = 1.1;
					raiz.imagen.addChild(libImage);
					break;
				case "sombrero3":
					raiz.sombrero3.rotation +=10;
					var libImage = new lib.licencia();
					libImage.scaleX = 1.1;
					libImage.scaleY = 1.1;
					raiz.imagen.addChild(libImage);
					break;
				case "sombrero4":
					raiz.sombrero4.rotation +=10;
					var libImage = new lib.autores();
					libImage.scaleX = 1.3;
					libImage.scaleY = 1.3;
					raiz.imagen.addChild(libImage);
					//raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					break;
				case "sombrero5":
					raiz.sombrero5.rotation +=10;
					var libImage = new lib.colaboradores();
					libImage.scaleX = 1.3;
					libImage.scaleY = 1.3;
					raiz.imagen.y = posicionY - 40;
					raiz.imagen.addChild(libImage);
					break;
				case "sombrero6":
					raiz.sombrero6.rotation +=10;
					var libImage = new lib.freepik();
					libImage.scaleX = 1.15;
					libImage.scaleY = 1.15;
					raiz.imagen.addChild(libImage);
					break;
			}
		}
		
		function regresar(e){
			raiz.imagen.removeChildAt(0);
			var libImage = new lib.logos();
			raiz.imagen.addChild(libImage);
			raiz.imagen.y = posicionY;
			raiz.imagen.x = posicionX;
			//raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
			raiz.sombrero1.rotation = 0;
			raiz.sombrero2.rotation = 0;
			raiz.sombrero3.rotation = 0;
			raiz.sombrero4.rotation = 0;
			raiz.sombrero5.rotation = 0;
			raiz.sombrero6.rotation = 0;
		}
		
		//this.inicio.addEventListener("click", function(){moverse(raiz.inicio)});
		
		function moverse(e){
			switch(e.name){
				case "inicio":
					window.open("http://localhost/juego/PantallaInicial.html", "_self");
					break;
			}
			
		}
		
		stage.enableMouseOver();
		
		//this.inicio.addEventListener("mouseover",function(){maximizar(raiz.inicio)});
		//this.inicio.addEventListener("mouseout",function(){normal(raiz.inicio)});
		
		var fondo = "fondo";
		var campana = "campana";
		var arrPirata = "arrPirata";
		var monedas = "monedas";
		var relojtictac = "relojtictac";
		var destapar = "destapar";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"relojtictac.mp3"});
		createjs.Sound.registerSound({id:"destapar",src:"./sounds/destapar.mp3"});
		
		function maximizar(e){
		
			e.scaleX = 1.2;
			e.scaleY = 1.2;
			e.shadow = new createjs.Shadow("#000000", 10, 8, 10);
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

	// Boton
	this.cerrar = new lib.Cerrar();
	this.cerrar.name = "cerrar";
	this.cerrar.parent = this;
	this.cerrar.setTransform(1294.1,67.2,1,1,0,0,0,38.1,37.2);

	this.timeline.addTween(cjs.Tween.get(this.cerrar).wait(24));

	// LSombrero1_iz
	this.sombrero4 = new lib.Sombrero2();
	this.sombrero4.name = "sombrero4";
	this.sombrero4.parent = this;
	this.sombrero4.setTransform(109,185.85,0.9,0.9,0,0,0,78.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.sombrero4).wait(24));

	// LSombrero2_iz
	this.sombrero5 = new lib.Sombrero3();
	this.sombrero5.name = "sombrero5";
	this.sombrero5.parent = this;
	this.sombrero5.setTransform(109,348.8,0.9,0.9,0,0,0,78.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.sombrero5).wait(24));

	// LSombrero3_iz
	this.sombrero6 = new lib.Sombrero1();
	this.sombrero6.name = "sombrero6";
	this.sombrero6.parent = this;
	this.sombrero6.setTransform(107.65,515,0.9,0.9,0,0,0,80,37.9);

	this.timeline.addTween(cjs.Tween.get(this.sombrero6).wait(24));

	// LSombrero1
	this.sombrero1 = new lib.Sombrero2();
	this.sombrero1.name = "sombrero1";
	this.sombrero1.parent = this;
	this.sombrero1.setTransform(1291.05,184.25,0.9,0.9,0,0,0,78.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.sombrero1).wait(24));

	// LSombrero2
	this.sombrero2 = new lib.Sombrero3();
	this.sombrero2.name = "sombrero2";
	this.sombrero2.parent = this;
	this.sombrero2.setTransform(1291.05,348.8,0.9,0.9,0,0,0,78.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.sombrero2).wait(24));

	// LSombrero3
	this.sombrero3 = new lib.Sombrero1();
	this.sombrero3.name = "sombrero3";
	this.sombrero3.parent = this;
	this.sombrero3.setTransform(1289.7,515,0.9,0.9,0,0,0,80,37.9);

	this.timeline.addTween(cjs.Tween.get(this.sombrero3).wait(24));

	// Voces
	this.text = new cjs.Text("Voces", "bold 40px 'Berlin Sans FB'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 173;
	this.text.parent = this;
	this.text.setTransform(1288.55,222.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:222.537},0).wait(1).to({y:222.6239},0).wait(1).to({y:222.7109},0).wait(1).to({y:222.7978},0).wait(1).to({y:222.8848},0).wait(1).to({y:222.9717},0).wait(1).to({y:223.0587},0).wait(1).to({y:223.1457},0).wait(1).to({y:223.2326},0).wait(1).to({y:223.3196},0).wait(1).to({y:223.4065},0).wait(1).to({y:223.4935},0).wait(1).to({y:223.5804},0).wait(1).to({y:223.6674},0).wait(1).to({y:223.7543},0).wait(1).to({y:223.8413},0).wait(1).to({y:223.9283},0).wait(1).to({y:224.0152},0).wait(1).to({y:224.1022},0).wait(1).to({y:224.1891},0).wait(1).to({y:224.2761},0).wait(1).to({y:224.363},0).wait(1).to({y:224.45},0).wait(1));

	// Sonidos
	this.text_1 = new cjs.Text("Sonidos", "bold 40px 'Berlin Sans FB'", "#FFFF00");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 173;
	this.text_1.parent = this;
	this.text_1.setTransform(1288.55,389);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(24));

	// Licencia
	this.text_2 = new cjs.Text("Licencia", "bold 40px 'Berlin Sans FB'", "#FFFF00");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 47;
	this.text_2.lineWidth = 173;
	this.text_2.parent = this;
	this.text_2.setTransform(1288.55,559.05);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(24));

	// Imagen
	this.imagen = new lib.ImagenCreditos();
	this.imagen.name = "imagen";
	this.imagen.parent = this;
	this.imagen.setTransform(694.5,384.5,1,1,0,0,0,279.5,121.5);

	this.timeline.addTween(cjs.Tween.get(this.imagen).wait(24));

	// Autores
	this.text_3 = new cjs.Text("Autores", "bold 40px 'Berlin Sans FB'", "#FFFF00");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 47;
	this.text_3.lineWidth = 173;
	this.text_3.parent = this;
	this.text_3.setTransform(104.9,228.1);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(24));

	// Colaboradores
	this.text_4 = new cjs.Text("Colaboradores", "bold 28px 'Berlin Sans FB'", "#FFFF00");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 33;
	this.text_4.lineWidth = 195;
	this.text_4.parent = this;
	this.text_4.setTransform(105.65,389);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(24));

	// Imagenes
	this.text_5 = new cjs.Text("Imágenes", "bold 35px 'Berlin Sans FB'", "#FFFF00");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 41;
	this.text_5.lineWidth = 173;
	this.text_5.parent = this;
	this.text_5.setTransform(106.5,559.7);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(24));

	// Texto
	this.instruccion = new cjs.Text("Créditos", "96px 'Berlin Sans FB'", "#FFFFFF");
	this.instruccion.name = "instruccion";
	this.instruccion.textAlign = "center";
	this.instruccion.lineHeight = 107;
	this.instruccion.lineWidth = 320;
	this.instruccion.parent = this;
	this.instruccion.setTransform(705.5,84.95);
	this.instruccion.shadow = new cjs.Shadow("rgba(0,153,255,1)",0,0,18);

	this.timeline.addTween(cjs.Tween.get(this.instruccion).wait(24));

	// FondoMadera
	this.instance = new lib.FondoMadera();
	this.instance.parent = this;
	this.instance.setTransform(671.1,377.6,1,1,0,0,0,778.1,394.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// FondoVerde
	this.instance_1 = new lib.FondoVerde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(685.6,384.75,1.01,1,0,0,0,683.6,386.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(578,368,871.2,404.1);
// library properties:
lib.properties = {
	id: '105C48D518C08F41853F7D88DF94E85E',
	width: 1370,
	height: 770,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_466.png?1595385470593", id:"CachedTexturedBitmap_466"},
		{src:"images/fondoMaderaN.png?1595385470593", id:"fondoMaderaN"},
		{src:"images/ninoPirata.png?1595385470593", id:"ninoPirata"},
		{src:"images/creditos_atlas_.png?1595385470579", id:"creditos_atlas_"},
		{src:"images/creditos_atlas_2.png?1595385470580", id:"creditos_atlas_2"}
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
an.compositions['105C48D518C08F41853F7D88DF94E85E'] = {
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