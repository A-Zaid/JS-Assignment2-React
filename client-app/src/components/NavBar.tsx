import {Button, Container, Icon, Menu} from 'semantic-ui-react'

interface Props {
    handleCreateMode: (type:string) => void;
}
export default function NavBar({handleCreateMode} : Props) {
    return (
        <Menu inverted fixed="top">  
            <Container>
                <Menu.Item>
                <Icon name='money bill alternate' size="big" />
                    Bank Account
                </Menu.Item>
                <Menu.Item>
                    <Button positive content='Make a deposit' onClick={() => handleCreateMode("Deposit")} />
                </Menu.Item>
                <Menu.Item>
                    <Button negative content='Make a withdrawal' onClick={() => handleCreateMode("Withdrawal")} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
