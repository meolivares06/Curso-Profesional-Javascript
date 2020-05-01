const printOnDesktop = value => {
    const desktop = document.querySelector('.desktop');
    desktop.innerHTML += value + '<br>';
}

export default printOnDesktop;