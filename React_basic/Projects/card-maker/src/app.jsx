import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({ authService, uploadService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route
            path='/maker'
            element={
              <Maker
                authService={authService}
                uploadService={uploadService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
