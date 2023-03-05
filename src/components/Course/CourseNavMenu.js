import React from 'react';
import {NavLink} from "react-router-dom";

class CourseNavMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul className={'course-nav'}>
            {this.props.options.map(option => {
                return <li key={option.name}>
                    <NavLink to={`/course${option.path}`}>{option.name}</NavLink>
                </li>
            })}
        </ul>
    }
}

export default CourseNavMenu;
