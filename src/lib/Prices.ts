// Pricing cards 
type PricingCard = {
    title: string;
    description: string;
    features: string[];

}

export const pricingCards: PricingCard[] = [
    {
        title: "Starter",
        description: "Get started with SellerHub",
        features: [
            "Unlimited Saas",
            "Unlimited Clients",
            "Unlimited Products",
            "Unlimited Sales",
            "Unlimited Invoices",
            "Unlimited Payments",
            "Unlimited Reports",
            "Custom Domain",
            "Custom Logo",
            "Custom Colors",
        ],
    },
    {
        title: "Pro",
        description: "Get started with SellerHub",
        features: [
            "Unlimited Saas",
            "Unlimited Clients",
            "Unlimited Products",
            "Unlimited Sales",
            "Unlimited Invoices",
            "Unlimited Payments",
            "Unlimited Reports",
            "Custom Domain",
            "Custom Logo",
            "Custom Colors",
        ],
    },
    {
        title: "Unlimited Saas",
        description: "Get started with SellerHub",
        features: [
            "Unlimited Saas",
            "Unlimited Clients",
            "Unlimited Products",
            "Unlimited Sales",
            "Unlimited Invoices",
            "Unlimited Payments",
            "Unlimited Reports",
            "Custom Domain",
            "Custom Logo",
            "Custom Colors",
        ],
    }]; 


export const prices = [

	{
		id: "price_1M0t0o0n0q0d0e0v0b0y1",
		object: "price",
		active: false,
		billing_scheme: "per_unit",
		created: 1678565300,
		currency: "usd",
		livemode: false,
		lookup_key: null,
		metadata: {},
		nickname: "Pro",
		product: "prod_M0t0o0n0q0d0e0v0b0y0",
		recurring: {
			aggregate_usage: null,
			interval: "month",
			interval_count: 1,
			usage_type: "licensed",
		},
		tax_behavior: "unspecified",
        tiers_mode: null,
        unit_amount:60
	},
	{
		id: "price_1M0t0o0n0q0d0e0v0b0y2",
		object: "price",
		active: false,
		billing_scheme: "per_unit",
		created: 1678565301,
		currency: "usd",
		livemode: false,
		lookup_key: null,
		metadata: {},
		nickname: "Unlimited Saas",
		product: "prod_M0t0o0n0q0d0e0v0b0y0",
		recurring: {
			aggregate_usage: null,
			interval: "month",
			interval_count: 1,
			usage_type: "licensed",
		},
		tax_behavior: "unspecified",
		tiers_mode: null,
		unit_amount: 99,
		
	},
];

