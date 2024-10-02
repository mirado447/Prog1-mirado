import { expect } from "chai";
import { describe } from "mocha";
import {removeWords} from "./RemoveWords";

let original = "Hello, voici la phrase";
const wordsToRemove = ['phrase']; 

describe("Remove words test", function(){
    it("should remove the words in array", function() {
        expect(removeWords(original, wordsToRemove)).to.eq("Hello, voici la");
    });
})