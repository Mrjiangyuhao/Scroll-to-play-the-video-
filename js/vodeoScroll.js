export default function video(){
    window.onload = function () {
        let VideoOff = [];
        let VideoList = document.getElementsByClassName('video_1');
        let getScroTop = null;
        let len = VideoList.length;
        let a = 0;
        for (var i = 0; i < len; i++) {
            var s = VideoList[i].currentStyle ? parseInt(VideoList[i].currentStyle.marginTop) : parseInt(window.getComputedStyle(VideoList[i]).marginTop);
            //非IE获取非内联样式
            if (s === 0) {
                VideoOff[i] = 0;
                continue
            } else {
                VideoOff[i] = VideoList[i].offsetTop + 225;//获取元素距离顶部的高度   
            }
        }

        window.onscroll = function (ev) {
            getScroTop = setScroTop('getScroTop');
            var Visua = window.screen.height + getScroTop;
            var filterNumber = filte1(VideoOff, Visua);    //筛选出合适的数值
            var Arrindex = [];
            var len_1 = filterNumber.length;
          
            //根据筛选出来多少组数值的长度来循环
            for (var i = 0; i < len_1; i++) {
                //筛选出来值存在数组里面，然后通过里面的长度来获取多少个元素
                Arrindex[i] = VideoList[i];
                /*
                    比对两个条件是否在当前窗口：
                    1：元素的offsettop 值 是否大于 滚动条的值
                    2：当前浏览器窗口+滚动条 的值是否 大于 元素offsettop + 元素offseheight 

                    原因：
                        元素距离顶部的距离越大，滚动条的值越小的话。说明滚动条还没拉出元素可视区。
    
                */
                if (Arrindex[i].offsetTop >= getScroTop && (window.innerHeight + getScroTop) > (Arrindex[i].offsetTop + Arrindex[i].offsetHeight) ) {
                    Arrindex[i].play();
                }else{
                    Arrindex[i].pause();
                }

            }

        }


        //获取滚动条距离顶部距离
        /* 
            1：arguments  用于解决形参和实参不对应出错 ；
            2：或者用JSON形式 {  }这样就算多个形参都会当成一个
        */
        function setScroTop() {
            let Gt = null;
            let arr = new Array();
            let argum = arguments[0];   //是一个对应于传递给函数的参数的类数组对象,所有（非箭头）函数中都可用的局部变量
            if (argum === 'getScroTop') {
                Gt = document.documentElement.scrollTop || document.body.scrollTop;
                return Gt
            }
        }
        function filte1(obj, data) {
            var k = obj.filter((item) => {
                return item <= data

            })
            return k
        }
    }
}