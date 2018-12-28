<template>
    <div id="earth">
        <h2>{{msg}}</h2>
        <div id="chartEarth" :style="{width: '1300px', height: '600px'}"></div>
    </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
export default {
    name:'earth',
    data(){
        return {
            msg:'earth'
        }
    },
    mounted(){
        this.earth3D()
    },
    methods:{
        earth3D(){
            let ech3D = echarts.init(document.getElementById('chartEarth'));
            let option={
                backgroundColor: '#000',
                globe: {
                    baseTexture: "data-gl/asset/world.topo.bathy.200401.jpg",
                    heightTexture: "data-gl/asset/bathymetry_bw_composite_4k.jpg",
                    displacementScale: 0.2,
                    shading: 'realistic',
                    environment: 'data-gl/asset/starfield.jpg',
                    realisticMaterial: {
                        roughness: '/asset/get/s/data-1497599804873-H1SHkG-mZ.jpg',
                        metalness: '/asset/get/s/data-1497599800643-BJbHyGWQW.jpg',
                        textureTiling: [8, 4]
                    },
                    postEffect: {
                        enable: true
                    },
                    viewControl: {
                        autoRotate: false
                    },
                    light: {
                        main: {
                            intensity: 2,
                            shadow: true
                        },
                        ambientCubemap: {
                            // texture: 'data-gl/asset/pisa.hdr',
                            exposure: 2,
                            diffuseIntensity: 2,
                            specularIntensity: 2
                        }
                    }
                },
                series : [{
                    type: 'map',
                    map: 'world',
                    // 绘制完整尺寸的 echarts 实例
                    top: 0, left: 0,
                    right: 0, bottom: 0,
                    boundingCoords: [[-180, 90], [180, -90]]
                }]
            }
            ech3D.setOption(option);
        }
    }
}
</script>

<style lang="scss" scopde>

</style>
