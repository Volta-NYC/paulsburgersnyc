import type { Photo } from "@/lib/photos"

/**
 * Celebrity visitors, from the "Celebrities" page of the original site.
 * Names and roles follow that page (spelling corrected where it was wrong).
 */
export type FamousFace = { name: string; role: string; photo: Photo }

const face = (file: string, width: number, height: number, name: string, role: string): FamousFace => ({
  name,
  role,
  photo: { src: `/photos/faces/${file}`, width, height, alt: `${name} at Paul's Da Burger Joint` },
})

export const famousFaces: FamousFace[] = [
  face("michael-mckean.jpg", 400, 500, "Michael McKean", "Actor and producer"),
  face("anne-burrell.jpg", 400, 500, "Anne Burrell", "Food Network chef"),
  face("ron-darling.jpg", 400, 500, "Ron Darling", "New York Mets"),
  face("hoda-kotb.jpg", 400, 500, "Hoda Kotb", "Morning show host"),
  face("tony-luke.jpg", 400, 500, "Tony Luke", "Actor, songwriter and restaurateur"),
  face("tony-sirico.jpg", 400, 500, "Tony Sirico", "Paulie Walnuts on The Sopranos"),
  face("jake-lacy.jpg", 400, 500, "Jake Lacy", "Actor, The Office"),
  face("mr-g.jpg", 400, 500, "Irv \"Mr. G\" Gikofsky", "Weatherman"),
  face("kira-kazantsev.jpg", 400, 500, "Kira Kazantsev", "Miss America"),
]
