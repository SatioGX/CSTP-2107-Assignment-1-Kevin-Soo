import Header from "./components/Header/Header";
import StaffInfo from "./components/StaffInfo/StaffInfo";
import data from "./data";

function App() {
  return (
    <div>
      <Header />
      <StaffInfo data={data} />
    </div>
  );
}

export default App;