import React, { FC } from 'react';

interface StarterProps {
 start: () => void;
}

const Starter: FC<StarterProps> = ({ start }) => {
 return <button className='starter' onClick={start}>Start</button>;
}

export default Starter;
