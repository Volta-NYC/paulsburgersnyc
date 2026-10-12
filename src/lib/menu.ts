/**
 * Paul's Da Burger Joint menu.
 *
 * Transcribed from the live online ordering menu at orderpaulsburgersnyc.com
 * (October 11, 2026), which replaces the 2023 PDF the old site linked to.
 * Prices are the online ordering prices. A `from` price means options
 * (deluxe, cheese choice, sides) can raise it, matching the "+" the ordering site shows.
 *
 * When prices change, edit this file only. Every page reads from it.
 */

export type MenuItem = {
  name: string
  description?: string
  price: number
  from?: boolean
  /** Shown as a small badge, e.g. "House specialty". */
  tag?: string
}

export type MenuSection = {
  id: string
  title: string
  /** Short display label for the sticky category bar. */
  short: string
  intro?: string
  items: MenuItem[]
}

export const menu: MenuSection[] = [
  {
    id: "half-pound",
    title: "Half-Pound Specialties",
    short: "Burgers",
    intro: "Our famous 8 oz burgers, a full half pound each, cooked to order.",
    items: [
      { name: "Beef Burger", description: "Our famous 8 oz burger.", price: 9.6, from: true },
      { name: "Turkey Burger", description: "Our famous 8 oz burger, made with turkey.", price: 9.6, from: true },
      { name: "Cheeseburger", description: "Topped with American cheese.", price: 10.6, from: true },
      { name: "Mozzarella Burger", description: "Topped with mozzarella.", price: 11.1, from: true },
      { name: "Alpine Burger", description: "Topped with Swiss cheese.", price: 11.1, from: true },
      { name: "Monterey Jack Cheeseburger", description: "Topped with Monterey Jack.", price: 11.1, from: true },
      { name: "Cheddar Cheeseburger", description: "Topped with cheddar.", price: 11.1, from: true },
      { name: "Blue Cheeseburger", description: "Topped with blue cheese.", price: 11.1, from: true },
      { name: "English Burger", description: "On a toasted Thomas’ English muffin.", price: 11.1, from: true },
      { name: "Texas Burger", description: "Topped with a fried egg.", price: 11.6, from: true },
      { name: "El Paso Burger", description: "Cheddar and jalapeño peppers.", price: 12.6, from: true },
      { name: "Chili Burger", description: "Smothered with chili con carne.", price: 12.85, from: true },
      { name: "Pizza Burger", description: "Mozzarella and pizza sauce.", price: 13.1, from: true },
      { name: "Mushroom Burger", description: "Smothered with mushrooms.", price: 13.1, from: true },
      {
        name: "Second Avenue Burger",
        description: "A cheeseburger with fried onions, ham and tomatoes.",
        price: 13.85,
        from: true,
      },
      { name: "Cali Mex Burger", description: "Avocado and jalapeños.", price: 14.1, from: true },
      { name: "Mexican Burger", description: "Pepper Jack cheese and avocado.", price: 14.1, from: true },
      {
        name: "Saint Mark’s Burger",
        description: "A cheeseburger topped with mushrooms and fried onions.",
        price: 15.35,
        from: true,
      },
      { name: "Soul Burger", description: "A bacon cheeseburger with ham and fried onions.", price: 16.1, from: true },
      {
        name: "Eastsider Burger",
        description: "A bacon cheeseburger with ham, mushrooms, tomatoes and onions.",
        price: 18.1,
        from: true,
        tag: "House specialty",
      },
    ],
  },
  {
    id: "smash",
    title: "Paul’s Smash Burger",
    short: "Smash",
    intro: "The half-pounder’s little sibling: a thin smashed patty, dressed the classic way.",
    items: [
      {
        name: "Paul’s Smash Burger",
        description:
          "A 2.5 oz patty with cheese, lettuce, tomato, raw onion, pickles and Russian dressing on our classic hamburger bun.",
        price: 9.25,
      },
    ],
  },
  {
    id: "snacks",
    title: "Wings, Sliders & Snacks",
    short: "Snacks",
    items: [
      { name: "Spicy Hot Wings", price: 10.5 },
      { name: "Sliders (2)", price: 10.75 },
      { name: "Mozzarella Sticks (5)", price: 8.75 },
      { name: "Chicken Fingers (4)", price: 10 },
      { name: "Jalapeño Poppers (4)", description: "Cream cheese and bacon.", price: 9.75 },
    ],
  },
  {
    id: "more-than-burgers",
    title: "More Than Burgers",
    short: "Heroes",
    items: [
      {
        name: "Philly Cheesesteak",
        description: "Sliced steak, mozzarella and onions on Italian bread.",
        price: 11,
        from: true,
      },
      { name: "Mexican Philly Steak", description: "With jalapeños and fried tomatoes.", price: 13 },
      { name: "Italian Sausage Hero", description: "Served with peppers and onions.", price: 11, from: true },
      {
        name: "Chicken Filet Sandwich",
        description: "A 6 oz grilled chicken filet with lettuce and tomato.",
        price: 11.25,
        from: true,
      },
      { name: "Fish Filet Sandwich", description: "Lettuce, tomato and tartar sauce.", price: 10.5, from: true },
      { name: "Veggie Burger", description: "Served with lettuce and tomato.", price: 10.5, from: true },
      { name: "All-Beef Frank", description: "Sauerkraut and onions.", price: 4, from: true },
    ],
  },
  {
    id: "platters",
    title: "Hot Platters",
    short: "Platters",
    intro: "Served with french fries and a lettuce and tomato salad.",
    items: [
      { name: "Chopped Steak Platter", description: "A full pound of steak.", price: 22.25 },
      { name: "Chopped Turkey Platter", description: "A full pound of turkey.", price: 22.25 },
      { name: "Fried Chicken Platter", price: 16.5 },
    ],
  },
  {
    id: "eggs",
    title: "Eggs & Omelettes",
    short: "Eggs",
    intro: "Served with french fries, buttered toast and jelly.",
    items: [
      { name: "Two Eggs Any Style", price: 9.5, from: true },
      { name: "Onion Omelette", price: 10, from: true },
      { name: "Cheese Omelette", price: 11.5, from: true },
      { name: "Onion & Cheese Omelette", price: 11.5, from: true },
      { name: "Ham Omelette", price: 12, from: true },
      { name: "Tomato & Cheese Omelette", price: 12.5, from: true },
      { name: "Mushroom Omelette", price: 12.5, from: true },
      { name: "Pizza Omelette", price: 13, from: true },
      { name: "El Paso Omelette", description: "Cheddar and jalapeños.", price: 13, from: true },
      { name: "Ham & Cheese Omelette", price: 13.5, from: true },
      { name: "Chili & Cheese Omelette", price: 13.5, from: true },
      { name: "Village Omelette", description: "Ham, onions and peppers.", price: 14, from: true },
      { name: "Bacon & Cheese Omelette", price: 14, from: true },
      { name: "Mexican Omelette", price: 14, from: true },
      { name: "Mushroom & Cheese Omelette", price: 14, from: true },
      { name: "Paul’s Omelette", description: "Ham, onions, peppers and tomatoes.", price: 15, from: true },
      { name: "Veggie Omelette", description: "Tomato, peppers, onions and mushrooms.", price: 15, from: true },
    ],
  },
  {
    id: "sandwiches",
    title: "Hot & Cold Sandwiches",
    short: "Sandwiches",
    items: [
      { name: "Fried Egg Sandwich", price: 6.5, from: true },
      { name: "Grilled Cheese", description: "Your choice of cheese.", price: 7.25, from: true },
      { name: "Ham Sandwich", price: 8.75, from: true },
      { name: "Tuna Salad Sandwich", price: 9, from: true },
      { name: "BLT", description: "Bacon, lettuce and tomato.", price: 9.75, from: true },
      { name: "Ham & Cheese Sandwich", description: "Your choice of cheese.", price: 10.25, from: true },
      { name: "Tuna Melt", description: "Grilled cheese with tuna, your choice of cheese.", price: 10.5, from: true },
      { name: "BLT with Cheese", description: "Your choice of cheese.", price: 11.25, from: true },
    ],
  },
  {
    id: "salads",
    title: "Cold Salad Platters",
    short: "Salads",
    items: [
      { name: "Tuna Fish Salad Platter", description: "With lettuce, tomatoes and onions.", price: 11.5 },
      {
        name: "Paul’s Salad",
        description: "Lettuce, tomatoes, cucumbers, onions, Swiss cheese, green peppers and ham.",
        price: 13.5,
      },
      {
        name: "Linda’s Grilled Chicken Salad",
        description: "Lettuce, tomatoes, cucumbers, onions, mozzarella and grilled chicken.",
        price: 15.75,
      },
    ],
  },
  {
    id: "sides",
    title: "Side Orders",
    short: "Sides",
    items: [
      { name: "French Fries", description: "Steak cut or shoestring.", price: 6.5 },
      { name: "Sweet Potato Fries", price: 7.5 },
      { name: "Curly Fries", price: 7.5 },
      { name: "Cheese Fries", price: 8 },
      { name: "Gravy Fries", price: 8 },
      { name: "Chili Cheese Fries", price: 9.75 },
      { name: "Pizza Fries", price: 9.75 },
      { name: "Gravy Cheese Fries", price: 9.75 },
      { name: "Onion Rings", price: 7 },
      { name: "Fries & Onion Rings Combo", price: 8.5 },
      { name: "Home Fries", price: 6.75 },
      { name: "Bowl of Chili", price: 6.5 },
      { name: "Garlic Bread", price: 5.25 },
      { name: "Coleslaw", price: 5 },
      { name: "Lettuce Salad", price: 6.75 },
      { name: "Lettuce & Tomato Salad", price: 7 },
      { name: "Lettuce, Tomato & Cucumber Salad", price: 7.25 },
      { name: "Tomato & Onion Salad", price: 6.5 },
      { name: "Cheese Sauce", price: 4 },
      { name: "Side of Gravy", price: 4 },
    ],
  },
  {
    id: "fountain",
    title: "Soda Fountain",
    short: "Fountain",
    intro: "The old-school New York counter drinks, made to order.",
    items: [
      { name: "Egg Cream", price: 6.5, tag: "New York classic" },
      { name: "Milkshake", price: 7.5 },
      { name: "Frosted", description: "A shake with extra ice cream.", price: 9 },
      { name: "Root Beer Float", price: 7.5 },
      { name: "Soda Float", price: 7.5 },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    short: "Drinks",
    items: [
      { name: "Soft Drinks", price: 3.5 },
      { name: "Seltzer", price: 3.5 },
      { name: "Snapple", price: 3.75 },
      { name: "Stewart’s", price: 3.75 },
      { name: "Coffee", price: 3 },
      { name: "Tea", price: 4 },
      { name: "Iced Tea", price: 4 },
      { name: "Iced Coffee", price: 4 },
      { name: "Hot Chocolate with Whipped Cream", price: 4 },
      { name: "Orange Juice", price: 4.5 },
      { name: "Milk", price: 5 },
    ],
  },
  {
    id: "sauces",
    title: "Sauces & Condiments",
    short: "Sauces",
    items: [
      { name: "Paul’s Secret Sauce (2 oz)", price: 2 },
      { name: "Horseradish Mayo (2 oz)", price: 2 },
      { name: "Chipotle Mayo (2 oz)", price: 2 },
      { name: "A1 Sauce (2 oz)", price: 2 },
      { name: "Mayonnaise", price: 1 },
      { name: "BBQ Sauce", price: 1 },
      { name: "Deli Mustard", price: 1 },
      { name: "Hot Sauce", price: 1 },
      { name: "Tartar Sauce", price: 1 },
      { name: "Blue Cheese Dressing", price: 1 },
      { name: "Ranch Dressing", price: 1 },
    ],
  },
]

export function formatPrice(price: number) {
  return price.toFixed(2)
}

/** Find an item by name across all sections (used for homepage highlights). */
export function findItem(name: string): MenuItem {
  for (const section of menu) {
    const item = section.items.find((i) => i.name === name)
    if (item) return item
  }
  throw new Error(`Menu item not found: ${name}`)
}
