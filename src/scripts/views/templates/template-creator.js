import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = ({
    name,
    rating,
    pictureId,
    address,
    city,
    description,
    menus,
    customerReviews,
}) => `
    <div class='restaurant-header'>
        <div class='restaurant__detail'>
            <span class='restaurant__detail--name'>${name}</span>
            <span class='restaurant__detail--address'>
                <i class="fa fa-map-marker"></i> ${address}, ${city}
            </span>
        </div>
        <span class='restaurant__rating'>
            <i class="fa fa-star"></i> ${rating}
        </span>
    </div>
    <div class='restaurant-content'>
        <img src=${
            pictureId
                ? CONFIG.BASE_IMAGE_URL + pictureId
                : 'https://picsum.photos/id/666/800/450?grayscale'
        }
            alt="${name} photos"
            class="restaurant-content__poster"/>
        <div id="favoriteButtonContainer"></div>
        <h2>Overview</h2>
        <p class='restaurant-content__description'>${description}</p>
        <h2>Menu</h2>
        <div class='restaurant-content__menu'>
            <div>
                <h3>Foods</h3>
                <ul class='menu-wrapper'>
                    ${menus.foods
                        .map(
                            (food) =>
                                `<li class='menu__item menu__item--food'>${food.name}</li>`
                        )
                        .join('')}
                </ul>
            </div>
            <div>
                <h3>Drinks</h3>
                <ul class='menu-wrapper'>
                    ${menus.drinks
                        .map(
                            (drink) =>
                                `<li class='menu__item menu__item--drink'>${drink.name}</li>`
                        )
                        .join('')}
                </ul>
            </div>
        </div>
    </div>
    <div class='restaurant__reviews'>
        <h2>Reviews</h2>
        <div class=review__wrapper>
        ${customerReviews
            .map(
                ({ name: reviewerName, review }) =>
                    `<div class='review__item'>
                        <span class='review__item--name'>${reviewerName}</span>
                        <p class='review__item--comment'>${review}</p>
                    </div>`
            )
            .join('')}
        <div>
    </div>
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
            <h3>
                <a href='./#/detail/${restaurant.id}'>${restaurant.name}, ${
                    restaurant.city
                }</a>
            </h3>
            <p>
                ${restaurant.description}
            </p>
        </div>
    </div>
`
const createFavoriteButtonTemplate = () => `
    <button class='btn__favorite btn__favorite--favorite' id="favoriteButton">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`
const createFavoritedButtonTemplate = () => `
    <button class='btn__favorite btn__favorite--unfavorite' id="favoriteButton">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`
export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createFavoriteButtonTemplate,
    createFavoritedButtonTemplate,
}
