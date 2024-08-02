// src/app/models/order.model.ts

import { OrderLine } from "./order-line";


export class Order {
    constructor(
        public clientId: string,
        public orderId: string,
        public priority: number,
        public latestStaggingTime: string,
        public deliveryTime: string,
        public orderLines: { orderLine: OrderLine[] }
    ) { }
}
