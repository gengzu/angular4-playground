export interface IMediator {
    subscribe(event: string, handler: (arg: any) => void): void;

    unsubscribe(event: string, handler: (arg: any) => void): void;

    publish(event: string, arg: any): void;
}