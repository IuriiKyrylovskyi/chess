import './styles.scss';

const Add = ({ text }) => {
  return (
    <div className="add" style={{ backgroundImage: 'url(./images/add.png)' }}>
      {`Добавить ${text}`}
    </div>
  );
};

export default Add;
