import { Product } from "./Product";

export type PaginationProduct = {
    pages: number,
    currentPage: number,
    PageSize: number,
    products: Product[]
}
