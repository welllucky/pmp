export interface Unity {
    name: string;
    place: string
}

export interface Contact {
    email: string,
    phone: string

}

export default interface User {
    id: number,
    name: string
    psw: string,
    bornDate: string,
    role: string,
    team: string,
    unity: Unity,
    contact: Contact
    serviceTime?: number,
    situation?: boolean,
    lastSinceActivated?: string

}