import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Unfavorite A Restaurant', () => {
    const favoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
    }

    beforeEach(async () => {
        favoriteButtonContainer()
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    })

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    it('should display unfavorite widget when the restaurant has been liked', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        expect(
            document.querySelector('[aria-label="unfavorite this restaurant"]')
        ).toBeTruthy()
    })

    it('should not display favorite widget when the restaurant has been liked', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        expect(
            document.querySelector('[aria-label="favorite this restaurant"]')
        ).toBeFalsy()
    })

    it('should be able to remove favorited button from the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        document
            .querySelector('[aria-label="unfavorite this restaurant"]')
            .dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
    })

    it('should not throw error when user click unfavorite widget if the unfavorite restaurant not in the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        await FavoriteRestaurantIdb.deleteRestaurant(1)

        document
            .querySelector('[aria-label="unfavorite this restaurant"]')
            .dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
    })
})
