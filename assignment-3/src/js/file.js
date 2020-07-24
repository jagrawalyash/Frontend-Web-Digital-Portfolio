window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 270);
});

// ---------------------------------------------------

    function convertMinutestoSecond(hours) {
     return Math.floor(hours * 60);
    }
// ---------------------------------------------------

    function dividesEvenly(a,b){
 		return (a % b === 0);
    }
// ---------------------------------------------------

	function str_con_cat(str1, str2) {
	  var i = 0,n = 0,j = 0; 
  
            while (true) { 
                j = str1.indexOf(str2, j); 
                if (j >= 0) { 
                    n++; 
                    j++; 
                } else 
                    break; 
            } 
            return n;
	}
// ---------------------------------------------------

	function addUpto(num){
		var i,sum = 0;
		var n = Number(num);
		for (i = 1; i < n+1; i++) {
  				sum+=i;
		}
		return sum;
	}
// ---------------------------------------------------

	function replaceVowel(str){
		var newStr;
		
		for(var i = 0; i < str.length; i++){
			var letter = str.charAt(i);
			if(letter === 'a')
				newStr+='1';
			
			else if(letter === 'e')
				newStr+='2';
			
			else if(letter === 'i')
				newStr+='3';
			
			else if(letter === 'o')
				newStr+='4';
			
			else if(letter === 'u')
				newStr+='5';

			else 
				newStr+=letter;
		}
		return newStr;				
	}
// ---------------------------------------------------

	function reverseWord(str){
        return str.split("").reverse().join("");
	}

	function matchFirst(str,letter){
		if(str.charAt(0)===letter)
			return true;
		else
			return false;
	}

	function specialReverse(str,letter){
		var word = [];
		word = str.split(' ');
		var res = [];
		for(var i=0; i<word.length; i++){
			if(matchFirst(word[i],letter))
				res.push(reverseWord(word[i]));
			else
				res.push(word[i]);
		}
		return res.join(' ');
	}
// ---------------------------------------------------
	function testJackpot(arr){ 
		const allEqual = arr => arr.every( v => v === arr[0] ); 
		return allEqual(arr); 
	}
// ---------------------------------------------------

	function removeDups(arr){
		return arr.filter((value,index) => arr.indexOf(value) === index); 
	}

	function convertToArray(str){
		var arr = [];
		arr = str.split(",");
		return arr;
	}
// ---------------------------------------------------

	function realType(data){
		if(typeof(data)=='object')
			if(Array.isArray(data))
				return 'Array';
			else if(data==null)
				return 'null';
		return typeof(data);
	}
// 	console.log(realType(null));
// ---------------------------------------------------
	function numInStr(data){
		var hasNumber = /\d/;
		var arr = [];
		for(var i in data)
			if(hasNumber.test(data[i])){
				arr.push(data[i]);
			}
		return arr;
	}
	// console.log(numInStr(["1a", "a", "2b", "b"]));
//------------------------------------------------------
 	console.log(realType (1))
	console.log(realType("a"))
	console.log(realType(true))
	console.log(realType ([])) 
	console.log(realType(null)) 
//------------------------------------------------------
