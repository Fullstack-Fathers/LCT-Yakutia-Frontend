// Goals.tsx
import React from 'react';
import { Progress, Button, Flex } from 'antd';
import './leftPanel.css';
import Prof from '../../assets/img/prof.jpg'


const LeftPanel = () => {
  return (
    <div className="panel">
<div className="cont-prof">
      <div className="prof">
        <img className='prof-img' src={Prof} alt="" />
        <h1 className='prof-h'>Кузнецов Никита Георгиевич</h1>
      </div>
      <Progress percent={30} />
      <Button type="text">Рекомендации</Button>
      <Button type="text">Просмотренные</Button>
      <Button type="text">Мои соц. сети</Button>
      <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
    Перейти в профиль
    </Button>
    <Button block>Тест на профориентацию</Button>
    </Flex>

      </div>
    </div>
  );
};

export default LeftPanel;
