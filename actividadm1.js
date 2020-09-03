(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"actividadm1_atlas_", frames: [[0,0,2004,1127],[0,1129,1280,720]]},
		{name:"actividadm1_atlas_2", frames: [[962,0,960,720],[0,722,960,720],[962,722,960,720],[0,0,960,720]]},
		{name:"actividadm1_atlas_3", frames: [[0,0,960,720],[962,0,960,720],[0,722,960,720],[0,1444,626,417],[962,722,649,648],[1018,1372,692,333],[628,1444,388,602]]},
		{name:"actividadm1_atlas_4", frames: [[579,910,307,239],[501,400,303,267],[0,0,467,490],[806,400,101,101],[579,1151,263,138],[501,669,330,239],[364,1325,273,274],[0,492,499,431],[364,925,213,398],[0,925,362,593],[0,1601,546,120],[469,0,406,398]]}
];


// symbols:



(lib.actividades = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ataque1 = function() {
	this.initialize(ss["actividadm1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ataque2 = function() {
	this.initialize(ss["actividadm1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ataque3 = function() {
	this.initialize(ss["actividadm1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ataque4 = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ataque5 = function() {
	this.initialize(ss["actividadm1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ataque6 = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ataque7 = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ayuda = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barcoIngles = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_391 = function() {
	this.initialize(img.CachedTexturedBitmap_391);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4107,2315);


(lib.CachedTexturedBitmap_392 = function() {
	this.initialize(img.CachedTexturedBitmap_392);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3273,2024);


(lib.CachedTexturedBitmap_393 = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.continuar = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fondoAzul = function() {
	this.initialize(ss["actividadm1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondoBits = function() {
	this.initialize(ss["actividadm1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.historia = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.inicio = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.instruccion = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maderaazul = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mapa = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.monticulo = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ninaPirata = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ninoBucanero = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ninoPirata = function() {
	this.initialize(ss["actividadm1_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.olas = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sol = function() {
	this.initialize(ss["actividadm1_atlas_4"]);
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


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninoBucanero();
	this.instance.parent = this;
	this.instance.setTransform(191.5,0,0.529,0.529,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,191.5,313.7), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.barcoIngles();
	this.instance.parent = this;
	this.instance.setTransform(398.45,0,0.8532,0.8532,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,398.5,418.1), null);


(lib.Punto1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_393();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Punto1, new cjs.Rectangle(-0.4,-0.4,33.6,33.6), null);


(lib.Olas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.olas();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.7999,1.7999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Olas, new cjs.Rectangle(0,0,982.8,216), null);


(lib.NinoPirata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninoPirata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinoPirata, new cjs.Rectangle(0,0,310.4,481.6), null);


(lib.NinaPirata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.ninaPirata();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NinaPirata, new cjs.Rectangle(0,0,42.6,79.6), null);


(lib.Mapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.mapa();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mapa, new cjs.Rectangle(0,0,746.4,745.2), null);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.text = new cjs.Text("Felicidades!\nEstas listo para pasar al siguiente nivel", "57px 'Berlin Sans FB'");
	this.text.textAlign = "center";
	this.text.lineHeight = 64;
	this.text.lineWidth = 567;
	this.text.parent = this;
	this.text.setTransform(0,-96.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.4,-98.5,570.9,197.1);


(lib.Instruccion = function(mode,startPosition,loop) {
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


(lib.Imagen = function(mode,startPosition,loop) {
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
	this.instance = new lib.CachedTexturedBitmap_392();
	this.instance.parent = this;
	this.instance.setTransform(-0.95,-0.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FondoBlanco, new cjs.Rectangle(-0.9,-0.9,1091,674.6), null);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_391();
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
(lib.actividadm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var raiz = this;
		var moverNina = false;
		
		this.stop();
		
		var monedasRecolectadas = 0;
		
		var parpadearTick = parpadearTexto.bind(this);
		
		var parpadearContinuarTick = parpadearContinuar.bind(this);
		
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
		
		this.addEventListener('tick', parpadearTick);
		
		var sombraTexto = 5;
		
		function parpadearTexto(){
			if(sombraTexto>= 5 && sombraTexto<25){
				raiz.instruccionTexto.shadow = new createjs.Shadow("#000000", 6, 6, sombraTexto);
				sombraTexto++;
			}
			else if(sombraTexto>=25 && sombraTexto<45){
				raiz.instruccionTexto.shadow = new createjs.Shadow("#000000", 6, 6,49-sombraTexto);
				sombraTexto++;
				//console.log(sombra);
			}
			if(sombraTexto == 45)
				sombraTexto = 5;
		}
		
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
		
		this.ninoPirata.addEventListener("tick",function(){parpadear(raiz.ninoPirata)});
		
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
				//console.log(sombra);
			}
			if(sombra == 50)
				sombra = 10;
		}
		
		
		this.ninaPirata.addEventListener("tick",function(){colision()});
		
		var arregloPuntosObjeto1 = [];
		var arregloPuntosObjeto2 = [];
		
		var punto = {x:0,y:0};
		var punto2 = {x:0,y:0};
		
		var colisiones = {
			punto1 : false,
			punto2 : false,
			punto3 : false,
			punto4 : false,
			punto5 : false,
			punto6 : false,
			punto7 : false
		}
		
		var objetoColisionado = "-1";
		
		var segundos = 0;
		
		var quitarImagenTick = quitarImagen.bind(this);
		var quitarImagenInstTick = quitarImagenInst.bind(this);
		
		function quitarImagen(){
			segundos++;
			raiz.punto1.visible = false;
			raiz.punto2.visible = false;
			raiz.punto3.visible = false;
			raiz.punto4.visible = false;
			raiz.punto5.visible = false;
			raiz.punto6.visible = false;
			raiz.punto7.visible = false;
			if(segundos == 120){
				moverNina = false;
				segundos = 0;
				raiz.punto1.visible = true;
				raiz.punto2.visible = true;
				raiz.punto3.visible = true;
				raiz.punto4.visible = true;
				raiz.punto5.visible = true;
				raiz.punto6.visible = true;
				raiz.punto7.visible = true;
				raiz.imagen.removeChildAt(0);
				raiz.imagen.removeEventListener("tick", quitarImagenTick);
				if(monedasRecolectadas == 7){
					raiz.gotoAndPlay(26);
					this.continuar.addEventListener('tick', parpadearContinuarTick);
				}
			}
		}
		
		function quitarImagenInst(){
			segundos++;
			raiz.punto1.visible = false;
			raiz.punto2.visible = false;
			raiz.punto3.visible = false;
			raiz.punto4.visible = false;
			raiz.punto5.visible = false;
			raiz.punto6.visible = false;
			raiz.punto7.visible = false;
			if(segundos == 70){
				segundos = 0;
				raiz.punto1.visible = true;
				raiz.punto2.visible = true;
				raiz.punto3.visible = true;
				raiz.punto4.visible = true;
				raiz.punto5.visible = true;
				raiz.punto6.visible = true;
				raiz.punto7.visible = true;
				raiz.instruccion.removeChildAt(0);
				raiz.instruccion.removeEventListener("tick", quitarImagenInstTick);
			}
		}
		
		this.ninoPirata.addEventListener("click", function(){mostrarMensaje()});
		
		function mostrarMensaje(){
			raiz.removeEventListener("tick",parpadearTick);
			raiz.instruccionTexto.visible = false;
			var libImage = new lib.instruccion();
			libImage.scaleX = 1;
			libImage.scaleY = 1;
			raiz.instruccion.addChild(libImage);
			raiz.instruccion.addEventListener("tick",quitarImagenInstTick);
			instanciaAudio = createjs.Sound.createInstance(instrucciones);	
			instanciaAudio.play();
		}
		
		function colision(){
			//console.log(detectarColision(raiz.ninaPirata,raiz.punto1));
			/*var punto = raiz.ninaPirata.localToLocal(raiz.ninaPirata.x,raiz.ninaPirata.y,raiz.punto1);
			if(raiz.punto1.hitTest(punto.x,punto.y)){
				console.log(true);
			}*/
			if(intersect(raiz.ninaPirata,raiz.punto1)){
				if(!colisiones.punto1){
					objetoColisionado = "punto1";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto2)){
				if(!colisiones.punto2){
					objetoColisionado = "punto2";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto3)){
				if(!colisiones.punto3){
					objetoColisionado = "punto3";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto4)){
				if(!colisiones.punto4){
					objetoColisionado = "punto4";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto5)){
				if(!colisiones.punto5){
					objetoColisionado = "punto5";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto6)){
				if(!colisiones.punto6){
					objetoColisionado = "punto6";
					moverNina = true;
				}
			}
			else if(intersect(raiz.ninaPirata,raiz.punto7)){
				if(!colisiones.punto7){
					objetoColisionado = "punto7";
					moverNina = true;
				}
			}
			//console.log(objetoColisionado);
			switch(objetoColisionado){
				case "punto1":
					//raiz.punto1.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque1();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto1);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto1 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto2":
					//raiz.punto2.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque2();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto2);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto2 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto3":
					//raiz.punto3.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque3();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto3);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto3 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto4":
					//raiz.punto4.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque4();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto4);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto4 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto5":
					//raiz.punto5.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque5();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto5);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto5 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto6":
					//raiz.punto6.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque6();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto6);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto6 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
				case "punto7":
					//raiz.punto7.visible = false;
					instanciaAudio = createjs.Sound.createInstance(recogerMoneda);	
					instanciaAudio.play();
					var libImage = new lib.ataque7();
					libImage.scaleX = 0.65;
					libImage.scaleY = 0.65;
					raiz.imagen.addChild(libImage);
					raiz.imagen.shadow = new createjs.Shadow("#000000", 10, 8, 10);
					raiz.removeChild(raiz.punto7);
					raiz.imagen.addEventListener("tick",quitarImagenTick);
					colisiones.punto7 = true;
					objetoColisionado = "-1";
					monedasRecolectadas++;
					break;
			}
			//console.log(raiz.children);
			raiz.monedasRecogidas.text = monedasRecolectadas + " / 7";
		}
		
		
		
		function intersect(r1, r2) {
		    var leftMost = (r1.x < r2.x) ? r1 : r2;
		    var rightMost = (r1.x > r2.x) ? r1 : r2;
		    var upMost = (r1.y < r2.y) ? r1 : r2;
		    var downMost = (r1.y > r2.y) ? r1 : r2;
		    
		    var upperLeft = [rightMost.x, downMost.y];
		    var upperRight = [leftMost.x + leftMost.getBounds().width, downMost.y];
		    var lowerLeft = [rightMost.x, upMost.y + upMost.getBounds().height];
		    var lowerRight = [leftMost.x + leftMost.getBounds().width, upMost.y + upMost.getBounds().height];
		    
		    var x = upperLeft[0];
		    var y = upperLeft[1];
		    
		    var width = upperRight[0] - upperLeft[0];
		    var height = lowerLeft[1] - upperLeft[1];
		    
		    //console.log(width, height);
		    
		    if (width < 0 || height < 0) {
		        width = 0;
		        height = 0;
				//console.log(false);
				return false;
		    }
			else{
				//console.log(true);
				return true;
			}
			
			
		    
		    //var r = drawRect(x, y, width, height, '#f00', '#f00');
		    
		    //return r;
		}
		
		function detectarColision(objeto1, objeto2){
			arregloPuntosObjeto1 = obtenerPuntos(objeto1);
			arregloPuntosObjeto2 = obtenerPuntos(objeto2);
			for(var i = 0; i < arregloPuntosObjeto1.length; i++){
				punto = arregloPuntosObjeto1[i];
				for(var j = 0; j < arregloPuntosObjeto2.length; j++){
					punto2 = arregloPuntosObjeto2[j];
					if(punto.x == punto2.x && punto.y == punto2.y){
						return true;
					}
				}
			}
			return false;
		}
		
		function obtenerPuntos(objeto){
			var arregloPuntosObjeto = [];
			var propiedades = objeto.getBounds();
			for (var i = 0;i < 4;i++){
				switch(i){
					case 0:
						for(var j = objeto.x;j < objeto.x + propiedades.width;j+=0.1){
							punto.x = j;
							punto.y = objeto.y;
							arregloPuntosObjeto.push(Object.assign({}, punto));
						}
						break;
					case 1:
						for(var j = objeto.x;j < objeto.x + propiedades.width;j+=0.1){
							punto.x = j;
							punto.y = objeto.y + propiedades.height;
							arregloPuntosObjeto.push(Object.assign({}, punto));
						}
						break;
					case 2:
						for(var j = objeto.y;j < objeto.y + propiedades.height;j+=0.1){
							punto.x = objeto.x;
							punto.y = j;
							arregloPuntosObjeto.push(Object.assign({}, punto));
						}
						break;
					case 3:
						for(var j = objeto.y;j < objeto.y + propiedades.height;j+=0.1){
							punto.x = objeto.x + propiedades.width;
							punto.y = j;
							arregloPuntosObjeto.push(Object.assign({}, punto));
						}
						break;
				}
			}//Fin ciclo
			return arregloPuntosObjeto;
		}
		
		
		
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
					window.open("./contenidosm1.html", "_self");
					break;
				case "actividades":
					window.open("./actividadm1.html", "_self");
					break;
				case "ayuda":
					window.open("./ayuda.html", "_self");
					break;
				case "continuar":
					window.open("./contenidosm3.html", "_self");
					break;
				case "continuarIni":
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
		var plop = "plop";
		var continuar = "beep08";
		
		// createjs.Sound.registerSound("https://s3.amazonaws.com/nrf-codepen-assets/snare-2.mp3", soundSnare);
		createjs.Sound.registerSound({id:"fondo",src:"./sounds/piratasFondo.mp3"});
		createjs.Sound.registerSound({id:"campana",src:"./sounds/campana.mp3"});
		createjs.Sound.registerSound({id:"arrPirata",src:"./sounds/arrPirata.mp3"});
		createjs.Sound.registerSound({id:"monedas",src:"./sounds/monedas.mp3"});
		createjs.Sound.registerSound({id:"relojtictac",src:"./sounds/relojtictac.mp3"});
		createjs.Sound.registerSound({id:"recogerMoneda",src:"./sounds/recogerMoneda.mp3"});
		createjs.Sound.registerSound({id:"instrucciones",src:"./sounds/instrucciones.mp3"});
		createjs.Sound.registerSound({id:"plop",src:"./sounds/plop.mp3"});
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
				case "continuarIni":
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
		
		document.onkeydown = keyDown;
		var sonidoCaminar = false;
		
		function keyDown(e){
			if(!moverNina){
				if(e.keyCode == 37){
				raiz.sonidoCaminar = true;
				raiz.instruccionTexto.visible = false;
				if((raiz.ninaPirata.x - 10 - raiz.ninaPirata.getBounds().width) > raiz.mapa.x - (raiz.mapa.getBounds().width/2)){
					raiz.ninaPirata.x -=10;
				}
			}
			else if (e.keyCode == 39){
				raiz.sonidoCaminar = true;
				raiz.instruccionTexto.visible = false;
				if((raiz.ninaPirata.x + 20 + raiz.ninaPirata.getBounds().width) < raiz.mapa.x + (raiz.mapa.getBounds().width/2)){
					raiz.ninaPirata.x +=10;
				}
			}
			else if(e.keyCode == 38){
				raiz.sonidoCaminar = true;
				raiz.instruccionTexto.visible = false;
				console.log("Mapa " + (raiz.mapa.y - (raiz.mapa.getBounds().height/2)));
				console.log("Nina Pirata " + raiz.ninaPirata.y);
				if((raiz.ninaPirata.y - 10 - raiz.ninaPirata.getBounds().height) > raiz.mapa.y - (raiz.mapa.getBounds().height/2)){
					raiz.ninaPirata.y -=10;
				}
			}
			else if(e.keyCode == 40){
				raiz.sonidoCaminar = true;
				raiz.instruccionTexto.visible = false;
				if((raiz.ninaPirata.y + 20 + raiz.ninaPirata.getBounds().height) < raiz.mapa.y + (raiz.mapa.getBounds().height/2)){
					raiz.ninaPirata.y +=10;
				}
			}
			}
			if(raiz.sonidoCaminar){
				instanciaAudio = createjs.Sound.createInstance(plop);	
				instanciaAudio.play();
				raiz.sonidoCaminar = false;
			}
		}
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(16).call(this.frame_40).wait(1));

	// MonedasIndicador
	this.instance = new lib.Punto1();
	this.instance.parent = this;
	this.instance.setTransform(552.4,692.25,0.756,0.756,0,0,0,16.4,16.4);

	this.instance_1 = new lib.Punto1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(538.5,692.25,0.756,0.756,0,0,0,16.4,16.4);

	this.instance_2 = new lib.Punto1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(548.4,683,0.756,0.756,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},24).wait(16));

	// MonedasRecogidas
	this.monedasRecogidas = new cjs.Text("0 / 7", "34px 'Cooper Black'", "#CC3333");
	this.monedasRecogidas.name = "monedasRecogidas";
	this.monedasRecogidas.lineHeight = 41;
	this.monedasRecogidas.lineWidth = 86;
	this.monedasRecogidas.parent = this;
	this.monedasRecogidas.setTransform(571.5,668.6);
	this.monedasRecogidas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.monedasRecogidas).wait(1).to({_off:false},0).to({_off:true},24).wait(16));

	// MensajeFelicidades
	this.instance_3 = new lib.Interpolación2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(963.35,-346.45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(1).to({y:-276.7589},0).wait(1).to({y:-211.8629},0).wait(1).to({y:-151.7981},0).wait(1).to({y:-96.4922},0).wait(1).to({y:-46.0176},0).wait(1).to({y:-0.338},0).wait(1).to({y:40.5104},0).wait(1).to({y:76.5638},0).wait(1).to({y:107.822},0).wait(1).to({y:134.2491},0).wait(1).to({y:155.8811},0).wait(1).to({y:172.718},0).wait(1).to({y:184.7238},0).wait(1).to({y:191.9344},0).wait(1).to({y:194.35},0).wait(1));

	// MensajeAmenazas
	this.text = new cjs.Text("AMENAZAS INFORMATICAS", "bold 85px 'Berlin Sans FB'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 97;
	this.text.lineWidth = 663;
	this.text.parent = this;
	this.text.setTransform(964.1,-225.3);
	this.text.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,15);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(25).to({_off:false},0).wait(1).to({y:-155.6089},0).wait(1).to({y:-90.7129},0).wait(1).to({y:-30.6481},0).wait(1).to({y:24.6578},0).wait(1).to({y:75.1324},0).wait(1).to({y:120.812},0).wait(1).to({y:161.6604},0).wait(1).to({y:197.7138},0).wait(1).to({y:228.972},0).wait(1).to({y:255.3991},0).wait(1).to({y:277.0311},0).wait(1).to({y:293.868},0).wait(1).to({y:305.8738},0).wait(1).to({y:313.0844},0).wait(1).to({y:315.5},0).wait(1));

	// BotonContinuar
	this.continuarIni = new lib.Continuar();
	this.continuarIni.name = "continuarIni";
	this.continuarIni.parent = this;
	this.continuarIni.setTransform(732.7,629,1,1,0,0,0,165.7,87);

	this.continuar = new lib.Continuar();
	this.continuar.name = "continuar";
	this.continuar.parent = this;
	this.continuar.setTransform(1121.7,629,1,1,0,0,0,165.7,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.continuarIni}]}).to({state:[]},1).to({state:[{t:this.continuar}]},24).wait(16));

	// OlasAmenazas
	this.instance_4 = new lib.Olas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(475.3,680,1.01,1.01,0,0,0,490.6,107.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(1).to({regX:491.4,regY:108,scaleX:1.0088,scaleY:1.0088,x:476.15,y:680.05},0).wait(1).to({scaleX:1.0075,scaleY:1.0075},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,x:476.1},0).wait(1).to({scaleX:1.005,scaleY:1.005,x:476.15},0).wait(1).to({scaleX:1.0038,scaleY:1.0038},0).wait(1).to({scaleX:1.0025,scaleY:1.0025,x:476.1},0).wait(1).to({scaleX:1.0013,scaleY:1.0013},0).wait(1).to({scaleX:1,scaleY:1,x:476.15},0).wait(1).to({scaleX:1.0014,scaleY:1.0014},0).wait(1).to({scaleX:1.0029,scaleY:1.0029},0).wait(1).to({scaleX:1.0043,scaleY:1.0043},0).wait(1).to({scaleX:1.0057,scaleY:1.0057,x:476.1},0).wait(1).to({scaleX:1.0071,scaleY:1.0071},0).wait(1).to({scaleX:1.0086,scaleY:1.0086},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1));

	// SolAmenazas
	this.instance_5 = new lib.sol();
	this.instance_5.parent = this;
	this.instance_5.setTransform(55,31,0.42,0.42);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).wait(16));

	// BarcoIngles
	this.instance_6 = new lib.Símbolo1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-233.8,474,1,1,0,0,0,199.2,209);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).wait(1).to({x:-166.4},0).wait(1).to({x:-103.6},0).wait(1).to({x:-45.55},0).wait(1).to({x:7.95},0).wait(1).to({x:56.75},0).wait(1).to({x:100.95},0).wait(1).to({x:140.45},0).wait(1).to({x:175.3},0).wait(1).to({x:205.5},0).wait(1).to({x:231.05},0).wait(1).to({x:251.95},0).wait(1).to({x:268.25},0).wait(1).to({x:279.85},0).wait(1).to({x:286.85},0).wait(1).to({x:289.2},0).wait(1));

	// NinoBucanero
	this.instance_7 = new lib.Símbolo2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-115.2,354.8,1,1,0,0,0,95.8,156.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).wait(1).to({x:-47.8},0).wait(1).to({x:15},0).wait(1).to({x:73.05},0).wait(1).to({x:126.5},0).wait(1).to({x:175.3},0).wait(1).to({x:219.5},0).wait(1).to({x:259},0).wait(1).to({x:293.85},0).wait(1).to({x:324.1},0).wait(1).to({x:349.65},0).wait(1).to({x:370.55},0).wait(1).to({x:386.85},0).wait(1).to({x:398.45},0).wait(1).to({x:405.45},0).wait(1).to({x:407.8},0).wait(1));

	// FondoAzulDegra
	this.instance_8 = new lib.fondoAzul();
	this.instance_8.parent = this;
	this.instance_8.setTransform(55,31,0.63,0.63);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).wait(16));

	// FondoAmenazas
	this.instance_9 = new lib.fondoBits();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-2,-1,1.07,1.07);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).wait(16));

	// Inicio
	this.inicio = new lib.Inicio();
	this.inicio.name = "inicio";
	this.inicio.parent = this;
	this.inicio.setTransform(-92.8,131.6,1,1,0,0,0,84.2,84.6);
	this.inicio._off = true;

	this.timeline.addTween(cjs.Tween.get(this.inicio).wait(1).to({_off:false},0).wait(1).to({regX:84.3,x:-12.1},0).wait(1).to({x:66.1},0).wait(1).to({x:125.3},0).wait(20).to({_off:true},1).wait(16));

	// Historia
	this.historia = new lib.Historia();
	this.historia.name = "historia";
	this.historia.parent = this;
	this.historia.setTransform(-96.8,300.4,1,1,0,0,0,86.2,62.4);
	this.historia._off = true;

	this.timeline.addTween(cjs.Tween.get(this.historia).wait(1).to({_off:false},0).wait(1).to({x:-60},0).wait(1).to({x:-24.25},0).wait(1).to({x:10.35},0).wait(1).to({x:43.9},0).wait(1).to({x:76.35},0).wait(1).to({x:107.7},0).wait(1).to({x:127.2},0).wait(16).to({_off:true},1).wait(16));

	// Actividades
	this.actividades = new lib.Actividades();
	this.actividades.name = "actividades";
	this.actividades.parent = this;
	this.actividades.setTransform(-107.8,471.2,1,1,0,0,0,99.2,77.2);
	this.actividades._off = true;

	this.timeline.addTween(cjs.Tween.get(this.actividades).wait(1).to({_off:false},0).wait(1).to({x:-82.75},0).wait(1).to({x:-58.45},0).wait(1).to({x:-34.9},0).wait(1).to({x:-12.1},0).wait(1).to({x:10},0).wait(1).to({x:31.35},0).wait(1).to({x:51.95},0).wait(1).to({x:71.8},0).wait(1).to({x:90.95},0).wait(1).to({x:109.3},0).wait(1).to({x:126.95},0).wait(1).to({x:129.2},0).wait(11).to({_off:true},1).wait(16));

	// Ayuda
	this.ayuda = new lib.Ayuda();
	this.ayuda.name = "ayuda";
	this.ayuda.parent = this;
	this.ayuda.setTransform(-108.6,646.1,1,1,0,0,0,86.4,76.1);
	this.ayuda._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ayuda).wait(1).to({_off:false},0).wait(1).to({regX:86.3,x:-90.3},0).wait(1).to({x:-72.5},0).wait(1).to({x:-55.2},0).wait(1).to({x:-38.45},0).wait(1).to({x:-22.25},0).wait(1).to({x:-6.6},0).wait(1).to({x:8.5},0).wait(1).to({x:23.1},0).wait(1).to({x:37.15},0).wait(1).to({x:50.65},0).wait(1).to({x:63.6},0).wait(1).to({x:76},0).wait(1).to({x:87.85},0).wait(1).to({x:99.2},0).wait(1).to({x:110},0).wait(1).to({x:120.25},0).wait(1).to({x:127.3},0).wait(6).to({_off:true},1).wait(16));

	// Mensaje
	this.instruccionTexto = new cjs.Text("Haz clic sobre el personaje", "55px 'Berlin Sans FB'", "#FFFFFF");
	this.instruccionTexto.name = "instruccionTexto";
	this.instruccionTexto.textAlign = "center";
	this.instruccionTexto.lineHeight = 62;
	this.instruccionTexto.lineWidth = 337;
	this.instruccionTexto.parent = this;
	this.instruccionTexto.setTransform(551,223.5,1,1,180);
	this.instruccionTexto._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instruccionTexto).wait(1).to({_off:false},0).wait(1).to({rotation:196.0036,x:532.5332,y:220.9073},0).wait(1).to({rotation:211.3036,x:516.2404,y:213.7553},0).wait(1).to({rotation:225.8836,x:502.9773,y:203.1475},0).wait(1).to({rotation:239.76,x:493.2133,y:190.2407},0).wait(1).to({rotation:252.9245,x:487.0671,y:176.1751},0).wait(1).to({rotation:265.3691,x:484.3564,y:161.9519},0).wait(1).to({rotation:277.11,x:484.6832,y:148.2753},0).wait(1).to({rotation:288.1391,x:487.4787,y:135.7085},0).wait(1).to({rotation:298.4564,x:492.2397,y:124.6889},0).wait(1).to({rotation:308.0618,x:498.4177,y:115.3157},0).wait(1).to({rotation:316.9555,x:505.4387,y:107.6839},0).wait(1).to({rotation:325.1373,x:512.865,y:101.6593},0).wait(1).to({rotation:332.6073,x:520.291,y:97.1839},0).wait(1).to({rotation:339.3655,x:527.521,y:93.9517},0).wait(1).to({rotation:345.4118,x:534.2257,y:91.8465},0).wait(1).to({rotation:350.7464,x:540.3324,y:90.5841},0).wait(1).to({rotation:355.3691,x:545.6981,y:89.9064},0).wait(1).to({rotation:359.2882,x:550.2819,y:89.696},0).wait(1).to({rotation:360,x:551.1,y:89.7},0).wait(4).to({_off:true},1).wait(16));

	// Imagen
	this.imagen = new lib.Imagen();
	this.imagen.name = "imagen";
	this.imagen.parent = this;
	this.imagen.setTransform(289.15,128.75);
	this.imagen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.imagen).wait(1).to({_off:false},0).wait(40));

	// Instruccion
	this.instruccion = new lib.Instruccion();
	this.instruccion.name = "instruccion";
	this.instruccion.parent = this;
	this.instruccion.setTransform(346.9,172.25);
	this.instruccion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instruccion).wait(1).to({_off:false},0).wait(40));

	// Monedas
	this.punto7 = new lib.Punto1();
	this.punto7.name = "punto7";
	this.punto7.parent = this;
	this.punto7.setTransform(425.1,281.25,1,1,0,0,0,16.4,16.4);

	this.punto6 = new lib.Punto1();
	this.punto6.name = "punto6";
	this.punto6.parent = this;
	this.punto6.setTransform(554.7,333.55,1,1,0,0,0,16.4,16.4);

	this.punto4 = new lib.Punto1();
	this.punto4.name = "punto4";
	this.punto4.parent = this;
	this.punto4.setTransform(845.3,459.3,1,1,0,0,0,16.4,16.4);

	this.punto5 = new lib.Punto1();
	this.punto5.name = "punto5";
	this.punto5.parent = this;
	this.punto5.setTransform(793.45,283.2,1,1,0,0,0,16.4,16.4);

	this.punto3 = new lib.Punto1();
	this.punto3.name = "punto3";
	this.punto3.parent = this;
	this.punto3.setTransform(398.7,386.35,1,1,0,0,0,16.4,16.4);

	this.punto2 = new lib.Punto1();
	this.punto2.name = "punto2";
	this.punto2.parent = this;
	this.punto2.setTransform(354.1,527,1,1,0,0,0,16.4,16.4);

	this.punto1 = new lib.Punto1();
	this.punto1.name = "punto1";
	this.punto1.parent = this;
	this.punto1.setTransform(585.9,633.6,1,1,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.punto1},{t:this.punto2},{t:this.punto3},{t:this.punto5},{t:this.punto4},{t:this.punto6},{t:this.punto7}]},1).wait(40));

	// NinaPirata
	this.ninaPirata = new lib.NinaPirata();
	this.ninaPirata.name = "ninaPirata";
	this.ninaPirata.parent = this;
	this.ninaPirata.setTransform(804.3,570.8,1,1,0,0,0,21.3,39.8);
	this.ninaPirata._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ninaPirata).wait(1).to({_off:false},0).wait(40));

	// NinoPirata
	this.ninoPirata = new lib.NinoPirata();
	this.ninoPirata.name = "ninoPirata";
	this.ninoPirata.parent = this;
	this.ninoPirata.setTransform(1213.9,235.4,0.73,0.73,0,0,0,155.2,240.8);
	this.ninoPirata._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ninoPirata).wait(1).to({_off:false},0).wait(1).to({scaleX:0.753,scaleY:0.753,x:1207.75,y:244.8},0).wait(1).to({scaleX:0.7749,scaleY:0.7749,x:1201.95,y:253.9},0).wait(1).to({scaleX:0.7958,scaleY:0.7958,x:1196.4,y:262.55},0).wait(1).to({scaleX:0.8157,scaleY:0.8157,x:1191.1,y:270.75},0).wait(1).to({scaleX:0.8346,scaleY:0.8346,x:1186.1,y:278.55},0).wait(1).to({scaleX:0.8525,scaleY:0.8525,x:1181.35,y:285.95},0).wait(1).to({scaleX:0.8693,scaleY:0.8693,x:1176.9,y:292.9},0).wait(1).to({scaleX:0.8852,scaleY:0.8852,x:1172.7,y:299.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1168.75,y:305.5},0).wait(1).to({scaleX:0.9137,scaleY:0.9137,x:1165.1,y:311.25},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,x:1161.75,y:316.5},0).wait(1).to({scaleX:0.9382,scaleY:0.9382,x:1158.6,y:321.35},0).wait(1).to({scaleX:0.949,scaleY:0.949,x:1155.8,y:325.75},0).wait(1).to({scaleX:0.9587,scaleY:0.9587,x:1153.2,y:329.75},0).wait(1).to({scaleX:0.9673,scaleY:0.9673,x:1150.9,y:333.35},0).wait(1).to({scaleX:0.975,scaleY:0.975,x:1148.85,y:336.45},0).wait(1).to({scaleX:0.9816,scaleY:0.9816,x:1147.1,y:339.2},0).wait(1).to({scaleX:0.9872,scaleY:0.9872,x:1145.6,y:341.55},0).wait(1).to({scaleX:0.9918,scaleY:0.9918,x:1144.4,y:343.45},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,x:1143.45,y:344.95},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:1142.8,y:345.95},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:1142.35,y:346.65},0).wait(1).to({scaleX:1,scaleY:1,x:1142.25,y:346.8},0).to({_off:true},1).wait(16));

	// Mapa
	this.mapa = new lib.Mapa();
	this.mapa.name = "mapa";
	this.mapa.parent = this;
	this.mapa.setTransform(599.2,390.6,1,1,0,0,0,373.2,372.6);
	this.mapa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mapa).wait(1).to({_off:false},0).wait(40));

	// Monticulo
	this.instance_10 = new lib.monticulo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(972,518,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(40));

	// FondoBlanco
	this.instance_11 = new lib.FondoBlanco();
	this.instance_11.parent = this;
	this.instance_11.setTransform(791,385.9,1,1,0,0,0,544.5,336.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(40));

	// TextoContinuar
	this.text_1 = new cjs.Text("Haz clic para continuar", "96px 'Berlin Sans FB'", "#FFCC00");
	this.text_1.lineHeight = 105;
	this.text_1.parent = this;
	this.text_1.setTransform(269.8,164.8);
	this.text_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,30);

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({_off:true},1).wait(40));

	// FondoAzul
	this.instance_12 = new lib.Fondo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(682.9,385.8,1,1,0,0,0,684.5,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,-61,1117.6,850.2);
// library properties:
lib.properties = {
	id: '3F7240E85A486E4FBBC77B5A537B3848',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_391.png?1595384885800", id:"CachedTexturedBitmap_391"},
		{src:"images/CachedTexturedBitmap_392.png?1595384885800", id:"CachedTexturedBitmap_392"},
		{src:"images/actividadm1_atlas_.png?1595384885760", id:"actividadm1_atlas_"},
		{src:"images/actividadm1_atlas_2.png?1595384885760", id:"actividadm1_atlas_2"},
		{src:"images/actividadm1_atlas_3.png?1595384885761", id:"actividadm1_atlas_3"},
		{src:"images/actividadm1_atlas_4.png?1595384885761", id:"actividadm1_atlas_4"}
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