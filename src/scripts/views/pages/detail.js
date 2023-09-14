import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="restaurant"></div>
            <div id="favoriteButtonContainer"></div>
        `
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const { restaurant } = await TheRestaurantDbSource.detailRestaurant(
            url.id
        )
        const restaurantContainer = document.querySelector('#restaurant')
        const favoriteButtonContainer = document.querySelector(
            '#favoriteButtonContainer'
        )

        restaurantContainer.innerHTML +=
            createRestaurantDetailTemplate(restaurant)

        FavoriteButtonInitiator.init({
            favoriteButtonContainer,
            restaurant,
        })
    },
}

export default Detail
