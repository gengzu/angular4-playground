
import { NgMediatorService } from "app/common/services/NgMediator.service";

describe('NgMediatorService', () => {
    const mediator = new NgMediatorService();

    it('should call handler', () => {        
        const eventName = 'event1';
        const handler = jasmine.createSpy('handler');

        mediator.subscribe(eventName, handler);
        mediator.publish(eventName, {});

        expect(handler).toHaveBeenCalled();
    });

    it('should call handler with arguments', () => {
        const eventName = 'event2';
        const someObject = { name: 'John Doe', age: 666 };
        const handler = jasmine.createSpy('handler');

        mediator.subscribe(eventName, handler);
        mediator.publish(eventName, someObject);

        expect(handler).toHaveBeenCalledWith(someObject);
    });

    it('should call all handlers', () => {
        const eventName = 'event3';
        const handler1 = jasmine.createSpy('handler1');
        const handler2 = jasmine.createSpy('handler2');

        mediator.subscribe(eventName, handler1);
        mediator.subscribe(eventName, handler2);
        mediator.publish(eventName, {});

        expect(handler1).toHaveBeenCalled();
        expect(handler2).toHaveBeenCalled();
    });

    it('unsubscribe should work', () => {
        const eventName = 'event4';
        const handler = jasmine.createSpy('handler');

        mediator.subscribe(eventName, handler);
        mediator.unsubscribe(eventName, handler);
        mediator.publish(eventName, {});

        expect(handler).not.toHaveBeenCalled();
    });

    it('unsubscibe should work only for one', () => {
        const eventName = 'event5';
        const handler1 = jasmine.createSpy('handler1');
        const handler2 = jasmine.createSpy('handler2');

        mediator.subscribe(eventName, handler1);
        mediator.subscribe(eventName, handler2);
        mediator.unsubscribe(eventName, handler1);
        mediator.publish(eventName, {});

        expect(handler1).not.toHaveBeenCalled();
        expect(handler2).toHaveBeenCalled();
    });
})