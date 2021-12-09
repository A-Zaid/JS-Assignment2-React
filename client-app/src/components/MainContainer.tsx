import { Grid } from "semantic-ui-react";
import Transaction from "../models/Transaction";
import Balance from "./balance";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";

interface Props {
  transactions: Transaction[];
  addTransaction: (id: string, transactionT: string, amount: string) => void;
  transactionT: string;
  createMode: boolean;
  handleCloseCreateMode: () => void;
  balance : string;
}
export default function MainContainer({
  transactions,
  addTransaction,
  transactionT,
  createMode,
  handleCloseCreateMode,
  balance
}: Props) {
    
  return (
    <Grid>
      <Grid.Column width="10">
        <Balance balance={balance} />
        {transactions.length > 0  && (
          <TransactionsList transactions={transactions} />
        )}
      </Grid.Column>
      <Grid.Column width="6">
        {createMode && (
          <TransactionForm 
            transactionT={transactionT}
            addTransaction={addTransaction}
            handleCloseCreateMode={handleCloseCreateMode}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
