function removeElement(parentDiv, childDiv){
    if (childDiv == parentDiv) {
         alert("The parent div cannot be removed.");
    }
    else if (document.getElementById(childDiv)) {     
         var child = document.getElementById(childDiv);
         var parent = document.getElementById(parentDiv);
         parent.removeChild(child);
    }
    else {
         alert("Child div has already been removed or does not exist.");
         return false;
    }
}