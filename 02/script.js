var arr = [' ', '一', '二', '三', '四', '五'];
var ctime = [{
    num: '1',
    time: '8:00',
},
{
    num: '2',
    time: '9:40',
},
{
    num: '3',
    time: '10:10',
},
{
    num: '4',
    time: '11:50',
},
{
    num: '5',
    time: '14:00',
},
{
    num: '6',
    time: '15:40',
},
{
    num: '7',
    time: '16:10',
},
{
    num: '8',
    time: '17:50',
},
{
    num: '9',
    time: '18:30',
},
{
    num: '10',
    time: '20:05',
},
]

var courses = [
    {
        course: '微机原理与接口技术',
        teacher: '姚华雄',
        location: '@N217',
        Bgcolor: '#B93B61',
        info: '硬核的汇编编程与硬件结合，期末考试'
    },
    {
        course: '专业英语',
        teacher: '李增扬',
        location: '@N112',
        Bgcolor: '#15C377',
        info: '任务：课程翻译PPT汇报+英文科技论文12.18前'
    },
    {
        course: '大学生防身术',
        teacher: '王翔',
        location: '@南湖体育馆',
        Bgcolor: '#48B0FC',
        info: '考核：美国锁，下位三角锁...'
    },

    {
        course: 'Web程序设计实验课',
        teacher: '涂新辉',
        location: '@N520',
        Bgcolor: '#4974B8',
        info: '两个实验：个人主页，动态课表信息; 大作业：实现web应用'
    },

    {
        course: '信息检索技术',
        teacher: '张茂元',
        location: '@N108',
        Bgcolor: '#399088',
        info: '任务：建立一个搜索架构的课程报告+信息检索论文PPT汇报+实验报告'
    },
    {
        course: '人工智能',
        teacher: '郭京蕾',
        location: '@N108',
        Bgcolor: '#C78A47',
        info: '期末考核'
    },
    {
        course: '操作系统原理',
        teacher: '李源',
        location: '@N108',
        Bgcolor: '#B93B61',
        info: '专业主干！作业+实验报告+期末考核'
    },
    {
        course: '微机实验',
        teacher: '姚华雄',
        location: '@N535',
        Bgcolor: '#B93B61',
        info: '汇编编程，控制单板机'
    },
    {
        course: '文学经典赏读',
        teacher: '陈燕妮',
        location: '@本校8104',
        Bgcolor: '#48B0FC',
        info: '《论语》《西游记》《世说新语》...'
    },
    {
        course: '信息检索技术实验',
        teacher: '张茂元',
        location: '@N528',
        Bgcolor: '#399088',
        info: '网络爬虫实验+架构搜索引擎'
    },
    {
        course: '习近平新时代中国特色社会主义思想概论',
        teacher: '吕惠东',
        location: '@N228',
        Bgcolor: '#FAA64B',
        info: '新时代中国特色社会主义思想学习，任务：笔记+实践报告+期末考核'
    },
    {
        course: 'Web程序设计课',
        teacher: '涂新辉',
        location: '@N108',
        Bgcolor: '#4974B8',
        info: 'HTML,CSS,JS...'
    },
    {
        course: '编译原理',
        teacher: '郭京蕾',
        location: '@N213',
        Bgcolor: '#C78A47',
        info: '作业+实验报告+期末考核'
    },
    {
        course: '操作系统原理实验',
        teacher: '李源',
        location: '@N211',
        Bgcolor: '#B93B61',
        info: '专业主干！作业+实验报告+期末考核'
    }
]



window.onload = function () {

    var Stable = document.getElementsByClassName('Stable');  //创建动态课程表格对象

    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');    //动态创建div
        div.className = 'item' + String(i + 1) + ' day';  //类名为两个 itemx day  

        Stable[0].appendChild(div);                 //创建第一行 星期1,2,3,4,5,6,7
        let h3 = document.createElement('h3');
        h3.textContent = arr[i];
        div.appendChild(h3);

    }

    for (let i = 0; i < ctime.length; i++) {     // 添加第一列 时间
        let div = document.createElement('div');
        div.className = 'item' + String(i + 7) + ' ctime';
        Stable[0].appendChild(div);
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        h3.textContent = ctime[i].num;
        h5.textContent = ctime[i].time;
        div.appendChild(h3);
        div.appendChild(h5);
    }

    for (let i = 0; i < courses.length; i++) {       //添加课程，课程名+地点
        let div = document.createElement('div');
        div.className = 'c' + String(i + 1) + ' course';   //类名为 ci course
        div.style.backgroundColor = courses[i].Bgcolor;
        Stable[0].appendChild(div); //课程表
        let h3 = document.createElement('h3');
        h3.textContent = courses[i].course;
        let h5 = document.createElement('h5');
        h5.textContent = courses[i].location
        div.appendChild(h3);
        div.appendChild(h5);
    }


    // var c1 = document.querySelector(".c1");
    // var cn = document.querySelector(".cname");
    // var tc = 

    // c1.onmouseover = function () {
    //     cn.innerHTML = '课&ensp;程&ensp;名：微机原理';
    // }

    // 鼠标移动到课程表对应课程响应事件处理，右侧显示相关信息
    function MouseOver(i) {
        console.log("我动态加载了");  
        var cname = document.getElementsByClassName("cname");
        cname[0].textContent += courses[i].course;
        
        var teacher = document.getElementsByClassName("teacher");
        var location = document.getElementsByClassName("location");
        var info = document.getElementsByClassName("info");
        teacher[0].textContent += courses[i].teacher;
        location[0].textContent += courses[i].location;
        info[0].textContent += courses[i].info;
    }



    // 鼠标离开，清空右侧信息
    function MouseOut() {
        console.log("我清空了");
        let cname = document.getElementsByClassName("cname");
        cname[0].textContent = '课  程  名:  ';
        let teacher = document.getElementsByClassName("teacher");
        let location = document.getElementsByClassName("location");
        let info = document.getElementsByClassName("info");
        teacher[0].textContent = "任课老师: ";
        location[0].textContent = "上课地点: ";
        info[0].textContent = "相关信息: ";
    }

    var courselist = document.getElementsByClassName("course");
    for (let i = 0; i < courselist.length; i++) {
        courselist[i].onmouseover = MouseOver.bind(this,i);
        courselist[i].onmouseout = MouseOut;
    }

}
