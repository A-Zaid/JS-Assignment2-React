import { Header, Icon } from "semantic-ui-react";
interface Props {
  balance: string;
}
export default function Balance({ balance }: Props) {
  if (parseFloat(balance) < 0) {
    return (
      <Header as="h2" color="red">
        <Icon name="balance scale" />
        <Header.Content>Balance : {balance} $</Header.Content>
      </Header>
    );
  } else {
    return (
      <Header as="h2">
        <Icon name="balance scale" />
        <Header.Content>Balance : {balance} $</Header.Content>
      </Header>
    );
  }
}
