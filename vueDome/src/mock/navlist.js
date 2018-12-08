var data = [
    {
        icon:'fa fa-camera-retro fa-lg',
        path: '/home',
        name: '首页'
    },
    {
        icon:'fa fa-refresh fa-lg',
        name: '系统组件',
        child: [
            {
                icon:'fa fa-pause fa-lg',
                name: '辅助类',
                child: [
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/plane2D',
                        name: '平面旋转'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/rate3D',
                        name: '3d旋转'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/particleWave',
                        name: '粒子波'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/echartsLine',
                        name: 'echart曲线图'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/echartsPie',
                        name: 'echart饼状图'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/echartsBar',
                        name: 'echart柱状图'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/assist/earth3D',
                        name: 'echart地球三维图'
                    },
                ]
            },
            {
                icon:'fa fa-pause fa-lg',
                name: '功能类',
                child: [
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/functionalitys/pageSearch',
                        name: '信息搜索'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/functionalitys/pageNotes',
                        name: 'table切换'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/functionalitys/pageTinymce',
                        name: '富文本tinymce'
                    },
                ]
            },
            {
                icon:'fa fa-pause fa-lg',
                name: '布局类',
                child: [
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/layouts/title',
                        name: '页面标题'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/layouts/select',
                        name: '页面选择'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/layouts/progras',
                        name: '进度条'
                    },
                    {
                        icon:'fa fa-hand-o-right fa-lg',
                        path: '/layouts/other',
                        name: '其他类'
                    }
                ]
            },
        ]
    },
    {
        icon:'fa fa-refresh fa-lg',
        name: '完整示例',
        child: [
            {
                icon:'fa fa-hand-o-right fa-lg',
                path: '/example/expTable',
                name: '列表页面',
                permission: ['edit']
            },
            {
                icon:'fa fa-hand-o-right fa-lg',
                path: '/example/charts',
                name: '图表页面'
            },
            {
                icon:'fa fa-hand-o-right fa-lg',
                path: '/example/newMap',
                name: '高德地图'
            },
            {
                icon:'fa fa-hand-o-right fa-lg',
                path: '/example/BMap',
                name: '百度地图'
            }
        ]
    },
]

export default [{
    path: '/user/navlist',
    data: data
}]
