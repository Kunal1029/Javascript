let hrs = document.getElementById("hr");
      let min = document.getElementById("min");
      let sec = document.getElementById("sec");

      setInterval(() => {
        let currTime = new Date();
        // console.log(currTime)

        hrs.innerText = (currTime.getHours()<10?"0":"") + currTime.getHours();
        min.innerText = (currTime.getMinutes()<10?"0":"") + currTime.getMinutes();
        sec.innerText = (currTime.getSeconds()<10?"0":"") + currTime.getSeconds();
      }, 1000);