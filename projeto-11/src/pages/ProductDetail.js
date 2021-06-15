import { useParams } from 'react-router-dom';

function ProductDetail(props) {
  const params = useParams();

  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;