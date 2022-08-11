/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Rindo compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLRindoElement, JSXBase } from "@rindo/core/internal";
import { SubscribeCallback } from "./declarations";
export namespace Components {
    interface ContextConsumer {
        "context": { [key: string]: any };
        "renderer": Function;
        "subscribe"?: SubscribeCallback<any>;
    }
}
declare global {
    interface HTMLContextConsumerElement extends Components.ContextConsumer, HTMLRindoElement {
    }
    var HTMLContextConsumerElement: {
        prototype: HTMLContextConsumerElement;
        new (): HTMLContextConsumerElement;
    };
    interface HTMLElementTagNameMap {
        "context-consumer": HTMLContextConsumerElement;
    }
}
declare namespace LocalJSX {
    interface ContextConsumer {
        "context"?: { [key: string]: any };
        "renderer"?: Function;
        "subscribe"?: SubscribeCallback<any>;
    }
    interface IntrinsicElements {
        "context-consumer": ContextConsumer;
    }
}
export { LocalJSX as JSX };
declare module "@rindo/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "context-consumer": LocalJSX.ContextConsumer & JSXBase.HTMLAttributes<HTMLContextConsumerElement>;
        }
    }
}