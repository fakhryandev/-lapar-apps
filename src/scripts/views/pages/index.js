import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
    async render() {
        return `
            <div class="hero">
                <img
                    src="./images/heros/hero-image_4.jpg"
                    alt="Lapar Hero Image"
                />
            </div>
            <div class="content">
                <h2 class="content__heading">Our Best Offering</h2>
            </div>
            <div class="restaurants"></div>
        `
    },

    async afterRender() {
        const restaurants = await TheRestaurantDbSource.restaurants()
        const restaurantsContainer = document.querySelector('.restaurants')

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant)
        })
    },
}

export default Home
