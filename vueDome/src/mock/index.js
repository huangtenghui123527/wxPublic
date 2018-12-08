
import Mock from 'mockjs'
import login from './login'
import navlist from './navlist'
import token from './token'
import assist from './assist'

import echarts from './echarts'
import table from './table'
// import groupList from './groupList'
// import getToken from './getToken'


let data = [].concat(login,navlist,token,assist,table,echarts)

data.forEach(function(res){
    Mock.mock(res.path, res.data)
})
