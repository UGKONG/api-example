// Variable
const btn = document.querySelector('#submit');
const result = document.querySelector('p');

// Function
const submit = e => {
  let form = new FormData();
  form.append('task', 'login');
  form.append('id', document.querySelector('#id').value);
  form.append('pw', document.querySelector('#pw').value);

  axios.post('./server.php', form).then(({data}) => {
    if (!data.result) return console.log('Server에서 결과를 불러오지 못했습니다.');
    console.log(data);
    result.innerHTML = JSON.stringify(data);
  });
}

// Event Listener
btn.addEventListener('click', submit);