import React, {Component} from "react";
import './Header.scss';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render () {
        return (
          <div className='Header'>
             <div className='Header-block'>
                <div className='Header-block__image'>
                   <a href='#'>DODGE</a>
                </div>
                <div className='Header-block__ul'>
                    <ul>
                        <li>
                            <NavLink to='/charger'>Charger</NavLink>
                        </li>
                        <li>
                            <NavLink to='/viper'>Viper</NavLink>
                        </li>
                        <li>
                            <NavLink to='/durango'>Durango</NavLink>
                        </li>
                        <li>
                            <NavLink to='/challenger'>Challenger</NavLink>
                        </li>
                    </ul>
                </div>
             </div>
          </div>
        )
    }
}

export default Header
