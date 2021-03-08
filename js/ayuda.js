let array=[[12,'g',100],[13,'bj',122],[15,'bt',123]]
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
let btninfo = document.getElementById('infoven');
btninfo.addEventListener("click",recuperaciondeinfov);
let btninfo1 = document.getElementById('infoborr');
btninfo1.addEventListener("click",borrar);
function creartabla()
{
	console.log('esto es lo recuperado ',array)
		  console.log('esto es el leng' ,array[0].length)
		  let cth=document.createElement('tr')
		  cth.innerHTML=`<th>fecha</th>
		  <th>numero de ventas </th>
		  <th>caracteristica</th>
		  <th>precio</th>`
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
function recuperaciondeinfov()
	{
		creartabla();
		let i=0  
		
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
		
	}
function borrarinfo()
{
	let x=array.length
	for(let i=0;i<x+1;i++)
	{
		let elemet = document.getElementById('infoven1')
		// let  eliminar =document.querySelector('tr')//se especifica que se quiere borrar de la etiquita anterior (normalmente guardado en otra etiqueta )  
		// elemet.remove(eliminar)//se borrar el contenido con este comando
		while(elemet.firstChild)//esta condicion funciona para todas las filas por ser del mismo numero 
		{
			elemet.firstChild.remove()
			
		}
	} 
		  

}	
	   