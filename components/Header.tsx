import React from 'react';
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';

const Header = (props : any) => {
    return (
        <>
        <Navbar isCompact variant={"static"}>
            <Navbar.Brand>
                <Text b color="inherit">
                    Travel Blogs
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="md">
                <Navbar.Link href="#">Travel Platform</Navbar.Link>
                <Navbar.Link href="#">Community</Navbar.Link>
                <Navbar.Link href="#">Contact Us</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href="#">Login</Navbar.Link>
                <Navbar.Item>
                    <Button auto flat href="#">
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
        </>);
}

export default Header;