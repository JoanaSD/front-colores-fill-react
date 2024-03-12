import { useState } from 'react'


function Formulario({crearColor}){

    
    let [colorTemporal,setColorTemporal] = useState("")
    let [error,setError] = useState(false)
    let [msgError,setMsgError] = useState("")

    return (

        <form onSubmit={evento => {
            evento.preventDefault()

            setError(false)
            
            let valido = /^([0-9]{1,3},){2}[0-9]{1,3}$/.test(colorTemporal)

            if(valido){

                let [r,g,b] = colorTemporal.split(",").map(n => Number(n));

                [r,g,b].forEach(n => valido = valido && n <= 255 )

                if(valido){

                    return fetch("https://api-colores-full-sj9l.onrender.com/colores/nuevo", {
                        method : "POST",
                        body : JSON.stringify({r,g,b}),
                        headers : {
                            "Content-type" : "application/json"
                        }
                    })
                    .then(respuesta => respuesta.json())
                    .then(({error,id}) => {
                
                        if(!error){
                            crearColor({id,r,g,b})
                            return setColorTemporal("")
                        }
                        console.log("error")
                    });

                }

                setMsgError("deben ser tres numeros entre 0 y 255")
                return setError(true)

            }

            setMsgError("formato invalido")
            setError(true)

            }}>

            <input type="text" placeholder="rrr,ggg,bbb" value={colorTemporal} 
            onChange={evento => setColorTemporal(evento.target.value)} />

            <p className={`error ${ error ? "visible" : "" }`}>{msgError}</p>

            <input type="submit" value="crear color" />

        </form>

    )

}

export default Formulario