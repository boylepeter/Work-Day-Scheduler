
        var input = $("#input");
        var saveBtn = $(".saveBtn");
        var now = moment().format('H');
        var hour = $(".hour")
        var nine = $("#nine")
        
        
        //Test moment time
        console.log(now)
        
        //Make current day display
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))

        //Establish save button click event
        
        $(".saveBtn").on("click", function() {
        event.preventDefault()
        var userText = $(this).siblings(".time-block").val()
        var timeStamp = $(this).siblings(".hour").attr("id")
        localStorage.setItem(timeStamp, userText)
        
        });
        
        //Establish a function intended to restore any saved data on reload
        function reloadPage(){
          var userInput9 = localStorage.getItem("time9")
          var userInput10 = localStorage.getItem("time10")
          var userInput11 = localStorage.getItem("time11")
          var userInput12 = localStorage.getItem("time12")
          var userInput1 = localStorage.getItem("time1")
          var userInput2 = localStorage.getItem("time2")
          var userInput3 = localStorage.getItem("time3")
          var userInput4 = localStorage.getItem("time4")
          var userInput5 = localStorage.getItem("time5")
        
        $("#input9").val(userInput9)
        $("#input10").val(userInput10)
        $("#input11").val(userInput11)
        $("#input12").val(userInput12)
        $("#input13").val(userInput1)
        $("#input14").val(userInput2)
        $("#input15").val(userInput3)
        $("#input16").val(userInput4)
        $("#input17").val(userInput5)
        }
      
        
    
        reloadPage()
        //Set background/relative time for timeblocks
        function setTime(i){
          var currentTime = parseInt(now);
          var plannerTime = $(i).attr("data-value");                                
          var inputID = "#input" + plannerTime
          
          console.log(plannerTime)
          if (currentTime > plannerTime){
            $(inputID).addClass("past")
          }
          else if (currentTime == plannerTime){
            $(inputID).addClass("present")
          }
          else {$(inputID).addClass("future")}
          
        }
    
        //compare time within planner to moment.js time
        var timeBlock = ["#time9", "#time10", "#time11","#time12", "#time1", "#time2", "#time3",
        "#time4", "#time5",];
        for (var i=0; i < timeBlock.length; i++){
          console.log(timeBlock[i])
          setTime(timeBlock[i])
          
        }
        
        
        
    
    