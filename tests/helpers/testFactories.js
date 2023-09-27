import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-presenter'

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.getElementById(
            'favoriteButtonContainer'
        ),
        restaurant,
    })
}

export { createFavoriteButtonPresenterWithRestaurant }
