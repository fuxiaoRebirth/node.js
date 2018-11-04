$(function () {

    getAllData()
    // 获取全部数据的封装
    function getAllData() {
        $.ajax({
            url: 'http://127.0.0.1:5001/getAllData',
            type: 'get',
            success: function (res) {
                let html = template('tmp', res)
                $('tbody').html(html)
            }
        })
    }
    // 点击添加按钮显示弹出框
    $('#add').click(function () {
        $('.ui.modal').modal('show')
    })

    // 初始化下拉框的样式
    $('select.dropdown').dropdown()

    //添加英雄
    $('#addHero').click(function () {
       let data = $('form').serialize()
       $.ajax({
           url:'http://127.0.0.1:5001/addHero',
           type:'post',
           data:data,
           success:function(res){
               console.log(res)
               if(res.status==='200'){
                     getAllData()
               }
           }
       })
    })
})