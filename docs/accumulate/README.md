# 放大镜效果(仿淘宝)

```html
<style>
  #con {
    width: 100%;
    position: relative;
  }
  .smallArea {
    position: absolute;
    left: 0;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
  }
  .smallArea > img {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(34, 35, 32, 0.2);
    /* background-color: #fff;
        filter: alpha(opacity=0);
        opacity: 0; */
    display: none;
  }
  .bigArea {
    position: absolute;
    display: none;
    left: 420px;
    width: 500px;
    height: 500px;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  .bigArea img {
    position: absolute;
  }
</style>

<div id="con">
  <div class="smallArea">
    <div class="mask"></div>
    <!-- 图片大小 800* 800 -->
    <img
      src="https://gw.alicdn.com/imgextra/i1/2024314280/O1CN01K4cAis1hUHwQGSmnw_!!0-item_pic.jpg_Q75.jpg_.webp"
    />
  </div>
  <div class="bigArea">
    <img
      src="https://gw.alicdn.com/imgextra/i1/2024314280/O1CN01K4cAis1hUHwQGSmnw_!!0-item_pic.jpg_Q75.jpg_.webp"
      alt=""
    />
  </div>
</div>

<script>
  const oSmall = document.querySelector('.smallArea')
  const oMask = oSmall.querySelector('.mask')
  const oBig = document.querySelector('.bigArea')
  const oBigImg = oBig.querySelector('img')
  oSmall.addEventListener('mousemove', (ev) => {
    const e = ev || window.event //兼容
    oMask.style.display = 'block'
    oBig.style.display = 'block'

    //蒙层可移动最大界限
    const maxWidthMove = oSmall.clientWidth - oMask.offsetWidth
    const maxHeightMove = oSmall.clientHeight - oMask.offsetHeight

    //大图可移动的界限
    const imgAllWidthMove = oBigImg.offsetWidth - oBig.offsetWidth
    const imgAllHeightMove = oBigImg.offsetHeight - oBig.offsetHeight

    //让鼠标在蒙版中间,倒推出蒙版位置
    const maskPosition = {
      //oSmall.offsetLeft = oSmall.getBoundingClientRect().left
      left: e.clientX - oSmall.offsetLeft - oMask.offsetWidth / 2,
      // oSmall.offsetTop =  oSmall.getBoundingClientRect().top
      top: e.clientY - oSmall.offsetTop - oMask.offsetHeight / 2,
    }
    if (maskPosition.left < 0) {
      maskPosition.left = 0
    } else if (maskPosition.left >= maxWidthMove) {
      maskPosition.left = maxWidthMove
    }

    if (maskPosition.top < 0) {
      maskPosition.top = 0
    } else if (maskPosition.top >= maxHeightMove) {
      maskPosition.top = oSmall.offsetHeight - oMask.offsetHeight
    }

    oMask.style.left = maskPosition.left + 'px'
    oMask.style.top = maskPosition.top + 'px'

    /*大图计算公式 
    蒙层移动的距离 / 蒙层最大移动距离 = 大图移动距离 / 大图最大移动距离
  */
    oBigImg.style.left =
      -(maskPosition.left / maxWidthMove) * imgAllWidthMove + 'px'
    oBigImg.style.top =
      -(maskPosition.top / maxWidthMove) * imgAllHeightMove + 'px'
  })

  oSmall.addEventListener('mouseleave', () => {
    oMask.style.display = 'none'
    oBig.style.display = 'none'
  })
</script>
```
