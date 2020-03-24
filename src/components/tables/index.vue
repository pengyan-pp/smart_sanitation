<template>
  <div class="table-container">
    <Table :columns="showColumns" :data="data7" size="small" ref="table"></Table>
    <Poptip title="隐藏显示列" placement="bottom-end">
      <Icon type="md-settings" size="20" />
      <div class="poptipTitle" slot="title">
        <span>隐藏显示列</span>
        <Button type="text" size="small" v-show="btnShow" @click="editCheckbox">编辑</Button>
        <Button type="text" size="small" v-show="!btnShow" @click="saveCheckbox">保存</Button>
      </div>
      <div class="api" slot="content">
        <CheckboxGroup v-model="tableColumns" @on-change="editTableColumn">
          <Checkbox v-for="(item,index) in columns8" :key="index" :label="item.title">
            <span v-show="!editable">{{item.title}}</span>
            <Input
              v-show="editable"
              v-model="item.title"
              placeholder="Enter something..."
              style="width: 200px"
            />
          </Checkbox>
        </CheckboxGroup>
      </div>
    </Poptip>
    <br />
    <Button type="primary" size="large" @click="exportData(1)">
      <Icon type="ios-download-outline"></Icon>Export source data
    </Button>
    <Button type="primary" size="large" @click="exportData(2)">
      <Icon type="ios-download-outline"></Icon>Export sorting and filtered data
    </Button>
    <Button type="primary" size="large" @click="exportData(3)">
      <Icon type="ios-download-outline"></Icon>Export custom data
    </Button>
  </div>
</template>
<script>
export default {
  name: "editTable",
  data() {
    return {
      btnShow:true,  //编辑、保存按钮只显示一个
      editable: false,//复选框是否可编辑
      showColumns: [], //table显示的行
      tableColumns: [], //复选框选中的行
      columns8: [
        //全部数据
        {
          title: "Name",
          key: "name",
          fixed: "left"
        },
        {
          title: "Show",
          key: "show",
          sortable: true,
          filters: [
            {
              label: "Greater than 4000",
              value: 1
            },
            {
              label: "Less than 4000",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.show > 4000;
            } else if (value === 2) {
              return row.show < 4000;
            }
          }
        },
        {
          title: "Weak",
          key: "weak",
          sortable: true
        },
        {
          title: "The next day left",
          key: "tomorrow",
          sortable: true
        },
        {
          title: "Day Active",
          key: "day",
          sortable: true
        },
        {
          title: "Week Active",
          key: "week",
          sortable: true
        },
        {
          title: "Month Active",
          key: "month",
          sortable: true
        }
      ],
      data7: [
        {
          name: "Name1",
          fav: 0,
          show: 7302,
          weak: 5627,
          signin: 1563,
          click: 4254,
          active: 1438,
          day7: 274,
          day30: 285,
          tomorrow: 1727,
          day: 558,
          week: 4440,
          month: 5610
        },
        {
          name: "Name2",
          fav: 0,
          show: 4720,
          weak: 4086,
          signin: 3792,
          click: 8690,
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684,
          day: 2593,
          week: 2507,
          month: 1537
        },
        {
          name: "Name3",
          fav: 0,
          show: 7181,
          weak: 8007,
          signin: 8477,
          click: 1879,
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377,
          day: 1561,
          week: 3219,
          month: 1588
        },
        {
          name: "Name4",
          fav: 0,
          show: 9911,
          weak: 8976,
          signin: 8807,
          click: 8050,
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278,
          day: 5309,
          week: 1655,
          month: 9043
        },
        {
          name: "Name5",
          fav: 0,
          show: 934,
          weak: 1394,
          signin: 6463,
          click: 5278,
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285,
          day: 1230,
          week: 4840,
          month: 9908
        },
        {
          name: "Name6",
          fav: 0,
          show: 6856,
          weak: 1608,
          signin: 457,
          click: 4949,
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920,
          day: 1966,
          week: 904,
          month: 6851
        },
        {
          name: "Name7",
          fav: 0,
          show: 5107,
          weak: 6407,
          signin: 4166,
          click: 7970,
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632,
          day: 4061,
          week: 4359,
          month: 3676
        },
        {
          name: "Name8",
          fav: 0,
          show: 862,
          weak: 6520,
          signin: 6696,
          click: 3209,
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408,
          day: 2481,
          week: 1479,
          month: 2346
        },
        {
          name: "Name9",
          fav: 0,
          show: 567,
          weak: 5859,
          signin: 128,
          click: 6593,
          active: 1971,
          day7: 7596,
          day30: 3546,
          tomorrow: 6641,
          day: 1611,
          week: 5534,
          month: 3190
        },
        {
          name: "Name10",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        }
      ]
    };
  },
  mounted() {
    this.showColumns = this.columns8;
    for (let q = 0; q < this.columns8.length; q++) {
      this.tableColumns.push(this.columns8[q].title);
    }
  },
  methods: {
    editCheckbox() {
      this.editable = true;
      this.btnShow = false;
    },
    saveCheckbox() {
      this.editable = false;
      this.btnShow = true;
    },
    editTableColumn(columns) {
      if (columns.length > 0) {
        this.showColumns = [];
        for (let p = 0; p < this.columns8.length; p++) {
          for (let q = 0; q < columns.length; q++) {
            if (this.columns8[p].title == columns[q]) {
              this.showColumns.push(this.columns8[p]);
            }
          }
        }
      }
    },
    exportData(type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: "The original data"
        });
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: "Sorting and filtering data",
          original: false
        });
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: "Custom data",
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        });
      }
    }
  }
};
</script>
<style>
.poptipTitle span{
  text-align: left;
  float: left;
}
.ivu-input{
    margin: 2px;
    padding: 0px;
    width: 80%;
}
.ivu-poptip-inner{
    width: 100%;
    margin-left: 20%;
}
.ivu-poptip-body-content{
    overflow: hidden;
}
.ivu-btn-text {
  color: #57a3f3;
}
.ivu-checkbox-group-item {
  display: block;
  text-align: left;
}
.ivu-poptip {
  display: block;
  position: fixed;
  right: 15px;
  top: 85px;
}
</style>
