const postListDOM = document.querySelector(".post-list");
        const postUI = (posts) =>{
            // console.log(posts);
            let result = "";
            posts.forEach(post => {

                result += `<li class="post-item">
                    <div class="post-body">
                        <span class="post-id">Post ID: <b>${post.id}</b></span>
                        <strong class="post-title">${post.title}</strong>
                        <p class="post-content">${post.body}</p>
                    </div>
                    <button class="post-button">Read More</button>
                </li>`
                postListDOM.innerHTML = result;

            });
        }
        /*
        // Ajax
        const xhr = new XMLHttpRequest();
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
        xhr.onload = function(){
            const response =  xhr.responseText;
            const data = JSON.parse(response);
            postUI(data);
        }

        xhr.send();
        */


        /*
        // Fetch
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => postUI(data));
        */


        // Async-Await
        const getData = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            // console.log(response);  // promise dönüyor
            const data  = await response.json();
            // console.log(data);
            postUI(data);
        }

        getData();