// complete the given function

function palindrome(str){
		let i = 0 ;
	let n = str.length-1;
	
	   
	while(i<n){
	    if(str[i].toLowerCase()!==str[n].toLowerCase() ){
	        return false;
	        
	    };
		i++;
		n--;
	}
	return true;

}
module.exports = palindrome
