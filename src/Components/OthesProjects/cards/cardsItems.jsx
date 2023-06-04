const getRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/Nazareth98/repos"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRepos;
