import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
    async render() {
        return `
            <div class="hero">
                <img
                    src="./images/heros/hero-image_4.jpg"
                    alt="Lapar Hero Image"
                />
            </div>
            <div class="content">
                <h2 class="content__heading">My Favorite Restaurants<h2>
            </div>
            <div class='restaurants'></div>
        `
    },
    async afterRender() {
        const favoritedRestaurant = await FavoriteRestaurantIdb.getRestaurants()
        const restaurantsContainer = document.querySelector('.restaurants')

        restaurantsContainer.innerHTML +=
            favoritedRestaurant.length === 0
                ? '<p>There no your favorite restaurants</p>'
                : favoritedRestaurant
                      .map((restaurant) =>
                          createRestaurantItemTemplate(restaurant)
                      )
                      .join('')
    },
}

export default Favorite
