
document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.getElementsByClassName('header__body')).forEach(function (v, i) {
    let burger = v.getElementsByClassName('header__burger')[0];
    let menu = v.getElementsByClassName('header__menu')[0];

    burger.addEventListener('click', function () {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
    })
  })
});
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// DOMContentLoaded – событие, которое вызывается тогда, когда страница загрузилась
// полностью. Соответственно, функция, описанная тут, начнет выполнение уже при готовых
// элементах.
document.addEventListener('DOMContentLoaded', function () {
  // проверять количество элементов не нужно, если использовать цикл
  // цикл по пустому массиву просто не пойдет

  // window.addEventListenner('scroll', animOnScroll);

  // Array.from(XXX) – преобразует коллекцию XXX в массив, после чего можно
  // вызывать функцию forEach, которая пройдет по всем элементам

  let animItems = Array.from(document.querySelectorAll('._anim-items'));
  console.log("items", animItems.length)
  document.addEventListener('scroll', function () {
    animItems.forEach(animItem => {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      const activeClass = '_active';

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        if (animItem.classList.contains(activeClass)) {
          return
        }
        animItem.classList.add(activeClass);
      } else {
        console.log('not active')
        if (!animItem.classList.contains(activeClass)) {
          return
        }
        animItem.classList.remove(activeClass);
      }
    })
  })
})