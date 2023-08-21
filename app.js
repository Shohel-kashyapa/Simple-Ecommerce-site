const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item,index)=>{
  item.addEventListener("click", () => {
    wrapper.computedStyleMap.transform = 'tranlateX(${-100 * index}vw)';
  });
});


