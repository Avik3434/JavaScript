const accountId = 12485;
let accountEmail = "example@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

/*
Prefer not to use var
because if issue in block and scope and functional scope 
*/

accountEmail = "exmp@gmail.com"
accountPassword = "1234"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])