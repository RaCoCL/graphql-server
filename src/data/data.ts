// mock data

import {Field, Int} from "type-graphql";

export interface MerchantData {
    merchantid: number;
    name: string;
    url: string;
    imgurl300: string;
}


export const merchants: MerchantData[] = [
    { merchantid: 1, name: "Gloriously Geek", url: "https://gloriouslygeek.com/?utm_source=Laybuy&utm_medium=Banner&utm_campaign=shop-here-page", imgurl300: "https://assets-laybuy.imgix.net/merchants/0315151001567000917.png?w=300&h=215&fit=fillmax&auto=format&s=dab8b500f8628f03b86f2a53b7913113" },
    { merchantid: 2, name: "Pick and Press", url: "https://pickandpress.co.nz/?utm_source=Laybuy&utm_medium=Banner&utm_campaign=shop-here-page",  imgurl300: "https://assets-laybuy.imgix.net/merchants/0762495001566870555.jpg?w=300&h=215&fit=fillmax&auto=format&s=bce17dddeb7849ab2e795f002c305f67" },
];
