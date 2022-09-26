const btnAddNewNote = $("#btnAddNewNote");
const btnSaveAsFile = $("#btnSaveAsFile");
const btnUploadNote = $("#btnUploadNote");
const modal = $("#modal");
const btnCloseModal = $("#btnCloseModal");
const btnAddNote = $("#btnAddNote");
const notePlace = $("#notePlace");

let notes = [];
let noteId = 0;
let idNote = 0;
let uploadedNotes = ""
let notesBody = ""
let notesLength = 1;
let key = 100;
let arg = [];
let saveStatus = "";

btnAddNewNote.on("click", ()=>{
    saveStatus = "add";
    modal.removeClass("hidden");
})

btnCloseModal.on("click", ()=>{
    $("#title").val("");
    $("#desc").val("");
    modal.addClass("hidden");
})

btnAddNote.on("click", ()=>{
    if(saveStatus == "add"){

        const date = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        $(`<div class="notes w-[80%] mx-auto md:mx-0 md:w-[40%] lg:w-[20%] bg-slate-50 rounded-md shadow-md my-5 min-h-[250px] relative note">
                <p t="t" class="title text-2xl font-bold text-slate-500 leading-relaxed tracking-wide pt-2 pl-5">`+$("#title").val()+`</p>
                <p d="d" class="description text-base font-semibold text-slate-500 text-justify pt-2 px-5">`+$("#desc").val()+`</p>
                <div class="w-full flex flex-wrap justify-between mx-auto px-5 bottom-5 absolute">
                    <hr class="border border-slate-300 mb-4 w-full">
                    <p class="dateTime text-base text-slate-500 font-semibold h-fit">`+months[date.getMonth()]+` `+date.getDate()+`, `+date.getFullYear()+`</p>
                    <div class="w-min group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-fit bi bi-three-dots fill-slate-500 py-0 setting w-8 group-hover:scale-0 group-hover:transition-all group-out-of-range:scale-100" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                        <div class="border bg-slate-50 rounded-md shadow-md absolute bottom-0 right-10 scale-0 group-hover:scale-100 group-hover:origin-bottom-right group-hover:transition-all hover:cursor-pointer ease-in-out">
                            <span class="font-base flex justify-evenly flex-wrap px-3 py-2 hover:text-slate-500 btnEdit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil self-center justify-self-start" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                                <span class="pl-2" title="`+$("#title").val()+`" desc="`+$("#desc").val()+`" noteId="`+noteId+`">Edit</span>
                            </span>
                            <hr class="w-full border">
                            <span class="font-base flex justify-evenly flex-wrap px-3 py-2 hover:text-slate-500 btnDelete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash self-center" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                  </svg>
                                  <span class="pl-2">
                                      Delete
                                  </span>
                                </span>
                        </div>
                    </div>
                </div>
            </div>`).insertAfter($("#notePlace"));
            noteId++;
    
    
    // console.log(blob)
    // console.log(blob)
        $("#title").val("");
        $("#desc").val("");
        modal.addClass("hidden");
    }else if(saveStatus == "edit"){
        // $("[noteId='"+idNote+"").(".title").text($("#title").val())
        $("[noteId='"+idNote+"").attr("title",$("#title").val())
        // $("[noteId='"+idNote+"").closest(".description").text($("#desc").val())
        $("[noteId='"+idNote+"").attr("desc",$("#desc").val())
        // console.log(idNote)
        $("[noteId='"+idNote+"']").parent().parent().parent().parent().siblings("p").eq(0).text($("#title").val())
        $("[noteId='"+idNote+"']").parent().parent().parent().parent().siblings("p").eq(1).text($("#desc").val())
        $("#title").val("");
        $("#desc").val("");
        modal.addClass("hidden");
    }
})

btnUploadNote.on("click",()=>{
    // const inputFile = document.createElement('input')
    // inputFile.type = "file"
    $("#inputFile").get(0).click()

})

document.getElementById('inputFile').addEventListener('change', function() {
    var fr=new FileReader();
    fr.onload=function(){
        let data = fr.result
        // console.log(data)
        let keypass = data.split("<=(#key)")[0];
        keypass = keypass.split("");
        let myKey = 0;
        for(a = 0; a < keypass.length; a++){
            myKey += parseInt(keypass[a]);
        }
        // console.log(myKey)
        if(myKey == 100){
            uploadedNotes = data.split("<=(#key)")[1]
            let length = parseInt(uploadedNotes.split("(#length)=>")[1])
            for(a = ($(".notes").length - 1); a >= 0; a--){
                $(".notes").eq(a).remove();
            }
            $(".invalid").eq(0).remove();
            
            for (a = 1; a <= length; a++){
                let thisNote = uploadedNotes.split("<=(#notes"+a+")")[0];
                uploadedNotes = uploadedNotes.split("<=(#notes"+a+")")[1];
                let title = thisNote.split("<=(#title)")[0];
                let desc = thisNote.split("<=(#title)")[1].split("<=(#desc)")[0];
                let dates = thisNote.split("<=(#desc)")[1].split("<=(#date)")[0];
                // console.log(thisNote.split("<=(#title)")[0])
                // console.log(a)
                const date = new Date();
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                $(`<div class="notes w-[80%] mx-auto md:mx-0 md:w-[40%] lg:w-[20%] bg-slate-50 rounded-md shadow-md my-5 min-h-[250px] relative note">
                <p t="t" class="title text-2xl font-bold text-slate-500 leading-relaxed tracking-wide pt-2 pl-5">`+title+`</p>
                <p d="d" class="description text-base font-semibold text-slate-500 text-justify pt-2 px-5">`+desc+`</p>
                <div class="w-full flex flex-wrap justify-between mx-auto px-5 bottom-5 absolute">
                    <hr class="border border-slate-300 mb-4 w-full">
                    <p class="dateTime text-base text-slate-500 font-semibold h-fit">`+dates+`</p>
                    <div class="w-min group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-fit bi bi-three-dots fill-slate-500 py-0 setting w-8 group-hover:scale-0 group-hover:transition-all group-out-of-range:scale-100" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                        <div class="border bg-slate-50 rounded-md shadow-md absolute bottom-0 right-10 scale-0 group-hover:scale-100 group-hover:origin-bottom-right group-hover:transition-all hover:cursor-pointer ease-in-out">
                            <div class="font-base flex justify-evenly flex-wrap px-3 py-2 hover:text-slate-500 btnEdit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil self-center justify-self-start" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                                <span class="pl-2" title="`+title+`" desc="`+desc+`" noteId="`+noteId+`">Edit</span>
                            </div>
                            <hr class="w-full border">
                            <span class="font-base flex justify-evenly flex-wrap px-3 py-2 hover:text-slate-500 btnDelete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash self-center" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                  </svg>
                                  <span class="pl-2">
                                      Delete
                                  </span>
                                </span>
                        </div>
                    </div>
                </div>
            </div>`).insertAfter($("#notePlace"));
            noteId ++;
            }
        }else{
            $(`<div class="invalid w-[80%] mx-auto md:mx-0 md:w-[40%] lg:w-[20%] bg-slate-50 rounded-md shadow-md my-5 relative note">
            <p class="text-2xl font-bold text-red-500 text-center my-5">Data is invalid !</p>
        </div>`).insertAfter($("#notePlace"));
        }
    }
    fr.readAsText(this.files[0]);
    $("#inputFile").val("")
    // console.log($("#inputFile").val())
})

btnSaveAsFile.on("click", ()=>{
    while (key > 0) {
        // console.log(Math.random())
        let x = Math.floor((Math.random() * 10) + 1);
        if( key - x >= 0 && x != 10){
            // console.log(key+" - "+x)
            key -= x;
            arg.push(x)
        }
    }
    let x = arg.join("");
    notesBody = x+"<=(#key)";
    for(a = ($(".notes").length - 1); a >= 0; a--){
        notesBody += $(".title").eq(a).text()+"<=(#title)"
                +$(".description").eq(a).text()+"<=(#desc)"
                +$(".dateTime").eq(a).text()+"<=(#date)"
                +"<=(#notes"+notesLength+")";
        notesLength ++;
    }
    notes.push(notesBody+"(#length)=>"+(notesLength - 1))
    // console.log(notes)
    // console.log(notes)
    
    
    const blob = new Blob(notes, {type : "text/plain"})
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = "MyNotes"
    link.href = fileUrl
    link.click()
    notesBody = "";
    notes = [];
    notesLength = 1;
})

$(document).on("click",".btnEdit",(e)=>{
    saveStatus = "edit";
    $("#title").val($(e.target).attr("title"))
    $("#desc").val($(e.target).attr("desc"))
    idNote = $(e.target).attr("noteId")
    // console.log(idNote)
    modal.removeClass("hidden");
})
$(document).on("click",".btnDelete",(e)=>{
    // console.log(
        $(e.target).closest(".notes").remove()
    // )
})