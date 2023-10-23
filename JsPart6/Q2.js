// str = "abcdabcdefgggh" , ans = "abcdefgh"

const str = "abcabcddfgg";

const uniqueChar = function(str){

    let ans = "";

    for(let i = 0;i< str.length;i++){

        let currChar = str[i];

        if(ans.indexOf(currChar) == -1){
            //ans.indexof(char) - gives -1 when ans don't have char , and gives 1 when ans have char
            ans += currChar;

        }

    }

    return ans;
}

console.log(uniqueChar(str))


