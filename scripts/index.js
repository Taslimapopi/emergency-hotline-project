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

const callList = document.getElementById("callList");

document.getElementById('services').addEventListener('click', function (e) {
  

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
      `<div class=" md:flex md:justify-between md:items-center bg-[#D9D9D9] rounded-[8px] py-2 px-4 my-3">
                <div >
                    <h3 class="title text-[12px] font-semibold">${cardTitle}</h3>
                    <p class="number text-[10px] text-gray-600">${serviceNumber}</p>
                </div>
                <p class="text-[10px]">${callingTime}</p>
            </div>
`
        callList.append(newcallRecord)
    
    }
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('callList').innerHTML = "";
});

//  copy button Funtion

document.getElementById('services').addEventListener('click', function (e) {

    const copyElement = e.target.classList.contains('copyCls');


    if (copyElement) {
        const totalCopyElement = document.getElementById('totalCopy');
        const currentCopy = Number(totalCopyElement.innerText);
        totalCopyElement.innerText = currentCopy + 1;

        // clipboard copy
        const cardTitle = e.target.parentNode.parentNode.children[1].innerText
   
     const serviceNumber = e.target.parentNode.parentNode.children[3].innerText 
    
     navigator.clipboard.writeText(serviceNumber)
    .then(() => {
      alert(`${cardTitle} '${serviceNumber}' copied in clipboard`);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
    });  
    }
});


