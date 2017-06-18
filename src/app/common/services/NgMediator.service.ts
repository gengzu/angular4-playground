import { IMediator } from "app/common/services/IMediator";

export class NgMediatorService implements IMediator {
    private _handlers: IHandlerMap = {};

    subscribe(event: string, handler: (arg: any) => void): void {
        if (!this._handlers[event]) {
            this._handlers[event] = [];
        }

        this._handlers[event].push(handler);
    }

    unsubscribe(event: string, handler: (arg: any) => void): void {
        var index = this._handlers[event].indexOf(handler);

        if (index > -1) {
            this._handlers[event].splice(index, 1);
        }
    }

    publish(event: string, arg: any): void {
        if (this._handlers) {
            this._handlers[event].forEach(handler => {
                handler(arg);
            });
        }
    }

}

interface IHandlerMap {
    [event: string]: Array<(arg: any) => void>;
}