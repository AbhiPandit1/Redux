import { useSelector } from 'react-redux';

const Coin = () => {
  const coin = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2 className="content">COIN:{coin}</h2>
    </div>
  );
};

export default Coin;
