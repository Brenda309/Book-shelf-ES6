
const remove = () => {
  const rmv = document.getElementsByClassName('rmv');
  for (let i = 0; i < rmv.length; i += 1) {
    const rmvButton = document.getElementById(`btn${i}`);
    const titleName = storage.array[i].title;
    const list = document.getElementById(`${i}`);
    rmvButton.addEventListener('click', () => {
      const filtered = storage.array.filter((Books) => Books.title !== titleName);
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Books', stringData);
      list.remove();
      window.location.reload();
    });
  }
};