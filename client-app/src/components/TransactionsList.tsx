import { List, Segment } from "semantic-ui-react";
import Transaction from "../models/Transaction";

interface Props {
  transactions: Transaction[];
}
export default function TransactionsList({ transactions }: Props) {
  return (
    <Segment>
      <List divided relaxed>
      {transactions.map((transaction) => (
        <List.Item  key={transaction.id}>
            {transaction.type === "Deposit" ? (
              <List.Icon name="sort amount up" size="large" verticalAlign="middle" color='green' />
            ) : (
              <List.Icon name="sort amount down" size="large" verticalAlign="middle" color='red'/>
            )}
          <List.Content>
            <List.Header>{transaction.type === "Deposit" ? "+" : "-"}{parseFloat(transaction.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}{" $"}</List.Header>
            <List.Description>{transaction.type}</List.Description>
          </List.Content>
        </List.Item>
        ))}
      </List>
    </Segment>
  );
}
