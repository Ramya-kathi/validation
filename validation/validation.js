        const loginform=document.getElementById("loginform");
        loginform.addEventListener('submit',validate);
        function validate(event){
            event.preventDefault();
            const email=document.getElementById("email");
            const password=document.getElementById("password");
            const confirm=document.getElementById("confirm");
            if(email){
            if(!validateemail(email.value)){
                alert("enter valid email");
                return;
            }}
            if(password){
            if(!validatepassword(password.value))
            {
                alert("please enter valid password");
                return;
            }
        }
        if(confirm)
        {
            if(!validateconfirm(confirm.value,password.value))
            {
                alert("enter same password");
                return;
            }
        }
             
            alert("Success!!!!");
        }
        function validateemail(email){
            const emailregx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+\.[a-zA-Z]{2,}$/;
            return emailregx.test(email);
        }
        function validatepassword(password){
            const minlength=8;
            const hasUpperCase=/[A-Z]/.test(password)
            const hasLowerCase=/[A-Z]/.test(password)
            const hasNumber=/\d/.test(password)
            return(password.length>=minlength && hasUpperCase && hasLowerCase && hasNumber)
        }
        function validateconfirm(confirm,password){
            if(password==confirm){
                return true;
            }
        }