import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
    async render() {
        return `
            <div class="hero">
                <picture>
                    <source media="(max-width: 600px)" type="image/webp" srcset="./images/new-heros/hero-image_4-small.webp">
                    <source type="image/webp" srcset="./images/new-heros/hero-image_4-large.webp">
                    <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/new-heros/hero-image_4-small.jpg">
                    <source type="image/jpeg" srcset="./images/new-heros/hero-image_4-large.jpg">
                    <img width="1430" height="450" src="./images/heros/hero-image_4.jpg" alt="Lapar Hero Image"/>
                </picture>
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
