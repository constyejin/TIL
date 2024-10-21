let colorList = [
  {
    "color" : "#B58362", 
    "name" : "--primary ",
  },
  {
    "color" : "#E4D5B8", 
    "name" : "--secondary ",
  },
  {
    "color" : "#492710", 
    "name" : "--tertiary ",
  },
  {
    "color" : "linear-gradient(180deg, #D8B99C, #EADDCB)", 
    "name" : "--light-btn ",
  }, 
  {
    "color" : "linear-gradient(360deg, #D8B99C, #3B211B)", 
    "name" : "--dark-btn ",
  }
]

const colors = document.querySelector('.colors');

colorList.map((item) => {
  const colorItem = `
    <div class="color-item">
      <div class="color" style="background: ${item.color}"></div>
      <p class="color-name">${item.name}</p>
    </div>
  `;

  colors.insertAdjacentHTML('beforeend', colorItem);
})