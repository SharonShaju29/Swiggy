import search from "../Assets/search.svg";
import cart from "../Assets/cart.svg";
import discount from "../Assets/discount.svg";
import help from "../Assets/help.svg";
import signin from "../Assets/signin.svg";
import searchHover from "../Assets/searchHover.svg";
import cartHover from "../Assets/cartHover.svg";
import discountHover from "../Assets/discountHover.svg";
import helpHover from "../Assets/helpHover.svg";
import signinHover from "../Assets/signinHover.svg";
import filter from "../Assets/filter.svg";
import dropdown from "../Assets/dropdown.svg";
import account from "../Assets/account.svg";
import food from "../Assets/food.svg";
import instamart from "../Assets/instamart.svg";
import home from "../Assets/home.svg";

export const NavigationOptions = [
  {
    name: "Search",
    icon: search,
    hoverIcon: searchHover,
    hasBadge: false,
    badgeName: "",
    link: "/search",
  },
  {
    name: "Offers",
    icon: discount,
    hoverIcon: discountHover,
    hasBadge: false,
    badgeName: "NEW",
    link: "/",
  },
  {
    name: "Help",
    icon: help,
    hoverIcon: helpHover,
    hasBadge: false,
    badgeName: "",
    link: "/",
  },
  {
    name: "Sign In",
    icon: signin,
    hoverIcon: signinHover,
    hasBadge: false,
    badgeName: "",
    link: "/",
  },
  {
    name: "Cart",
    icon: cart,
    hoverIcon: cartHover,
    hasBadge: false,
    badgeName: "",
    link: "/",
  },
];

export const DishesHomePage = [
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake.png",
];

export const TopRestaurantChainList = [
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e996wruqpmrrrqglp7hs",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/psjafovxcvdkmxcgsq76",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/405645b3118d83e89db4c65361e43733",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2edbc28b7b8219d6e0a9c049ce06658",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p57honbbzdgf7tyt2vay",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n85lmofooiw4birffqne",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/win6uczwtszg007suegg",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b8ys30ttkzmiypgdj4qz",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gxe4mn4ubw70yx3flyar",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb6049fae59b8a2413a9177eb0338b49",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4edcfc66d91018d69894941ebb3c8d16",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
    title: "Wow! Momo",
    rating: 4.2,
    deliveryTime: "25-30 mins",
    foodStyle: "Tibetan Healthy Food, Asian,...",
    location: "Jayanagar",
  },
];

export const filterHome = [
  { name: "Filter", icon: filter },
  { name: "Sort By", icon: dropdown },
  { name: "Fast Delivery", icon: "" },
  { name: "New on Swiggy", icon: "" },
  { name: "Rating 4.0+", icon: "" },
  { name: "Pure Veg", icon: "" },
  { name: "Offers", icon: "" },
  { name: "Rs. 300-Rs. 600", icon: "" },
  { name: "Less than Rs. 300", icon: "" },
];

export const typesCardMobile = [
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ak4f9kufbxgb8fprancy",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/rxhxvcibw2jlbihmwqwh",
  },
];

export const offerBanner = [
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/c302e410f523bd8ed4239e62e1844081",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/34dae89ad01e2fa8c73063b1ca449173",
  },
];

export const discountBanner = [
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ngjatt8hwriaytmugmqz",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/skp6dyt64rxasxs3bqse",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
  },
  {
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/glitfsp43tqn8rsfq23a",
  },
];

export const navigationBarMobileItems = [
  { name: "SWIGGY", icon: home },
  { name: "FOOD", icon: food },
  { name: "INSTAMART", icon: instamart },
  { name: "SEARCH", icon: search },
  { name: "ACCOUNT", icon: account },
];

export const restaurantsAndDishesSearch = [
  {
    name: "Iris Cafe",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/pycjji75g8i4npjxw22m",
  },
  {
    name: "Absolute Barbecues",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/mkcsocap2avn2xzucmgw",
  },
  {
    name: "Barbeque Nation",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/gjag4a19ynsm1wtx7mvw",
  },
  {
    name: "Glen's Bakehouse",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m6jahioyu7zrodei5pcq",
  },
  {
    name: "Baskin Robbins - Ice Cream Desserts",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/85ccae4e3576f9330af102c46ca85395",
  },
  {
    name: "Dindigul Thalappakatti",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/bfasxigdx7ny0cwqhr9r",
  },
  {
    name: "Cafe Coffee Day",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/b70c7d23d197251b7b315b7e4d8173ae",
  },
  {
    name: "La Casa - Bar and Kitchen",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/yjh8kaozqsqpvadpcdga",
  },
  {
    name: "46 Ounces Brewgarden",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/sej48s0rvl6np1pxuhd9",
  },
  {
    name: "7 Plates",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uqrquwcdyzo3zjylbenx",
  },
  {
    name: "Chat Bandi",
    type: "Restaurant",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/fovhuqnzvbia1byef6g7",
  },

  {
    name: "Burger",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ac6cd19ec0940e13058d1646e6837915",
  },
  {
    name: "Pizza",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/50a7b6a13177e653720b2a1d53e02958",
  },
  {
    name: "Biriyani",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ff27a7ad141a19a6c5366dbb2ed92d9a",
  },
  {
    name: "Pasta",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rdezez6tmnvbxmey6ha1",
  },
  {
    name: "Mojitos",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/6b62c6cabe941dea3908b1ff0643f87c",
  },
  {
    name: "Dosa",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/v0md1tt3tnnrytqn1yb9",
  },
  {
    name: "Al Faham",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nxmqwtw3nx52bij69elg",
  },
  {
    name: "Mandi",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/sbvmpy4znqpknahu8fpo",
  },
  {
    name: "Shawarma",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/bbr8vbdet3aztw9j7dk4",
  },
  {
    name: "Tacos",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/acnd09fxdcs0sl5av4lg",
  },
  {
    name: "Ice Cream",
    type: "Dish",
    link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/lzd74kpr21w9rqizqpsx",
  },
];
