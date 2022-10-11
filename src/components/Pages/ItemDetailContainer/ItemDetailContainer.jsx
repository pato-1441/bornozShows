import { useParams } from 'react-router-dom';
import ItemDetail from '../../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const { eventID } = useParams();
  console.log(eventID);


  return (
    <div>
        <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;