// complete the given function

function palindrome(str){
	let j = str.length-1;
	let count=0;
	for(let i=0;i<str.length;i++){
		if(str.charAt[i]==str.charAt[j]){
			count++;
		}
		else{
			return false;
		}
		return true;
	}
}
module.exports = palindrome
