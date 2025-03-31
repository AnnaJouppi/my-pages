function loading() {
    let loading = 0;
    const result= document.getElementById('result');
 
    const interval = setInterval(() => {
        loading += 10; // Increment loading by 10
        if (loading < 100) {
            result.innerHTML = `Loading... ${loading}%`;
            }
        else {
            result.innerHTML = `Loading finished!`;
            clearInterval(interval); 
        
        
}
 }, 1000); } // Update every second

loading(); // Call the loading function to start the loading process