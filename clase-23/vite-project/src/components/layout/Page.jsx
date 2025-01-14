import HeaderRoute from "./headerRoute";
import { HeaderRouterLinks } from "../data/data";
import FooterContainer from "./FooterContainer";
import propTypes from "prop-types";


function Page({ children }) {
  return (
    <section className="pageSection">
      <HeaderRoute navLinks={HeaderRouterLinks} />
      {children}
      <FooterContainer />
    </section>
  );
}
Page.propTypes = {
  children: propTypes.node.isRequired,
};

export default Page;
