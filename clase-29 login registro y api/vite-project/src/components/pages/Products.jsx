import Page from "../layout/Page";
import Characters from "../api/Characters";
function Products() {
  return (
    <>
      <Page gap={true}>
       <Characters/>
      </Page>
    </>
  );
}

export default Products;
