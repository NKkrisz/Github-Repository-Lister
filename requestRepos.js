async function requestRepos() {
  document.querySelector("p").innerHTML = "";
  const response = await fetch(`https://api.github.com/users/${document.querySelector("input").value}/repos`);
  const repos = await response.json();
  for (let repo of repos) {
      document.querySelector("p").innerHTML += repo.name + ": " + repo.description + "<br>";
      console.log(repo);
  };
}