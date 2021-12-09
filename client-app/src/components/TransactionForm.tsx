import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Guid } from "guid-typescript";

interface Props {
  transactionT: string;
  addTransaction: (id: string, transactionT: string, amount: string) => void;
  handleCloseCreateMode: () => void;
}
export default function TransactionForm({
  transactionT,
  addTransaction,
  handleCloseCreateMode,
}: Props) {

 const [amountValue, setAmountValue] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
     setAmountValue(e.target.value);
  }
  return (
    <Segment clearing style={{ marginTop: "46px" }}>
      <Form onSubmit={() => addTransaction(Guid.create().toString(), transactionT, amountValue)}>
        <Form.Input type="number"
        min="10" 
        placeholder={transactionT} 
        onChange={handleChange}
        required
        autoFocus
        />
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button floated="right" type="button" content="Cancel" onClick={handleCloseCreateMode} />
      </Form>
    </Segment>
  );
}
