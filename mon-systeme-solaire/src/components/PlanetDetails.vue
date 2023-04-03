<template>
    <div v-if="planet">
        <h1 class="mb-4">{{ planet.englishName }}</h1>
        <div class="row" >
            <div class="col-md-6">
                <h3>Caractéristiques</h3>
                <table class="table table-striped">
                    <tr v-if="planet.equaRadius">
                        <td>Diamètre</td>
                        <td>{{ planet.equaRadius * 2 }} km</td>
                    </tr>
                    <tr>
                        <td>Masse</td>
                        <td>{{ planet.mass.massValue }} x 10^{{ planet.mass.massExponent }} kg</td>
                    </tr>
                    <tr>
                        <td>Gravité</td>
                        <td>{{ planet.gravity }} m/s²</td>
                    </tr>
                    <tr>
                        <td>Distance du Soleil</td>
                        <td>{{ planet.semimajorAxis }} km</td>
                    </tr>
                    <tr>
                        <td>Période orbitale</td>
                        <td>{{ planet.sideralOrbit }} jours</td>
                    </tr>
                    <tr>
                        <td>Période de rotation</td>
                        <td>{{ planet.sideralRotation }} heures</td>
                    </tr>
                    <tr>
                        <td>Inclinaison axiale</td>
                        <td>{{ planet.axialTilt }}°</td>
                    </tr>
                    <tr>
                        <td>Température moyenne</td>
                        <td>{{ planet.avgTemp }} K</td>
                    </tr>
                </table>
            </div>
            <div v-if="planet.moons" class="col-md-6">
                <h3>Lunes ({{ planet.moons.length }})</h3>
                <ul class="list-group">
                    <li v-for="moon in planet.moons" :key="moon.moon" class="list-group-item">{{ moon.moon }}</li>
                </ul>
            </div>
            <div v-else class="col-md-6" style="font-size: 2rem;display : flex; justify-content: center;align-items: center;">
                <div>
                    Pas de lune
                </div>
            </div>
        </div>
        <div class="mt-4">
            <router-link to="/" class="btn btn-primary">Retour à la liste des planètes</router-link>
        </div>
    </div>
    <div v-else>
        <p>Chargement des données de la planète...</p>
    </div>
</template>

<script>
export default {
    props: {
        planetName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            planet: null
        };
    },
    async mounted() {
        await this.fetchPlanetData();
    },
    methods: {
        async fetchPlanetData() {
            console.log('test');
            console.log(this.planetName);
            try {
                const response = await this.$http.get(`https://api.le-systeme-solaire.net/rest/bodies/${this.planetName}`);
                console.log('jai trouvé!');
                console.log(response.data);
                this.planet = response.data;
            } catch (error) {
                console.error("Erreur lors de la récupération des données de la planète :", error);
            }
        }
    },
    watch: {
        async id() {
            await this.fetchPlanetData();
        }
    }
};
</script>
