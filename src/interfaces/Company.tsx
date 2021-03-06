import { Contact } from './Contact';

export interface Company {
    id: number,
    name: string,
    sectors: Array<string>
    website: string,
    logo: string,
    contacts: Array<Contact>
}
