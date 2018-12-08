<template>
    <div id="tf">
        <!-- <h2>拖放</h2> -->
        <ul class="clear">
            <li draggable="true" v-for="(item,index) in list" :key="index" :id="item.id"  @drop='drop($event)' @dragover='allowDrop($event)'  @dragstart='drag($event)' :class="{crrentli:changeLi==item.id}" @click="selectCrrent(item.id)">{{item.name}}</li>
            <!-- <li v-for="(item,index) in list" :key="index" :id="item.id" :class="[lineStyle(courseClick)]"  @click="selectCrrent(item.id)">{{item.name}}</li> -->
            <!-- <li v-for="(item,index) in list" :key="index" :id="item.id" :class="item.isSelect?'crrentli':''" @click="selectCrrent(item.id)">{{item.name}}</li> -->
        </ul>
        <!-- <div class='drag-content'>
            <div class='project-content'>
                <div class='select-item' draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas'>{{pjdt.name}}</div>
            </div>
            <div class='people-content'>
                <div class='drag-div' v-for='(ppdt,ppindex) in peopledata' @drop='drop($event)' @dragover='allowDrop($event)'>
                <div class='select-project-item'>
                    <label class='drag-people-label'>{{ppdt.name}}:</label>
                </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script type="text/ecmascript-6">
import TF from './TF.js';
import './TF.scss'
export default{
    ...TF
}
</script>

