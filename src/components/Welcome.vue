<template>
  <div class="body">

    <header>
            <div class="desc">
              <p>
                欢迎使用网络空间画像系统
              </p>
        <!-- <p>
          长期从事网络空间安全领域的产品技术论证、设计、研发等工作，按照集团公司“致力于打造网络信息安全国家队”、“全方位、超常规”创新发展的总体部署，坚持以网络安全为基石，承担国家网络安全重大工程，支撑国家级的重大战略，聚焦网络靶场、网络测量、网络舆情、网络预警等方向，形成了以网络安全技术为核心，网络空间资源和能力平台为支撑的核心产品技术体系，为政府、企业等多领域用户提供先进的一体化解决方案，打造成为国家网络空间安全领域的战略核心力量。
        </p> -->
      </div>
    </header>

    <main>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

    </main>

    <footer>
      <div>
        <p>中国xxxxxxxxxxxxxxxxxxxxxxxxxx所</p>
        <p>总部地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>科研基地：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>总部联系电话：xxx-xxxxxxxxxx | 科研基地联系电话：xxx-xxxxxxxxxxxxxxxx</p>
        <p>传真：xxx-xxxxxxxxxxxxxxxx</p>
        <p style="color: #999999">Copyright © 2020 xxxxxxxxxxxxxxxxxxxxxxx 京ICP备xxxxxxxxxxxxxx号-1　京公网安备xxxxxxxxxxxxxxxxxxxxx号</p>
      </div>
      <img
        src="https://qr.api.cli.im/newqr/create?data=%E5%BC%A0%E6%A5%A0%E5%88%B6%E4%BD%9C%E5%A4%A7%E5%8A%9B%E5%87%BA%E5%A5%87%E8%BF%B9&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=152&bgimg=&text=&fontsize=30&fontcolor=%23000000&fontfamily=simsun.ttc&incolor=&outcolor=&qrcode_eyes=null&background=&wper=&hper=&tper=&lper=&eye_use_fore=1&qrpad=10&kid=cliim&key=d56e9d65898685c01096020d51b62d1c"
        alt=""
      />
    </footer>
  </div>
</template>

<style lang="less" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // height: 100%;

}
header{
  width: 100%;
  background-image: url(../assets/loginbg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 400px;
}
.el-carousel {
  padding: 20px;
  margin-bottom: 30px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

main {
  // flex: 1;
  width: 100%;

  margin:20px;
}
.desc {
  margin-top: 150px;
  color: #ffffff;
  > p {
    max-width: 1200px;
    text-align: justify;
    white-space: normal;
    word-wrap: break-word;
    margin: 0 auto;
    line-height: 1.9;
    text-indent: 2em;
    font-size: 80px;
  }
}

footer {
  background-color: #3c3c3c;
  height: 200px;
  width: 80%;
  padding: 20px;
}

footer > div {
  float: left;
  color: #ffffff;
  font-size: 14px;
  font-family: 微软雅黑;
}
img {
  float: right;
}
</style>
