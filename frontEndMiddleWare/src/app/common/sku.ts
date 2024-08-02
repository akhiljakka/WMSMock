export class AvailableQuantityUnit {
    constructor(
        public quantityUnitId: string,
        public totalWeight: number,
        public netWeight: number,
        public length: number,
        public width: number,
        public height: number,
        public totalVolume: number,
        public hostWeightUnitId: string,
        public hostVolumeUnitId: string,
        public hostLengthUnitId: string,
        public defaultPickQuantityUnit: boolean,
        public factorToBaseQU: number
    ) { }
}

export class AvailableQuantityUnits {
    constructor(public availableQuantityUnit: AvailableQuantityUnit[]) { }
}

export class Sku {
    constructor(
        public clientId: string,
        public skuId: string,
        public productCode: string,
        public description: string,
        public cycleCountingThreshold: number,
        public baseQuantityUnitId: string,
        public batchMandatoryForHost: boolean,
        public availableQuantityUnits: AvailableQuantityUnits
    ) { }
}

