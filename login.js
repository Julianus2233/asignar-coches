//Se debe crear un array en el state del index e importarlo en el computed

<script>
import {mapState, mapMutations} from 'vuex'
export default {

    data() {
        //v-models
        return {

            email: '',
            pass: ''

        }

    },

    computed: {

        ...mapState(['usuarios', 'logged'])

        //Necesitamos el array de usuarios del store, una variable de log para cambiar su valor sobre si está logeado o no

    },
    methods: {

        //El script de mutaciones donde se cambia el valor del login
        ...mapMutations(['LOG_IN']),
        //Script:
        /*
            LOG_IN(state){

                state.logged = !(state.logged)

            }
        */

        acceder() {

            for(let i = 0; i<this.usuarios.length; i++){

                //Si el usuario del array es igual al del input, se acepta (lo mismo con la contraseña)
                if(this.usuarios[i].email === this.email && this.usuarios[i].pass === this.pass) {

                    //Se llama a la funcion de login
                    this.MOD_LOG()

                    console.log("Aceptado");
                    //Se mueve a la vista donde están los coches (Primero se debe declarar la ruta en el index de router)
                    this.$router.push({name: 'coches', params: {nombre: this.usuarios[i].nombre}})
                    //En este caso, se usa el nombre, pero se puede usar también el id

                }
                else if(this.email === "" || this.pass === "") {

                    console.log("Rellena los campos");

                }

            }

        }

    }

}
</script>