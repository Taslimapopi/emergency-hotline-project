// Heart Icon funtion

document.getElementById('services').addEventListener('click', function (e) {
   
    const heartElement = e.target.classList.contains('heart');
    if (heartElement) {
        const totalHeartElement = document.getElementById('totalHeart');
        const currentCount = Number(totalHeartElement.innerText);
        totalHeartElement.innerText = currentCount + 1;
    }
});

// call buttons funtions

document.getElementById('services').addEventListener('click', function (e) {
  
    // const callElement = e.target.classList.contains('call-btn');

    if (e.target.className.includes('call-btn')){

        const totalcoin = Number(document.getElementById("totalCoin").innerText)
        if (totalcoin<20){
            alert('Not enough coin to call')
            return
        }
        
        const cardTitle = e.target.parentNode.parentNode.children[1].innerText

        const serviceNumber = e.target.parentNode.parentNode.children[3].innerText

    alert(`📞${cardTitle}, ${serviceNumber}...`)

    const currentCoin = Number(document.getElementById("totalCoin").innerText) - 20

    document.getElementById("totalCoin").innerText = currentCoin

    const callingTime = new Date().toLocaleTimeString();

    const callRecord = document.getElementById("callHistory")

     const newcallRecord = document.createElement("div")

     newcallRecord.innerHTML =
      `<div class="flex justify-between items-center bg-[#D9D9D9] rounded-[8px] py-2 px-4 my-3">
                <div >
                    <h3 class="title text-[12px] font-semibold">${cardTitle}</h3>
                    <p class="number text-[10px] text-gray-600">${serviceNumber}</p>
                </div>
                <p class="text-[10px]">${callingTime}</p>
            </div>
`
        callRecord.append(newcallRecord)
    
    }
});