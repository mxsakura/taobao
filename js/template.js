Vue.component('vue-banner',{
    props:['listData','width'],
    template:`
        <div @mouseover="overHandle()" @mouseout="outHandle()">
            <div class="img">
                  <div class="list" :style="{left:currentId*width+'px',width:listData.length*width+'px'}">
                      <a href="#" v-for="item,index in listData"><img :src="item" alt=""/></a>
                  </div>
            </div>
            <button class="iconfont leftBtn" @click="prevTab">&#xe667;</button>
            <button class="iconfont rightBtn" @click="nextTab">&#xe63f;</button>
            <div class="circle">
            <span :class="index === -currentId?'active':''" v-for="item,index in listData" @click="spanHandle(index)"></span>
            </div>
        </div>
    `,
    data(){
        return{
            currentId:0,
            timer:null,
        }
    },
    methods: {
        prevTab(){
            this.currentId == 0? this.currentId = -this.listData.length+1 : this.currentId++;
        },
        nextTab(){
            this.currentId == -this.listData.length + 1? this.currentId=0 : this.currentId--;
        },
        setTimer(){
            this.currentId == -this.listData.length + 1? this.currentId=0 : this.currentId--;
        },
        overHandle(){
            clearInterval(this.timer);
        },
        outHandle(){
            this.timer = setInterval(this.setTimer,3000);
        },
        spanHandle(index){
            this.currentId = -index;
        }
    },
    created(){
        this.timer = setInterval(this.setTimer,3000);
    }
})