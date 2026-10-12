/**
 * Photo registry. Every photo on the site comes from the restaurant's own
 * original website (paulsburgersnyc.com gallery and slider) and lives in
 * /public/photos. Most originals are 640 x 480 or 800 x 600, so layouts show
 * them at framed "print" sizes rather than stretching them full-bleed.
 */

export type Photo = {
  src: string
  width: number
  height: number
  alt: string
}

const p = (src: string, width: number, height: number, alt: string): Photo => ({
  src: `/photos/${src}`,
  width,
  height,
  alt,
})

export const photos = {
  // Burgers
  baconCheeseburgerChecker: p(
    "bacon-cheeseburger-checker.jpg",
    640,
    480,
    "Bacon cheeseburger with lettuce and tomato on a sesame bun, in front of a checkerboard wall",
  ),
  baconCheeseburger: p(
    "bacon-cheeseburger.jpg",
    640,
    480,
    "Half-pound cheeseburger topped with crisscrossed bacon, lettuce and tomato",
  ),
  cheeseburgerCurlyFries: p(
    "cheeseburger-curly-fries.jpg",
    640,
    480,
    "Cheeseburger with lettuce and tomato beside a pile of curly fries",
  ),
  burgerCurlyFries: p("burger-curly-fries.jpg", 640, 480, "Cheeseburger on a sesame bun with curly fries"),
  jalapenoBurger: p(
    "jalapeno-bacon-burger.jpg",
    640,
    480,
    "Bacon cheeseburger with jalapeños in front of the checkerboard",
  ),
  cheeseburgerLettuce: p("cheeseburger-lettuce.jpg", 640, 480, "Thick cheeseburger stacked with lettuce and tomato"),
  texasBurger: p("texas-burger.jpg", 640, 480, "Texas Burger topped with a sunny-side-up fried egg"),
  burgerKetchup: p("burger-ketchup.jpg", 640, 480, "Bacon burger with lettuce and tomato, mushrooms on the side and a bottle of Heinz ketchup"),
  cheeseburgerClassic: p(
    "cheeseburger-classic.jpg",
    640,
    480,
    "Classic cheeseburger with lettuce and tomato on a sesame bun",
  ),
  mushroomBaconBurger: p("mushroom-bacon-burger.jpg", 640, 480, "Burger piled with sautéed mushrooms and bacon"),
  mushroomBaconTopDown: p(
    "mushroom-bacon-top-down.jpg",
    480,
    640,
    "Open-faced burger with mushrooms and bacon on a plate, seen from above on checkered paper",
  ),
  mushroomBurger: p("mushroom-burger.jpg", 640, 480, "Burger smothered in sautéed mushrooms, with the top bun, lettuce and tomato on the side"),
  twoBurgersCounter: p(
    "two-burgers-counter.jpg",
    800,
    600,
    "Two cheeseburgers with fried onions on plates at the counter",
  ),
  onionBurgersClose: p(
    "onion-burgers-close.jpg",
    800,
    600,
    "Close-up of a burger with fried onions and melted cheese, fries on the side",
  ),
  onionBurgerFries: p(
    "onion-burger-fries.jpg",
    800,
    600,
    "Burger with fried onions and steak-cut fries on a checkered tablecloth",
  ),
  englishBurger: p("english-burger.jpg", 800, 600, "English Burger on a toasted English muffin with fries"),
  burgerStack: p("burger-stack.jpg", 600, 800, "Cheeseburger with fried onions and steak fries on the plate"),

  // Sides and drinks
  onionRings: p("onion-rings-curly-fries.jpg", 640, 480, "Onion rings and curly fries"),
  chiliCheeseFries: p("chili-cheese-fries.jpg", 640, 480, "Steak fries smothered in chili and melted cheese"),
  chiliCheeseFriesClose: p(
    "chili-cheese-fries-close.jpg",
    800,
    600,
    "Close-up of fries under chili and melted American cheese",
  ),
  chiliFriesChecker: p("chili-fries-checker.jpg", 640, 480, "Plate of chili cheese fries on checkered paper"),
  milkshakeCounter: p(
    "milkshake-counter.jpg",
    640,
    480,
    "Chocolate milkshake on the counter with the menu board behind it",
  ),
  float: p("ice-cream-float.jpg", 600, 800, "Soda float topped with a scoop of vanilla ice cream"),
  stewarts: p("stewarts-sodas.jpg", 600, 800, "Bottles of Stewart’s sodas"),
  beers: p("beer-bottles.jpg", 640, 480, "Row of beer bottles on a checkered table"),
  salad: p("pauls-salad.jpg", 800, 600, "Salad with lettuce, tomato and a creamy dressing"),

  // The joint
  signEst1989: p("sign-est-1989.jpg", 640, 480, "Red Paul’s Da Burger Joint sign reading Est. 1989"),
  diningRoom: p(
    "dining-room.jpg",
    640,
    480,
    "The dining room under the neon, with checkered tablecloths and framed photos on every wall",
  ),
  diningRoomTables: p(
    "dining-room-tables.jpg",
    800,
    600,
    "Diners at checkered tables with the counter and grill behind them",
  ),
  cookAtGrill: p(
    "cook-at-the-grill.jpg",
    600,
    800,
    "A cook working the grill behind the counter, with mustard and ketchup bottles in front",
  ),
  cowStatue: p("cow-statue.jpg", 640, 480, "The cow statue in a sailor hat that watches over the grill"),
} as const

export type PhotoKey = keyof typeof photos

export const galleryCategories = ["Burgers", "Sides & drinks", "The joint"] as const
export type GalleryCategory = (typeof galleryCategories)[number]

/** Photos shown on the gallery page, in order, with their filter category. */
export const galleryItems: { key: PhotoKey; category: GalleryCategory }[] = [
  { key: "baconCheeseburgerChecker", category: "Burgers" },
  { key: "diningRoomTables", category: "The joint" },
  { key: "texasBurger", category: "Burgers" },
  { key: "cookAtGrill", category: "The joint" },
  { key: "onionRings", category: "Sides & drinks" },
  { key: "mushroomBaconTopDown", category: "Burgers" },
  { key: "milkshakeCounter", category: "Sides & drinks" },
  { key: "signEst1989", category: "The joint" },
  { key: "chiliCheeseFriesClose", category: "Sides & drinks" },
  { key: "burgerStack", category: "Burgers" },
  { key: "cowStatue", category: "The joint" },
  { key: "cheeseburgerCurlyFries", category: "Burgers" },
  { key: "float", category: "Sides & drinks" },
  { key: "twoBurgersCounter", category: "Burgers" },
  { key: "diningRoom", category: "The joint" },
  { key: "jalapenoBurger", category: "Burgers" },
  { key: "beers", category: "Sides & drinks" },
  { key: "englishBurger", category: "Burgers" },
  { key: "chiliCheeseFries", category: "Sides & drinks" },
  { key: "mushroomBaconBurger", category: "Burgers" },
  { key: "stewarts", category: "Sides & drinks" },
  { key: "onionBurgersClose", category: "Burgers" },
  { key: "burgerKetchup", category: "Burgers" },
  { key: "chiliFriesChecker", category: "Sides & drinks" },
  { key: "onionBurgerFries", category: "Burgers" },
  { key: "salad", category: "Sides & drinks" },
  { key: "baconCheeseburger", category: "Burgers" },
  { key: "mushroomBurger", category: "Burgers" },
  { key: "cheeseburgerClassic", category: "Burgers" },
  { key: "burgerCurlyFries", category: "Burgers" },
  { key: "cheeseburgerLettuce", category: "Burgers" },
]
