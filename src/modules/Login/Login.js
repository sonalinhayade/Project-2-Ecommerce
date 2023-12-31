import React from 'react'

async function submitForm() {
    // Simple form validation
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    try {
        // Fetch data from fakestoreapi.com
        const response = await fetch('https://fakestoreapi.com/users');
        const users = await response.json();
    
        // Check if the entered username and password match any user
        const matchedUser = users.find(user => user.username === username && user.password === password);
    
        if (matchedUser) {
          alert("Successful login!");
        } else {
          alert("Invalid username or password.");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("An error occurred while fetching data.");
      }
    }


const Login = () => {
  return (
        <div>
            <body class="h-screen flex items-center justify-center margin-20px box-content p-4 border-4 ">
                <div class="bg-grey p-8 rounded-md shadow-md  w-96 h-80 ">
                    <h2 class="text-2xl flex items-center justify-center font-semibold mb-4">Login</h2>
                    <form id="loginForm">
                        <div class="mb-4">
                            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" name="username" class="mt-1 p-2 block w-full rounded-md border-gray-00 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder='Enter Username' 
                             />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" class="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder='Enter Password' 
                             />
                        </div>
                        <button type="button" onClick={(submitForm)} class="w-80 flex justify-center items-center p-2 bg-indigo-500 hover:bg-indigo-600 border-0 rounded text-base text-white rounded-full">Login</button>
                    </form>
                </div>
            </body>
        </div>
  )
}

export default Login