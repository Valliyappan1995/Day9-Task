// Using Callback Hell:
var countdown = document.querySelector("#countdown");
var c = 10;
setTimeout(() => {
  console.log("countdown", c);
  countdown.innerText = c;
  c--;
  setTimeout(() => {
    console.log("countdown", c);
    countdown.innerText = c;
    c--;
    setTimeout(() => {
      console.log("countdown", c);
      countdown.innerText = c;
      c--;
      setTimeout(() => {
        console.log("countdown", c);
        countdown.innerText = c;
        c--;
        setTimeout(() => {
          console.log("countdown", c);
          countdown.innerText = c;
          c--;
          setTimeout(() => {
            console.log("countdown", c);
            countdown.innerText = c;
            c--;
            setTimeout(() => {
              console.log("countdown", c);
              countdown.innerText = c;
              c--;
              setTimeout(() => {
                console.log("countdown", c);
                countdown.innerText = c;
                c--;
                setTimeout(() => {
                  console.log("countdown", c);
                  countdown.innerText = c;
                  c--;
                  setTimeout(() => {
                    console.log("countdown", c);
                    countdown.innerText = c;
                    c--;
                    setTimeout(() => {
                      console.log("INDEPENDENCE");
                      countdown.innerText = "HAPPY INDEPENDENCE DAY";
                      countdown.style.color = "brown";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
