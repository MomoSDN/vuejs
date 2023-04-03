<template>
    <div>
        <h1 class="mb-4">Liste des corps célestes</h1>
        <div class="mb-4">
            <button class="btn btn-primary" @click="toggleOnlyPlanets">
                {{ onlyPlanets ? "Afficher tous les corps célestes" : "Afficher seulement les planètes" }}
            </button>
        </div>
        <div style="padding: 5vw" class="row">
            <div  class="col-md-2 mb-4" v-for="planet in planets" :key="planet.id">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{{ planet.name }}</h5>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{ name: 'planet-details', params: { planetName: planet.englishName } }"
                            class="btn btn-primary">
                            Voir les détails
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            planets: [],
            onlyPlanets: true
        };
    },
    async mounted() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                let response;
                if (this.onlyPlanets) {
                    response = await this.$http.get("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false");
                } else {
                    response = await this.$http.get("https://api.le-systeme-solaire.net/rest/bodies");
                }
                this.planets = response.data.bodies;
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        },
        async toggleOnlyPlanets() {
            this.onlyPlanets = !this.onlyPlanets;
            await this.fetchData();
        }
    }
};
</script>
<style>
html {
    overflow-x:hidden;
}
</style>
