import { City } from '@data/schema/city';

export interface SearchFormQuery {
    departure: City | null;
    arrival: City | null;
    outboundDate: string | null;
    adults: number;
}
