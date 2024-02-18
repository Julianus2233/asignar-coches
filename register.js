//Se debe crear un array en el state del index e importarlo en el computed

<script>
import {mapState} from 'vuex'
export default {

    data() {
        //v-models:
        return {

            nombre: '',
            email: '',
            pass: ''

        }

    },
    computed: {
        
        ...mapState(['usuarios'])
        //Necesitamos el array de usuarios del store

    },
    methods: {

        registrarse() {
            //Puseamos los valores de los inputs en el array de usuarios para crear uno nuevo
            this.usuarios.push({

                id: this.usuarios.length + 1,
                nombre: this.nombre,
                email: this.email,
                pass: this.pass

            })

            console.log(this.usuarios);

        }

    }

}
</script>