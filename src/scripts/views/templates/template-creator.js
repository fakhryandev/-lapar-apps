import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
    <p>${restaurant.name}</p>
`

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img src=${
                restaurant.pictureId
                    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
                    : 'https://picsum.photos/id/666/800/450?grayscale'
            }
                alt="${restaurant.name} photos"
                class="restaurant-item__header__poster"/>
        </div>
        <div class="restaurant-item__content">
            <h3>${restaurant.name}, ${restaurant.city}</h3>
            <p>
                ${restaurant.description}
            </p>
        </div>
    <div>
`
const createFavoriteButtonTemplate = () => `
    <button id="favoriteButton">Favorite</button>
`
const createFavoritedButtonTemplate = () => `
    <button id="favoriteButton">Favorited</button>
`
export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate,
}
