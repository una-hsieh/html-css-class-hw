document.addEventListener('DOMContentLoaded',() => {
    const tabMenu = document.querySelector('.tab-menu');
    const allTabs = document.querySelectorAll('.tab-item');
    const allContents = document.querySelectorAll('.tab-content');


    tabMenu.addEventListener ('click',(e) => {
        const clickedTab = e.target.closest('.tab-item');
        allTabs.forEach(tab => { 
            tab.classList.remove('active')
        });
        clickedTab.classList.add('active');
      
            
        const targetId = clickedTab.dataset.target;
        allContents.forEach(content => { 
            content.classList.remove('active');
            if (content.id === targetId) {
                content.classList.add('active');
            }
        }); 
    });
});
