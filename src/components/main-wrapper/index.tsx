import Header from '../header/header.tsx';
import LeftPanel from '../panel/leftPanel.tsx';
import Title from '../title/title.tsx';
import './style.css';

export const MainWrapper = ({ children }: any) => {
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
