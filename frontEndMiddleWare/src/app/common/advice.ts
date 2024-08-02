export class AdviceLine {
    constructor(
        public adviceLineId: string,
        public skuId: string,
        public quantityTarget: number,
        public batch: string,
        public additionalHostData: string,
        public bestBeforeDate: string
    ) { }
}

export class AdviceLines {
    constructor(public adviceLine: AdviceLine[]) { }
}

export class Advice {
    constructor(
        public clientId: string,
        public adviceId: string,
        public adviceType: string,
        public referenceBarcode: string,
        public supplierId: string,
        public additionalHostData: string,
        public adviceLines: AdviceLines
    ) { }
}
