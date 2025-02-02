export class Address {
    road = '';
    town = '';
    county = '';
    state_district = '';
    state = '';
    ISO3166_2_lvl4 = '';
    postcode = '';
    country = '';
    country_code = '';
}

export class ReverseGeocodeResponse {
    place_id: number = 0;
    licence = '';
    osm_type = '';
    osm_id: number = 0;
    lat = '';
    lon = '';
    class = '';
    type = '';
    place_rank: number = 0;
    importance: number = 0;
    addresstype = '';
    name = '';
    display_name = '';
    address: Address = {
        road: '',
        town: '',
        county: '',
        state_district: '',
        state: '',
        ISO3166_2_lvl4: '',
        postcode: '',
        country: '',
        country_code: ''
    };
    boundingbox: string[] = [];
}
