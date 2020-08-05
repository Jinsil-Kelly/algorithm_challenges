const finalPrices = function(prices) {
    for(let x=0;x<prices.length;x+=0){
        let dis = 0
        for(let y=x+1;y<prices.length;y+=0){
            if(prices[y] <= prices[x]){
                dis = prices[y]
                break;
            }
            dis -= prices[x]
            
    }    
        }
        
    return prices
};

 