 if(getCookie("inprog") === "yes" && getCookie("jobcomplete") === "no"){
                     setInterval("countdown2()", 1000);
             }

            setInterval( "pollServer2()", 3000 );

            function validDate() {
                     var el = document.getElementById('date');
                     var IsoDateRe = new RegExp("^([0-9]{4})-([0-9]{2})-([0-9]{2})$");
                     var matches = IsoDateRe.exec(el.value);
                     if (!matches) 
                             return false;

                     var composedDate = new Date(matches[1], (matches[2] - 1), matches[3]);

                     return ((composedDate.getMonth() === (matches[2] - 1)) &&
                                (composedDate.getDate() === matches[3]) &&
                                (composedDate.getFullYear() === matches[1]));
            }
            function numeric(){
                    var el = document.getElementById('cost');
                     if(el.value.match(/^[1-9]\d*(\.\d+)?$/))
                             return true;
                     else
                             return false;
             }

             function alphanumeric(){
                     var el = document.getElementById('desc');
                     if(el.value !== null && el.value !== "")
                             return true;
                     else
                             return false;
             }

             function letters(){
                     var el = document.getElementById('tech');
                     if(el.value.match(/^[a-zA-Z]+$/))
                             return true;
                     else
                             return false;
            }

             function checkForm(){
                     if(numeric() && alphanumeric() && letters() && validDate()){
                     return true;
                     }
                     else{
                             alert("Invalid input.");
                             return false;
                     }
             }
