const DEFAULT_FONTSIZE = "1.3em";

function changeOption()
{
    let myMenu;
    let myIdx;
    myMenu = document.testForm.select;
    myIdx  = myMenu.options.selectedIndex;
    alert(myIdx);
}

// let selectMenu;
// let selectIdx;
// selectMenu = document.testForm.select;
// selectIdx  = selectMenu.options.selectedIndex;
// console.log(selectIdx);