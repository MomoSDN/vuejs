<template>
    <div class="bg-space">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center text-white mb-5">Les planètes du système solaire</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card-columns">
                        <div class="card text-center my-3" v-for="planet in planets" :key="planet.id">
                            <div class="card-body">
                                <h5 class="card-title">{{ planet.englishName }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
export default {
    name: 'PlanetsVue',
    data() {
        return {
            planets: [],
        }
    },
    mounted() {
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(response => {
                this.planets = response.data.bodies.filter(planet => planet.isPlanet);
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

<style scoped>
.bg-space {
    /* background: url('/assets/images/space-background.jpg') no-repeat center center fixed; */
    background-size: cover;
}

.card {
    width: calc(100% / 6 - 1rem);
}
</style>
