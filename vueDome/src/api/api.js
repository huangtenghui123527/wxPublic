import axios from 'axios'

let apiUrl='';
// axios.get('/')

export const getTF=params=>{return axios.get('/static/json/tfJson.json',params).then(res=>res.data);};

// 登录
export const Login=params=>{return axios.post('/login',params).then(res=>res.data);};

// 获取token
export const getToken=params=>{return axios.get('/getToken',params).then(res=>res.data);};

//获取NavList
export const getList=params=>{return axios.post('/user/navlist',params).then(res=>res.data);};

//获取select下拉数据
export const Select=params=>{return axios.post('/select',params).then(res=>res.data);};

//获取table数据
export const Table=params=>{return axios.post('/table',params).then(res=>res.data);};

//获取echarts数据
export const Echart=params=>{return axios.post('/echarts',params).then(res=>res.data);};
