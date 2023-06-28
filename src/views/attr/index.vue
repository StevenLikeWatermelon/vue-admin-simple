<template>
  <div>
    <el-upload
      action=""
      :multiple="false"
      :limit="1"
      :before-upload="beforeAvatarUpload"
      :show-file-list="false"
      :file-list="[]"
      :http-request="httpRequestsDetail"
    >
      <el-button style="margin-right: 15px" type="primary">上传批量导入表格并发放</el-button>
    </el-upload>
    <div>
      <span>{{ fileName }}</span>
    </div>

  </div>
</template>

<script>
const XLSX = require('xlsx')
export default {
  data() {
    return {
      fileName: '',
      xlsxFilesArr: []
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      const fileArr = file.name.split('.')
      const type = fileArr[fileArr.length - 1]
      if (type !== 'xlsx' && type !== 'xls' && type !== 'csv') {
        this.$message.error('请上传指定模板文件')
        return false
      } else {
        this.fileName = file.name
      }
    },
    httpRequestsDetail(data) {
      this.convertFileToJson(data.file)
    },
    convertFileToJson(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target.result
        const wb = XLSX.read(data, {
          type: 'binary'// 以二进制的方式读取
        })
        // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        // wb.Sheets[Sheet名]获取第一个Sheet的数据
        // XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { raw: false }); //以字符串形式读取。
        this.xlsxFilesArr = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]])
        this.handleAllArr()
      }
      reader.readAsBinaryString(file)
    },
    handleAllArr() {
      for (let index = 0; index < this.xlsxFilesArr.length; index++) {
        const element = this.xlsxFilesArr[index]
        console.log(element.work.trim(), element.workLabel.trim(), element.workStart.trim(), element.workEnd.trim(), element.restStart.trim(), element.restEnd.trim())
      }
    },
    exprtMethods() {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
