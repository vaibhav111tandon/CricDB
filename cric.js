$(document).ready(function(){
  var univ = "";
  $('#answer').hide();
  $('#search').on("click",searchInfo);
  
  function searchInfo()
  {
    var name = $('#playerName').val();
    var url = 'https://cricapi.com/api/playerFinder?apikey=2BsgQz5WkSNcLOLBRgO7ER7p10t1&name='+name+'';
    $.ajax({
      url: url,
      type: 'GET',
      dataType : 'json',
      contentType: "application/json",
      success : function(data)
      {
       univ = data.data[0].pid;
       searchPlayerInfo(univ);
      },
      error : function(e)
      {
        alert("Oops... Name is not in the database...");
         console.log(e);
      }
    });
  }
  
  function searchPlayerInfo(univ){
    url1 = "https://cricapi.com/api/playerStats?apikey=2BsgQz5WkSNcLOLBRgO7ER7p10t1&pid="+univ+"";
    $.ajax({
      
      url : url1,
      type : 'GET',
      dataType : 'json',
      success:function(a){
        $('#answer').show();
    
        $('#image').attr("src",a.imageURL);
        
        $('#Name').html(a.fullName);
        $('#Country').html(a.country);
        $('#Age').html(a.currentAge);
        $('#dob').html(a.born);
        $('#Profile').html(a.profile);
        $('#battingStyle').html(a.battingStyle);
        $('#bowlingStyle').html(a.bowlingStyle);
        $('#majorTeams').html(a.majorTeams);
        $('#playing').html(a.playingRole);
        
        $('#oRuns').html(a.data.batting.ODIs.Runs);
        $('#oSR').html(a.data.batting.ODIs.SR);
        $('#oHS').html(a.data.batting.ODIs.HS);
        $('#oInn').html(a.data.batting.ODIs.Inns);
        $('#oMat').html(a.data.batting.ODIs.Mat);
        $('#oNO').html(a.data.batting.ODIs.NO+" times");
        $('#oSt').html(a.data.batting.ODIs.St+ " times");
        $('#oCt').html(a.data.batting.ODIs.Ct+ " times");
        $('#osix').html(a.data.batting.ODIs['6s']);
        $('#ofour').html(a.data.batting.ODIs['4s']);
        $('#ofif').html(a.data.batting.ODIs['50']);
        $('#ohun').html(a.data.batting.ODIs['100']);
        $('#oAve').html(a.data.batting.ODIs.Ave);
        
        
        
        $('#tRuns').html(a.data.batting.tests.Runs);
        $('#tSR').html(a.data.batting.tests.SR);
        $('#tHS').html(a.data.batting.tests.HS);
        $('#tInn').html(a.data.batting.tests.Inns);
        $('#tMat').html(a.data.batting.tests.Mat);
        $('#tNO').html(a.data.batting.tests.NO+" times");
        $('#tSt').html(a.data.batting.tests.St+ " times");
        $('#tCt').html(a.data.batting.tests.Ct+ " times");
        $('#tsix').html(a.data.batting.tests['6s']);
        $('#tfour').html(a.data.batting.tests['4s']);
        $('#tfif').html(a.data.batting.tests['50']);
        $('#thun').html(a.data.batting.tests['100']);
        $('#tAve').html(a.data.batting.tests.Ave);
        
        $('#oRunsB').html(a.data.bowling.ODIs.Runs);
        $('#oeco').html(a.data.bowling.ODIs.Econ);
        $('#oW').html(a.data.bowling.ODIs.Wkts);
        $('#oInnB').html(a.data.bowling.ODIs.Inns);
        $('#oMatB').html(a.data.bowling.ODIs.Mat);

      
        $('#tRunsB').html(a.data.bowling.tests.Runs);
        $('#teco').html(a.data.bowling.tests.Econ);
        $('#tW').html(a.data.bowling.tests.Wkts);
        $('#tInnB').html(a.data.bowling.tests.Inns);
        $('#tMatB').html(a.data.bowling.tests.Mat);

        
      },
      error:function(e)
      {
        console.log(e);
      }
      
    });
    
  }
  
});
