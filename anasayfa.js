/* yukarı çıkma butonu */

const menuBtn = document.querySelector('.menu-btn');
const menuWrapper = document.querySelector('#menu-wrapper');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuWrapper.classList.toggle('open');

});



/* yukarı çıkma butonu */

/* açılır kapanır menü */

const myButton = document.getElementById("myButton")

myButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

window.onscroll = function () {
  var myButton = document.getElementById("myButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}



/* açılır kapanır menü */

/* kutu açma kapama kodu */



const boxes = [
  //! birinci kategori
  { trigger: "content-box-one", target: "one" },
  { trigger: "content-box-two", target: "two" },
  { trigger: "content-box-three", target: "three" },
  { trigger: "content-box-four", target: "four" },
  { trigger: "content-box-five", target: "five" },
  { trigger: "content-box-six", target: "six" },
  { trigger: "content-box-seven", target: "seven" },
  //! ikinci kategori
  { trigger: "content-box-one-one", target: "two-one" },
  { trigger: "content-box-two-two", target: "two-two" },
  { trigger: "content-box-three-three", target: "two-three" },
  { trigger: "content-box-four-four", target: "two-four" },
  { trigger: "content-box-five-five", target: "two-five" },
  { trigger: "content-box-six-six", target: "two-six" },
  { trigger: "content-box-seven-seven", target: "two-seven" },
  { trigger: "content-box-eight-eight", target: "two-eight" },
  { trigger: "content-box-nine-nine", target: "two-nine" },
  { trigger: "content-box-teen-teen", target: "two-teen" },
  //! üçüncü kategori
  { trigger: "content-box-one-one-one", target: "three-one" },
  { trigger: "content-box-two-two-two", target: "three-two" },
  { trigger: "content-box-three-three-three", target: "three-three" },
  { trigger: "content-box-four-four-four", target: "three-four" },
  { trigger: "content-box-five-five-five", target: "three-five" },
  //! dördüncü kategori
  { trigger: "content-box-one-one-one-one", target: "four-one" },
  { trigger: "content-box-two-two-two-two", target: "four-two" },
  { trigger: "content-box-three-three-three-three", target: "four-three" },
  { trigger: "content-box-four-four-four-four", target: "four-four" },
  { trigger: "content-box-five-five-five-five", target: "four-five" },
  //! beşinci bölüm
  { trigger: "content-box-one-one-one-one-one", target: "five-one" },
  { trigger: "content-box-two-two-two-two-two", target: "five-two" },
  { trigger: "content-box-three-three-three-three-three", target: "five-three" },
  { trigger: "content-box-four-four-four-four-four", target: "five-four" },
  { trigger: "content-box-five-five-five-five-five", target: "five-five" },
  { trigger: "content-box-six-six-six-six-six", target: "five-six" },
  { trigger: "content-box-seven-seven-seven-seven-seven", target: "five-seven" },
  //! altıncı bölüm
  { trigger: "content-box-one-one-one-one-one-one", target: "six-one" },
  { trigger: "content-box-two-two-two-two-two-two", target: "six-two" },
  { trigger: "content-box-three-three-three-three-three-three", target: "six-three" },
  { trigger: "content-box-four-four-four-four-four-four", target: "six-four" },
  { trigger: "content-box-five-five-five-five-five-five", target: "six-five" },
  { trigger: "content-box-six-six-six-six-six-six", target: "six-six" },
  { trigger: "content-box-seven-seven-seven-seven-seven-seven", target: "six-seven" },
  { trigger: "content-box-eight-eight-eight-eight-eight-eight", target: "six-eight" }
];

function closeOtherBoxes(openBoxId) {
  boxes.forEach((box) => {
    if (box.trigger !== openBoxId) {
      const target = document.getElementById(box.target);
      target.style.display = "none";
    }
  });
}

function handleClick(event) {
  const triggerId = event.currentTarget.id;
  const targetId = boxes.find((box) => box.trigger === triggerId)?.target;
  const target = document.getElementById(targetId);
  if (target.style.display === "flex") {
    closeOtherBoxes(triggerId);
    target.style.display = "flex";
  } else {
    target.style.display = "none";
  }
}

boxes.forEach((box) => {
  const trigger = document.getElementById(box.trigger);
  trigger.addEventListener("click", handleClick);
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  boxes.forEach((box) => {
    const target = document.getElementById(box.target);
    target.style.display = "none";
  });
});


function handleClick(event) {
  const triggerId = event.currentTarget.id;
  const targetId = boxes.find((box) => box.trigger === triggerId)?.target;
  const target = document.getElementById(targetId);
  if (target.style.display === "none") {
    closeOtherBoxes(triggerId);
    target.style.display = "flex";
                 
    // scroll to target
    const y = target.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 4.5;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    target.style.display = "none";
  }
}

window.addEventListener("load", () => {
  boxes.forEach((box) => {
    const target = document.getElementById(box.target);
    target.style.display = "none"
  })
});


/* kutu açma kapama kodu */

