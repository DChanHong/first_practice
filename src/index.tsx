import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
// import { store } from './store';

// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './store2';
// import  store  from './store2/index';

import { store } from './store3/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
);

// persistsStore(store)
// -> 유지하고 싶은 redux store를 인자로 넣으면 persistor 객체를 반환한다.

// PersistGate
// -> PersistGate는 유지되는 store의 값이 다시금 redux에 저장될 때까지 app의 UI 렌더링을 지연시킨다.
//   * loading : 로딩 과정에서 보여줄 컴포넌트
//   * persistor : 로컬 스토리지에 저장할 스토어 (persitsStore가 반환한 persistor 객체를 전달하면 된다.)
  