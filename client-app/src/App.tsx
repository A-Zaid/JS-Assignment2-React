import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { Container } from "semantic-ui-react";
import MainContainer from "./components/MainContainer";
import Transaction from "./models/Transaction";

function App() {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  const [createMode, setCreateMode] = useState(false);
  const [transactionT, setTransactionType] = useState("");
  const [balance, setBalance] = useState((100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

  
  function addTransaction(id:string, type:string, amount:string) {
    transactions.push({id, type, amount});
    setTransaction(transactions);
    balanceCalcul();
    handleCloseCreateMode()
  }
  function handleCreateMode(type: string) {
    setTransactionType(type); 
    setCreateMode(true);
  }
  function handleCloseCreateMode() {
    setCreateMode(false);
  }

  function balanceCalcul () {
      let balValue;
      if (transactions.length === 0)
         balValue= (100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      else 
      {
          let initialValue = 100
          let bal = transactions.reduce(function (previousValue, currentValue){
            if (currentValue.type === "Deposit") {
              return  previousValue + parseFloat(currentValue.amount)
            }
            else {
              return  previousValue - parseFloat(currentValue.amount)
            }
            
          }, initialValue
          )
          balValue= bal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
      setBalance(balValue);
  }

  return (
    <>
      <NavBar handleCreateMode={handleCreateMode} />
      <Container style={{ marginTop: "7em" }}>
        <MainContainer
          transactions={transactions}
          addTransaction={addTransaction}
          transactionT = {transactionT}
          createMode={createMode}
          handleCloseCreateMode={handleCloseCreateMode}
          balance = {balance}
        />
      </Container>
    </>
  );
}

export default App;
