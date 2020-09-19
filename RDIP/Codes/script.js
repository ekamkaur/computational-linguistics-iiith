english = [
    [
        "John ate an apple before afternoon", 
        "before afternoon John ate an apple",
        "John before afternoon ate an apple"
    ],
    [
        "some students like to study at night",
        "at night some students like to study"
    ],
    [
        "John and Mary went to church",
        "Mary and John went to church"
    ],
    [
        "John went to church after eating",
        "after eating John went to church",
        "John after eating went to church"
    ],
    [
        "did he go to market",
        "he did go to market"
    ],
    [
        "the woman who called my sister sells cosmetics",
        "the woman who sells cosmetics called my sister",
        "my sister who sells cosmetics called the woman",
        "my sister who called the woman sells cosmetics"
    ],
    [
        "John goes to the library and studies",
        "John studies and goes to the library"
    ],
    [
        "John ate an apple so did she",
        "she ate an apple so did John"
    ],
    [
        "the teacher returned the book after she noticed the error",
        "the teacher noticed the error after she returned the book",
        "after the teacher returned the book she noticed the error",
        "after the teacher noticed the error she returned the book",
        "she returned the book after the teacher noticed the error",
        "she noticed the error after the teacher returned the book",
        "after she returned the book the teacher noticed the error",
        "after she noticed the error the teacher returned the book"

    ],
    [
        "I told her that I bought a book yesterday",
        "I told her yesterday that I bought a book",
        "yesterday I told her that I bought a book",
        "I bought a book that I told her yesterday",
        "I bought a book yesterday that I told her",
        "yesterday I bought a book that I told her"
    ]
]
hindi = [
    [
        "राम और श्याम बाजार गयें", 
        "राम और श्याम गयें बाजार",
        "बाजार गयें राम और श्याम",
        "गयें बाजार राम और श्याम"
    ],
    [
        "राम सोया और श्याम भी",
        "श्याम सोया और राम भी",
        "सोया श्याम और राम भी",
        "सोया राम और श्याम भी"
    ],
    [
        "मैंने उसे बताया कि राम सो रहा है",
        "मैंने उसे बताया कि सो रहा है राम",
        "उसे मैंने बताया कि राम सो रहा है",
        "उसे मैंने बताया कि सो रहा है राम",
        "मैंने बताया उसे कि राम सो रहा है",
        "मैंने बताया उसे कि सो रहा है राम",
        "उसे बताया मैंने कि राम सो रहा है",
        "उसे बताया मैंने कि सो रहा है राम",
        "बताया मैंने उसे कि राम सो रहा है",
        "बताया मैंने उसे कि सो रहा है राम",
        "बताया उसे मैंने कि राम सो रहा है",
        "बताया उसे मैंने कि सो रहा है राम"
    ],
    [
        "राम खाकर सोया",
        "खाकर राम सोया",
        "राम सोया खाकर",
        "खाकर सोया राम",
        "सोया राम खाकर",
        "सोया खाकर राम"
    ],
    [
        "बिल्लियों को मारकर कुत्ता सो गया",	
        "मारकर बिल्लियों को कुत्ता सो गया", 
        "बिल्लियों को मारकर सो गया कुत्ता",
        "मारकर बिल्लियों को सो गया कुत्ता",
        "कुत्ता सो गया बिल्लियों को मारकर",
        "कुत्ता सो गया मारकर बिल्लियों को",
        "सो गया कुत्ता बिल्लियों को मारकर",
        "सो गया कुत्ता मारकर बिल्लियों को"
    ],
    [
        "एक लाल किताब वहाँ है",
        "एक लाल किताब है वहाँ",
        "वहाँ है एक लाल किताब",
        "है वहाँ एक लाल किताब"
    ],
    [
        "एक बड़ी सी किताब वहाँ है",
        "एक बड़ी सी किताब है वहाँ",
        "बड़ी सी एक किताब वहाँ है",
        "बड़ी सी एक किताब है वहाँ",
        "वहाँ है एक बड़ी सी किताब",
        "वहाँ है बड़ी सी एक किताब",
        "है वहाँ एक बड़ी सी किताब",
        "है वहाँ बड़ी सी एक किताब"
    ]
]
let p = document.getElementById('text');
let butdiv = document.getElementById('but');
let p2 = document.getElementById('text2');
let butText = document.getElementById('textBut');
let butReform = document.getElementById('reformBut');
let butCheck = document.getElementById('checkBut');
let sen = null;
let lenRemain = null;
let  allSen = null;
let ansRight = document.getElementById('rightAns');
let ansWrong = document.getElementById('wrongAns');
let butGetCorrect = document.getElementById('getCorrectBut');
let senCorrect = document.getElementById('correctSen');
function Hidden(e)
{
    butReform.setAttribute("hidden", false);
    p2.setAttribute("hidden", false);
    butText.innerText = '';
    butCheck.setAttribute("hidden", false);
    ansRight.setAttribute("hidden", false);
    ansWrong.setAttribute("hidden", false);
    butGetCorrect.innerText="Get Correct Sentence";
    butGetCorrect.setAttribute("hidden", false);
    senCorrect.setAttribute("hidden", false);
    senCorrect.innerHTML = '';
    if ( e.value == '1' )
      {
        p.removeAttribute("hidden");
        butdiv.removeAttribute("hidden");
        butdiv.innerHTML = '<br>';
        allSen = english[Math.floor(Math.random() * 10)];
        sen = allSen[0].split(' ');
        lenRemain = sen.length;
        sen.sort(function(a, b){return 0.5 - Math.random()});
        for (let i = 0; i < sen.length; i++)
        {
            butdiv.innerHTML = butdiv.innerHTML + '<span>&nbsp<button onclick="butClick(this)" type="button" class="btn btn-dark">' + sen[i] + '</button>&nbsp</span>';
        }
      }
    else if( e.value == '2' )
      {
        p.removeAttribute("hidden");
        butdiv.removeAttribute("hidden");
        butdiv.innerHTML = '<br>';
        allSen = hindi[Math.floor(Math.random() * 7)];
        sen = allSen[0].split(' ');
        lenRemain = sen.length;
        sen.sort(function(a, b){return 0.5 - Math.random()});
        for (let i = 0; i < sen.length; i++)
        {
            butdiv.innerHTML = butdiv.innerHTML + '<span>&nbsp<button onclick="butClick(this)" type="button" class="btn btn-dark">' + sen[i] + '</button>&nbsp</span>';
        }
      }
    else
      {
        p.setAttribute("hidden", false);
        butdiv.setAttribute("hidden", false);
        sen = null;
        lenRemain = null;
        alert('Select language');
      }
}
function butClick(e)
{
    p2.removeAttribute("hidden");
    butText.removeAttribute("hidden");
    butText.innerText = butText.innerText + ' ' + e.innerText;
    butReform.removeAttribute("hidden");
    e.parentElement.setAttribute("hidden", false);
    lenRemain--;
    if(lenRemain===0)
    butCheck.removeAttribute("hidden");

}
function reformFun()
{
    p2.setAttribute("hidden", false);
    butText.innerText = '';
    butText.setAttribute("hidden", false);
    butReform.setAttribute("hidden", false);
    senCorrect.setAttribute("hidden", false);
    butGetCorrect.innerText="Get Correct Sentence";
    butGetCorrect.setAttribute("hidden", false);
    senCorrect.innerHTML = '';
    butdiv.innerHTML = '<br>';
    for (let i = 0; i < sen.length; i++)
    {
        butdiv.innerHTML = butdiv.innerHTML + '<span>&nbsp<button onclick="butClick(this)" type="button" class="btn btn-dark">' + sen[i] + '</button>&nbsp</span>';
    }
    butCheck.setAttribute("hidden", false);
    ansRight.setAttribute("hidden", false);
    ansWrong.setAttribute("hidden", false);
    lenRemain = sen.length;
}
function checkFun()
{
    senCorrect.setAttribute("hidden", false);
    butGetCorrect.innerText="Get Correct Sentence";
    let s = butText.innerText;
    let f = true;
    for(let i=0; i<allSen.length; i++)
    {
        if(s===allSen[i])
        {
            ansRight.removeAttribute("hidden");
            f = false;
            break;
        }
    }
    if(f)
    {
        ansWrong.removeAttribute("hidden");
        butGetCorrect.removeAttribute("hidden");
    }
}
function getCorrectFun()
{
    if(butGetCorrect.innerText==="Get Correct Sentence")
    {
        senCorrect.removeAttribute("hidden");
        if(senCorrect.innerHTML==='')
        {
            for(let i = 0; i < allSen.length; i++)
            {
                senCorrect.innerHTML = senCorrect.innerHTML + allSen[i] + '<br>';
            } 
        }
        butGetCorrect.innerText="Hide the correct sentence";
    }
    else if(butGetCorrect.innerText==="Hide the correct sentence")
    {
        senCorrect.setAttribute("hidden", false);
        butGetCorrect.innerText="Get Answers";
    }
    else
    {
        senCorrect.removeAttribute("hidden");
        butGetCorrect.innerText="Hide the correct sentence";
    }
}