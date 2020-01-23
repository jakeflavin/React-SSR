import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';
import { DAEMON, ONCE_TILL_UNMOUNT } from './constants';

const getInjectors = store => {
  return {
    injectSaga: (key, descriptor = {}, args) => {
      const newDescriptor = { ...descriptor, mode: descriptor.mode || DAEMON };
      const { saga, mode } = newDescriptor;
      const hasSaga = Reflect.has(store.injectedSagas, key);

      if (
        !hasSaga ||
        (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
      ) {
        store.injectedSagas[key] = {
          ...newDescriptor,
          task: store.runSaga(saga, args)
        };
      }
    },
    ejectSaga: store => key => {
      if (Reflect.has(store.injectedSagas, key)) {
        const descriptor = store.injectedSagas[key];
        if (descriptor.mode && descriptor.mode !== DAEMON) {
          descriptor.task.cancel();
          store.injectedSagas[key] = 'done';
        }
      }
    }
  };
};

export default ({ key, saga, mode }) => WrappedComponent => {
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextType = ReactReduxContext;
    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props, context) {
      super(props, context);
      this.injectors = getInjectors(context.store);
      this.injectors.injectSaga(key, { saga, mode }, this.props);
    }

    componentWillUnmount() {
      this.injectors.ejectSaga(key);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};
