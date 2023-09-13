import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Our Best Offering</h2>
            </div>
            <div class="restaurants"></div>
        `
    },

    async afterRender() {
        const restaurants = await TheRestaurantDbSource.restaurants()
        const restaurantContainer = document.querySelector('.restaurants')

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant)
        })
    },
}

export default Home
