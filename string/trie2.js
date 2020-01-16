
//Trie data structure
function trieNode(word){
    this.word = word,
    this.children = {},
    this.isWord = false;
    this.words = [];
    this.size = 0
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
       this.root = new trieNode('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var currNode = this.root;
    var origWord = word;
    var letter = word.slice(0,1); //first letter of word
    word = word.slice(1); // remaining word

    var child;

    while(letter.length > 0){
        if(currNode.children[letter] === undefined){
            child = new trieNode(letter);
            currNode.children[letter] = child;
            currNode.size++;
            currNode.words.push(origWord);
        }else{
            child = currNode.children[letter];
        } 
        currNode = child;        
        letter = word.slice(0,1);
        word = word.slice(1);       
    }
    child.isWord = true;   //Make isWord true at last letter of word to indicate word gets complete here
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var currNode = this.root;
    var letter = word.slice(0,1);
    word = word.slice(1);

    while(letter.length > 0 ){
        if(currNode.children[letter]){
			currNode = currNode.children[letter];			
            if(word.length == 0){  //when you reach last letter check isWord
                return currNode.isWord;
            }			
            letter = word.slice(0,1);
            word = word.slice(1);			           
        }else{
            return false;
        }        
    }    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var currNode = this.root;
    var letter = prefix.slice(0,1);
    prefix = prefix.slice(1);    

    while(letter.length > 0 ){
        if(!currNode.children[letter]){
            return false;
        }else{
			currNode = currNode.children[letter];			           			
            letter = prefix.slice(0,1);
            prefix = prefix.slice(1);			           
        }        
    } 
    return currNode.words;   
};


Trie.prototype.findLCP = function() {

	var currNode = this.root;
	var lcp = "";

    while(currNode && currNode.size == 1){
           currNode = Object.values(currNode.children)[0];
           lcp += currNode.word;
    } 
    return lcp;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


//   var obj = new Trie();
//   obj.insert("dog")
//   obj.insert("deer")
//   obj.insert("deal")
//   var param_2 = obj.search("deer")
//   var param_3 = obj.startsWith("de")

  var a = console.log;
var b = JSON.stringify;
// a("obj ", b(obj, "null", "\t") )
// a(" param2 deer ", param_2);
// a(" param_3 de ", param_3);


//  var obj = new Trie();
// obj.insert("sadness")
// obj.insert("sad")
// obj.insert("sadly")

// a("obj ", b(obj, "null", "\t") )

var obj = new Trie();
// obj.insert("grace")
// obj.insert("graceful")
// obj.insert("disgraceful")
// obj.insert("gracefully")

["code", "coder", "coding", "codable"].forEach((item)=>{
					obj.insert(item);
				})
a("obj ", b(obj, "null", 4) )
a("findLCP ", b(obj.findLCP(), "null", 4) )

