import Header from "./Header";
const Layout = props => {
  return (
    <div>
      <Header showAll={props.showAll} johto={props.johto} kanto={props.kanto} />
      {props.content}
    </div>
  );
};
export default Layout;
