import { Arg, Query, Resolver } from "type-graphql";
import Merchant from "../schemas/Merchant";
import axios from 'axios';

@Resolver()
export default class {
    private merchants: Merchant[] = [];
    private readonly LAYBUY_API_ENDPOINT = 'https://dashboard.laybuy.com/api/general/shophere';

    @Query(returns => [Merchant])
    async merchantByCountryId(@Arg("countryid") countryid: number) {
        const merchantsFromLaybuy = await axios.post(this.LAYBUY_API_ENDPOINT, null, {params: { countryid: countryid }});

        for (const merchant of merchantsFromLaybuy.data.data.merchants) {
            this.merchants.push(merchant);
        }
        return this.merchants;
    }
}
