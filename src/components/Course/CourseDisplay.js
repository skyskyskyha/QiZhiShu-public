import React from 'react';
import {Pagination} from "@mui/material";
import {Tabs} from "@mui/material";
import {Tab} from "@mui/material";
import DisplayCard from "./DisplayCard";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (value === index &&
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            <ul className={'course-display-ul'}>
                <li><DisplayCard/></li>
                <li><DisplayCard/></li>
                <li><DisplayCard/></li>
                <li><DisplayCard/></li>
                <li><DisplayCard/></li>
                <li><DisplayCard/></li>
            </ul>
            <Pagination count={10}></Pagination>
        </div>
    );
}


const CourseDisplay = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <div className={'card-display-main'}>
            {/*<ul className={'card-display-wrap'}>*/}
            {/*    <li>Yes</li>*/}

            {/*</ul>*/}
            <Tabs value={value} onChange={handleChange}>
                <Tab label="全部课程"/>
                <Tab label="正在开课"/>
                <Tab label="已结束"/>
            </Tabs>
            <TabPanel value={value} index={0} className={"course-display-tab-panel flex-all-center"}>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Pagination count={11}></Pagination>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Pagination count={12}></Pagination>
            </TabPanel>

        </div>
    );
}

export default CourseDisplay;
