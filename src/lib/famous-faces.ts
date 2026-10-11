import type { Photo } from "@/lib/photos"

/**
 * Celebrity visitors, from the "Celebrities" page of the original site.
 * Names and roles follow that page (spelling corrected where it was wrong).
 */
export type FamousFace = { name: string; role: string; photo: Photo }

const face = (file: string, width: number, height: number, name: string, role: string, scene: string): FamousFace => ({
  name,
  role,
  photo: { src: `/photos/faces/${file}`, width, height, alt: `${name} ${scene}` },
})

/** Photos of each visit (not publicity headshots), from the original Celebrities page. */
export const famousFaces: FamousFace[] = [
  face(
    "michael-mckean.jpg",
    255,
    340,
    "Michael McKean",
    "Actor and producer",
    "posing beside the giant burger out front",
  ),
  face(
    "anne-burrell.jpg",
    311,
    340,
    "Anne Burrell",
    "Food Network chef",
    "in a green scarf, posing with a man in a black T-shirt",
  ),
  face(
    "ron-darling.jpg",
    255,
    340,
    "Ron Darling",
    "New York Mets",
    "beside the giant burger under the NYC's Best Burger neon",
  ),
  face("hoda-kotb.jpg", 311, 340, "Hoda Kotb", "Morning show host", "smiling beside a man in a suit and tie"),
  face(
    "tony-luke.jpg",
    210,
    335,
    "Tony Luke",
    "Actor, songwriter and restaurateur",
    "beside the giant burger out front at night",
  ),
  face(
    "tony-sirico.jpg",
    600,
    400,
    "Tony Sirico",
    "Paulie Walnuts on The Sopranos",
    "posing with another man on the sidewalk",
  ),
  face("jake-lacy.jpg", 600, 400, "Jake Lacy", "Actor, The Office", "beside the giant burger under the Paul's neon"),
  face("mr-g.jpg", 600, 400, 'Irv "Mr. G" Gikofsky', "Weatherman", "posing with a man in a plaid shirt"),
  face("kira-kazantsev.jpg", 800, 600, "Kira Kazantsev", "Miss America", "beside the giant burger out front"),
]
