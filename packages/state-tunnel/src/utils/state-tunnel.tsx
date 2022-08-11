import { ComponentInterface, FunctionalComponent } from '@rindo/core';
import { SubscribeCallback, ConsumerRenderer, PropList } from '../declarations';


export const createProviderConsumer = <T extends {[key: string]: any}>(defaultState: T, consumerRender: ConsumerRenderer<T>) => {

  let listeners: Map<any, PropList<T>> = new Map();
  let currentState: T = defaultState;

  const updateListener = (fields: PropList<T>, instance: any) => {
    if (Array.isArray(fields)) {
      [...fields].forEach(fieldName => {
        (instance as any)[fieldName] = currentState[fieldName];
      });

    } else {
      (instance as any)[fields] = {
        ...currentState as object
      } as T;
    }
  }

  const subscribe: SubscribeCallback<T> = (instance: ComponentInterface, propList: PropList<T>) => {
    if (!listeners.has(instance)) {
      listeners.set(instance, propList);
      updateListener(propList, instance);
    }
    return () => {
      if (listeners.has(instance)) {
        listeners.delete(instance);
      }
    }
  }

  const Provider: FunctionalComponent<{state: T}> = ({ state }, children) => {
    currentState = state;
    listeners.forEach(updateListener);
    return children;
  }

  const Consumer: FunctionalComponent<{}> = (props, children) => {
    // The casting on subscribe is to allow for crossover through the rindo compiler
    // In the future we should allow for generics in components.
    return consumerRender(subscribe, children[0] as any);
  }

  const injectProps = (Cstr: any, fieldList: PropList<T>) => {
    const CstrPrototype = Cstr.prototype;
    const cstrConnectedCallback = CstrPrototype.connectedCallback;
    const cstrDisconnectedCallback = CstrPrototype.disconnectedCallback;

    CstrPrototype.connectedCallback = function() {
      subscribe(this, fieldList);

      if (cstrConnectedCallback) {
        return cstrConnectedCallback.call(this);
      }
    }

    CstrPrototype.disconnectedCallback = function() {
      listeners.delete(this);
      if (cstrDisconnectedCallback) {
        cstrDisconnectedCallback.call(this);
      }
    };
  }

  return {
    Provider,
    Consumer,
    injectProps
  }
}
