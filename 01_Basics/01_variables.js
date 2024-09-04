const account_id=144553
let account_email="kushagra@gmail.com"
var account_password="12345"

account_city="Jaipur"
let account_state


//account_id=2//not allowed
account_email="ks@gmail.com"
account_password="32323"
account_city="Lucknow"


/* 
prefer not to use var
because of issue in bloack scope and functional scope

*/

console.log(account_id);
console.table([account_id,account_email,account_password,account_city,account_state])
