const paras = document.querySelector('#numOfWords');
const container = document.querySelector(".container");
const colors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
];
const generateWords = (n)=>{
    const letter = 'ABCDEFGHIJKLNOPQRSTUVWXYZ'.toLowerCase()
     let text = "";
    for(let i = 0; i < n; ++i){
        
        text +=letter[(Math.random()*24).toFixed(0)];
        // console.log(text)
    }
    return text.charAt(0).toUpperCase()+text.slice(1); 
}
// console.log(generateWords((Math.random() * 15).toFixed(0)));

let numOfWords;
const generatePara = () =>{
   numOfWords = Number(paras.value)
    let paragraph = ''
   const para = document.createElement('p');
    for(let i = 0 ; i< numOfWords;i++){
        
        if(i==numOfWords-1){
             paragraph += generateWords((Math.random() * 15).toFixed(0)) + '.';
        }else{
            paragraph += generateWords((Math.random() * 15).toFixed(0)) + " ";
        }
    }

   para.innerText = paragraph;
   
   para.setAttribute('class','paras');
 para.style.backgroundColor = colors[(Math.random() * (colors.length - 1)).toFixed(0)];
 para.style.color = 'white';
    container.append(para)
}
