
function removeWords(original, wordsToRemove){
    let result = "";
    const originalTable = original.split(" ");

    for(let i = 0; i <= originalTable.length; i++){
        for(let j = 0; j<= wordsToRemove.length; j++){
            if(originalTable[i] == wordsToRemove[j]){
                delete originalTable[i]
            }
        }
    }
    for(let k of originalTable){
        result += " " + k
    }
    return result;
}

let org = "Hello, voici la phrase";
const wtr = ['voici', 'un', 'phrase']; 

console.log(removeWords(org, wtr));
