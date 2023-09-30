const assert = require('assert')

Feature('Favoriting Restaurant')

Before(({ I }) => {
    I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', ({ I }) => {
    I.see('There no your favorite restaurants')
})

Scenario('favoriting one restaurant', async ({ I }) => {
    I.see('There no your favorite restaurants')

    I.amOnPage('/')

    I.seeElement('.restaurant-item__link')
    const firstRestaurant = locate('.restaurant-item__link').first()
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
    I.click(firstRestaurant)

    I.seeElement('#favoriteButton')
    I.click('#favoriteButton')

    I.amOnPage('/#/favorite')
    I.seeElement('.restaurant-item')

    const favoritedRestaurantTitle = await I.grabTextFrom(
        '.restaurant-item__link'
    )

    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle)
})

Scenario('unfavoriting one restaurant', async ({ I }) => {
    I.see('There no your favorite restaurants')

    I.amOnPage('/')

    I.seeElement('.restaurant-item__link')

    const firstRestaurant = locate('.restaurant-item__link').first()
    I.click(firstRestaurant)

    I.seeElement('#favoriteButton')
    I.click('#favoriteButton')

    I.amOnPage('/#/favorite')
    I.seeElement('.restaurant-item')

    I.click(firstRestaurant)

    I.seeElement('#favoriteButton')
    I.click('#favoriteButton')

    I.amOnPage('/#/favorite')

    I.see('There no your favorite restaurants')
})
