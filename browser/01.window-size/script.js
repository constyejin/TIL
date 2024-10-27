function browserSizeRender() {
  const browserSize = [
    {
      title : 'window.screen',
      width : window.screen.width,
      height : window.screen.height,
    },
    {
      title : 'window.outer',
      width : window.outerWidth,
      height : window.outerHeight,
    },
    {
      title : 'window.inner',
      width : window.innerWidth,
      height : window.innerHeight,
    },
    {
      title : 'documentElement.clientWidth',
      width : body.clientWidth,
      height : body.clientHeight,
    },
  ]
  
  browserSize.forEach((size) => {
    const box = `
      <div class="bo    x">
        <h1>${size.title}</h1>
        <p>
          <span>${size.width}</span>
          <span>${size.height}</span>
        </p>
      </div>
    `
  
    body.insertAdjacentHTML('beforeend', box);
  })
}

browserSizeRender();
window.addEventListener('resize', browserSizeRender);


// const box = document.querySelector('.wrapper');

// function browserSizeRender() {
//   box.innerHTML = `
//     <div class="box">
//       <h3>window.screen</h3>
//       <p>
//         <b>Width</b> : ${window.screen.width}
//       </p>
//       <p>
//         <b>Height</b> : ${window.screen.height}
//       </p>
//     </div>

//     <div class="box">
//       <h3>window.outer</h3>
//       <p>
//         <b>Width</b> : ${window.outerWidth}
//       </p>
//       <p>
//         <b>Height</b> : ${window.outerHeight}
//       </p>
//     </div>

//     <div class="box">
//       <h3>window.inner</h3>
//       <p>
//         <b>Width</b> : ${window.innerWidth}
//       </p>
//       <p>
//         <b>Height</b> : ${window.innerHeight}
//       </p>
//     </div>

//     <div class="box">
//       <h3>documentElement.clientWidth</h3>
//       <p>
//         <b>Width</b> : ${document.documentElement.clientWidth}
//       </p>
//       <p>
//         <b>Height</b> : ${document.documentElement.clientHeight}
//       </p>
//     </div>
//   `
// }

// window.addEventListener('resize', browserSizeRender);
// browserSizeRender();