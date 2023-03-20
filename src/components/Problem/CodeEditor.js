import React, {forwardRef, useState} from 'react';
import '../../assets/style/ProblemPage.scss'
import AceEditor from "react-ace";
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


import { styled } from '@mui/material/styles';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cloud9_day"
import "ace-builds/src-noconflict/ext-language_tools";


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


const CodeEditor = (props, problemPageRef) => {
    const changeMode = (e) => {
        setMode(e.target.value)
    }

    //const [code, setCode] = useState("")
    const [mode, setMode] = useState('c_cpp')
    const [darkMode, setDarkMode] = useState(false)
    return (
            <div>
                <div className={"problem-control-plane"}>
                    <Select labelId="language-selection-label"
                            value={mode}
                            sx={{
                                margin: "10px 5px",
                                height: "32px",
                                width: "140px"
                            }}
                            onChange={changeMode}
                    >
                        <MenuItem value={"c_cpp"}>C++</MenuItem>
                        <MenuItem value={"python"}>Python</MenuItem>
                        <MenuItem value={"javascript"}>JavaScript</MenuItem>
                    </Select>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode}
                                                   onChange={() => {setDarkMode(!darkMode)}}
                        />}
                        sx={{
                            margin: "0px 10px"
                        }}
                    />
                </div>


                <AceEditor
                    ref={problemPageRef}
                    mode={mode}
                    width="100%"
                    height="calc(100% - 60px)"
                    theme={"cloud9-day"}
                    fontSize="16px"
                    onChange={(value) => {
                        props.setCode(value)
                    }}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true
                    }}
                />

            </div>
    );
}

export const ForwardChild = forwardRef(CodeEditor);
export default CodeEditor;
