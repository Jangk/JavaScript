const DEFAULT_FONTSIZE = "1.3em";


document.getElementById("HeadText").onclick = 
function()
{
    if(this.style.fontSize === DEFAULT_FONTSIZE)
    {
        this.style.fontSize = "5em";
        this.style.textAlign = "left";
    }
    else
    {
        this.style.fontSize = DEFAULT_FONTSIZE
        this.style.textAlign = "center";
    }
};


