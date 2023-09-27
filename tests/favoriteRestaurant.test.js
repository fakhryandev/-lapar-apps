import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Favoriting A Restaurant', () => {
    const favoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
    }

    beforeEach(() => {
        favoriteButtonContainer()
    })

    it('should show the favorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        expect(
            document.querySelector('[aria-label="favorite this restaurant"]')
        ).toBeTruthy()
    })

    it('should not show the unfavorite button when the restaurant has not benn favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        expect(
            document.querySelector('[aria-label="unfavorite this restaurant"]')
        ).toBeFalsy()
    })

    it('should be able to favorite the restaurant', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        document
            .getElementById('favoriteButton')
            .dispatchEvent(new Event('click'))

        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

        expect(restaurant).toEqual({ id: 1 })

        await FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    it('should not add restaurant again when its already favorited', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({
            id: 1,
        })

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 })

        document
            .getElementById('favoriteButton')
            .dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([
            { id: 1 },
        ])

        await FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    it('should not add a restaurant when its no id', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({})

        document
            .getElementById('favoriteButton')
            .dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([])
    })
})
