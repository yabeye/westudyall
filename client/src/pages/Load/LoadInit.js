// The fires page that is visible while the app is loading (connecting to backend).
import { FaGraduationCap } from 'react-icons/fa';

import './LoadInit.css';

const LoadInit = () => {
  return (
    <div
      id="loadinit"
      className="bg-blue-500"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <FaGraduationCap style={{ fontSize: 60 }} id="logo" />

      <p className="text-white my-12" id="message">
        Just a sec ... Getting the platform ready !
      </p>
    </div>
  );
};

export default LoadInit;
