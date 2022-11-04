window.onload = function() {

        let milisegundos = 0
        let segundos = 0
        let intervalo
        let start = document.getElementById("start")
        let stop = document.getElementById("stop")
        let restart = document.getElementById("restart")


        start.addEventListener("click", () => {
                clearInterval(intervalo)
                intervalo = setInterval(comecar, 10)
        })

        stop.addEventListener("click", () => {
                clearInterval(intervalo)

        })

        restart.addEventListener("click", () => {
                clearInterval(intervalo)
                milisegundos = 0
                segundos = 0
                document.getElementById("segundos").innerHTML = "0" + segundos
                document.getElementById("milisegundos").innerHTML = "0" + milisegundos
        })

        function comecar() {
                milisegundos++

                if(milisegundos <= 9) {
                        document.getElementById("milisegundos").innerHTML = "0" + milisegundos

                } if(milisegundos > 9) {
                        document.getElementById("milisegundos").innerHTML = milisegundos

                } if(milisegundos > 99) {
                        milisegundos = 0
                        segundos++
                        document.getElementById("segundos").innerHTML = "0" + segundos

                } if(segundos > 9) {
                        document.getElementById("segundos").innerHTML = segundos
                }
        }
}


        
