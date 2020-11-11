
    var input = $("#input");
    var saveBtn = $(".saveBtn");
    var now = moment().format('H');
    var hour = $(".hour")
    var nine = $("#nine")
    
    
    //Test moment time
    console.log(now)
    
    //Establish save button click event
    $(".saveBtn").on("click", function() {
    event.preventDefault()
    localStorage.setItem("task", (JSON.stringify(nine)))
    });
    //? not saving string input?
    
    //Set background/relative time for timeblocks
    function setTime(){
      var currentTime = parseInt(now);
     
      var five = $("#five").attr("data-value");                                

      console.log(five)
      if (currentTime > five){
        $(".time-block").addClass(past)
      }
      else if (currentTime === five){
        $(".time-block").addClass(present)
      }
      else {$(".time-block").addClass(future)}
    
    }
    setTime()
    
    

