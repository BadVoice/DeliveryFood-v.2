const partners = () => {

    const renderendItems = (data) => {
        data.forEach(item => {
            console.log(item)







        });
    }





    fetch('https://testdelivery-d0ff4-default-rtdb.firebaseio.com/db/partners.json')
        .then(response => response.json())
        .then(data => renderendItems(data))




}
partners()