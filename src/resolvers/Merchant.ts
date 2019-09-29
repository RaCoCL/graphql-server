import { Arg, Query, Resolver } from "type-graphql";
import { merchants, MerchantItems } from "../data/data";
import Merchant from "../schemas/Merchant";

@Resolver()
export default class {
    private merchants: Merchant[] = [];

    @Query(returns => [Merchant])
    merchantByCountryId(@Arg("countryid") countryid: number) {
        return merchants;
    }

}
