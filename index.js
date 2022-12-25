let colorsoutw = $(".navin").outerWidth()
console.log(colorsoutw)
$(".strip-2icons").click(()=>{
    if($("nav").css("left")=="-280px"){
        $("nav").animate({"left":0},500)
        $(".navin ul").animate({"padding-top":"0px","opacity":"1"},1000)
    }else{
        $("nav").animate({"left":-colorsoutw},500)
        $(".navin ul").animate({"padding-top":"300px"},500)
        $(".navin ul").animate({"opacity":"0"},500)
    }
        if($(".fa-align-justify").css("display")=="block"){
            $(".fa-align-justify").css("display","none")
            $(".fa-xmark").css("display","block")
        }else{
            $(".fa-align-justify").css("display","block")
            $(".fa-xmark").css("display","none")
        }
})
$(".lies").click(()=>{
    if($("nav").css("left")=="-280px"){
        $("nav").animate({"left":0},500)
        $(".navin ul").animate({"padding-top":"0px","opacity":"1"},1000)
    }else{
        $("nav").animate({"left":-colorsoutw},500)
        $(".navin ul").animate({"padding-top":"300px"},500)
        $(".navin ul").animate({"opacity":"0"},500)
    }
        if($(".fa-align-justify").css("display")=="block"){
            $(".fa-align-justify").css("display","none")
            $(".fa-xmark").css("display","block")
        }else{
            $(".fa-align-justify").css("display","block")
            $(".fa-xmark").css("display","none")
        }
})


let recipesList =[]
async function getData(){
    let myData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    let list = await myData.json()
    recipesList=list.meals
    console.log(recipesList)
    display()
}
getData()
function display(){
    let temp =" "
    for(var i=0;i<recipesList.length;i++){
            temp+=`<div class="col-md-3 insideimgs overall" recipe-id="${i}" Recipe-text="${recipesList[i].strMeal}" Recipe-img="${recipesList[i].strMealThumb}" Recipe-inst="${recipesList[i].strInstructions}" Recipe-area="${recipesList[i].strArea}" Recipe-cat"${recipesList[i].strCategory}" Recipe-you"${recipesList[i].strYoutube}" Recipe-sour="${recipesList[i].strSource}" Recipe-ing1="${recipesList[i].strIngredient1}" Recipe-ing2="${recipesList[i].strIngredient2}" Recipe-ing3="${recipesList[i].strIngredient3}" Recipe-ing4="${recipesList[i].strIngredient4}" Recipe-ing5="${recipesList[i].strIngredient5}" Recipe-ing6="${recipesList[i].strIngredient6}" Recipe-ing7="${recipesList[i].strIngredient7}" ><div class="layer">${recipesList[i].strMeal}</div><img src="${recipesList[i].strMealThumb}" alt="" width="100%" srcset=""></div>`
    }
    document.getElementById("myRow").innerHTML = temp
    getinfo()
}
getData()
function getinfo(){
    $(".overall").click(function(){
        $(".finsbody").css("display","none")
        $(".search").css("display","none")
        $(".catries").css("display","none")
        $(".clickMainbody").css("display","block")
        document.getElementById("title").innerHTML=this.getAttribute("Recipe-text")
        document.getElementById("instructions").innerHTML=this.getAttribute("Recipe-inst")
        document.getElementById("areastr").innerHTML=this.getAttribute("Recipe-area")
        document.getElementById("catstr").innerHTML=this.getAttribute("Recipe-cat")
        $("#thumb").attr("src",this.getAttribute("Recipe-img"))
        $("#tagstr").attr("href",this.getAttribute("Recipe-sour"))
        $("#utube").attr("href",this.getAttribute("Recipe-you"))
        document.getElementById("ing1").innerHTML=this.getAttribute("Recipe-ing1")
        document.getElementById("ing2").innerHTML=this.getAttribute("Recipe-ing2")
        document.getElementById("ing3").innerHTML=this.getAttribute("Recipe-ing3")
        document.getElementById("ing4").innerHTML=this.getAttribute("Recipe-ing4")
        document.getElementById("ing5").innerHTML=this.getAttribute("Recipe-ing5")
        document.getElementById("ing6").innerHTML=this.getAttribute("Recipe-ing6")
        document.getElementById("ing7").innerHTML=this.getAttribute("Recipe-ing7")

    })
}





let searchlist=[]
async function getsearch(category){
    let mysearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
    let slist = await mysearch.json()
    searchlist=slist.meals;
    console.log(searchlist)
    SearchNameDisplay()
}
getsearch()
$("#searchInput").keyup(function(){
    let search=document.getElementById("searchInput").value;
    getsearch(search)
})
function SearchNameDisplay(){
    let nemp=" "
    for(var i=0;i<searchlist.length;i++){
        nemp+=`<div class="col-md-3 innersearch overall" recipe-id="${i}" Recipe-text="${searchlist[i].strMeal}" Recipe-img="${searchlist[i].strMealThumb}" Recipe-inst="${searchlist[i].strInstructions}" Recipe-area="${searchlist[i].strArea}" Recipe-cat"${searchlist[i].strCategory}" Recipe-you"${searchlist[i].strYoutube}" Recipe-sour="${searchlist[i].strSource}" Recipe-ing1="${searchlist[i].strIngredient1}" Recipe-ing2="${searchlist[i].strIngredient2}" Recipe-ing3="${searchlist[i].strIngredient3}" Recipe-ing4="${searchlist[i].strIngredient4}" Recipe-ing5="${searchlist[i].strIngredient5}" Recipe-ing6="${searchlist[i].strIngredient6}" Recipe-ing7="${searchlist[i].strIngredient7}" ><div class="layer"><h3>${searchlist[i].strMeal}</h3></div><img src="${searchlist[i].strMealThumb}" alt="" srcset="" width="100%"></div>`
    }
    document.getElementById("bodysearch").innerHTML=nemp
    getinfo()
}




let FirstNamelist=[]
async function getFNsearch(category){
    let myFNnsearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`)
    let FNnnlist = await myFNnsearch.json()
    FirstNamelist=FNnnlist.meals;
    console.log(FirstNamelist)
    forsearchdisplay()
}
getFNsearch()
$("#letter").keyup(function(e){
    var searchlettername = e.target.value
    getFNsearch(searchlettername)
})
function forsearchdisplay(){
    let fnemp=" "
    for(var i=0;i<FirstNamelist.length;i++){
        fnemp+=`<div class="col-md-3 innersearch overall" recipe-id="${i}" Recipe-text="${FirstNamelist[i].strMeal}" Recipe-img="${FirstNamelist[i].strMealThumb}" Recipe-inst="${FirstNamelist[i].strInstructions}" Recipe-area="${FirstNamelist[i].strArea}" Recipe-cat"${FirstNamelist[i].strCategory}" Recipe-you"${FirstNamelist[i].strYoutube}" Recipe-sour="${FirstNamelist[i].strSource}" Recipe-ing1="${FirstNamelist[i].strIngredient1}" Recipe-ing2="${FirstNamelist[i].strIngredient2}" Recipe-ing3="${FirstNamelist[i].strIngredient3}" Recipe-ing4="${FirstNamelist[i].strIngredient4}" Recipe-ing5="${FirstNamelist[i].strIngredient5}" Recipe-ing6="${FirstNamelist[i].strIngredient6}" Recipe-ing7="${FirstNamelist[i].strIngredient7}" ><div class="layer"><h3>${FirstNamelist[i].strMeal}</h3></div><img src="${FirstNamelist[i].strMealThumb}" alt="" srcset="" width="100%"></div>`
    }
    document.getElementById("bodysearch").innerHTML=fnemp
    getinfo()
}



let categolist=[]
async function getcatego() {
    let mycatego = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let catglist = await mycatego.json()
    categolist =  catglist.categories
    console.log(categolist)
    categoDisplay()
}
getcatego()
function categoDisplay(){
    let ctemp=" "
    for(var i=0;i<categolist.length;i++){
        ctemp+=`<div class="col-md-3 mb-5 catcat2" Recipe-text="${categolist[i].strCategory}"><div class="layer1"><h4>${categolist[i].strCategory}</h4><p>${categolist[i].strCategoryDescription}</p></div><img src="${categolist[i].strCategoryThumb}" alt="" srcset="" width="100%"></div>`
    }
    document.getElementById("bodycat").innerHTML=ctemp
    $(".catcat2").click(function(){
        console.log(this.getAttribute("Recipe-text"))
        $(".innercatries").css("display","block")
        $(".catries").css("display","none")
        getneededcat(this.getAttribute("Recipe-text"))
    })
}
let neededcat=[]
async function getneededcat(category){
    let myneed = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let neededlist = await myneed.json()
    neededcat = neededlist.meals;
    console.log(neededcat)
    neededDisplay()
}
getneededcat()
function neededDisplay(){
    let needtemp=" "
    for (let i = 0; i < neededcat.length; i++) {
        needtemp+=`<div class="col-md-3 mb-5 catcat2 overthree" recipe-id="${neededcat[i].idMeal}" Recipe-text="${neededcat[i].strMeal}" Recipe-img="${neededcat[i].strMealThumb}" Recipe-inst="${neededcat[i].strInstructions}" Recipe-area="${neededcat[i].strArea}" Recipe-cat"${neededcat[i].strCategory}" Recipe-you"${neededcat[i].strYoutube}" Recipe-sour="${neededcat[i].strSource}" Recipe-ing1="${neededcat[i].strIngredient1}" Recipe-ing2="${neededcat[i].strIngredient2}" Recipe-ing3="${neededcat[i].strIngredient3}" Recipe-ing4="${neededcat[i].strIngredient4}" Recipe-ing5="${neededcat[i].strIngredient5}" Recipe-ing6="${neededcat[i].strIngredient6}" Recipe-ing7="${neededcat[i].strIngredient7}" ><div class="layer2"><h3>${neededcat[i].strMeal}</h3></div><img src="${neededcat[i].strMealThumb}" alt="" srcset="" width="100%"></div>`
    }
    document.getElementById("bodyinnercat").innerHTML=needtemp
    $(".catcat2").click(function(){
        $(".clickMainbody").css("display","block")
        $(".innercatries").css("display","none")
        console.log(this.getAttribute("recipe-id"))
        forthreeTimes(this.getAttribute("recipe-id"))
        document.getElementById("instructions").innerHTML=idsthreeTimes[i].strInstructions
    })    
}
let idsthreeTimes=[]
async function forthreeTimes(category){
    let mythreeTimes = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${category}`)
    let threeTimesList= await mythreeTimes.json()
    idsthreeTimes = threeTimesList.meals;
    console.log(idsthreeTimes)
    document.getElementById("title").innerHTML=idsthreeTimes[0].strMeal
        document.getElementById("instructions").innerHTML=idsthreeTimes[0].strInstructions
        document.getElementById("areastr").innerHTML=idsthreeTimes[0].strArea
        document.getElementById("catstr").innerHTML=idsthreeTimes[0].strCategory
        $("#thumb").attr("src",idsthreeTimes[0].strMealThumb)
        $("#tagstr").attr("href",idsthreeTimes[0].strTags)
        $("#utube").attr("href",idsthreeTimes[0].strYoutube)
        document.getElementById("ing1").innerHTML=idsthreeTimes[0].strIngredient1
        document.getElementById("ing2").innerHTML=idsthreeTimes[0].strIngredient2
        document.getElementById("ing3").innerHTML=idsthreeTimes[0].strIngredient3
        document.getElementById("ing4").innerHTML=idsthreeTimes[0].strIngredient4
        document.getElementById("ing5").innerHTML=idsthreeTimes[0].strIngredient5
        document.getElementById("ing6").innerHTML=idsthreeTimes[0].strIngredient6
    threetimesDisplay()
}





let arealistall=[]
async function arealist(){
    let mylestarea=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let allarea = await mylestarea.json()
    arealistall=allarea.meals;
    console.log(arealistall)
    Displayarea()
}
arealist()
function Displayarea(){
    let areatemp = " "
    for (let i = 0; i < 20; i++) {
        areatemp+=`<div class="col-md-3 arealist" recipe-text="${arealistall[i].strArea}"><i class="fa-solid fa-city fa-3x"></i><h3>${arealistall[i].strArea}</h3><</div>`
    }
    document.getElementById("farea").innerHTML=areatemp
    $(".arealist").click(function(){
        console.log(this.getAttribute("recipe-text"))
        $(".innerarea").css("display","block")
        $(".area").css("display","none")
        getneededarea(this.getAttribute("recipe-text"))
    })
}
let neededarea=[]
async function getneededarea(category){
    let myneededarea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`)
    let neededarealist = await myneededarea.json()
    neededarea = neededarealist.meals;
    console.log(neededarea)
    neededareaDisplay()
}
function neededareaDisplay(){
    let areaneedtemp=" "
    for(let i=0;i<neededarea.length;i++){
        areaneedtemp+=`<div class="col-md-3 pb-5 areaarea2"  Recipe-id="${neededarea[i].idMeal}"><div class="layer"><h3>${neededarea[i].strMeal}</h3></div><img src="${neededarea[i].strMealThumb}" alt="" srcset="" width="100%"></div>`
    }
    document.getElementById("innerarea1").innerHTML=areaneedtemp
    $(".areaarea2").click(function(){
        $(".clickMainbody").css("display","block")
        $(".innerarea").css("display","none")
        console.log(this.getAttribute("Recipe-id"))
        forthreeTimes(this.getAttribute("Recipe-id"))
    })    
}






let ingradiantslist=[]
async function inglist(){
    let myinglist=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let alling = await myinglist.json()
    ingradiantslist=alling.meals;
    console.log(ingradiantslist)
    Displayinglist()
}
inglist()
function Displayinglist(){
    let ingtemp=" "
    for (let i = 0; i < 35; i++) {
        ingtemp+=`<div class="col-md-3 ingrediantslist item9"  recipe1="${ingradiantslist[i].strIngredient}">
        <i class="fa-solid fa-bowl-food fa-3x" ></i>
        <h3>${ingradiantslist[i].strIngredient}</h3>
        <p>${ingradiantslist[i].strDescription}</p></div>`
        
    }
    document.getElementById("ingrediantslist").innerHTML=ingtemp
    $(".item9").click(function(){
        console.log($(this).attr("recipe1"))
        $(".inneringrediants").css("display","block")
        $(".ingrediants").css("display","none")
        neededingList(this.getAttribute("recipe1"))
    })
}
let innerneededing=[]
async function neededingList(category){
    let myinnering = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`)
    let neededing = await myinnering.json()
    innerneededing=neededing.meals;
    console.log(innerneededing)
    DisplayInnerIng()
}
function DisplayInnerIng(){
    let ingingtemp=" "
    for (let i = 0; i < innerneededing.length; i++) {
    ingingtemp+=`<div class="col-md-3 pb-5 ingrediants2"  Recipe-id="${innerneededing[i].idMeal}" >
    <div class="layer" >
    <h3>${innerneededing[i].strMeal}</h3></div><img src="${innerneededing[i].strMealThumb}" alt="" srcset="" width="100%"></div>`    
}
document.getElementById("inneringrediants1").innerHTML=ingingtemp
$(".ingrediants2").click(function(){
    $(".clickMainbody").css("display","block")
    $(".inneringrediants1").css("display","none")
    $(".catries").css("display","none")
    $(".area").css("display","none")
    $(".contactus").css("display","none")
    $(".inneringrediants").css("display","none")
    console.log(this.getAttribute("Recipe-id"))
    forthreeTimes(this.getAttribute("Recipe-id"))
})  
}





$("#search1").click(function(){
    $(".search").css("display","block")
    $(".catries").css("display","none")
    $(".area").css("display","none")
    $(".innerarea").css("display","none")
    $(".contactus").css("display","none")
    $(".finsbody").css("display","none")
    $(".innercatries").css("display","none")
    $(".inneringrediants").css("display","none")
    $(".ingrediants").css("display","none")
    $(".clickMainbody").css("display","none")
    $(".threetimes").css("display","none")

})

$("#search2").click(function(){
    $(".catries").css("display","block")
    $(".search").css("display","none")
    $(".area").css("display","none")
    $(".innerarea").css("display","none")
    $(".contactus").css("display","none")
    $(".finsbody").css("display","none")
    $(".innercatries").css("display","none")
    $(".inneringrediants").css("display","none")
    $(".ingrediants").css("display","none")
    $(".clickMainbody").css("display","none")
    $(".threetimes").css("display","none")
})

$("#search3").click(function(){
    $(".area").css("display","block")
    $(".catries").css("display","none")
    $(".search").css("display","none")
    $(".catries").css("display","none")
    $(".innerarea").css("display","none")
    $(".contactus").css("display","none")
    $(".finsbody").css("display","none")
    $(".innercatries").css("display","none")
    $(".inneringrediants").css("display","none")
    $(".ingrediants").css("display","none")
    $(".clickMainbody").css("display","none")
    $(".threetimes").css("display","none")

})

$("#search4").click(function(){
    $(".ingrediants").css("display","block")
    $(".area").css("display","none")
    $(".catries").css("display","none")
    $(".search").css("display","none")
    $(".catries").css("display","none")
    $(".innerarea").css("display","none")
    $(".contactus").css("display","none")
    $(".finsbody").css("display","none")
    $(".innercatries").css("display","none")
    $(".inneringrediants").css("display","none")
    $(".clickMainbody").css("display","none")
    $(".threetimes").css("display","none")
})

$("#search5").click(function(){
    $(".contactus").css("display","block")
    $(".ingrediants").css("display","none")
    $(".area").css("display","none")
    $(".catries").css("display","none")
    $(".search").css("display","none")
    $(".catries").css("display","none")
    $(".innerarea").css("display","none")
    $(".finsbody").css("display","none")
    $(".innercatries").css("display","none")
    $(".inneringrediants").css("display","none")
    $(".clickMainbody").css("display","none")
    $(".threetimes").css("display","none")
})





var nameInput = document.getElementById("name")
$("#name").keyup(function(){
    var regexName = /[A-Za-z]+/
    if(regexName.test(nameInput.value)==true){
        $("#nameVlid").addClass("d-none")
        $("#nameVlid").removeClass("d-block")
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
    }else{
        $("#nameVlid").addClass("d-block")
        $("#nameVlid").removeClass("d-none")
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
    }
})

var mailinput =document.getElementById("email")
$("#email").keyup(function(){    
    var regexMail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[a-z]{2,3}$/
    if(regexMail.test(mailinput.value) ==true){
        $("#mailVlid").addClass("d-none")
        $("#mailVlid").removeClass("d-block")
        $("#email").addClass("is-valid")
        $("#email").removeClass("is-invalid")
    }else{
        
        $("#mailVald").addClass("d-block")
        $("#mailVald").removeClass("d-none")
        $("#email").addClass("is-invalid")
        $("#email").removeClass("is-valid")

    }
})

var pass =document.getElementById("pass")
var regexPass = /[A-Za-z]{7,}[0-9]+[A-Za-z]*/
$("#pass").keyup(function(){
    

    if(regexPass.test(pass.value) ==true ){
        $("#passVlid").addClass("d-none")
        $("#passVlid").removeClass("d-block")
        $("#pass").addClass("is-valid")
        $("#pass").removeClass("is-invalid")
    }else{
        
        $("#passVlid").addClass("d-block")
        $("#passVlid").removeClass("d-none")
        $("#pass").addClass("is-invalid")
        $("#pass").removeClass("is-valid")

    }
})

var rePass =document.getElementById("re-pass")
$("#re-pass").keyup(function(){
    
    if( rePass.value == pass.value ){
        $("#re-passVlid").addClass("d-none")
        $("#re-passVlid").removeClass("d-block")
        $("#re-pass").addClass("is-valid")
        $("#re-pass").removeClass("is-invalid")
    }else{
        $("#re-passVlid").addClass("d-block")
        $("#re-passVlid").removeClass("d-none")
        $("#re-pass").addClass("is-invalid")
        $("#re-pass").removeClass("is-valid")
    }
})

var phone =document.getElementById("phone")
$("#phone").keyup(function(){
    var phoneregex = /[0-9]{11}/
    if( phoneregex.test(phone.value)==true){
        $("#phoneVlid").addClass("d-none")
        $("#phoneVlid").removeClass("d-block")
        $("#phone").addClass("is-valid")
        $("#phone").removeClass("is-invalid")
    }else{
        $("#phoneVlid").addClass("d-block")
        $("#phoneVlid").removeClass("d-none")
        $("#phone").addClass("is-invalid")
        $("#phone").removeClass("is-valid")
    }
})

var age =document.getElementById("age")
$("#age").keyup(function(){
    
    if( age.value<100 && age.value>0 ){
        $("#ageVlid").addClass("d-none")
        $("#ageVlid").removeClass("d-block")
        $("#age").addClass("is-valid")
        $("#age").removeClass("is-invalid")
    }else{
        $("#ageVlid").addClass("d-block")
        $("#ageVlid").removeClass("d-none")
        $("#age").addClass("is-invalid")
        $("#age").removeClass("is-valid")
    }
})

$("input").keyup(function(){
    if(phoneregex.test(phone.value)==true && regexName.test(nameInput.value )&& regexMail.test(mailinput.value) ==true && regexPass.test(pass.value) && rePass.value == pass.value && age.value<100 && age.value>0  ){
        $("#submitbuttn").css("display","block")
        $("#submit1").css("display","block")
    }
})

