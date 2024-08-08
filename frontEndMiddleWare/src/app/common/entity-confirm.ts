// order.model.ts
export interface InventoryCriteriaConfirm {
    batch: string | null;
    bestBeforeDate: string | null;
    clientId: string;
    consumedInventoryUnits: any | null;
    holdReasonId: string | null;
    quantityBaseCurrent: number;
    quantityBaseTargetHost: number;
    quantityUnit: string;
    skuId: string;
    specialInventoryMark: string | null;
    specialInventoryReferenceId: string | null;
}

export interface OrderLineConfirm {
    additionalHostData: string | null;
    cancelReason: string;
    dispatchLoadUnits: any | null;
    finishTime: string;
    hostOrderType: string;
    inventoryCriteriaConfirm: InventoryCriteriaConfirm;
    loadUnitId: string | null;
    locationId: string | null;
    orderLineId: string;
    retrievalCriteria: string;
    startTime: string;
}

export interface OrderConfirm {
    calculatedVolume: number;
    calculatedWeight: number;
    clientId: string;
    customerId: string | null;
    finishTime: string;
    operatorId: string;
    orderId: string;
    orderLinesConfirm: {
        orderLineConfirm: OrderLineConfirm[];
    };
    realStagingTime: string | null;
    realStartTime: string;
    shippingTimeCurrent: string | null;
    uuid: string;
}
