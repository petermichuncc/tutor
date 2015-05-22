
        if(getCookie("inprog") === "yes" && getCookie("jobcomplete") === "no"){
            setInterval("countdown2()", 1000);
        }

        setInterval( "pollServer2()", 3000 );

        function submitForm(action){
	//toggle form destination based on button clicked
        document.getElementById('frm').action = action;
        document.getElementById('frm').submit();
        }