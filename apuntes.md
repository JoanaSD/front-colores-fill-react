... -> spread operator ---> desplegar un array (sus valores)

let colores = ["rojo","naranja","verde"]

let nuevosColores = [colores[0],colores[1],colores[2],"amarillo"]

let nuevosColores = [...colores,"amarillo"]

useEffect ---> invocar un callback cada vez que una(s) variable(s) de estado cambien

useEffect(callback,[array,con,las,dependencias])

dependencias --> las variables de estado que dispararán el callback 


let [numero,setNumero] = useState(2)

useEffect(() => console.log("bla bla bla"),[numero])

useEffect(() => {},[]) --> solo se ejecutará una vez, al cargar el componente, se utiliza para hacer el setting inicial o llamadas iniciales a APIs