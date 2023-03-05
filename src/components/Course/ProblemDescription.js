import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getProblemInfo } from '../../api/Course';



const ProblemDescription = () => {

    const [desc, setDesc] = useState({
        name: "2. 两数相加",
        desc: "给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。\n请你将两个数相加，并以相同形式返回一个表示和的链表。\n你可以假设除了数字 0 之外，这两个数都不会以 0 开头。",
        inputReq: "一行，两个整数",
        outputReq: "一行，一个整数",
        sample: [{
            input: "l1 = [2,4,3]\nl2 = [5,6,4]",
            output: "[7,0,8]"
        }],
        timeLimit: "1000ms",
        memLimit: "128MB"
    })
    const problemId = useParams().id

    useEffect(() => {
        getProblemInfo(problemId).then(data => {
            const newDesc = data.data
            console.log(newDesc)
            setDesc({
                ...desc,
                name: newDesc.ProblemTitle,
                tags: newDesc.tags,
                difficulty: newDesc.Difficulty,
                algorithmTags: newDesc.AlgorithmTags,
                outerLink: newDesc.Link,
            })
        })
    }, []);

    return (
        <div className={"problem-desc"}>
            <h3> {desc.name} </h3>
            <span className={"difficulty-medium"}> <strong>难度</strong> 中等 </span>
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
            <p> <strong>时间限制：</strong> {desc.timeLimit} <strong>内存限制：</strong>{desc.memLimit}</p>
            <div>
                <span> <b>通过次数</b> 1,449,885 </span>
                <span> <b>提交次数</b> 3,448,935 </span>
            </div>
        </div>
    );
}

export default ProblemDescription;
