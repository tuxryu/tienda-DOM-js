let array=[]
let arraycompras=[]
let bandera=0,bandera1=0,bandera2=0,bandera3=0,bandera4=0,bandera5=0,bandera6=0,bandera7=0,r=0;//banderas 
function capital()//funcion que pide y valida el capital 
{
	let r,z;
	 do
	 {
		 x=prompt('ingresa la cantidad del capital ');
			 if(isNaN(x))
			 {
				 r=1;
				 alert("el numero contiene  letras  introdusca el numero otra vez");
			 }
			 else 
			 {
				 if(x<0)
				 {
					 alert("el capital tiene que ser positivo");
					 r=1
				 }
				 else
				 {
					 if(x.length==0||x==' ')
					 {
						 alert(" el campo deve de contener  numeros : introdusca el numero ");
						 r=1;
					 }
					 
					 else
					 {
						 r=0;
						 z=parseFloat(x);
						 x=z;
						 return x ;
						  
 
					 }
					 
 
				 }
				 
			 }
 
	 }
	 while(r!=0)

}
let z = capital();
let cap = document.getElementById('cap');// cap = capítal
	cap.innerHTML = `capital de :$${z}MXN`
// let capi

let objetos =
{
	guitarras:
	{
		id:'109',
		producto:'guitarras',
		existencia:500,
		precio:'3250 '

	},
	baterias:
	{
		id:'969',
		producto:'baterias ',
		existencia:555,
		precio:'5000'
	},
	bajos:
	{
		id:'754',
		producto:'bajos ',
		existencia:200,
		precio:'1552'
    }, 
	

}
 
 function imprimir()
 {
	 if(r==1)
	 {
		 limpiar();
	 }
	let v=Object.values(objetos.guitarras)
	let y=Object.values(objetos.baterias)
	let w=Object.values(objetos.bajos)
	let encabezado=document.createElement('tr')
	encabezado.id='trtemp'
	encabezado.innerHTML=`
	<th>id</th>
	<th>caracteristica</th>
	<th>existencia</th>
	<th>precio</th>
   `
	let elemento =document.getElementById('tabla');
	elemento.appendChild(encabezado);
	let trtemporal=document.createElement(`tr`);
	trtemporal.id ='trt';
	trtemporal.classList.add('trt');
	let elemento1=document.getElementById('tabla');
	elemento1.appendChild(trtemporal);
	
	for(i=0;i<4;i++)
		{
			let tbtemporal=document.createElement('th');
			//  tbtemporal.classList.add(`tbt${i}`);//crear clases: normalmete se trabaja clases para estilos y los id para html buenas praticas de programacion 
			tbtemporal.id=`tbg${i}`
			tbtemporal.innerHTML = v[i];//v= capctura de los objectos de guitarras en arreglo 
			let elemento=document.getElementById('trt');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton`
			   boton.classList.add('btn')
			   boton.classList.add('btn-outline-info')
			   boton.innerHTML='vender'
			   let elem=document.getElementById('trt')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
			   boton2.id=`boton2`
			   boton2.classList.add('btn')
			   boton2.classList.add('btn-outline-warning')
			   boton2.innerHTML='comprar'
				elem=document.getElementById('trt')
			   elem.appendChild(boton2)
   
			}
			
   
		}
		 trtemporal=document.createElement(`tr`);
	trtemporal.id ='trt1.1';
	elemento1=document.getElementById('tabla');
	elemento1.appendChild(trtemporal);
	
		for(i=0;i<4;i++)
		{
			let tbtemporal=document.createElement('th');
			//  tbtemporal.classList.add(`tbt${i}`);//crear clases: normalmete se trabaja clases para estilos y los id para html buenas praticas de programacion 
			tbtemporal.id=`tbbt${i}`
			tbtemporal.innerHTML = y[i];//y=capctura de los objectos de baterias  
			let elemento=document.getElementById('trt1.1');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton3`
			   boton.classList.add('btn')
			   boton.classList.add('btn-outline-info')
			   boton.innerHTML='vender'
			   let elem=document.getElementById('trt1.1')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
			   boton2.classList.add('btn')
			   boton2.classList.add('btn-outline-warning')
			   boton2.id=`boton4`
			   boton2.innerHTML='comprar'
				elem=document.getElementById('trt1.1')
			   elem.appendChild(boton2)
   
			}
			
   
		}
	trtemporal=document.createElement(`tr`);
	trtemporal.id ='trt2.2';
	elemento1=document.getElementById('tabla');
	elemento1.appendChild(trtemporal);
	
		for(i=0;i<4;i++)
		{
			let tbtemporal=document.createElement('th');
			//  tbtemporal.classList.add(`tbt${i}`);//crear clases: normalmete se trabaja clases para estilos y los id para html buenas praticas de programacion 
			tbtemporal.id=`tbbj${i}`
			tbtemporal.innerHTML = w[i];//w =capctura de los  objectos de bajos
			let elemento=document.getElementById('trt2.2');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton5`;
			   boton.classList.add('btn')
			   boton.classList.add('btn-outline-info')
			   boton.innerHTML='vender';
			   let elem=document.getElementById('trt2.2')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
			   boton2.id=`boton6`;
			   boton2.classList.add('btn')
			   boton2.classList.add('btn-outline-warning')
			   boton2.innerHTML='comprar';
				elem=document.getElementById('trt2.2');
			   elem.appendChild(boton2);
   
			}
			
   
		 }
		 r=1
		 console.log(r)
		 let btn = document.getElementById('boton');
		btn.addEventListener("click",ventdegui,true);
		let btn2 = document.getElementById('boton3');
		btn2.addEventListener("click",ventbaterias);
		let btn3 = document.getElementById('boton5');
		btn3.addEventListener("click",ventbajos);
		let btn1c = document.getElementById('boton2');
		btn1c.addEventListener("click",compraguitar);
		let btn2c = document.getElementById('boton4');
		btn2c.addEventListener("click",comprabateria);
		let btn3c = document.getElementById('boton6');
		btn3c.addEventListener("click",comprabajo);
		let btninfov = document.getElementById('infoven');
		btninfov.addEventListener("click",recuperaciondeinfov);
		let btninfoc = document.getElementById('infocom');
		btninfoc.addEventListener("click",recuperaciondeinfoc);	

    }
	function limpiar()//borrar el inventario 
{
	    
		const parent = document.getElementById("trtemp")
        while (parent.firstChild)
		 {
           parent.firstChild.remove()
         }
		 let list = document.getElementById("trt");
		 let list2 = document.getElementById("trt1.1");
		 let list3 = document.getElementById("trt2.2");
		 while(list.firstChild)//esta condicion funciona para todas las filas por ser del mismo numero de co 
		{
			list.firstChild.remove()
			list2.firstChild.remove()
			list3.firstChild.remove()
		} 
		let lista=document.getElementById('tabla');
		while(lista.firstChild)
		{
			lista.firstChild.remove()
		}
		 
		
}
 
      let btn1 = document.getElementById('inventario');
      btn1.addEventListener("click",imprimir);
	  
function ventdegui()//ventas de guitarras (boton)
{ 
	if(bandera==1)
	{
		cancelarg()
	}
	console.log('entraste a la funcion');
	console.log('es' ,z);// z= el capital
	let h3  = document.createElement('h3');
	h3.id='h3g'
	let input  = document.createElement('input');
	input.id='imp';
	input.type="number";
	h3.innerHTML="cantidad de guitarras vender ";
	let elemento = document.getElementById('div');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btn`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btn2`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btn');
	btn2.addEventListener("click",cofirguitarra);
	let btn3 = document.getElementById('btn2')
	btn3.addEventListener("click",cancelarg)
    bandera =1
}
function ventbaterias()//ventas de baterias  (boton)
{
	if(bandera1==1)
	{
		cancelarbt()
	}
	console.log('entraste a la funcion');
	console.log('es' ,z);
	let h3  = document.createElement('h3');
	h3.id='h3bt'
	let input  = document.createElement('input');
	input.id='imp1';
	input.type="number";
	h3.innerHTML="cantidad de baterias a vender ";
	let elemento = document.getElementById('div');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btn3`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btn4`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btn3');
	btn2.addEventListener("click",cofirbateria);
	let btn3 = document.getElementById('btn4')
	btn3.addEventListener("click",cancelarbt)
	//  btn2 = document.getElementById('btn').value;
	bandera1=1

}
function ventbajos()//ventas de bajo (boton)
{
	if(bandera2==1)
	{
		cancelarbj()
	}
	console.log('entraste a la funcion');
	console.log('es' ,z);
	let h3  = document.createElement('h3');
	h3.id='h3bj'
	let input  = document.createElement('input');
	input.id='imp2';
	input.type="number";
	h3.innerHTML="cantidad de bajos  a vender ";
	let elemento = document.getElementById('div');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btn5`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btn6`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btn5');
	btn2.addEventListener("click",cofirbajo);
	let btn3 = document.getElementById('btn6')
	btn3.addEventListener("click",cancelarbj)
	bandera2=1

}
	  function cofirguitarra() //boton confirmar  guitarras 
	  {
		  
		  let element = document.getElementById('imp').value;// elemet = el valor de el input de la cantidad a vender   
		  if(element > objetos.guitarras.existencia)
		  {
			  alert("no contamos con esa cantidad contactar con nuestro provedor (ingrese otro numero)")
		  }
		  else 
		  {
			  if(element<0)
			  {
				alert("los valores deben de ser positivos ")
			  }
			  else
			  {
				  //console.log('el valor es de guitarras ',element)
				objetos.guitarras.existencia-=element
				//console.log('nueva existencia de guitarras',objetos.guitarras.existencia)
				let total = objetos.guitarras.precio*element
				z= z+total;
				cap = document.getElementById('cap');
				cap.innerHTML = `capital de :$${z}MXN`
				let cantidadg=document.getElementById('tbg2')
				let cat= `${objetos.guitarras.existencia}`
				cantidadg.innerHTML= cat
				//console.log('el nuevo capital es',z) 
				let re=registrodeventas(element,objetos.guitarras.producto,total)
				//console.log('esto es un valor de regreso ',re)
				return re;
	
			  } 
			

		  }
		  
		  
	  }
	  function cofirbateria()//boton confirmar  baterias  
	  {
		  
		  let element = document.getElementById('imp1').value;// elemet = el valor de el input de la cantidad a vender   
		  if(element > objetos.baterias.existencia)
		  {
			  alert("no contamos con esa cantidad contactar con nuestro provedor (ingrese otro numero)")
		  }
		  else 
		  {
			if(element<0)
			{
			  alert("los valores deben de ser positivos ")
			}
			else
			{
				//console.log('el valor es de baterias  ',element)
				objetos.baterias.existencia-=element
				//console.log('nueva existencia de baterias ',objetos.baterias.existencia)
				let total = objetos.baterias.precio*element
				z= z+total;
				cap = document.getElementById('cap');
				cap.innerHTML = `capital de :$${z}MXN`
				let cantidadbt=document.getElementById('tbbt2')
				let cat= `${objetos.baterias.existencia}`
				cantidadbt.innerHTML= cat
				//console.log('el nuevo capital es',z) 
				let re=registrodeventas(element,objetos.baterias.producto,total)
				//console.log('esto es un valor de regreso ',re)
				return re;

			}
			
  

		  }
		  
		  
	  }
	  function cofirbajo()//boton confirmar  bajos
	  {
		  
		  let element = document.getElementById('imp2').value;// elemet = el valor de el input de la cantidad a vender   
		  if(element > objetos.bajos.existencia)
		  {
			  alert("no contamos con esa cantidad contactar con nuestro provedor (ingrese otro numero)")
		  }
		  else 
		  {
			if(element<0)
			{
			  alert("los valores deben de ser positivos ")
			}
			else
			{
				//console.log('el valor es de bajos  ',element)
				objetos.bajos.existencia-=element
				//console.log('nueva existencia de bajos ',objetos.bajos.existencia)
				let total = objetos.bajos.precio*element
				z= z+total;
				cap = document.getElementById('cap');
				cap.innerHTML = `capital de :$${z}MXN`
				let cantidadbj=document.getElementById('tbbj2')
				let cat= `${objetos.bajos.existencia}`
				cantidadbj.innerHTML= cat
				
				let re=registrodeventas(element,objetos.bajos.producto,total)
				//console.log('esto es un valor de regreso ',re)
				return re;

			} 
			
  

		  }
		  
		  
	  }
	  function compraguitar()//boton comprar guitarra
	{
		if(bandera3==1)
		{
			cancelarcg()
		}
	    let h3  = document.createElement('h3');
		let input  = document.createElement('input');
		input.id='imp.1';
		input.type="number";
		h3.innerHTML="¿cuantas guitarras compraras? ";
		h3.id='h3cg'
	let elemento = document.getElementById('div2');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btnc`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div2')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btnc1`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div2');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btnc');
	btn2.addEventListener("click",confcompraguit);
	let btn3 = document.getElementById('btnc1')
	btn3.addEventListener("click",cancelarcg)
	bandera3=1
	

	}
	function comprabateria()//boton comprar bateria
	{
		if(bandera4==1)
		{
			cancelarcbt()
		}
	    let h3  = document.createElement('h3');
		let input  = document.createElement('input');
		input.id='imp1.1';
		input.type="number";
		h3.innerHTML="¿cuantas baterias compraras?";
		h3.id='h3cbt'
		
	let elemento = document.getElementById('div2');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btnc3`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div2')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btnc4`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div2');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btnc3');
	btn2.addEventListener("click",confcomprabateria);
	let btn3 = document.getElementById('btnc4')
	btn3.addEventListener("click",cancelarcbt)
	bandera4=1
	
	

	

	}
	function comprabajo()//boton comprar bajo
	{
		if(bandera5==1)
		{
			cancelarcbj()
		}
	    let h3  = document.createElement('h3');
		h3.id='h3cbj'
		let input  = document.createElement('input');
		input.id='imp2.1';
		input.type="number";
		h3.innerHTML="¿cuantos bojos compraras?";
		
	let elemento = document.getElementById('div2');
	elemento.appendChild(h3)
	elemento.appendChild(input);
	let boton=document.createElement('button');
			boton.id=`btnc5`;
			boton.classList.add('btn')
			boton.classList.add('btn-outline-success')
			boton.innerHTML='confirmar';
			let elem=document.getElementById('div2')
			elem.appendChild(boton)
			let boton2=document.createElement('button');
			boton2.id=`btnc6`;
			boton2.classList.add('btn')
			boton2.classList.add('btn-outline-danger')
			boton2.innerHTML='cancelar ';
			 elem=document.getElementById('div2');
			elem.appendChild(boton2);
	let btn2 = document.getElementById('btnc5');
	btn2.addEventListener("click",confcomprabajo);
	let btn3 = document.getElementById('btnc6')
	btn3.addEventListener("click",cancelarcbj)
	bandera5=1
	
	

	
//---------------------------------------------------confirmar botones de compra  -------------------------------------------------------
	}
	 function confcompraguit()
	 {
		let element = document.getElementById('imp.1').value;// elemet = el valor de el input de la cantidad a vender   
		if(z < objetos.guitarras.precio * element)
		{
			alert("no cuentas con el suficiente capital")
		}
		else 
		{
			if(element<0)
			{
			  alert("los valores deben de ser positivos ")
			}
			else
			{
				let con=parseInt(element);
				let ob=parseInt(objetos.guitarras.existencia)
				//console.log('¿cuantas guitarras compraras?',element)
				objetos.guitarras.existencia =ob + con;
				//console.log('nueva existencia de guitarras ',objetos.guitarras.existencia)
				let total = objetos.guitarras.precio*element
				z= z-total;
					cap = document.getElementById('cap');
					cap.innerHTML = `capital de :$${z}MXN`
					let cantidadg=document.getElementById('tbg2')
					let cat= `${objetos.guitarras.existencia}`
					cantidadg.innerHTML= cat

				//console.log('el nuevo capital es',z) 
				let re=registrocompras(element,objetos.guitarras.producto,total)
				//console.log('esto es un valor de regreso ',re)
				//console.log('¿el objeto se modifico?',objetos)
				//console.log('el objeto cambio despues de modificarlo ',v)
				return re;


			}
			

		}


	 }
	 function confcomprabateria()
	 {
		let element = document.getElementById('imp1.1').value;// elemet = el valor de el input de la cantidad a vender   
		if(z < objetos.baterias.precio * element)
		{
			alert("no cuentas con el suficiente capital")
		}
		else 
		{
			if(element<0)
			{
			  alert("los valores deben de ser positivos ")
			}
			else
			{
				let con=parseInt(element);
				let ob=parseInt(objetos.baterias.existencia)
				//console.log('¿cuantas baterias compraras?',element)
				objetos.baterias.existencia =ob + con;
				//console.log('nueva existencia de baterias ',objetos.baterias.existencia)
				let total = objetos.baterias.precio*element
				z= z-total;
					cap = document.getElementById('cap');
					cap.innerHTML = `capital de :$${z}MXN`
					let cantidadbt=document.getElementById('tbbt2')
					let cat= `${objetos.baterias.existencia}`
					cantidadbt.innerHTML= cat
					
				
				//console.log('el nuevo capital es',z) 
				let re=registrocompras(element,objetos.baterias.producto,total)
				//console.log('esto es un valor de regreso ',re)
				return re;


			}
		  

		}


	 }
	 function confcomprabajo()
	 {
		let element = document.getElementById('imp2.1').value;// elemet = el valor de el input de la cantidad a vender   
		if(z < objetos.guitarras.precio * element)
		{
			alert("no cuentas con el suficiente capital")
		}
		else 
		{
			if(element<0)
			{
			  alert("los valores deben de ser positivos ")
			}
			else
			{
				let con=parseInt(element);
				let ob=parseInt(objetos.bajos.existencia)
				//console.log('¿cuantas bajos compraras?',element)
				objetos.bajos.existencia =ob + con;
				//console.log('nueva existencia de bajos ',objetos.bajos.existencia)
				let total = objetos.bajos.precio*element
				z= z-total;
					cap = document.getElementById('cap');
					cap.innerHTML = `capital de :$${z}MXN`
					let cantidadbj=document.getElementById('tbbj2')
					let cat= `${objetos.bajos.existencia}`
					cantidadbj.innerHTML= cat
					
				
				//console.log('el nuevo capital es',z) 
				let re=registrocompras(element,objetos.bajos.producto,total)
				//console.log('esto es un valor de regreso ',re)
				return re;


			}
			

		}


	 }
	  //---------------------------------------------- funciones de botones de cancelacion compra y venta----------------------------------------------------------- 
	  function cancelarg()//  funcion  de cancelacion de venta de  guitarra
	  {
		  let elemet = document.getElementById('h3g')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn2');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera = 0
	  }
	  function cancelarbt()//funcion  de cancelacion de venta de  bateria
	  {
		  let elemet = document.getElementById('h3bt')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp1')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn3');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn4');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera1 = 0
	  }
	  function cancelarbj()// funcion  de cancelacion de venta de  bajo
	  {
		  let elemet = document.getElementById('h3bj')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp2')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn5');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btn6');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera2 = 0 

	  }
	  function cancelarcg()// funcion  de cancelacion de compra de guitarra
	  {
		  let elemet = document.getElementById('h3cg')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp.1')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc1');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera3 = 0
	  }
	  function cancelarcbt()//funcion  de cancelacion de compra bateria 
	  {
		  let elemet = document.getElementById('h3cbt')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp1.1')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc3');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc4');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera4 = 0
	  }
	  function cancelarcbj()// funcion  de cancelacion de compra bajo
	  {
		  let elemet = document.getElementById('h3cbj')
		  let  eliminar =document.querySelector('h3')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		  elemet.remove(eliminar)//se borrar el contenido con este comando
		  elemet=document.getElementById('imp2.1')
		  eliminar =document.querySelector('input')
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc5');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  elemet=document.getElementById('btnc6');
		  eliminar =document.querySelector('button');
		  elemet.remove(eliminar)
		  bandera5 = 0
	  }

	  function registrodeventas(cont,gg,t)//cont=cantidad gg=carecteristica t = total funcion que guarda la informacion de la venta en un arreglo bidemencional de [3] y guarda en un arreglo de arreglos 
	  { 
		  
		  let arr=[cont,gg,t]
		  array.push(arr)
		  return array


	  }
	  function registrocompras(cont,gg,t)//cont=cantidad gg=carecteristica t = total,funcion que guarda la informacion de la compras  en un arreglo bidemencional de [3] y guarda en un arreglo de arreglos
	  { 
		  
		  let arr=[cont,gg,t]
		  arraycompras.push(arr)
		  return arraycompras


	  }
function creartablav()//funcion que crea tabla(html) para ventas 
{
	
		  let cth=document.createElement('tr')
		  cth.innerHTML=`<th>fecha </th>
		  <th> # de unidades vendidas </th>
		  <th> caracteristica</th>
		  <th>capital ganado MXN  </th>`
		  let e=document.getElementById('infoven1');
		  e.appendChild(cth)
				   
		  
		for(let k=0;k<array.length;k++)
		{
			let trt = document.createElement('tr');
			    trt.id=`trt${k}`;
			
			let ele= document.getElementById('infoven1');
			    ele.appendChild(trt);
			
		}

}
function creartablac()//funcion que crea tabla(html) para compras  
{
		  let cth=document.createElement('tr')
		  cth.innerHTML=`<th>fecha</th>
		  <th>  # unidades compradas </th>
		  <th>caracteristica</th>
		  <th>capital invertido  MXN </th>`
		  let e=document.getElementById('infocom1');
		  e.appendChild(cth)
				   
		  
		for(let k=0;k<arraycompras.length;k++)
		{
			let trt = document.createElement('tr');
			    trt.id=`trtc${k}`;
			
			let ele= document.getElementById('infocom1');
			    ele.appendChild(trt);
			
		}


}
function recuperaciondeinfov() //funcion que imprime el registro de ventas   realisadas  se nesecitara de la funcion previa crear tablac y tablav   respectivamente
	{
		
		if(array.length==0)
		{
			alert('no se a vendido nada aun ')
		}
		else
		{
				creartablav();
			let i=0  
			if(bandera6==1)// el if verifica si ya se imprimio la tabla  de sere verdad la borra y la imprime de nuevo 
			{
				borrarinfo('infoven1');
				creartablav();
			}
			for( i;i<array.length;i=i+1)
			{
					
			
					let j5  =document.createElement('td')//j5= mostrara la descripcion del producto 
					let j6  =document.createElement('td')//j6= muestra el precio de la venta
				let j=0
				for ( j;j<array[i].length;j++)
				{   	 
						let idt='trt'+i; console.log(idt);
						let acc=document.getElementById(idt);
						console.log('esto es acc' ,acc)
						

						
						if(j == 0)
						{
							let hoy = new Date();
							let j3  =document.createElement('td')//j3= tb que mostrara el tiempo 
							let j4  =document.createElement('td')//j4= mostrara la cantidad del producto 
							j3.id=`tbtime`;
							j3.innerHTML = hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear()+'-'+ hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
							console.log('entro en 0')
							j4.innerHTML= array[i][j];
							j4.id=`nump`;
							acc.appendChild(j3);
							acc.appendChild(j4);
							console.log('salio de 0')

						}
						if(j == 1)
						{
							console.log('entro en 1')
							j5.innerHTML =  array[i][j];
							j5.id = `ct`;
							
							acc.appendChild(j5);
							acc.appendChild(j6);
							
							
						}
						if(j == 2)
						{
							console.log('entro en 2')
							j6.innerHTML =array[i][j]
							acc.appendChild(j6);
						}				
				}

			}	
			bandera6=1;

		}
		
	}
	   
	  function recuperaciondeinfoc()//funcion que imprime el registro de compras    realisadas  se nesecitara de la funcion previa crear tablac y tablav   respectivamente
	  {
		if(arraycompras.length==0)
		{
			alert('no se a comprado  nada aun ')
		}
		else
		{
			creartablac();
			let i=0;
			if(bandera7 == 1)
			{
				borrarinfo('infocom1');
				creartablac();
			}
	
		
			for( i;i<arraycompras.length;i=i+1)
			{
					
			
					let j5  =document.createElement('td')//j5= mostrara la descripcion del producto 
					let j6  =document.createElement('td')//j6= muestra el precio de la venta
				let j=0
				for ( j;j<arraycompras[i].length;j++)
				{   	 
						let idt='trtc'+i; console.log(idt);
						let acc=document.getElementById(idt);
						
						

						
						if(j == 0)
						{
							let hoy = new Date();
							let j3  =document.createElement('td')//j3= tb que mostrara el tiempo 
							let j4  =document.createElement('td')//j4= mostrara la cantidad del producto 
							j3.id=`tbtime`;
							j3.innerHTML ="   " + hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear()+'-'+ hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds()+"  ";
							j4.innerHTML= arraycompras[i][j];
							j4.id=`nump`;
							acc.appendChild(j3);
							acc.appendChild(j4);
							

						}
						if(j == 1)
						{
							
							j5.innerHTML =  arraycompras[i][j];
							j5.id = `ct`;
							
							acc.appendChild(j5);
							acc.appendChild(j6);
							
							
						}
						if(j == 2)
						{
							
							j6.innerHTML =arraycompras[i][j]
							acc.appendChild(j6);
						}				
				}

			}	
		bandera7=1;

		}
		
	  }

function borrarinfo(y)// funcion que borra la tabla de registro de ventas o compras segun el argumento que se le pase ,el argumento 'y' tiene que ser el id de la tabla a borrar 
{
	let x=array.length
	for(let i=0;i<x+1;i++)
	{
		let elemet = document.getElementById(y)
		
		while(elemet.firstChild) 
		{
			elemet.firstChild.remove()
			
		}
		
	} 
		  

}	

	  
	