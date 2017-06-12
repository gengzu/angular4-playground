
export class SomeEntity {
    name: INAEntity;
    age: INAEntity;
}

export interface INAEntity {
    value: any;
    isNA: boolean;
}