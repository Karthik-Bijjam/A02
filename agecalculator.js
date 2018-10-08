
function agecalculator(){            

        getTodaysDate = new Date()          
        birthDay = new Date(document.age.age.value)         
        timeold = (getTodaysDate.getTime() - birthDay.getTime());         
        //sectimeold = timeold / 1000;         
        secondsold = Math.floor(timeold / 1000);         
        msPerDay = 24 * 60 * 60 * 1000 ;         

        timeold = (getTodaysDate.getTime() - birthDay.getTime());         

        age_daysold = timeold / msPerDay;         

        daysold = Math.floor(age_daysold);         

        age_hrsold = (age_daysold - daysold)*24;         

        hrsold = Math.floor(age_hrsold);         

        minsold = Math.floor((age_hrsold - hrsold)*60);           

        document.age.days.value = daysold              

        document.age.hours.value = hrsold               

        document.age.minutes.value = minsold              

       window.status = "Well at the moment you are " + secondsold + "............ seconds old.";         

        timerID = setTimeout("agecalculator()",1000)   

}

      