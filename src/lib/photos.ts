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
  baconCheeseburgerChecker: p("bacon-cheeseburger-checker.jpg", 640, 480, "Bacon cheeseburger with lettuce and tomato on a sesame bun, in front of a checkerboard wall"),
  baconCheeseburger: p("bacon-cheeseburger.jpg", 640, 480, "Half-pound cheeseburger topped with crisscrossed bacon, lettuce and tomato"),
  cheeseburgerCurlyFries: p("cheeseburger-curly-fries.jpg", 640, 480, "Cheeseburger with lettuce and tomato beside a pile of curly fries"),
  burgerCurlyFries: p("burger-curly-fries.jpg", 640, 480, "Cheeseburger on a sesame bun with curly fries"),
  jalapenoBurger: p("jalapeno-bacon-burger.jpg", 640, 480, "Cheeseburger with bacon and jalapeños in front of the checkerboard"),
  cheeseburgerDark: p("cheeseburger-lettuce.jpg", 640, 480, "Thick cheeseburger stacked with lettuce and tomato"),
  texasBurger: p("texas-burger.jpg", 640, 480, "Texas Burger topped with a sunny-side-up fried egg"),
  burgerKetchup: p("burger-ketchup.jpg", 640, 480, "Mushroom cheeseburger next to a bottle of Heinz ketchup"),
  cheeseburgerClassic: p("cheeseburger-classic.jpg", 640, 480, "Classic cheeseburger with lettuce and tomato on a sesame bun"),
  mushroomBaconBurger: p("mushroom-bacon-burger.jpg", 640, 480, "Burger piled with sautéed mushrooms and bacon"),
  mushroomBurger: p("mushroom-burger.jpg", 640, 480, "Mushroom burger on a plate next to a second burger"),
  twoBurgersCounter: p("two-burgers-counter.jpg", 800, 600, "Two cheeseburgers with fried onions on plates at the counter"),
  onionBurgerFries: p("onion-burger-fries.jpg", 800, 600, "Burger with fried onions and steak-cut fries on a checkered tablecloth"),
  englishBurger: p("english-burger.jpg", 800, 600, "English Burger on a toasted English muffin with fries"),
  burgerStack: p("burger-stack.jpg", 600, 800, "Two burgers with fried onions and fries on one plate"),

  // Sides and drinks
  onionRings: p("onion-rings-curly-fries.jpg", 640, 480, "Onion rings and curly fries"),
  chiliCheeseFries: p("chili-cheese-fries.jpg", 640, 480, "Steak fries smothered in chili and melted cheese"),
  gravyFries: p("chili-fries-checker.jpg", 640, 480, "Plate of chili fries on a checkered tablecloth"),
  milkshakeCounter: p("milkshake-counter.jpg", 640, 480, "Chocolate milkshake on the counter with the menu board behind it"),
  float: p("ice-cream-float.jpg", 600, 800, "Soda float topped with a scoop of vanilla ice cream"),
  stewarts: p("stewarts-sodas.jpg", 600, 800, "Bottles of Stewart's root beer and cream soda"),
  beers: p("beer-bottles.jpg", 640, 480, "Row of beer bottles on a checkered table"),
  salad: p("pauls-salad.jpg", 800, 600, "Paul's Salad with lettuce, tomato and dressing"),

  // The joint
  signEst1989: p("sign-est-1989.jpg", 640, 480, "Red Paul's Da Burger Joint sign reading Est. 1989"),
  diningRoom: p("dining-room.jpg", 640, 480, "The dining room with checkered tablecloths, framed photos and the counter"),
  cowStatue: p("dining-room-cow.jpg", 640, 480, "The fiberglass cow that watches over the dining room"),
} as const

export type PhotoKey = keyof typeof photos

export type GalleryCategory = "Burgers" | "Sides & drinks" | "The joint"

/** Photos shown on the gallery page, in order, with their filter category. */
export const galleryItems: { key: PhotoKey; category: GalleryCategory }[] = [
  { key: "baconCheeseburgerChecker", category: "Burgers" },
  { key: "diningRoom", category: "The joint" },
  { key: "texasBurger", category: "Burgers" },
  { key: "signEst1989", category: "The joint" },
  { key: "onionRings", category: "Sides & drinks" },
  { key: "milkshakeCounter", category: "Sides & drinks" },
  { key: "mushroomBaconBurger", category: "Burgers" },
  { key: "cowStatue", category: "The joint" },
  { key: "chiliCheeseFries", category: "Sides & drinks" },
  { key: "burgerStack", category: "Burgers" },
  { key: "cheeseburgerCurlyFries", category: "Burgers" },
  { key: "float", category: "Sides & drinks" },
  { key: "twoBurgersCounter", category: "Burgers" },
  { key: "beers", category: "Sides & drinks" },
  { key: "jalapenoBurger", category: "Burgers" },
  { key: "englishBurger", category: "Burgers" },
  { key: "gravyFries", category: "Sides & drinks" },
  { key: "burgerKetchup", category: "Burgers" },
  { key: "stewarts", category: "Sides & drinks" },
  { key: "onionBurgerFries", category: "Burgers" },
  { key: "baconCheeseburger", category: "Burgers" },
  { key: "salad", category: "Sides & drinks" },
  { key: "mushroomBurger", category: "Burgers" },
  { key: "cheeseburgerClassic", category: "Burgers" },
  { key: "burgerCurlyFries", category: "Burgers" },
  { key: "cheeseburgerDark", category: "Burgers" },
]
