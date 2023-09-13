import API_ENDPOINT from '../globals/api-endpoint'

class TheRestaurantDbSource {
    static async restaurants() {
        const response = await fetch(API_ENDPOINT.RESTAURANT_LIST)
        const responseJson = await response.json()
        return responseJson.restaurants
    }
}

export default TheRestaurantDbSource
