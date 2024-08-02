// src/app/models/order-line.model.ts

export class InventoryCriteria {
    constructor(
        public skuId: string,
        public quantityBaseTargetHost: number,
        public unlimitedOverdeliveryAllowed: boolean,
        public clientId: string
    ) { }
}

export class OrderLine {
    constructor(
        public orderLineId: string,
        public criteriaUsed: string,
        public inventoryCriteria: InventoryCriteria
    ) { }
}
