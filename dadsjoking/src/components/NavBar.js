import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DroptownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className = 'nav-bar'>
                <Navbar color = 'light' light expand = 'md'>
                    <NavbarToggler onClick = {this.toggle} />
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                                <NavLink href= '/'>Landing Page</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/publicJokes'>Public Jokes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/privateJokes'>Private Jokes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = '/signup'>Register!</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}