export interface Product {
    id: number
    image: string
    name: string
    cartIcon: string
}

export interface Artist {
    name: string;
    image: string;
}
  
export interface FestivalDay {
    date: string;
    artists: Artist[];
}