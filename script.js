const renderPage = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const pages = {
    home: '<h1>Hello world</h1>'
  };
  window.loadPage = (page) => {
    container.innerHTML = pages[page];
  };
  loadPage('home')
};

window.onload = renderPage;
