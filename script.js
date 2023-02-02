// complete the given function

function palindrome(str){
	if(str.length== 0){
		return false;
	}
	
	let left =0;
	let right = str.length-1;
	while(left<=right){
		if(str[left]!==str[right]){
			return false;
		}
		left++;
		right--;
		}
	return true;
	}

module.exports = palindrome
