import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore( preloadedState ) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware,
			),
		),
	);

	sagaMiddleware.run(rootSaga);

	return store;
}
