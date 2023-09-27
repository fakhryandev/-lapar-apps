Feature('Favoriting Restaurant')

Before(({ I }) => {
    I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', ({ I }) => {
    I.see('There no your favorite restaurants')
})

Scenario('liking one restaurant', ({ I }) => {
    I.see('There no your favorite restaurants')

    I.amOnPage('/')

    I.seeElement('.restaurant-item__link')
    I.click(locate('.restaurant-item__link').first())

    I.seeElement('#favoriteButton')
    I.click('#favoriteButton')

    I.amOnPage('/#/favorite')
    I.seeElement('.restaurant-item')
})
