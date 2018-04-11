// PRIVATE
var contador = 0;

// PUBLIC
module.exports = function () {
    incrementarContador: function(num){
		count = count + 1;
	},

	MostrarContador: function(){
		console.log(contador);
	} 
}

/*
'use strict';

// SINGLETON
const ClassContador = (()=> {

	// Aqui estan los metodos privados y variables
	var contador = 0;
	function ShowContador(){
		console.log( contador );
	}

	function IncrementarContador(){
		console.log( contador );
	}

	return {

		sumarContador:function(){
			IncrementarContador();
		},

		ShowContador: function(){

		} 

		getContador: () => {
			if (!contador) {
	            contador = new ClassCont();
	        }
	        return contador;
		}
	}
})();


const ObtenerCont = ClassContador.getContador();
*/