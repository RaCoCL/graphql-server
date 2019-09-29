import { Arg, Query, Resolver, Root } from "type-graphql";
import { merchants, MerchantData } from "../data/data";
import Merchant from "../schemas/Merchant";

@Resolver(of => Merchant)
export default class {
    @Query(returns => Merchant, { nullable: true })
    merchantByName(@Arg("name") name: string): MerchantData | undefined {
        return merchants.find(merchant => merchant.name === name);
    }

}
