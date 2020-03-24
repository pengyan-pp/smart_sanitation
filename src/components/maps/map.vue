<template>
  <div class="box">
    <div id="container"></div>
    <div class="input-card" style="width200px">
      <button class="btn" @click="drawPolygon" style="margin-bottom: 5px">绘制多边形</button>
      <button class="btn" @click="pointOnPolygon" style="margin-bottom: 5px">判断点是否在多边形内</button>
    </div>
  </div>
</template>
<script>
import AMap from "AMap";
export default {
  data() {
    return {
      map: null, //地图
      mouseTool: null, //绘制多边形的鼠标事件，
      polygon: null, //多边形
      polygonPathes:[],//绘制的多边形path
      marker:null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //地图初始化
    init() {
      this.map = new AMap.Map("container", {
        center: [118.788699, 32.077042],
        resizeEnable: true,
        zoom: 10
      });
    },
    //绘制多边形
    drawPolygon() {
      var _this = this;
      this.removeAllOverlay();
      this.mouseTool = new AMap.MouseTool(this.map);
      this.polygon = this.mouseTool.polygon({
        strokeColor: "#FF33FF",
        strokeOpacity: 1,
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillColor: "#1791fc",
        fillOpacity: 0.4,
        // 线样式还支持 'dashed'
        strokeStyle: "solid"
      });

      this.mouseTool.on("draw", function(event) {
        var path = event.obj.getPath();
        for(let p=0;p<path.length;p++){
            //_this.polygonPathes.push([path[p].lng,path[p].lat]);
            _this.polygonPathes.push(new AMap.LngLat(path[p].lng,path[p].lat));
        }
         console.log(_this.polygonPathes);  
      });
    },
    //清除地图上的覆盖物
    removeAllOverlay() {
      this.map.clearMap();
    },
    //判断点是否在多边形内
    compute(){
      var point = this.marker.getPosition();
      var isPointRing = AMap.GeometryUtil.isPointInRing(point,this.polygonPathes);
      this.marker.setLabel({
        content:isPointRing?'内部':'外部',
        offset:new AMap.Pixel(20,0)
      });
    },
    pointOnPolygon(){
      this.marker = new AMap.Marker({
        map:this.map,
        draggable:true,
        position:[118.709048, 32.218895]
      });
      this.compute();
      this.marker.on('dragging',this.compute);
      this.map.setFitView();
    }
  }
};
</script>
<style>
#container {
  width: 100%;
  height: 800px;
}
</style>