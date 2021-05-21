import "./styles.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transaction from "./Transaction";
import AddTransaction from "./Addtransaction";
import {GlobalProvider} from "./Context/GlobalState";


export default function App() {
  return (
  <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpense/>
         <Transaction/>
         <AddTransaction/>
          </div>
          </GlobalProvider>
   
  );
}
