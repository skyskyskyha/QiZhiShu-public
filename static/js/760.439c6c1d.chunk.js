"use strict";(self.webpackChunkqizhishu=self.webpackChunkqizhishu||[]).push([[760],{1997:function(e,r,t){t.d(r,{M:function(){return o},x:function(){return a}});var i=t(5886),a=function(e){return(0,i.Z)({url:"/problem/submit",method:"post",data:e})},o=function(e){return(0,i.Z)({url:"/problem/SubmissionList?UserID=".concat(e),method:"get"})}},8760:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var i=t(9439),a=t(2791),o=t(5332),n=t(8182),u=t(5654),d=t(1997),l=t(184),c=[{field:"id",headerName:"\u63d0\u4ea4\u7f16\u53f7",width:100},{field:"problemId",headerName:"\u95ee\u9898ID",width:100},{field:"name",headerName:"\u7528\u6237",width:130},{field:"result",headerName:"\u7ed3\u679c",width:100,cellClassName:function(e){return(0,n.Z)("super-app",{correct:"\u7b54\u6848\u6b63\u786e"===e.value||"\u6b63\u786e"===e.value,incorrect:"\u7b54\u6848\u6b63\u786e"!==e.value&&"\u6b63\u786e"!==e.value})}},{field:"score",headerName:"\u5f97\u5206",width:100},{field:"memory",headerName:"\u5185\u5b58(KB)",width:100},{field:"time",headerName:"\u8017\u65f6(MS)",width:100},{field:"language",headerName:"\u8bed\u8a00",width:100},{field:"codeLength",headerName:"\u4ee3\u7801\u957f\u5ea6",width:100},{field:"submitTime",headerName:"\u63d0\u4ea4\u65f6\u95f4",width:200},{field:"judger",headerName:"\u5224\u9898\u673a",width:100}];function h(){var e=(0,a.useState)({}),r=(0,i.Z)(e,2),t=r[0],n=r[1];return(0,a.useEffect)((function(){(0,u.aR)().then((function(e){var r=e.Id;return(0,d.M)(r)})).then((function(e){n(function(e){return e.map((function(e){return{id:e.ID,problemId:e.ProblemID,name:e.UserName,result:e.SubmissionStatus,score:e.Score,memory:e.Memory,time:e.ExecutionTime,language:e.ProgrammingLanguage,codeLength:"N/A",submitTime:e.CreateTime,judger:"N/A"}}))}(e.data))}))}),[]),(0,l.jsx)("div",{style:{height:800,width:"100%"},children:(0,l.jsx)(o._,{rows:t,columns:c,pageSize:5,rowsPerPageOptions:[5],initialState:{sorting:{sortModel:[{field:"id",sort:"desc"}]}},sx:{width:"100%","& .super-app-theme--cell":{backgroundColor:"rgba(224, 183, 60, 0.55)",color:"#1a3e72",fontWeight:"600"},"& .super-app.correct":{backgroundColor:"rgba(157, 255, 118, 0.49)",color:"#1a3e72",fontWeight:"600"},"& .super-app.incorrect":{backgroundColor:"#d47483",color:"#1a3e72",fontWeight:"600"},"& .MuiDataGrid-cell:hover":{color:"blueviolet"}}})})}}}]);
//# sourceMappingURL=760.439c6c1d.chunk.js.map