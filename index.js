// <!--导航条菜单效果开始-->
//会员管理
document.getElementById('huiyuanguanli').onmouseover=function () {
    document.getElementById('huiyuanguanli2').style.display='block';
    // document.getElementById('huiyuanguanli2').style.zIndex='9'
    document.getElementById('huiyuanguanli').style.background='rgba(32,24,134,0.2)';

};
document.getElementById('huiyuanguanli').onmouseout=function () {
    document.getElementById('huiyuanguanli2') .style.display='none';
    document.getElementById('huiyuanguanli').style.background='rgba(32,24,134,0)';
};


//进销存
document.getElementById('jinxiaocun').onmouseover=function () {
    document.getElementById('jinxiaocun2').style.display='block';
    document.getElementById('jinxiaocun').style.background='rgba(32,24,134,0.2)';
};
document.getElementById('jinxiaocun').onmouseout=function () {
    document.getElementById('jinxiaocun2') .style.display='none';
    document.getElementById('jinxiaocun').style.background='rgba(32,24,134,0)';
};

//其它
document.getElementById('qita').onmouseover=function () {
    document.getElementById('qita2').style.display='block';
    document.getElementById('qita').style.background='rgba(32,24,134,0.2)';
};
document.getElementById('qita').onmouseout=function () {
    document.getElementById('qita2') .style.display='none';
    document.getElementById('qita').style.background='rgba(32,24,134,0)';
};
// <!--导航条菜单效果结束-->


