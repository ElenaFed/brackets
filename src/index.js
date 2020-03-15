module.exports = function check(str, bracketsConfig) {
	let arr = [];
	arr.push(str[0]);
	let brCon = bracketsConfig;
    for (let i = 1; i < str.length; i++){
        let stLen = arr.length;
        for (let j = 0; j < brCon.length; j++){
            if (str[i] == brCon[j][0]){
                if (arr[arr.length - 1] == str[i] && brCon[j][0] == brCon[j][1]){
                    arr.pop();
                    break;
                }
                arr.push(str[i]);
               break;
            }
            if (str[i] == brCon[j][1] && brCon[j][0] == arr[arr.length - 1]){
                arr.pop();
              break;
            }
        }
        if (stLen == arr.length) return false;
       }
      return arr.length == 0 ? true:false;
   }
