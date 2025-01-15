import HeaderRoute from "./headerRoute";
import { HeaderRouterLinks } from "../data/data";
import FooterContainer from "./FooterContainer";
import propTypes from "prop-types";


function Page({ children,gap }) {
  return (
    <section className= {`pageSection ${gap ? "pageSectionGap" : ""}`}>
      <HeaderRoute navLinks={HeaderRouterLinks} />
      {children}
      <FooterContainer />
    </section>
  );
}
Page.propTypes = {
  children: propTypes.node.isRequired,
  gap: propTypes.bool,
};

export default Page;
