import React, {useEffect} from 'react';
import {Pagination} from "@mui/material";
import {Tabs} from "@mui/material";
import {Tab} from "@mui/material";
import DisplayCard from "../Course/DisplayCard";
import CompetitionDisplayCard from "./CompetitionDisplayCard";

const courseIds = [1, 2, 3, 4, 5, 6]

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (value === index &&
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            <ul className={'course-display-ul'}>
                {courseIds.map(id =>
                    <li key={id}><CompetitionDisplayCard courseId={1}/></li>)}
            </ul>
            <Pagination count={10}></Pagination>
        </div>
    );
}


const CompetitionDisplay = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <div className={'card-display-main'}>

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

export default CompetitionDisplay;
