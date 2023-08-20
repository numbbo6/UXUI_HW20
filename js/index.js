$(document).ready(function () {
  // 输出日志到控制台，表明页面加载完成
  console.log("Page loaded.");
  // 当点击菜单项时触发
  $(".menu-item").click(function () {
    // 输出日志到控制台
    console.log("Menu item clicked:", $(this).text());
  });

  // 当鼠标悬停在菜单项上时触发
  $(".menu-item").hover(function () {
    // 输出日志到控制台
    console.log("Mouse hover on menu item:", $(this).text());
  });

  // 当页面滚动时触发
  $(window).scroll(function () {
    // 输出日志到控制台
    console.log("Page scrolled. Scroll position:", $(window).scrollTop());
  });
});
