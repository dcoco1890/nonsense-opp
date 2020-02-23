import Header from "./Header";
const Layout = props => {
  return (
    <div>
      <Header />
      {props.content}
    </div>
  );
};
export default Layout;
