export interface IProvider {
    id: number,
    company: string,
    iban: string,
    email: string,
    address: string,
    purchase_date: string,
    products: [{
        name: string,
        price: number,
        qty: number
    }]
}