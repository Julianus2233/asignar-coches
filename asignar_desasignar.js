/*En el template, se necesitan 2 bucles de v-for
Primero, se recorre donde están los coches:
    v-for="coche in coches" :key="coche.nombre"
    {{coche.nombre}}
    {{coche.modelo}}
    {{coche.marca}}
    ...
Y un segundo for para ver los propietarios en una lista:
    <select name="propietario">
        <option v-for="propietario in coche.propietario" :key="propietario" :value="propietario">{{propietario}}</option>
    </select>
*/
<script>
import {mapState} from 'vuex'
export default {

    data() {
        //Esta variable se usará para ver si el usuario está inscrito
        return {

            inscrito: null

        }

    },

    computed: {
        
        ...mapState(['usuarios', 'coches'])
        //Necesitamos el array de usuarios del store y el array de coches (importado a parte en el store)

    },
    methods: {

        //@click="inscribirse(propietario)"
        inscribirse(propietario) {
            //Si el usuario está inscrito, no podrá volver a inscribirse
            if(this.inscrito) {

                console.log("Ya estás inscrito como propietario");
                return

            }
            //Se coge el usuario que le hemos dado en el login desde la url
            const user = this.$route.params.nombre

            console.log(user);
            //Si la lista no incluye el usuario
            if(!propietario.jugadores.includes(user)) {

                //Se pusea ese usuario a la lista
                propietario.jugadores.push(user)
                //Y se marca que ya está inscrito
                this.inscrito = propietario

            }
            else {

                console.log("Usuario ya inscrito");

            }

            console.log(propietario);

        },

        //@click="desinscribirse(propietario)"
        desinscribirse(propietario) {

            //Se coge el usuario que le hemos dado en el login desde la url
            const user = this.$route.params.nombre

            //Se coge la posicion en la que está el usuario en la lista de propietarios
            const index = propietario.jugadores.indexOf(user)
            console.log(user);

            //Si el usurio está
            if(index !== -1) {

                //Se quita de la lista
                propietario.jugadores.splice(index, 1)
                //la variable de inscripción vuelve a su valor vacio
                this.inscrito = null

            }
            else {

                console.log("Usuario no inscrito");

            }

            console.log(propietario);

        }

    }

}
</script>