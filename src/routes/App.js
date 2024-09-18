import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";



function App() {

  const fetchStatus = useSelector(store => store.items);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus && fetchStatus.length ==0 ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
};

export default App;
