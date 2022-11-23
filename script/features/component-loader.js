async function addComponent(filename, insertLocation) {
  const resp = await fetch(`components/${filename}.html`);
  const html = await resp.text();
  let insertElement = document.querySelector(`.${insertLocation}`)
  insertElement.insertAdjacentHTML("afterbegin", html);
  console.log(`${filename} imported`);
}



export {addComponent};