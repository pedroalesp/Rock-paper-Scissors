const rock = document.getElementById("rock"); //Todas estas const toman la información de los botones del HTML
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

class Game {
    constructor()  {
        this.iniciar()
        this.eventosDeUsuario()
    }

    iniciar() {
        
        this.options = {
            rock,
            paper,
            scissors
        }
    }
    
    eventosDeUsuario() {
        this.options.rock.addEventListener('click', this.eleccionDeUsuario.bind(this))
        this.options.paper.addEventListener('click', this.eleccionDeUsuario.bind(this))
        this.options.scissors.addEventListener('click', this.eleccionDeUsuario.bind(this))
    }

    cambiarEleccionANumero(opcionUsuario) {
        switch (opcionUsuario) {
            case 'rock':
                return 1
            case 'paper':
                return 2
            case 'scissors':
                return 3
        }
    }

    cambiarNumeroAOpcion(usuario) {
        switch (usuario) {
            case 1:
                return 'Rock'
            case 2:
                return 'Paper'
            case 3:
                return `Scissors`
        }
    }

    cambiarPcAOpcion(pc) {
        switch (pc) {
            case 1:
                return 'Rock'
            case 2:
                return 'Paper'
            case 3:
                return `Scissors`
        }
    }
    
    eleccionDeUsuario (ev) {
        const opcionUsuario = ev.target.dataset.opcion
        let usuario = this.cambiarEleccionANumero(opcionUsuario)
        let pc = Math.floor(Math.random()* (3 + 1 - 1) + 1)
    
        if (pc === usuario) {
            this.empate(usuario, pc)
        } else if (usuario === 1 && pc === 3 || usuario === 2 && pc === 1 || usuario === 3 && pc === 2) {
            this.ganaste(usuario, pc)
        } else {
            this.perdiste(usuario, pc)
        }

    }

    empate (usuario, pc) {
        let usuarioFinal = this.cambiarNumeroAOpcion(usuario)
        let pcFinal = this.cambiarPcAOpcion(pc)
        swal('TIE!', `You chose ${usuarioFinal} and pc chose ${pcFinal}`, 'error')
           // .then(this.inicializar.bind(this))//El this puede estar bindeado aqui o en el constructor cmo en los casos anteriores
    }

    ganaste (usuario, pc) {
        let usuarioFinal = this.cambiarNumeroAOpcion(usuario)
        let pcFinal = this.cambiarPcAOpcion(pc)
        swal('YOU WIN!', `You chose ${usuarioFinal} and pc chose ${pcFinal}`, 'success')
           // .then(this.inicializar.bind(this))//El this puede estar bindeado aqui o en el constructor cmo en los casos anteriores
    }

    perdiste (usuario, pc) {
        let usuarioFinal = this.cambiarNumeroAOpcion(usuario)
        let pcFinal = this.cambiarPcAOpcion(pc)
        swal('YOU LOSE :(', `You chose ${usuarioFinal} and pc chose ${pcFinal}`, 'error')
           // .then(this.inicializar.bind(this))//El this puede estar bindeado aqui o en el constructor cmo en los casos anteriores
    }
}

var juego = new Game()


