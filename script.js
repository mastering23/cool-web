const renderPage = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const pages = {
    home: `
    <main>
  <h1>Web Developers</h1>
  <section>
   <nav>
    <ul> 
    <li><a href="#" onclick="loadPage('home')">Home</a></li>
    <li><a href="#" onclick="loadPage('about')">About</a></li>
    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
    </ul>
    </nav>
    </section>   
  </main>  
    `,
    about:`
        <main>
  <h1>Web Developers</h1>
  <section> 
   <nav>
    <ul> 
    <li><a href="#" onclick="loadPage('home')">Home</a></li>
    <li><a href="#" onclick="loadPage('about')">About</a></li>
    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
    </ul>
    </nav>
    </section>
    <section>
    <h2>About</h2>
    <p class="context-p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos ea fuga natus vel asperiores iure deserunt harum, alias modi! Esse cumque repellat animi id. Aliquam, mollitia quidem. Aut, expedita.
      Est fugiat ut ullam aspernatur non laboriosam, architecto qui assumenda doloremque iusto. Provident vel autem ex quisquam voluptas culpa architecto eveniet, quas esse laboriosam molestiae obcaecati accusantium dicta ratione corrupti!
      Qui fugit dolores architecto fugiat. Minima eligendi tempore totam ea velit, culpa dignissimos impedit veritatis illum quaerat, recusandae quasi quos ut eos vero odio necessitatibus dicta sunt a placeat at.
      
      Dignissimos, placeat facere quidem veniam nemo mollitia, voluptas quia nobis atque accusamus maxime voluptates culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis ullam quaerat neque odit ex est quo esse eius, suscipit, a dignissimos pariatur harum aperiam. Ad quasi earum placeat natus.
      Est fugiat ut ullam aspernatur non laboriosam, architecto qui assumenda doloremque iusto. Provident vel autem ex quisquam voluptas culpa architecto eveniet, quas esse laboriosam molestiae obcaecati accusantium dicta ratione corrupti!
      
      Qui fugit dolores architecto fugiat. Minima eligendi tempore totam ea velit, culpa dignissimos impedit veritatis illum quaerat, recusandae quasi quos ut eos vero odio necessitatibus dicta sunt a placeat at.
      Dignissimos, placeat facere quidem veniam nemo mollitia, voluptas quia nobis atque accusamus maxime voluptates culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ducimus tempora officia dolore vero incidunt, reiciendis vitae enim quo. Soluta totam quidem sunt? Doloribus, incidunt culpa labore pariatur fuga debitis.
      
      Est fugiat ut ullam aspernatur non laboriosam, architecto qui assumenda doloremque iusto. Provident vel autem ex quisquam voluptas culpa architecto eveniet, quas esse laboriosam molestiae obcaecati accusantium dicta ratione corrupti!
      Qui fugit dolores architecto fugiat. Minima eligendi tempore totam ea velit, culpa dignissimos impedit veritatis illum quaerat, recusandae quasi quos ut eos vero odio necessitatibus dicta sunt a placeat at.

      Dignissimos, placeat facere quidem veniam nemo mollitia, voluptas quia nobis atque accusamus maxime voluptates culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores tempore tempora laboriosam quisquam earum odit eius ullam distinctio officia amet hic, esse dolor cupiditate vero minus inventore. Unde, magni!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officiis illum dolorem labore rerum accusantium unde, sed mollitia nihil fugiat possimus nam, animi facilis similique dolorum magni a dolore ab?
      
      Est fugiat ut ullam aspernatur non laboriosam, architecto qui assumenda doloremque iusto. Provident vel autem ex quisquam voluptas culpa architecto eveniet, quas esse laboriosam molestiae obcaecati accusantium dicta ratione corrupti!
      
      Qui fugit dolores architecto fugiat. Minima eligendi tempore totam ea velit, culpa dignissimos impedit veritatis illum quaerat, recusandae quasi quos ut eos vero odio necessitatibus dicta sunt a placeat at.
      Dignissimos, placeat facere quidem veniam nemo mollitia, voluptas quia nobis atque accusamus maxime voluptates culpa. Expedita, repellat. Accusamus distinctio, velit esse, sunt libero dignissimos, doloremque modi inventore ullam perferendis quasi.
    </p>
    </section>   
  </main>  
    `,
    contact:`
    
           <main>
  <h1>Web Developers</h1>
  <section>
   <nav>
    <ul> 
    <li><a href="#" onclick="loadPage('home')">Home</a></li>
    <li><a href="#" onclick="loadPage('about')">About</a></li>
    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
    </ul>
    </nav>
    </section>
    <section>
    <h2>Contact</h2>
    </section>   
  </main>  
    `
    };
  window.loadPage = (page) => {
    container.innerHTML = pages[page];
    event.preventDefault();
  };
  loadPage("home");
};

window.onload = renderPage;
