import Header from '../header/header.jsx';
import LeftPanel from '../panel/leftPanel.jsx';
import Title from '../title/title.jsx';
import './style.css';

// eslint-disable-next-line react/prop-types
export const MainWrapper = ({children}) => {


  return (
    <>
      <Header />
      <Title />
      <div className="our-block">
        <div className="sector-left">
          <LeftPanel />
        </div>
        {children}
      </div>
    </>
  );
};
