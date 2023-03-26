<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>{{ planet.name }}</h1>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img :src="planet.image" :alt="planet.name" class="img-fluid">
            </div>
            <div class="col-md-6">
                <p>{{ planet.description }}</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Nom</td>
                            <td>{{ planet.name }}</td>
                        </tr>
                        <tr>
                            <td>Masse</td>
                            <td>{{ planet.mass }}</td>
                        </tr>
                        <tr>
                            <td>Rayon</td>
                            <td>{{ planet.meanRadius }}</td>
                        </tr>
                        <tr>
                            <td>Période de rotation</td>
                            <td>{{ planet.sideralRotation }}</td>
                        </tr>
                        <tr>
                            <td>Période de révolution</td>
                            <td>{{ planet.sideralOrbit }}</td>
                        </tr>
                        <tr>
                            <td>Distance au Soleil</td>
                            <td>{{ planet.semimajorAxis }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Planet',
    data() {
        return {
            planet: {}
        }
    },
    created() {
        axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${this.$route.params.id}`)
            .then(response => {
                this.planet = response.data
            })
    }
}
</script>
