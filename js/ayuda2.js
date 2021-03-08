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
 let v=Object.values(objetos.guitarras)
 let y=Object.values(objetos.baterias)
 let w=Object.values(objetos.bajos)
function imprimir()
 {
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
			tbtemporal.id=`tb${i}`
			tbtemporal.innerHTML = v[i];
			let elemento=document.getElementById('trt');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton`
			   boton.innerHTML='vender'
			   let elem=document.getElementById('trt')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
			   boton2.id=`boton2`
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
			tbtemporal.id=`tb${i}`
			tbtemporal.innerHTML = y[i];
			let elemento=document.getElementById('trt1.1');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton3`
			   boton.innerHTML='vender'
			   let elem=document.getElementById('trt1.1')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
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
			tbtemporal.id=`tb${i}`
			tbtemporal.innerHTML = w[i];
			let elemento=document.getElementById('trt2.2');
			elemento.appendChild(tbtemporal);
			if (i==3)
			{
			   let boton=document.createElement('button');
			   boton.id=`boton5`;
			   boton.innerHTML='vender';
			   let elem=document.getElementById('trt2.2')
			   elem.appendChild(boton)
			   let boton2=document.createElement('button');
			   boton2.id=`boton6`;
			   boton2.innerHTML='comprar';
				elem=document.getElementById('trt2.2');
			   elem.appendChild(boton2);
   
			}
			
   
		 }

 }
function limpiar()
{
	    //  let elemento2=document.getElementById('trt')//carga todo el contenido de la  etiqueta con su  id 
		//  let eliminar =document.querySelector('button')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		//  elemento2.removeChild(eliminar)//se borrar el contenido con este comandodo
		const parent = document.getElementById("trtemp")
        while (parent.firstChild)
		 {
           parent.firstChild.remove()
         }
		 let list = document.getElementById("trt");
		 let list2 = document.getElementById("trt1.1");
		 let list3 = document.getElementById("trt2.2");
		 while(list.firstChild)//esta condicion funciona para todas las filas por ser del mismo numero 
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
	  let btn = document.getElementById('li');
	  btn.addEventListener("click",limpiar);

