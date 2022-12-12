let sports: string[] = ["sepak bola", "bulu tangkis", "berenang", "panahan"]

// for old 
for( let i = 0; i < sports.length; i++){
    console.log("sports for primitive",sports[i]);
}

//for new
for(let sport of sports){
    console.log("sports for new way", sport);
}

//for new with logic 
for(let sport of sports){
    // console.log("sports for new way", sport);

    if(sport === "berenang"){
        console.log(sport + "<< My Favorite");
    } else {
        console.log(sport);
        
    }
}


