import TheRestaurantDbSource from '../../data/therestaurantdb-source'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
    async render() {
        return `
            <h1 class='title'>Detail Restaurant</h1>
            <div class="restaurant"></div>
        `
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const { restaurant } = await TheRestaurantDbSource.detailRestaurant(
            url.id
        )
        const restaurantContainer = document.querySelector('.restaurant')

        restaurantContainer.innerHTML +=
            createRestaurantDetailTemplate(restaurant)

        const favoriteButtonContainer = document.querySelector(
            '#favoriteButtonContainer'
        )
        FavoriteButtonPresenter.init({
            favoriteButtonContainer,
            restaurant,
        })
    },
}

export default Detail
