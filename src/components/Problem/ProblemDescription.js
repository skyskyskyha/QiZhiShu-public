import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getProblemInfo } from '../../api/Course';
import problemInfo from '../../static/problemInfo.json'


const ProblemDescription = () => {

    const problemId = useParams().id
    const [desc, setDesc] = useState(problemId<=5?problemInfo[problemId]:problemInfo[1])

    useEffect(() => {
        getProblemInfo(problemId).then(data => {
            const newDesc = data.data
            setDesc({
                ...desc,
                name: newDesc.ProblemTitle,
                tags: newDesc.tags,
                difficulty: newDesc.Difficulty,
                algorithmTags: newDesc.AlgorithmTags,
                outerLink: newDesc.Link,
            })
        })
    },[problemId]);
    return (
        <div className={"problem-desc"}>
            <h3> {desc.name} </h3>
            <span className={"difficulty-medium"}> <strong>难度</strong> {desc.difficulty} </span>
            <p><strong>题目描述：</strong> {desc.desc} </p>
            <p><strong>输入限制：</strong>{desc.inputReq}</p>
            <p><strong>输出限制：</strong>{desc.outputReq}</p>
            {desc.sample.map((sample, index) =>
                <p key={`sample-${index}`}>
                    <strong> 输入样例{index + 1}: </strong>
                    <pre>{sample.input}</pre>
                    <strong> 输出样例{index + 1}: </strong>
                    <pre>{sample.output}</pre>
                </p>)}
            <p>
                <strong>时间限制：</strong> {desc.timeLimit}
                <p/>
                <strong>内存限制：</strong>{desc.memLimit}
            </p>
            <div>
                <span> <b>通过次数</b> {desc.acceptedTimes} </span>
                <span> <b>提交次数</b> {desc.submittedTimes} </span>
                <span> <b>通过率</b> {Number(desc.acceptedTimes/desc.submittedTimes*100).toFixed(2)+"%"} </span>
            </div>
        </div>
    );
}

export default ProblemDescription;
