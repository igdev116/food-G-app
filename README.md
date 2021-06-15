## What we use?

1. SCSS
2. Material UI
3. React-router-dom
4. Axios
5. Formik
6. Yup

## Organize folders

```js
src
|__assets
|  |__images
|  |__styles  // global styles
|__app
|  |__store.js
|__components // shared components
|  |__Header // navs, cart, account
|  |__Footer // operating times, contacts, map
|  |__PrRedBtn
|__features
|  |__Home
|  |  |__components
|  |  |  |__HomeBanners
|  |  |  |  |__HomeFirstBanner
|  |  |  |  |__HomeSecondBanner
|  |  |  |  |__HomeThirdBanner
|  |  |  |__HowItWorks
|  |  |  |__HomeIngredients
|  |  |  |__HomeCategories
|  |  |  |__HomeDelivery
|  |  |  |__HomeProducts
|  |  |  |  |__HomeProduct
|  |  |  |__HomePromotions
|  |  |  |__HomeAnalysis
|  |  |  |__HomeReviews
|  |  |  |__HomeGallery
|  |  |__pages
|  |  |  |__HomePage
|  |__Shop
|  |  |__components
|  |  |  |__ShopBanner
|  |  |  |__ShopContainer
|  |  |     |__ShopFilters // filter by types, prices, sizes, best deals
|  |  |     |__ShopContent
|  |  |     |  |__ShopHandlings // search, sort
|  |  |     |  |__ShopProducts
|  |  |     |     |__ShopProduct
|  |  |     |__ShopContainer.js
|  |  |     |__index.jsx // render
|  |  |__pages
|  |  |  |__ShopPage
|  |  |__shopSlice.js
```
