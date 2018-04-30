export class Hero {
    constructor(
        private id: number,
        private name: string,
        private power: string,
        public alterEgo?: string //this field is optional
    ) { }
}