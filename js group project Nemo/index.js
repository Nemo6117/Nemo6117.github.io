window.onload = function () {
  const pureFullPageContainer = document.getElementById(
    "pureFullPageContainer"
  );
  const questionnaire = document.getElementById("questionnaire");
  if (pureFullPageContainer) {
    //浏览器兼容
    if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      document.addEventListener("DOMMouseScroll", scrollFun, false);
    } else if (document.addEventListener) {
      document.addEventListener("mousewheel", scrollFun, false);
    } else if (document.attachEvent) {
      document.attachEvent("onmousewheel", scrollFun);
    } else {
      document.onmousewheel = scrollFun;
    }
    var timer = null;

    //滚动事件处理函数
    function scrollFun(event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const delta = event.detail || -event.wheelDelta;
        //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
        //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
        if (delta > 0) {
          //向下滚动
          return toPage("down");
        }
        //向上滚动
        toPage("up");
      }, 100);
    }

    function toPage(key) {
      const section = document.querySelectorAll(
        "#pureFullPageContainer .section"
      );
      let top = document.body.clientHeight;
      let topIndex = section.length + 1;
      let tops = [];
      section.forEach((page, i) => {
        if (
          page.getBoundingClientRect().top > -1 &&
          top > page.getBoundingClientRect().top
        ) {
          top = page.getBoundingClientRect().top;
          topIndex = i;
        }
        tops.push(page.offsetTop);
      });
      // 如果偏移量低于30，不进行位移
      if (top < 30) return;
      if (key === "up") {
        window.scrollTo(0, tops[topIndex - 1] - 60);
      } else {
        window.scrollTo(0, tops[topIndex] - 60);
      }
    }
  }
  if (questionnaire) {
    // 获取 dom 到视口左侧和顶部的相对位置
    function getDomToViewPosition(dom) {
      const rectObject = dom?.getBoundingClientRect();
      return {
        domToViewLeft: rectObject?.left,
        domToViewTop: rectObject?.top,
      };
    }

    /*菜单跳转*/
    const menu = document.getElementsByClassName("menu-title");
    domList(menu, (dom) => {
      dom.addEventListener("click", function (event) {
        toMenu(this);
      });
    });

    function toMenu(dom) {
      window.scrollTo(0, dom.offsetTop - 60);
    }

    function targetClass(dom, name) {
      if (dom.className.indexOf(name) > -1) {
        return removeClass(dom, name);
      }
      addClass(dom, name);
    }

    function addClass(dom, name) {
      dom.className += ` ${name}`;
    }

    function removeClass(dom, name) {
      const reg = new RegExp(name);
      dom.className = dom.className.replace(reg, "");
    }

    // 遍历dom列表
    function domList(list, callback) {
      for (let i = 0; i < list.length; i++) {
        callback(list[i], i, list);
      }
    }

    function clearOtherClassName(dom, name) {
      domList(dom.parentNode.parentNode.children, (childDom) => {
        removeClass(childDom.children[0], name);
      });
    }

    /*选项样式修改*/
    function hybridToMenu(dom) {
      dom.addEventListener("click", function (event) {
        clearOtherClassName(this, "ok");
        targetClass(this, "ok");
        // 跳转到下一个菜单
        domList(menu, (dom) => {
          if (dom.dataset.title === this.dataset.title) {
            toMenu(dom);
          }
        });
      });
    }

    document.querySelectorAll(".hybrid.food .col-border").forEach((dom) => {
      hybridToMenu(dom);
    });
    document.querySelectorAll(".hybrid.smell .col-border").forEach((dom) => {
      hybridToMenu(dom);
    });
  }
};
