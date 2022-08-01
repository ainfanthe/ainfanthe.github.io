const url = 'https://icanhazdadjoke.com/';

const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error(' error');
    }
    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();

let typed = new Typed('.typed', {
	strings: [
		'<b class="title">Scriptorium</b>',
		'<b class="title">Homepage</b>'
	],
	typeSpeed: 50,
	startDelay: 50,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
});
